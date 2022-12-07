from flask import Flask, render_template, request, redirect, session  
app = Flask(__name__)  
app.secret_key = "No secrets on Git"                   
    
@app.route('/')                           
def index():
    return render_template('index.html') 

@app.route('/results')
def display_results():
    name = session['name']
    Location = session['Location']
    Language = session['Language']
    Comments = session['Comments']
    return render_template('form.html', name=name, Location=Location, Language=Language, Comments=Comments) 

@app.route('/process', methods=['POST']) #action route
def process():
    print(request.form)
    session['name'] = request.form['name']
    session['Location'] = request.form['Location']
    session['Language'] = request.form['Language']
    session['Comments'] = request.form['Comments']
    return redirect('/results')

@app.route('/reset') #action route
def reset():
    session.clear()
    return redirect('/')    
    
if __name__=="__main__":
    app.run(debug=True)   