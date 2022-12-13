from flask import render_template, redirect, request
from flask_app.models.dojo_model import Dojo
from flask_app import app


@app.route('/')
def redirected():
    return redirect('/dojos')

@app.route('/dojos')
def index():
    all_dojos = Dojo.get_all()
    return render_template("index.html", all_dojos=all_dojos)

@app.route('/dojos/<int:id>/view')
def get_one(id):
    data = {
        'id':id
    }
    one_dojo = Dojo.get_one(data)
    return render_template("dojos_one.html", one_dojo = one_dojo)

@app.route("/dojos/new")
def new_dojo_form():
    return render_template("dojos_new.html")

@app.route("/dojos/create", methods=['POST'])
def create_dojo():
    Dojo.create(request.form)
    return redirect('/dojos')


