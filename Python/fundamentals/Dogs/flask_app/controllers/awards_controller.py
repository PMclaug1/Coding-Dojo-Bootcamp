from flask import Flask, render_template, redirect, request
from flask_app.models.dog_model import Dog
from flask_app.models.award_model import Award
from flask_app import app

@app.route('/awards/new')
def new_award_form():
    all_dogs = Dog.get_all()
    return render_template("awards_new.html", all_dogs=all_dogs)

@app.route('/awards/create', methods=['POST'])
def create_award():
    Award.create(request.form)
    return redirect(f'/dogs/{request.form["dog_id"]}/view')

