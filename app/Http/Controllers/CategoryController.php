<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class CategoryController
{
    /**
     * Display a listing of the categories.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Get all categories

        $categories = Category::with('products')->where("is_deleted", 0)->get();
        return response()->json($categories);
    }

    /**
     * Store a newly created category in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate incoming request
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpg,png,jpeg,gif|max:2048',
            'description' => 'nullable|string',
            'cover_photo' => 'nullable|image|mimes:jpg,png,jpeg,gif|max:2048',
        ]);

        // Handle image upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('categories', 'public');
        }
        if ($request->hasFile('cover_photo')) {
            $imagePathCover = $request->file('cover_photo')->store('categories', 'public');
        }


        // Create the category
        $category = Category::create([
            'name' => $request->name,
            'description' => $request->description,
            'slug' => Str::slug($request->name), // Automatically generate slug from name
            'image' => isset($imagePath) ? $imagePath : null,
            'cover_photo' => isset($imagePathCover) ? $imagePathCover : null
        ]);

        return response()->json($category, 201); // Return created category
    }

    /**
     * Display the specified category.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        // Eager load the products relationship
        $category->load('products');

        // Return the category with its products
        return response()->json($category);
    }

    /**
     * Update the specified category in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {

        // Validate incoming request
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpg,png,jpeg,gif|max:2048',
            'description' => 'nullable|string',
            'cover_photo' => 'nullable|image|mimes:jpg,png,jpeg,gif|max:2048',


        ]);

        // Handle image upload if exists
        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($category->image && Storage::exists('public/' . $category->image)) {
                Storage::delete('public/' . $category->image);
            }

            // Store new image
            $imagePath = $request->file('image')->store('categories', 'public');
            $category->image = $imagePath;
        }
        if ($request->hasFile('cover_photo')) {
            // Delete old image if exists
            if ($category->cover_photo && Storage::exists('public/' . $category->cover_photo)) {
                Storage::delete('public/' . $category->cover_photo);
            }

            // Store new image
            $imagePathCover = $request->file('cover_photo')->store('categories', 'public');
            $category->cover_photo = $imagePathCover;
        }

        // Update category details
        $category->name = $request->name;
        $category->description = $request->description;

        $category->slug = Str::slug($request->name);
        $category->save();

        return response()->json($category); // Return updated category
    }

    /**
     * Remove the specified category from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        // Delete the category's image if exists
        $category->update([
            'is_deleted' => true,
        ]);

        Product::where('category_id', $category->id)->update([
            'is_deleted' => true,  // You can also mark the products as deleted, depending on your requirement
        ]);

        return response()->json(['message' => 'Category deleted successfully']);
    }
}
