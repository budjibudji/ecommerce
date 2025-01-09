<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Purchase;
use App\Models\User;
use App\Models\Product;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class PurchaseController
{
    /**
     * Display a listing of the purchases.
     * (You could restrict this to authenticated users if needed.)
     */
    public function index()
    {
        $user = JWTAuth::parseToken()->authenticate();; // Get the authenticated user
        if (!$user) {
            return response()->json(['message' => 'User not authenticated'], 401);
        }

        if ($user->is_admin) {
            $purchase = Purchase::with(['product', 'user'])->get();
        } else {
            $purchase = Purchase::with(['product', 'user'])->where('user_id', $user->id)->get();
        }

        return response()->json($purchase);
    }

    /**
     * Store newly created purchases in storage (bulk purchase).
     */
    public function store(Request $request)
    {
        // Validate incoming request for bulk purchases
        $request->validate([
            'carts' => 'required|array', // An array of purchases

        ]);

        // Get the authenticated user
        $user = JWTAuth::parseToken()->authenticate();

        // Prepare an array to store the purchase data to be inserted
        $purchaseData = [];

        // Loop through each purchase and prepare the data for insertion
        foreach ($request->carts as $cart_id) {
            $cart = Cart::where('id', $cart_id)->with("product")
                ->first();

            $purchaseData[] = [
                'user_id' => $user->id,
                'product_id' => $cart->product->id,
                'quantity' => $cart->quantity,
                'price' => $cart->product->price,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        // Insert multiple purchases in the database
        Cart::whereIn('id', $request->carts)->delete();
        $purchases = Purchase::insert($purchaseData);

        return response()->json(['message' => 'Purchases created successfully', 'purchases' => $purchases], 201);
    }
}
