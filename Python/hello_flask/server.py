
from flask import Flask, render_template  
# Import Flask to allow us to create our app
app = Flask(__name__)    
# Create a new instance of the Flask class called "app"
@app.route('/')          
# The "@" decorator associates this route with the function immediately following
def hello_world():
    return render_template('index.html')

@app.route('/new_route')
def new_route():
    return "A new route"

@app.route('/hello/<name>')
def hi_name(name):
    return f"Hello, {name}"

@app.route('/hello/<string:name>/<int:times>')
def hi_name_times(name, times):
    return f"<p>Hello, {name} \n <p>"*times

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

