from .common import *

DEBUG = False

ALLOWED_HOSTS = []

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

STATICFILES_DIRS = [
    "/var/www/virtual/..."
]

# EMAIL VARS FOR PRODUCTION
#EMAIL_USE_TLS = True
#EMAIL_HOST = ''
#EMAIL_PORT = 587
#EMAIL_HOST_USER = ''
#EMAIL_HOST_PASSWORD = ''
#DEFAULT_FROM_EMAIL = ''
#DEFAULT_TO_EMAIL = ''

