from flask import Flask, request, render_template, Response
import pyrebase
import json

app = Flask("__main__",
            static_folder="../react-frontend/build/static",
            template_folder="../react-frontend/build")

firebaseConfig = {
    "apiKey": "AIzaSyBkAIsqEHjOGgvwl3qs0VKGizslm5pCCvo",
    "authDomain": "social-news-website.firebaseapp.com",
    "databaseURL": "https://social-news-website.firebaseio.com",
    "storageBucket": "social-news-website.appspot.com",
}

firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()


@app.route("/rest/login", methods=['POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        try:
            return auth.sign_in_with_email_and_password(email, password)
        except:
            return Response("Login failed", status=401, mimetype='application/plain')


@app.route("/rest/signup", methods=['POST'])
def signup():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        try:
            return auth.create_user_with_email_and_password(email, password)
        except:
            return Response("Sign up was unsuccessful", status=401, mimetype='application/plain')


@app.route("/")
def root():
    return render_template("index.html")


app.run(debug=True)
