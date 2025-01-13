<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\PurchaseRecap;
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
            $purchase = PurchaseRecap::with(['purchases', 'user'])->orderBy('created_at', 'desc')->get();
        } else {
            $purchase = PurchaseRecap::with(['purchases', 'user'])->where('user_id', $user->id)->orderBy('created_at', 'desc')->get();
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
            'address' => 'required|string',
            'phone_number' => 'required|string',


        ]);

        // Get the authenticated user
        $user = JWTAuth::parseToken()->authenticate();

        // Prepare an array to store the purchase data to be inserted
        $purchaseData = [];

        // Loop through each purchase and prepare the data for insertion
        $purchase = PurchaseRecap::create([
            'user_id' => $user->id,
            'address' => $request->address,
            'phone_number' => $request->phone_number,

        ]);
        foreach ($request->carts as $cart_id) {
            $cart = Cart::where('id', $cart_id)->with("product")
                ->first();


            $purchaseData[] = [
                'product_id' => $cart->product->id,
                'purchase_recap_id' => $purchase->id,
                'quantity' => $cart->quantity,
                'price' => $cart->product->promo_price ? $cart->product->promo_price : $cart->product->price, // Conditional price
                'created_at' => now(),
                'updated_at' => now(),
            ];
            $product = Product::where('id', $cart->product->id)
                ->first();

            $product->update([

                'stock' => $product->stock - $cart->quantity,

            ]);
        }

        // Insert multiple purchases in the database
        Cart::whereIn('id', $request->carts)->delete();
        $purchases = Purchase::insert($purchaseData);

        return response()->json(['message' => 'Purchases created successfully', 'purchases' => $purchases], 201);
    }
}
