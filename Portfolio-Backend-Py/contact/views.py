from django.http import JsonResponse #Communicate to react using http with JSON data
from django.views.decorators.csrf import csrf_exempt #Make testing easier
import json #help django understand the JSON we send from react 

#Like office worker this handles the message, The frontend is the form 
@csrf_exempt 
def contact_form(request):
    #Step 1: define what request to catch 
    if request.method == "POST":
        try: 
            # Read the json files request and store it in data variable
            data = json.loads(request.body.decode("utf-8"))

            #Step 3 Get the fields from the send data in https in json type
            name = data.get('name')
            email = data.get("email")
            subject = data.get('subject')
            body =  data.get('body')

            return JsonResponse({
                "success": True,
                "name": name,
                "email": email,
                "subject": subject,
                "body": body,
                "info": "Form submitted successfully!"
            })
        except Exception as e: 
            #If something went wrong, tell React it failed
            return JsonResponse({
                "success": False, 
                "error": "Only POST allowed"
            }, status=405)

     # If user visits without POST (e.g., GET request)
    return JsonResponse({"status": "ready", "message": "Send your data here."})
    


