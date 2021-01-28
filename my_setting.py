#my_settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'django_movie',
        'USER': 'root',
        'PASSWORD': '201620896',
        'HOST': 'localhost',
        'PORT': '3306',
        'OPTIONS': {
            'init_command': 'SET sql_mode="STRICT_TRANS_TABLES"'
        }
    }
}
SECRET_KEY = '&2aix2-+06$k%34d!q1vvcy-5$+5mnf7t%ao%#msvbe73yk6v_'