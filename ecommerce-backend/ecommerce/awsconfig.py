from decouple import config

AMAZON_CREDENTIAL = {
    'ACCESS_KEY_ID':config('ACCESS_KEY_ID'),
    'SECRET_ACCESS_KEY':config('SECRET_ACCESS_KEY'),
    'STORAGE_BUCKET_NAME':config('STORAGE_BUCKET_NAME')
}