import random

class Ninja:
    def __init__(self, first_name, last_name , treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet

    def walk(self):
        print("Going for a walk")
        self.pet.play()
        return self

    def feed(self):

        if len(self.pet_food) > 0:
            food = self.pet_food.pop()
            print(f"Feeding {self.pet.name} {food}!")
            self.pet.eat()
        else:
            print("Need more food")
        return self

    def bathe(self):
        self.pet.make_noise()

    def do_trick(self):
        print(f"Pet does a trick! {random.choice(tricks)}")


class Pet:  
    
    def __init__(self, name , type, tricks, noise):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = 100
        self.energy = 100
        self.noise = noise

    def sleep(self):
        self.energy += 50
        print(self.energy)
        return self


    def eat(self):
        self.energy += 25
        self.health += 25
        print(self.energy)
        print(self.health)
        return self

    def play(self):
        self.health += 10
        self.energy -= 15
        print(self.health)
        print(self.energy)
        return self

    def make_noise(self):
        print(self.noise)


my_treats = ['Cheerios', 'pig hoof', 'Peanut Butter']
my_pet_food = ['OpenFarm', 'Purina', 'Chow']
tricks = ['sit','jump','lie down']

Paloma = Pet("Paloma","Jack Russell",tricks,"Weird grunting & heavy breathing")

Patrick = Ninja("Patrick","McLaughlin",my_treats,my_pet_food, Paloma)

Patrick.feed()
Patrick.feed()
Patrick.feed()
Patrick.feed()
Patrick.bathe()
Patrick.do_trick()
