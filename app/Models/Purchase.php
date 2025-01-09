<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'product_id',
        'quantity',
        'price',
    ];

    /**
     * Get the user that made the purchase.
     */
    public function user()
    {
        return $this->belongsTo(User::class); // A purchase belongs to one user
    }

    /**
     * Get the product that was purchased.
     */
    public function product()
    {
        return $this->belongsTo(Product::class); // A purchase belongs to one product
    }

    /**
     * Get the total price for the purchase.
     * This will calculate price * quantity.
     *
     * @return float
     */
    public function getTotalPriceAttribute()
    {
        return $this->price * $this->quantity;
    }
}
