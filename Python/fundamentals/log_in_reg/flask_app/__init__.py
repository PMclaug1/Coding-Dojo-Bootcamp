from flask import Flask
app = Flask(__name__)
app.secret_key ="no secrets on github"
DATABASE = 'log_in_reg'