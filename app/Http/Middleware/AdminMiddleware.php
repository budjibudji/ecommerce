<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Get the authenticated user
        $user = JWTAuth::parseToken()->authenticate();;

        // If no user is authenticated or the user is not an admin
        if (!$user || !$user->is_admin) {
            return response()->json(['error' => 'Unauthorized, you must be an admin to access this resource'], Response::HTTP_FORBIDDEN);
        }

        // Proceed with the request if the user is authenticated and is an admin
        return $next($request);
    }
}
