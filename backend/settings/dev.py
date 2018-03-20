from .common import *

DEBUG = True

MEDIA_ROOT = os.path.join(BASE_DIR, 'static/media')

ALLOWED_HOSTS = ['*']

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static_collected')

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
]

# EMAIL BACKEND SERVER FOR TESTING
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

# COMPRESSOR
STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'compressor.finders.CompressorFinder',
)
COMPRESS_ROOT = os.path.join(BASE_DIR, "static/compressed")
COMPRESS_CSS_FILTERS = ['compressor.filters.css_default.CssAbsoluteFilter',  'compressor.filters.cssmin.CSSMinFilter']
COMPRESS_ENABLED = False
COMPRESS_OFFLINE = False
