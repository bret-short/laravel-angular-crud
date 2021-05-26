<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Providers\RouteServiceProvider;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Get all the bloggers
Route::get('bloggers', 'BloggerController@getBlogger')->middleware('throttle:60,1');

//Get a single blogger
Route::get('bloggers/{id}', 'BloggerController@getBloggerById')->middleware('throttle:60,1');

//Create a new blogger
Route::post('addBlogger', 'BloggerController@addBlogger')->middleware('throttle:60,1');

//Update an existing blogger
Route::put('/updateBlogger/{id}', 'BloggerController@updateBlogger');

//Delete a current blogger
Route::delete('deleteBlogger/{id}', 'BloggerController@deleteBlogger');