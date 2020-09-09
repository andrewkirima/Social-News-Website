import flask

app = flask.Flask("__main__",
                  static_folder="../react-frontend/build/static",
                  template_folder="../react-frontend/build")


@app.route("/")
def root():
    return flask.render_template("index.html")


app.run(debug=True)
