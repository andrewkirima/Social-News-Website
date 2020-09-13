from flask import Flask, request, render_template, Response, jsonify
import pyrebase
import json
import uuid
import datetime

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
db = firebase.database()


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


@app.route("/rest/submit/post", methods=['POST', 'PUT'])
def submit_post():
    if request.method == 'POST':
        title = request.form['title']
        link = request.form['link']
        user = request.form['user']

        key_post = db.child("posts").order_by_child("title").equal_to(title).get()
        new_title_key = ""
        for obj in key_post:
            new_title_key = obj.key()

        if new_title_key == '':
            db.child("posts").push({"title": title,
                                    "link": link,
                                    "user": user,
                                    "upvotes": 0,
                                    "timestamp": str(datetime.datetime.now())})

            post = db.child("posts").order_by_child("title").equal_to(title).get()

            for obj in post:
                post = obj.val()

            return post
        else:
            return Response("Creation was unsuccessful. Title is not unique", status=401, mimetype='application/plain')

    elif request.method == 'PUT':
        title = request.form['title']
        new_title = request.form.get("new_title", "")
        link = request.form['link']

        print("title: " + title)
        print("new_title: " + new_title)
        print("link: " + link)
        # .get() returns a PyreResponse object whose .key() value is the .key() of the parent node rather than
        #  the child even when there is only a single child node returned
        # So in order to get around this, the PyreResponse is iterated through (while containing only one child node)
        # and "key" is set to the child's key.
        post = db.child("posts").order_by_child("title").equal_to(title).get()
        key_post = db.child("posts").order_by_child("title").equal_to(new_title).get()
        new_title_key = ""
        for obj in key_post:
            new_title_key = obj.key()
        key = ""
        for obj in post:
            key = obj.key()

        if new_title:
            title = new_title

        if key and new_title_key == '':
            db.child("posts").child(key).update({"title": title,
                                                 "link": link})
        else:
            return Response("Update was unsuccessful.", status=401, mimetype='application/plain')

        post = db.child("posts").order_by_child("title").equal_to(title).get()

        for obj in post:
            post = obj.val()

        return post
    # elif request.method == 'DELETE':
    #     title = request.form['title']
    #
    #     # .get() returns a PyreResponse object whose .key() value is the .key() of the parent node rather than
    #     #  the child even when there is only a single child node returned.
    #     # So in order to get around this, the PyreResponse is iterated through (while containing only one child node)
    #     # and "key" is set to the child's key.
    #     post = db.child("posts").order_by_child("title").equal_to(title).get()
    #     key = ""
    #     for obj in post:
    #         key = obj.key()
    #
    #     if key:
    #         db.child("posts").child(key).remove()
    #         return Response(status=204)
    #     else:
    #         return Response("Deletion was unsuccessful.", status=401, mimetype='application/plain')


@app.route("/rest/upvote/post", methods=['PUT'])
def upvote_posts():
    if request.method == 'PUT':
        title = request.form['title']

        # .get() returns a PyreResponse object whose .key() value is the .key() of the parent node rather than
        #  the child even when there is only a single child node returned
        # So in order to get around this, the PyreResponse is iterated through (while containing only one child node)
        # and "key" is set to the child's key.
        post = db.child("posts").order_by_child("title").equal_to(title).get()
        key = ""
        for obj in post:
            key = obj.key()
            post = obj

        if key:
            upvote_count = post.val()["upvotes"]
            key = post.key()
            db.child("posts").child(key).update({"upvotes": upvote_count + 1})
            return Response(status=204)
        else:
            return Response("Upvote was unsuccessful.", status=401, mimetype='application/plain')


@app.route("/rest/posts/<post_title>", methods=['DELETE'])
def delete_post(post_title):
    if request.method == 'DELETE':
        title = post_title

        # .get() returns a PyreResponse object whose .key() value is the .key() of the parent node rather than
        #  the child even when there is only a single child node returned.
        # So in order to get around this, the PyreResponse is iterated through (while containing only one child node)
        # and "key" is set to the child's key.
        post = db.child("posts").order_by_child("title").equal_to(title).get()
        key = ""
        for obj in post:
            key = obj.key()

        if key:
            db.child("posts").child(key).remove()
            return Response(status=204)
        else:
            return Response("Deletion was unsuccessful.", status=401, mimetype='application/plain')


@app.route("/rest/posts", methods=['GET'])
def get_posts():
    if request.method == 'GET':
        posts = db.child("posts").order_by_child("timestamp").get()
        list_of_posts = []
        for post in posts:
            list_of_posts.append(post.val())
        list_of_posts.reverse()
        return jsonify(list_of_posts)


@app.route("/rest/submit/comment", methods=['POST', 'PUT', 'DELETE'])
def submit_comment():
    if request.method == 'POST':
        post_title = request.form['post_title']
        text = request.form['text']
        user = request.form['user']
        id = str(uuid.uuid4())

        db.child("comments").push({"post_title": post_title,
                                   "text": text,
                                   "user": user,
                                   "upvotes": 0,
                                   "uuid": id})

        comment = db.child("comments").order_by_child("uuid").equal_to(id).get()

        for obj in comment:
            comment = obj.val()

        return comment
    elif request.method == 'PUT':
        id = request.form['uuid']
        text = request.form['text']

        # .get() returns a PyreResponse object whose .key() value is the .key() of the parent node rather than
        #  the child even when there is only a single child node returned
        # So in order to get around this, the PyreResponse is iterated through (while containing only one child node)
        # and "key" is set to the child's key.
        comment = db.child("comments").order_by_child("uuid").equal_to(id).get()
        key = ""
        for obj in comment:
            key = obj.key()

        if key:
            db.child("comments").child(key).update({"text": text})
        else:
            return Response("Update was unsuccessful.", status=401, mimetype='application/plain')

        comment = db.child("comments").order_by_child("uuid").equal_to(id).get()

        for obj in comment:
            comment = obj.val()

        return comment
    elif request.method == 'DELETE':
        id = request.form['uuid']

        # .get() returns a PyreResponse object whose .key() value is the .key() of the parent node rather than
        #  the child even when there is only a single child node returned.
        # So in order to get around this, the PyreResponse is iterated through (while containing only one child node)
        # and "key" is set to the child's key.
        comment = db.child("comments").order_by_child("uuid").equal_to(id).get()
        key = ""
        for obj in comment:
            key = obj.key()

        if key:
            db.child("comments").child(key).remove()
            return Response(status=204)
        else:
            return Response("Deletion was unsuccessful.", status=401, mimetype='application/plain')


@app.route("/rest/comments/<post_title>", methods=['GET'])
def get_comments(post_title):
    if request.method == 'GET':
        comments = db.child("comments").order_by_child("post_title").equal_to(post_title).get()
        list_of_comments = []
        for comment in comments:
            list_of_comments.append(comment.val())
        list_of_comments.reverse()
        return jsonify(list_of_comments)


@app.route("/")
def root():
    return render_template("index.html")


app.run(debug=True)
