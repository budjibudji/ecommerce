<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveUserIdFromPurchasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('purchases', function (Blueprint $table) {
            // Drop the foreign key constraint before removing the column
            $table->dropForeign(['user_id']); // Drop the foreign key constraint

            // Now you can safely drop the user_id column
            $table->dropColumn('user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('purchases', function (Blueprint $table) {
            // Re-add the user_id column and restore the foreign key constraint
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
        });
    }
}
