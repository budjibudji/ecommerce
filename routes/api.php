<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\UserAuthController;
use App\Http\Middleware\JwtAuthMiddleware;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\WishlistController;




Route::post('customer/register', [UserAuthController::class, 'register']);
Route::post('customer/login', [UserAuthController::class, 'customerlogin']);
Route::post('admin/login', [UserAuthController::class, 'adminlogin']);

// Route::get('user/profile', [UserAuthController::class, 'profile'])->middleware(JwtAuthMiddleware::class);
Route::get('categories', [CategoryController::class, 'index']);         // Get all categories
Route::get('categories/{category}', [CategoryController::class, 'show']); // Get single category
Route::get('products', [ProductController::class, 'index']);         // Get all products
Route::get('products/promo', [ProductController::class, 'promo']);
Route::get('products/top-selling', [ProductController::class, 'topSelling']);         // Get all products
// Get all products
Route::get('products/new', [ProductController::class, 'newArrivage']);         // Get all products


Route::get('products/{product}', [ProductController::class, 'show']); // Get a single product
Route::get('products/category/{categoryId}', [ProductController::class, 'getByCategory']);

Route::middleware([JwtAuthMiddleware::class])->group(function () {
    // These routes are protected by both JWT Authentication and Admin Middleware

    Route::get('purchases', [PurchaseController::class, 'index']);

    // Store a new purchase
    Route::post('purchases', [PurchaseController::class, 'store']);



    Route::get('carts', [CartController::class, 'index']);

    // Add product to cart
    Route::post('carts', [CartController::class, 'store']);

    // Update cart item quantity
    Route::put('carts/{id}', [CartController::class, 'update']);

    // Remove product from cart
    Route::delete('carts/{id}', [CartController::class, 'destroy']);
    Route::get('wishlists', [WishlistController::class, 'index']);

    // Add product to wishlist
    Route::post('wishlists', [WishlistController::class, 'store']);

    // Remove product from wishlist
    Route::delete('wishlists/{id}', [WishlistController::class, 'destroy']);
    Route::middleware([AdminMiddleware::class])->group(function () {


        ///categories
        Route::post('categories', [CategoryController::class, 'store']);        // Create a category
        Route::put('categories/{category}', [CategoryController::class, 'update']); // Update category
        Route::delete('categories/{category}', [CategoryController::class, 'destroy']); // Delete category
        //products
        Route::post('products', [ProductController::class, 'store']);        // Create a product
        Route::put('products/{product}', [ProductController::class, 'update']); // Update a product
        Route::delete('products/{product}', [ProductController::class, 'destroy']); // Delete a product

    });
});
