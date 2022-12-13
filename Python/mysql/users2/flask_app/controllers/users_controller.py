from flask import render_template, redirect, request
from flask_app.models.user_model import User
from flask_app import app

@app.route('/')
def index():
    return redirect('/users')

@app.route("/users")
def users():
    users = User.get_all()
    print(users)
    return render_template("index.html", users=users)

@app.route("/users/new")
def new():
    return render_template("create.html")
            
@app.route('/users/create', methods=["POST"])
def create_user():
    data = {
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"]
    }
    User.save(data)
    return redirect('/users')

@app.route('/users/edit/<int:id>')
def edit(id):
    data ={
        "id":id
    }
    return render_template("edit.html", user=User.get_one(data))

@app.route('/users/show/<int:id>')
def show(id):
    data ={ 
        "id":id
    }
    return render_template("show.html",user=User.get_one(data))


@app.route('/users/update',methods=['POST'])
def update():
    User.update(request.form)
    return redirect('/users')

@app.route('/users/destroy/<int:id>')
def destroy(id):
    data ={
        'id': id
    }
    User.destroy(data)
    return redirect('/users')