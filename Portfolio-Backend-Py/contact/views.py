import sib_api_v3_sdk
from sib_api_v3_sdk.rest import ApiException
# Communicate to react using http with JSON data
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt  # Make testing easier
import json  # help django understand the JSON we send from react
import os

# Like office worker this handles the message, The frontend is the form


@csrf_exempt
def contact_form(request):
    # Step 1: define what request to catch
    if request.method == "POST":
        try:
            # Read the json files request and store it in data variable
            data = json.loads(request.body.decode("utf-8"))

            # Step 3 Get the fields from the send data in https in json type
            name = data.get('name')
            email = data.get("email")
            subject = data.get('subject')
            body = data.get('body')

            # Configure Brevo
            configuration = sib_api_v3_sdk.Configuration()
            configuration.api_key['api-key'] = os.environ.get("BREVO_API_KEY")

            api_instance = sib_api_v3_sdk.TransactionalEmailsApi(
                sib_api_v3_sdk.ApiClient(configuration))
            # DEBUG: Print to console / Render logs
            print("Received data:", data)

            # Compose message
            message = f"""
            You have received a new message from your portfolio contact form.
            Name: {name}
            Email: {email}

            Message:
            {body}
            """

            send_smtp_email = sib_api_v3_sdk.SendSmtpEmail(
                to=[{"email": os.environ.get("EMAIL_HOST_USER")}],
                sender={"email": "your_verified_sender@yourdomain.com",
                        "name": name},
                reply_to={"email": email},
                subject=subject,
                html_content=f"<p>{body}</p><p><b>From:</b> {name} ({email})</p>"
            )

            api_instance.send_transac_email(send_smtp_email)

            return JsonResponse({"success": True, "info": "Email sent successfully via Brevo API!"})

        except ApiException as e:
            return JsonResponse({"success": False, "error": f"Brevo API error: {e}"}, status=500)
        except Exception as e:
            return JsonResponse({"success": False, "error": str(e)}, status=500)

    return JsonResponse({"status": "ready"})
