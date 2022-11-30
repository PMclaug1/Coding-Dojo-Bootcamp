# Assume that the card class represents a single playing card
class Card:

    def __init__( self , suit , point_val , string_val ):
        
        self.suit = suit
        self.point_val = point_val
        self.string_val = string_val

    def card_info(self):
        print(f"{self.string_val} of {self.suit} : {self.point_val} points")

# playerchoice = input(Player chooses hit or stay)
# while (total <= 21 and playerchoice == "hit")   
#    dealt another card
#    check total
#    if total <= 21
#        playerchoice = input(Player chooses hit or stay)
# check if player went bust
# while dealer_total <= 15
#   dealt another card
#   check dealer_total
#   if dealer_total > 21
#       player wins
# print("dealer stays")
# check if dealer went bust
# if player_total > dealer_total
#   player wins
# elif player_total < dealer_total
#   dealer wins
# else
#   a push