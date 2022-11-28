num1 = 42 
# variable declaration, interger
num2 = 2.3
# variable declaration, float
boolean = True
# boolean
string = 'Hello World'
# string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']
# list
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}
# dictionary
fruit = ('blueberry', 'strawberry', 'banana')
# list
print(type(fruit))
# log statement, type check
print(pizza_toppings[1])
# log statement, access value
pizza_toppings.append('Mushrooms')
# list add value
print(person['name'])
# log statement dictionary access value
person['name'] = 'George'
# dictionary change value
person['eye_color'] = 'blue'
# dictionary change value
print(fruit[2])
# log statement list access value

if num1 > 45:
    print("It's greater")
# conditional if, log statement
else:
    print("It's lower")
# conditional else, log statement

if len(string) < 5:
    # conditional if, length check
    print("It's a short word!")
    # log statement, string
elif len(string) > 15:
    # conditional elif, length check
    print("It's a long word!")
    # log statement, string
else:
    # conditional else
    print("Just right!")
    # log statement string

for x in range(5):
    # conditional for, function parameter
    print(x)
    # log statement
for x in range(2,5):
    # conditional for, function parameter
    print(x)
    # log statement
for x in range(2,10,3):
    # conditional for, function parameter
    print(x)
    # log statement
x = 0
# variable delcaration
while(x < 5):
    # conditional while, function parameter
    print(x)
    # log statement
    x += 1
    # variable declaration

pizza_toppings.pop()
# list delete value
pizza_toppings.pop(1)
# list access value, delete value

print(person)
# log statement
person.pop('eye_color')
# dictionary, delete value
print(person)
# log statement

for topping in pizza_toppings:
    # conditional for
    if topping == 'Pepperoni':
        # conditional if
        continue
        # for loop, increment
    print('After 1st if statement')
    # log statement
    if topping == 'Olives':
        # conditional if, variable declaration
        break
        # for loop, break

def print_hello_ten_times():
    # function
    for num in range(10):
        # conditional for, parameter
        print('Hello')
        # log statement

print_hello_ten_times()
# function

def print_hello_x_times(x):
    # function parameter
    for num in range(x):
    # conditional for parameter
        print('Hello')
        # log statement

print_hello_x_times(4)
# function 

def print_hello_x_or_ten_times(x = 10):
    # function, declare variable, parameter
    for num in range(x):
        # conditional for, parameter
        print('Hello')
        # log statement

print_hello_x_or_ten_times()
# function
print_hello_x_or_ten_times(4)
# function


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)