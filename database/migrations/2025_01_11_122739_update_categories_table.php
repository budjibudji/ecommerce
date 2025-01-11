<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('categories', function (Blueprint $table) {
            // Add the 'isDeleted' column with a default value of false
            $table->boolean('is_deleted')->default(false)->after('image');

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
        Schema::table('categories', function (Blueprint $table) {
            // Rollback the 'isDeleted' column
            $table->dropColumn('is_deleted');

            // Add the unique constraint back to the 'slug' column
            $table->unique('slug');
        });
    }
}
