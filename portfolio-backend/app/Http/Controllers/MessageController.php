<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class MessageController extends Controller
{
    public function sendEmail(Request $request)
    {
        // 1) Validate
        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email:rfc,dns|max:255',
            'subject' => 'required|string|max:255',
            'body'    => 'required|string|max:5000', // renamed from "message"
        ]);

        try {
            // 2) Send mail using a Blade view
            Mail::send('emails.contact', $validated, function ($mail) use ($validated) {
                $mail->to('yughiep@gmail.com')
                    ->subject($validated['subject'])
                    // Use your domain as sender:
                    ->from(config('mail.from.address'), config('mail.from.name'))
                    // Let replies go to the user:
                    ->replyTo($validated['email'], $validated['name']);
            });

            return response()->json(['success' => 'Message sent successfully.']);
        } catch (\Throwable $e) {
            Log::error('Contact form mail failed: '.$e->getMessage());
            return response()->json([
                'message' => 'Failed to send email. Please try again later.'
            ], 500);
        }
    }
}
