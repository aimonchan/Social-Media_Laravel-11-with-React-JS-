<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\LoginController;


Route::get('login',[LoginController::class,'create'])->name('login'); // we name it 'login', coz' authentication middleware(we can't access) is coded to redirect to 'login' if the user is not authenticated.
// Need LoginController via : php artisan make:controller LoginController
// so create a Login Controller and move it into a new folder called "Auth" under "Controller" folder

Route::middleware('auth')->group(function(){

    Route::get('/',[PostController::class,'index']);
    
    Route::resource('posts',PostController::class)->except('index');
});


//Another method of route writing style!
// Route::get('/about',function(){
// return inertia('/About/About');
// });

//We can also write in the way that:
//Route::inertia('/home')