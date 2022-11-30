# Dealer gets 2 cards (and displays them) <--
# Player gets 2 cards (and displays them)
# dealer_total = card1 + card2
# total = card1 + card2
# playerchoice = input(Player chooses hit or stay)
# while (total <= 21 and playerchoice == "hit")   
#    dealt another card
#    check total
#    if total > 21
#        player loses
#    playerchoice = input(Player chooses hit or stay)
# while dealer_total <= 15
#   dealt another card
#   check dealer_total
#   if dealer_total > 21
#       player wins
# print("dealer stays")
# if player_total > dealer_total
#   player wins
# elif player_total < dealer_total
#   dealer wins
# else
#   a push

from classes.deck import Deck
#from classes import deck

bicycle = Deck()
dealer_total = 0
player_total = 0

temporary_card = bicycle.draw_card()
dealer_total += temporary_card.point_val
print(f"Dealer drew a {temporary_card.string_val} of {temporary_card.suit}.")
temporary_card = bicycle.draw_card()
dealer_total += temporary_card.point_val
print(f"Dealer drew a {temporary_card.string_val} of {temporary_card.suit}.")
print(f"Dealer total is {dealer_total}.")

temporary_card = bicycle.draw_card()
player_total += temporary_card.point_val
print(f"Player drew a {temporary_card.string_val} of {temporary_card.suit}.")
temporary_card = bicycle.draw_card()
player_total += temporary_card.point_val
print(f"Player drew a {temporary_card.string_val} of {temporary_card.suit}.")
print(f"Player total is {player_total}.")

playerchoice = input("Do you want to hit or stay?\n")

while player_total <= 21 and playerchoice == "hit":
    temporary_card = bicycle.draw_card()
    player_total += temporary_card.point_val
    print(f"Player draws a {temporary_card.string_val} of {temporary_card.suit}.")
    print(f"Player total is now {player_total}.")
    if player_total <= 21:
        playerchoice = input("Do you want to hit or stay?\n")

if player_total > 21:
    print("You went bust! Game over!")

else:
    while dealer_total <= 15:
        temporary_card = bicycle.draw_card()
        dealer_total += temporary_card.point_val
        print(f"Dealer hits and draws a {temporary_card.string_val} of {temporary_card.suit}.")
        print(f"Dealer total is now {dealer_total}.")

    if dealer_total > 21:
        print("Dealer went bust! You win!")
    else:
        print("Dealer stays.")
        print(f"Your total: {player_total}")
        print(f"Dealer's total: {dealer_total}")
        if player_total > dealer_total:
            print("Your total is higher than the dealer's! You win!")
        elif player_total < dealer_total:
            print("Your total is less than the dealer's! You lose!")
        else:
            print("It's a push!")