from game_classes.barbarian import Barbarian
from game_classes.cleric import Cleric
import random


barb = Barbarian("Conan")
cler = Cleric("Bob")


while barb.health > 0 and cler.health > 0:
    print("You are the barbarian, you approach a cleric")
    response = ""
    while not response == "1" and not response == "2":
        response = input("What do you do? 1)attack 2)RAGE")
    if response == "1":
        barb.attack(cler)
    elif response == "2":
        barb.berserker_rage(cler)
    else:
        print("Please choose a valid option.")
dice_roll = random.randint(1,2)
if dice_roll == 1:
    cler.attack(barb)
else:
    cler.heal()

if barb.health > 0:
    print("You won!")
elif cler.health <=0:
    print("Draw")
else:
    print("The cleric has defeated you")