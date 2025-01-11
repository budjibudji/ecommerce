<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseRecapsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_recaps', function (Blueprint $table) {
            $table->id(); // Auto-incrementing ID for the table
            $table->string('address'); // Address column
            $table->string('phone_number'); // Phone number column
            $table->unsignedBigInteger('user_id')->nullable(); // User ID column (nullable for optional association)

            // Foreign key constraint to users table
            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null'); // Setting foreign key constraint

            $table->timestamps(); // Created_at and updated_at timestamps
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('purchase_recaps', function (Blueprint $table) {
            $table->dropForeign(['user_id']); // Drop the foreign key constraint
        });

        Schema::dropIfExists('purchase_recaps'); // Drop the table if rolling back the migration
    }
}
