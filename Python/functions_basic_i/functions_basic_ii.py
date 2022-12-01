
def countdown(num):
    output = []
    for i in range(num,-1,-1):
        output.append(i)
    return output

print(countdown(5))

def print_return(list):
    print(list[0])
    return(list[1])

print(print_return([1,2]))


def first_plus_len(list):
    return list[0] + len(list)

print(first_plus_len([1,2,3,4,5,6]))


def values_greater_than_second(list):
    if len(list) < 2:
        return False
    output = []
    for i in range(0,len(list)):
        if list[i] > list[1]:
            output.append(list[i])
    print(len(output))
    return output

print(values_greater_than_second([5,10,15,20,3,16]))
print(values_greater_than_second([3]))

def length_and_value(size,value):
    output = []
    for i in range(0, size):
        output.append(value)
    return output

print(length_and_value(5,10))
print(length_and_value(8,3))