<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\User;
use App\Models\Product;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class CartController
{
    /**
     * Display the user's cart.
     * Only authenticated users can view their cart.
     */
    public function index()
    {
        $user = JWTAuth::parseToken()->authenticate();; // Get the authenticated user
        if (!$user) {
            return response()->json(['message' => 'User not authenticated'], 401);
        }

        $cartItems = Cart::with('product')->where('user_id', $user->id)->get();

        return response()->json($cartItems);
    }

    /**
     * Store a newly added product to the user's cart.
     */
    public function store(Request $request)
    {
        // Validate incoming request
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        // Get the authenticated user
        $user = JWTAuth::parseToken()->authenticate();;

        if (!$user) {
            return response()->json(['message' => 'User not authenticated'], 401);
        }

        // Check if the product is already in the cart for the user
        $existingCartItem = Cart::where('user_id', $user->id)
            ->where('product_id', $request->product_id)
            ->first();

        if ($existingCartItem) {
            // If product already exists in cart, update quantity
            $existingCartItem->quantity += $request->quantity;
            $existingCartItem->save();

            return response()->json($existingCartItem, 200);
        }

        // Otherwise, create a new cart item
        $cartItem = Cart::create([
            'user_id' => $user->id,
            'product_id' => $request->product_id,
            'quantity' => $request->quantity,
        ]);

        return response()->json($cartItem, 201);
    }

    /**
     * Update the quantity of a cart item.
     */
    public function update(Request $request, $id)
    {
        // Validate incoming request
        $request->validate([
            'quantity' => 'required|integer|min:1',
        ]);

        // Find the cart item
        $cartItem = Cart::find($id);

        if (!$cartItem) {
            return response()->json(['message' => 'Cart item not found'], 404);
        }

        // Update the cart item quantity
        $cartItem->quantity = $request->quantity;
        $cartItem->save();

        return response()->json($cartItem);
    }

    /**
     * Remove a product from the cart.
     */
    public function destroy($id)
    {
        // Find the cart item
        $cartItem = Cart::find($id);

        if (!$cartItem) {
            return response()->json(['message' => 'Cart item not found'], 404);
        }

        // Delete the cart item
        $cartItem->delete();

        return response()->json(['message' => 'Cart item removed successfully']);
    }
}
