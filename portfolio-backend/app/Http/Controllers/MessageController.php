<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactMessage;
use Mail;

class MessageController extends Controller
{
  
    /**
     * Store a newly created resource in storage.
     */
    public function sendEmail(Request $request)
    {
        //Validate form input
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:255'
        ]);

        //collects all input fields
        Mail::send('emails.contact', [
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
        ], function ($mail) use ($request) {
            $mail->to('yughiep@gmail.com')
                 ->subject($request->subject);
        });


        return response()->json(['success' => 'Message sent successfully!']);

        
    }
      /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
