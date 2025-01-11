<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class UserAuthController
{
    public function register(Request $request)
    {
        // Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        // Return validation errors if any
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Create a new user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password), // Hash the password before storing it
        ]);

        return response()->json(['message' => 'User created successfully'], 201);
    }

    public function login(Request $request)
    {
        // Validate the login credentials
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        // Return validation errors if any
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Check if the user exists
        $user = User::where('email', $request->email)->first();
        Log::info("mmm");

        // If no user is found, return an unauthorized error
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        // Check if the password is correct
        if (!Hash::check($request->password, $user->password)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }


        // Generate the JWT token for the user

        // Return the token
        return $user;
    }

    public function customerlogin(Request $request)
    {
        $user = $this->login($request);

        if ($user->is_admin) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        // Generate the JWT token for the user
        $customClaims = ['exp' => strtotime('+100 years')];

        $token = JWTAuth::claims($customClaims)->fromUser($user);

        // Return the token
        return response()->json(['token' => $token], 200);
    }
    public function adminlogin(Request $request)
    {
        $user = $this->login($request);

        if (!$user->is_admin) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        // Generate the JWT token for the user
        $customClaims = ['exp' => strtotime('+100 years')];

        $token = JWTAuth::claims($customClaims)->fromUser($user);

        // Return the token
        return response()->json(['token' => $token], 200);
    }
}
