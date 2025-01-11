<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdatePurchaseIdConstraintInPurchasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('purchases', function (Blueprint $table) {
            $table->unsignedBigInteger('purchase_recap_id')->nullable(); // User ID column (nullable for optional association)

            // Add a new foreign key constraint that references `purchase_recaps.id`
            $table->foreign('purchase_recap_id')->references('id')->on('purchase_recaps')->onDelete('cascade');
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
            // Drop the new foreign key constraint
            $table->dropForeign(['purchase_recap_id']);

            // Optionally, add back the old constraint if necessary
            // $table->foreign('purchase_recap_id')->references('old_table_column')->on('old_table')->onDelete('cascade');
        });
    }
}
