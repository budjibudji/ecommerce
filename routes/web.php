<?php


use Illuminate\Support\Facades\Route;




Route::get('/{any}', function () {
    return view('welcome'); // Serve the Angular app via a Blade view or directly via the file
})->where('any', '.*');
