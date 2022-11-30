# from game_classes import human
from game_classes.human import Human

class Cleric(Human):
    def __init__(self, name):
        super().__init__()
        self.name = name
        self.strength -= 4
        self.mana = 15
        self.defense = 15

        def attack(self, target):
            # super().attack(target)
            print(f"{self.name} pray for {target.name} to be injured")
            target.defend(self.strength)

        def heal(self):
            print(f"{self.name} heals self for {self.mana/2}")
            self.health += self.mana/2