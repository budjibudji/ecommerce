<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;  // Make sure to use the correct model (User or Customer)
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create a regular user (non-admin)
        User::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => Hash::make('password123'),  // Make sure to hash the password
            'is_admin' => false,  // Regular user (non-admin)
        ]);

        // Create an admin user
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => Hash::make('adminpassword'),  // Hash the password
            'is_admin' => true,  // Admin user
        ]);

        // You can create more sample users as needed
    }
}
