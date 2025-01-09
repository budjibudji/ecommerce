<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'product_id',
    ];

    // Relationship to User (each wishlist belongs to a user)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relationship to Product (each wishlist item is related to a product)
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
