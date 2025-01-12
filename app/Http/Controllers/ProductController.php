<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController
{
    // Display a listing of the products.
    public function index()
    {
        $products = Product::with('category')->where('is_deleted', 0)->get(); // Eager load category
        return response()->json($products);
    }
    public function newArrivage()
    {
        $products = Product::with('category')->where('is_deleted', 0)->orderBy('created_at', 'desc')  // Order by created_at in descending order
            ->get(); // Eager load category
        return response()->json($products);
    }

    public function topSelling()
    {

        $products = Product::with('category')->where('is_deleted', 0)
            ->select('products.*')
            ->join('purchases', 'products.id', '=', 'purchases.product_id')
            ->groupBy('products.id')
            ->orderByRaw('SUM(purchases.quantity) DESC') // Order by the total quantity sold
            ->havingRaw('SUM(purchases.quantity) > 0') // Make sure it's a sold product
            ->get();


        return response()->json($products);
    }




    public function promo()
    {
        $products = Product::with('category')->where('is_deleted', 0)->whereNotNull('promo_price')
            ->get(); // Eager load category
        return response()->json($products);
    }
    // Store a newly created product in storage.
    public function store(Request $request)
    {
        // Validate incoming request
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'promo_price' => 'nullable|numeric',
            'stock' => 'required|integer',
            'image' => 'nullable|image|mimes:jpg,png,jpeg,gif|max:2048',
            'category_id' => 'required|exists:categories,id',
            'is_featured' => 'nullable|boolean',
        ]);

        // Handle image upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('products', 'public');
        }

        // Create the product
        $product = Product::create([
            'name' => $request->name,
            'slug' => \Illuminate\Support\Str::slug($request->name),
            'description' => $request->description,
            'price' => $request->price,
            'promo_price' => $request->promo_price,
            'stock' => $request->stock,
            'image' => isset($imagePath) ? $imagePath : null,
            'category_id' => $request->category_id,
            'rating' => $request->rating,
            'is_featured' => $request->is_featured ?? false,
        ]);

        return response()->json($product, 201);
    }

    // Display the specified product.
    public function show(Product $product)
    {
        $product->load('category');

        return response()->json($product);
    }

    // Update the specified product in storage.
    public function update(Request $request, Product $product)
    {
        // Validate incoming request
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'promo_price' => 'nullable|numeric',
            'stock' => 'required|integer',
            'image' => 'nullable|image|mimes:jpg,png,jpeg,gif|max:2048',
            'category_id' => 'required|exists:categories,id',
            'rating' => 'nullable|numeric|min:0|max:5',
            'is_featured' => 'nullable|boolean',
        ]);

        // Handle image upload if exists
        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($product->image && Storage::exists('public/' . $product->image)) {
                Storage::delete('public/' . $product->image);
            }

            // Store new image
            $imagePath = $request->file('image')->store('products', 'public');
            $product->image = $imagePath;
        }

        // Update the product
        $product->update([
            'name' => $request->name,
            'slug' => \Illuminate\Support\Str::slug($request->name),
            'description' => $request->description,
            'price' => $request->price,
            'promo_price' => $request->promo_price,
            'stock' => $request->stock,
            'category_id' => $request->category_id,
            'rating' => $request->rating,
            'is_featured' => $request->is_featured ?? $product->is_featured,
        ]);

        return response()->json($product);
    }

    // Remove the specified product from storage.
    public function destroy(Product $product)
    {
        // Delete the product's image if exists


        // Delete the product
        $product->update([
            'is_deleted' => true,
        ]);

        return response()->json(['message' => 'Product deleted successfully']);
    }
    /**
     * Get products by category_id.
     *
     * @param  int  $categoryId
     * @return \Illuminate\Http\Response
     */
    public function getByCategory($categoryId)
    {
        // Validate if category exists or return error
        $category = Category::find($categoryId);

        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        // Fetch products by category ID
        $products = Product::where('category_id', $categoryId)->where('is_deleted', 0)  // Filter out deleted products
            ->get();

        return response()->json($products);
    }
}
