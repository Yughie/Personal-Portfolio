<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MessageController;

Route::post('/send-email', [MessageController::class, 'sendEmail']);
