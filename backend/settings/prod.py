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

# COMPRESSOR
STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'compressor.finders.CompressorFinder',
)
COMPRESS_ROOT = os.path.join(BASE_DIR, "static/compressed")
COMPRESS_CSS_FILTERS = ['compressor.filters.css_default.CssAbsoluteFilter',  'compressor.filters.cssmin.CSSMinFilter']
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


