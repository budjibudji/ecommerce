<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            // Add the 'isDeleted' column with a default value of false
            $table->boolean('is_deleted')->default(false)->after('is_featured');

            // Remove the unique constraint on the 'slug' column
            $table->dropUnique(['slug']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            // Rollback the 'isDeleted' column
            $table->dropColumn('is_deleted');

            // Re-add the unique constraint on the 'slug' column
            $table->unique('slug');
        });
    }
}
