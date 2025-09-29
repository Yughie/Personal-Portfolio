from django.core.mail import send_mail, BadHeaderError
from django.http import JsonResponse #Communicate to react using http with JSON data
from django.views.decorators.csrf import csrf_exempt #Make testing easier
import json #help django understand the JSON we send from react 
import os

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

            # DEBUG: Print to console / Render logs
            print("Received data:", data)

            # Compose message
            message = f"From: {name} <{email}>\n\n{body}"
            recipient = os.environ.get("EMAIL_HOST_USER")

            send_mail(
                subject=subject,
                message=message,
                from_email=os.environ.get("EMAIL_HOST_USER"),
                recipient_list=[recipient],  # where you want to receive it
                fail_silently=False,
            )

            return JsonResponse({
                "success": True,
                "info": "Email sent successfully!"
            })
        except BadHeaderError:
            return JsonResponse({"success": False, "error": "Invalid header found."}, status=400)
        except Exception as e: 
            #If something went wrong, tell React it failed
            print(f"Error sending email: {e}")
            return JsonResponse({
                "success": False, 
                "error": str(e)
            }, status=500)

     # If user visits without POST (e.g., GET request)
    return JsonResponse({"status": "ready", "message": "Send your data here."})
    


