<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'slug',
        'image',
        'is_deleted',
        'cover_photo',
        'description',

    ];

    /**
     * Get the products for the category.
     */
    public function products()
    {
        return $this->hasMany(Product::class)->where('is_deleted', 0); // Each category has many products
    }

    /**
     * Mutator to automatically create a slug from the category name.
     *
     * @param  string  $value
     * @return void
     */


    /**
     * Accessor for the category image path.
     *
     * @return string
     */
    public function getImageUrlAttribute()
    {
        return $this->image ? asset('storage/' . $this->image) : null;
    }
}
