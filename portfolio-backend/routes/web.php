<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MessageController; // Make sure to import your controller

// Route to display the contact form
Route::get('/contact', function () {
    return view('contact'); // This will return the contact view
});

// Route to handle the form submission
Route::post('/contact', [MessageController::class, 'sendEmail']);
