# 📦 Prerequisites

Make sure you have the following installed:

- PHP 8.3
- Compose 8.2.12 above
- Git

Check versions:

```bash
docker -v
docker compose version
```

## 4. If you use XAMPP

Updating PHP inside XAMPP is different:

### Steps

1. Download new PHP ZIP
2. Rename:

# ⚡ Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/marjanbhuiyan/starter-kit-laravel-vue.git
cd starter-kit-laravel-vue
```

## 6. Install Dependencies (if needed)

If vendor folder is missing:

```bash
composer install
npm install
```

## 6. Create .env file

Create .env file the root project

## 7. Generate all the file

```bash
php artisan key:generate
```

## 8. Generate all the file

```bash
php artisan serve
npm run dev
```

### STEP 1: Run this command in your terminal:
```bash
php artisan install:api
```
This command will automatically:
- Create API route files (in routes/api.php)

### STEP: 2: Define API Routes
In routes/api.php:
```php
<?php
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
```

### STEP 3: add dir api route in app.php