# A deck of cards (52 of them)

from classes import card
import random

class Deck:


    def __init__( self ):
        suits = [ "spades" , "hearts" , "clubs" , "diamonds" ]
        self.cards = []

        for s in suits:
            for i in range(1,14):
                str_val = ""
                if i == 1:
                    str_val = "Ace"
                elif i == 11:
                    str_val = "Jack"
                    i = 10
                elif i == 12:
                    str_val = "Queen"
                    i = 10
                elif i == 13:
                    str_val = "King"
                    i = 10
                else:
                    str_val = str(i)
                self.cards.append( card.Card( s , i , str_val ) )

    def show_cards(self):
        for card in self.cards:
            card.card_info()

    def draw_card(self):
        # We want this to return the value that gets added to total
        temp_card = self.cards.pop(random.randint(0, len(self.cards)- 1))
        return temp_card

