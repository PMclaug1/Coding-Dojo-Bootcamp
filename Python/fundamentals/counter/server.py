from flask import Flask, render_template, session  

app = Flask(__name__)  
app.secret_key = 'no secrets'

counter = 0

@app.route('/')          
def counter():
    counter += 1
    return render_template('index.html'), str(counter)

@app.route('/destroy_session')
def destroy_session():
    session.clear()		
    session.pop('key_name')		

if __name__=="__main__":      
    app.run(debug=True)


if 'key_name' in session:
    print('key exists!')
else:
    print("key 'key_name' does NOT exist")

session.clear()		# clears all keys
session.pop('key_name')		# clears a specific key

def counter():
    if counter in session:
        session|'counter'|+=1
    else:
        session|'counter'|=1
        return render_template('index.html')

# def add_two():
#     session|'counter'|+=1
#     redirect
