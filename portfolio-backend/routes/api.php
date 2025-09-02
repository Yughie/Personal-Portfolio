<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MessageController;

Route::post('api/send-email', [MessageController::class, 'sendEmail'])->name('api.send-email.sendEmail');
