use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
    // User registration
    Route::post('/register', [AuthController::class, 'register'])
        ->name('api.auth.register');
});

Route::middleware('auth:sanctum')->group(function () {
    // Authentication routes
    Route::prefix('auth')->group(function () {
        // Get current user
        Route::get('/user', [AuthController::class, 'user'])
            ->name('api.auth.user');
        
        // Logout (revoke current token)
        Route::post('/logout', [AuthController::class, 'logout'])
            ->name('api.auth.logout');
        
        // Logout all sessions
        Route::post('/logout-all', [AuthController::class, 'logoutAll'])
            ->name('api.auth.logout-all');
        
        // List all tokens
        Route::get('/tokens', [AuthController::class, 'tokens'])
            ->name('api.auth.tokens');
        
        // Revoke specific token
        Route::delete('/tokens/{tokenId}', [AuthController::class, 'revokeToken'])
            ->name('api.auth.revoke-token');
    });
    
    // Your protected API resources go here
    // Route::apiResource('posts', PostController::class);
    // Route::apiResource('comments', CommentController::class);
});