<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use App\Models\Product;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class WishlistController
{
    /**
     * Display the user's wishlist.
     * Only authenticated users can view their wishlist.
     */
    public function index()
    {
        $user = JWTAuth::parseToken()->authenticate();; // Get the authenticated user
        if (!$user) {
            return response()->json(['message' => 'User not authenticated'], 401);
        }

        $wishlistItems = Wishlist::with('product')->where('user_id', $user->id)->get();

        return response()->json($wishlistItems);
    }
    /**
     * Get Whislt by productId.
     *
     * @param  int  $productId
     * @return \Illuminate\Http\Response
     */
    public function show($productId)
    {
        $user = JWTAuth::parseToken()->authenticate();;

        $existingWishlistItem = Wishlist::where('user_id', $user->id)
            ->where('product_id', $productId)
            ->first();
        if ($existingWishlistItem) return response()->json(true);
        return response()->json(false);
    }

    /**
     * Store a newly added product to the user's wishlist.
     */

    public function store(Request $request)
    {
        // Validate incoming request
        $request->validate([
            'product_id' => 'required|exists:products,id',
        ]);

        // Get the authenticated user
        $user = JWTAuth::parseToken()->authenticate();;

        if (!$user) {
            return response()->json(['message' => 'User not authenticated'], 401);
        }

        // Check if the product is already in the wishlist
        $existingWishlistItem = Wishlist::where('user_id', $user->id)
            ->where('product_id', $request->product_id)
            ->first();

        if ($existingWishlistItem) {
            return response()->json(['message' => 'Product already in wishlist'], 400);
        }

        // Otherwise, create a new wishlist item
        $wishlistItem = Wishlist::create([
            'user_id' => $user->id,
            'product_id' => $request->product_id,
        ]);

        return response()->json($wishlistItem, 201);
    }

    /**
     * Remove a product from the user's wishlist.
     */
    /**
     * Get Whislt by productId.
     *
     * @param  int  $productId
     * @return \Illuminate\Http\Response
     */
    public function destroy($productId)
    {
        // Find the wishlist item
        $user = JWTAuth::parseToken()->authenticate();;

        $existingWishlistItem = Wishlist::where('user_id', $user->id)
            ->where('product_id', $productId)
            ->first();
        if (!$existingWishlistItem) {
            return response()->json(['message' => 'Wishlist item not found'], 404);
        }

        // Delete the wishlist item
        $existingWishlistItem->delete();

        return response()->json(['message' => 'Wishlist item removed successfully']);
    }
}
