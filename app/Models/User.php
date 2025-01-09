<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'is_admin',  // Add is_admin to the fillable array
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to specific types.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Get the unique identifier for the user.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();  // The primary key (usually `id`) of the user
    }

    /**
     * Get the custom claims for the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        // You can add additional claims to the JWT payload here, such as roles
        return [
            'is_admin' => $this->is_admin,  // Include the `is_admin` field in the JWT claims
        ];
    }

    /**
     * Check if the user is an admin.
     *
     * @return bool
     */
    public function isAdmin()
    {
        return $this->is_admin === true;  // Check if `is_admin` is true (assuming it's a boolean)
    }
    public function purchases()
    {
        return $this->hasMany(Purchase::class); // A user can have many purchases
    }
    public function carts()
    {
        return $this->hasMany(Cart::class); // A user can have many purchases
    }
    public function wishlists()
    {
        return $this->hasMany(Wishlist::class); // A user can have many purchases
    }
}
