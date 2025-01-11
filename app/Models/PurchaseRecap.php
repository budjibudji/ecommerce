<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseRecap extends Model
{
    use HasFactory;

    protected $fillable = [
        'address',
        'phone_number',
        'user_id',  // Add user_id to the fillable array
    ];

    /**
     * Get the user that owns the purchase recap.
     */
    public function user()
    {
        return $this->belongsTo(User::class); // A purchase recap belongs to one user
    }

    /**
     * Get all of the purchases for the purchase recap.
     */
    public function purchases()
    {
        return $this->hasMany(Purchase::class)->with('product'); // A purchase recap has many purchases
    }
}
