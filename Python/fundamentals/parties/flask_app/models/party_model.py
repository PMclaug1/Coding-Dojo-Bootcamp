from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
from flask_app.models import user_model
import re

class Party:
    def __init__(self,data):
        self.id = data['id']
        self.what = data['what']
        self.location = data['location']
        self.date = data['date']
        self.all_ages = data['all_ages']
        self.description = data['description']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']

    @classmethod
    def create(cls, data):
        query = """
        INSERT INTO parties (what, location, date, all_ages, description, user_id)
        VALUES (%(what)s, %(location)s, %(date)s, %(all_ages)s, %(description)s, %(user_id)s)
        """
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def get_all(cls):
        query = """
        SELECT * FROM parties JOIN users ON parties.user_id = users.id;
        """
        results = connectToMySQL(DATABASE).query_db(query)
        all_parties = []
        if results:
            for row in results:
                this_party = cls(row)
                user_data = {
                    **row,
                    'id':row['users.id'],
                    'created_at': row['users.created_at'],
                    'updated_at': row['users.updated_at']
                }
                this_user = user_model.User(user_data)
                this_party.planner = this_user
                all_parties.append(this_party)
            return all_parties

    @classmethod
    def get_one(cls,data):
        query = """
        SELECT * FROM parties JOIN users ON parties.user_id = users.id
        WHERE parties.id = %(id)s
        """
        results = connectToMySQL(DATABASE).query_db(query,data)
        if results:
            row = results[0]
            this_party = cls(row)
            user_data = {
                **row,
                'id': row['users.id'],
                'created_at': row['users.created_at'],
                'updated_at': row['users.updated_at']
            }
            this_user = user_model.User(user_data)
            this_party.planner = this_user
            return this_party
        return False

    @classmethod
    def update(cls,data):
        query = """
            UPDATE parties SET what = %(what)s, location = %(location)s, description = %(description)s, date = %(date)s, all_ages = %(all_ages)s
            WHERE parties.id = %(id)s
        """
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def delete(cls,data):
        query = """
        DELETE FROM parties WHERE id = %(id)s
        """
        return connectToMySQL(DATABASE).query_db(query,data)


    @staticmethod
    def validator(form_data):
        is_valid = True
        if len(form_data['what']) <1:
            flash("what required")
            is_valid = False
        if len(form_data['location']) <1:
            flash("location required")
            is_valid = False
        if len(form_data['date']) <1:
            flash("date required")
            is_valid = False
        if len(form_data['description']) <1:
            flash("description required")
            is_valid = False
        if "all_ages" not in form_data:
            flash("all ages required")
            is_valid = False
        return is_valid