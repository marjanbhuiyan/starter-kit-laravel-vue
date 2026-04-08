<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        // Prevent redirects for API authentication - return JSON instead
        $middleware->redirectGuestsTo(fn($request) => null);
        $middleware->redirectUsersTo(fn($request) => null);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        // Custom authentication exception handler for API requests
        $exceptions->render(function (AuthenticationException $e, Request $request) {
            if ($request->is('api/*') || $request->expectsJson()) {
                return response()->json([
                    'message' => 'User not authenticated',
                    'error' => 'Unauthorized',
                    'status' => 401,
                    'details' => 'Please login or register to access this resource'
                ], 401);
            }
        });
    })->create();
