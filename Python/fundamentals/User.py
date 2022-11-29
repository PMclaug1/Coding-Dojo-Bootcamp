class User:
    def __init__(self,first_name,last_name,email,age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print(f"First name: {self.first_name}")
        print(f"Last name: {self.last_name}")
        print(f"email: {self.email}")
        print(f"Age: {self.age}")
        print(f"member: {self.is_rewards_member}")
        print(f"current points: {self.gold_card_points}")
        return self

    def enroll(self):
        if self.is_rewards_member:
            print("user already a member.")
            return False
        self.is_rewards_member = True
        self.gold_card_points = 200
        return self


    def spend_points(self,amount):
        self.gold_card_points -= amount
        return self


my_user = User("Patrick", "McLaughlin", "test@gmail.com", 99)
my_user.display_info().enroll().spend_points(50).display_info()

user2 = User("Jake", "Smith", "jsm@gmail.com", 50)
user2.display_info().enroll().spend_points(80).display_info


