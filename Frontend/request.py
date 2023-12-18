import requests

x = requests.get('https://api-service-6zss.onrender.com/get')

print(x.text)