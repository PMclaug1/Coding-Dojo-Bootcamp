from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask_app.models import award_model
from flask import flash
import re

ALPHANUMERIC = re.compile(r"^[a-zA-Z0-9]+$")

class Dog:
    def __init__(self,data) -> None:
        self.id = data['id']
        self.name = data['name']
        self.age = data['age']
        self.breed = data['breed']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = """
            SELECT * FROM dogs;
        """
        results = connectToMySQL(DATABASE).query_db(query)
        print(results)
        all_dogs = []
        for one_row in results:
            this_dog_instance = cls(one_row)
            all_dogs.append(this_dog_instance)
        return all_dogs
    
    @classmethod
    def create(cls,data):
        query = """
            INSERT INTO dogs (name,age,breed)
            VALUE (%(name)s,%(age)s,%(breed)s)
        """
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def get_one(cls,data):
        query = """
            SELECT * FROM dogs LEFT JOIN awards ON dogs.id = awards.dog_id
            WHERE dogs.id = %(id)s;
        """
        results = connectToMySQL(DATABASE).query_db(query,data)
        if results:
            dog_instance = cls(results[0])
            awards_list = []
            for row_in_db in results:
                if row_in_db['awards.id'] == None:
                    return dog_instance
                award_data ={
                    'id': row_in_db['awards.id'],
                    'title': row_in_db['title'],
                    'dog_id': row_in_db['dog_id'],
                    'created_at': row_in_db['awards.created_at'],
                    'updated_at': row_in_db['awards.updated_at']
                }
                award_instance = award_model.Award(award_data)
                awards_list.append(award_instance)
            dog_instance.awards = awards_list
            return dog_instance
        return False

    @classmethod
    def update(cls,data):
        query = """
            UPDATE dogs SET name = %(name)s, age = %(age)s, breed = %(breed)s
            WHERE dogs.id = %(id)s;
        """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def delete(cls,data):
        query = """
            DELETE FROM dogs WHERE dogs.id = %(id)s;
        """
        return connectToMySQL(DATABASE).query_db(query,data)

    @staticmethod
    def validator(potential_dog):
        is_valid = True
        if len(potential_dog['name']) <1:
            is_valid = False
            flash("Name required")
        elif not ALPHANUMERIC.match(potential_dog['name']):
            is_valid = False
            flash("Nmae cannot contain special characters.")
        if len(potential_dog['breed']) <1:
            is_valid = False
            flash("Breed required")
        if len(potential_dog['age']) <1:
            is_valid = False
            flash("Age required")
        elif int(potential_dog['age']) < 0:
            is_valid = False
            flash("Age should be positive")
        return is_valid