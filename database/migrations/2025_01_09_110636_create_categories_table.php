<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTable extends Migration
{
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');  // Name of the category
            $table->string('slug')->unique();  // Slug for SEO-friendly URL
            $table->string('image')->nullable();  // Column for the category image (file path)
            $table->timestamps();  // Created_at and updated_at timestamps
        });
    }

    public function down()
    {
        Schema::dropIfExists('categories');
    }
}
