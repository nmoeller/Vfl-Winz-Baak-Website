from .common import *

DEBUG = False

MEDIA_ROOT = os.path.join(BASE_DIR, '/var/www/virtual/nmoeller/tt.vfl-winz-baak.de/static/media')

ALLOWED_HOSTS = ["*"]

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')


STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
'compressor.finders.CompressorFinder')


STATICFILES_DIRS = [
    "/var/www/virtual/nmoeller/tt.vfl-winz-baak.de/static/"
]

# COMPRESSOR
COMPRESS_ROOT =  "/var/www/virtual/nmoeller/tt.vfl-winz-baak.de/static/"
COMPRESS_ENABLED = False
COMPRESS_OFFLINE = False

# EMAIL VARS FOR PRODUCTION
EMAIL_USE_TLS = True
EMAIL_HOST = ''
EMAIL_PORT = 587
EMAIL_HOST_USER = 'nico.moeller@rub.de'
EMAIL_HOST_PASSWORD = ''
DEFAULT_FROM_EMAIL = ''
DEFAULT_TO_EMAIL = ''


