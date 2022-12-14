from flask import render_template, redirect, request
from flask_app.models.dog_model import Dog
from flask_app import app


#full crud routing
# /table_name/id/action
@app.route('/')
def index():
    all_dogs = Dog.get_all()
    return render_template("index.html", all_dogs=all_dogs)

@app.route('/dogs/<int:id>/view')
def get_one(id):
    data = {
        'id':id
    }
    one_dog = Dog.get_one(data)
    return render_template("dogs_one.html", one_dog = one_dog)

@app.route("/dogs/new")
def new_dog_form():
    return render_template("dogs_new.html")

@app.route("/dogs/create", methods=['POST'])
def create_dog():
    if not Dog.validator(request.form):
        return redirect('/dogs/new')
    Dog.create(request.form)
    return redirect('/')

@app.route("/dogs/<int:id>/edit")
def edit_dog(id):
    this_dog = Dog.get_one({'id':id})
    return render_template("dogs_edit.html", this_dog=this_dog)

@app.route("/dogs/<int:id>/update", methods=['POST'])
def update_dog(id):
    data = {
        'id':id,
        **request.form
    }
    Dog.update(data)
    return redirect('/')

@app.route('/dogs/<int:id>/delete')
def delete_dog(id):
    Dog.delete({'id':id})
    return redirect('/')