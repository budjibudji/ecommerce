<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();  // Unique identifier for each product
            $table->string('name');  // Name of the product
            $table->string('slug')->unique();  // SEO-friendly URL
            $table->text('description')->nullable();  // Description of the product
            $table->decimal('price', 10, 2);  // Price of the product
            $table->integer('stock')->default(0);  // Available stock
            $table->string('image')->nullable();  // Image path for the product
            $table->foreignId('category_id')->constrained()->onDelete('cascade');  // Link to categories table
            $table->integer('rating')->default(0);  // Rating of the product
            $table->boolean('is_featured')->default(false);  // Is the product featured? (default to false)
            $table->timestamps();  // Timestamps for created_at and updated_at
        });
    }

    public function down()
    {
        Schema::dropIfExists('products');
    }
}
