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
    public function store(Request $request)
    {
        //Validate form input
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'subject' => 'required|string',
            'message' => 'required|string'
        ]);

        $data = $request->all(); //collects all input fields

        // Send email to Gmail
        Mail::to('yughiep@gmail.com')->send(new ContactMessage($data));

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
