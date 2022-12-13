from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask_app.models import ninja_model

class Dojo:
    def __init__(self,data) -> None:
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = """
            SELECT * FROM dojos;
        """
        results = connectToMySQL(DATABASE).query_db(query)
        print(results)
        all_dojos = []
        for one_row in results:
            this_dojo_instance = cls(one_row)
            all_dojos.append(this_dojo_instance)
        return all_dojos
    
    @classmethod
    def create(cls,data):
        query = """
            INSERT INTO dojos (name)
            VALUE (%(name)s)
        """
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def get_one(cls,data):
        query = """
            SELECT * FROM dojos LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id
            WHERE dojos.id = %(id)s;
        """
        results = connectToMySQL(DATABASE).query_db(query,data)
        if results:
            dojo_instance = cls(results[0])
            ninjas_list = []
            for row_in_db in results:
                if row_in_db['ninjas.id'] == None:
                    return ninja_instance
                ninja_data ={
                    'id': row_in_db['ninjas.id'],
                    'first_name': row_in_db['first_name'],
                    'last_name': row_in_db['last_name'],
                    'dojo_id': row_in_db['dojo_id'],
                    'age': row_in_db['age'],
                    'created_at': row_in_db['ninjas.created_at'],
                    'updated_at': row_in_db['ninjas.updated_at']
                }
                ninja_instance = ninja_model.Ninja(ninja_data)
                ninjas_list.append(ninja_instance)
            dojo_instance.ninjas = ninjas_list
            return ninja_instance
        return False
