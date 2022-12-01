from flask import Flask  
app = Flask(__name__)    

@app.route('/')          
def hello_world():
    return 'Hello World!' 

@app.route('/dojo')
def success():
  return "Dojo!"

@app.route('/hi/<name>')
def hi(name):
    print(name)
    return "Hi, " + name


@app.route('/repeat/<string:provide>/<int: num>')
def repeat(string, num):
    return f"{string * num}"

if __name__=="__main__":    
    app.run(debug=True)    
