from .common import *

DEBUG = False

MEDIA_ROOT = os.path.join(BASE_DIR, '/var/www/virtual/nmoeller/tt.vfl-winz-baak.de/static/media')

ALLOWED_HOSTS = ['tt-vfl-winz-baak.de', "vfl-winz-baak.de", "127.0.0.1","tt.vfl-winz-baak.de"]

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
COMPRESS_ENABLED = True
COMPRESS_OFFLINE = True

# EMAIL VARS FOR PRODUCTION
EMAIL_USE_TLS = True
EMAIL_HOST = ''
EMAIL_PORT = 587
EMAIL_HOST_USER = 'nico.moeller@rub.de'
EMAIL_HOST_PASSWORD = ''
DEFAULT_FROM_EMAIL = ''
DEFAULT_TO_EMAIL = ''


