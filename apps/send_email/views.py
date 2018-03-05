from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
from django.views.decorators.http import require_http_methods
import json
from backend.settings import prod

@require_http_methods(["POST"])
def send_form_email(request):

    try:
        data = json.loads(request.body)
        subject = "Websitekontakt"
        from_email = data["email"]
        message = data["text"]
        name = data["name"]
    except KeyError:
        return HttpResponse(status=422)

    try:
        print("Sending mail..")
        send_mail(subject, message + "\n\nfrom: " + name, from_email, [prod.EMAIL_HOST_USER])
    except BadHeaderError:
        return HttpResponse(status=500)

    return HttpResponse(status=200)
