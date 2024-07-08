<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[PostController::class,'index']);

Route::resource('posts',PostController::class)->except('index');

//Another method of route writing style!
// Route::get('/about',function(){
// return inertia('/About/About');
// });

//We can also write in the way that:
//Route::inertia('/home')