# # user input
# adjective = input("adjective: ")
# animal = input("animal: ")
# verb1 = input("verb: ")
# exclamation = input(" exclamation: ")
# verb2 = input("verb: ")
# verb3 = input("verb: ")



# print("The other day, I was really in trouble. It all started when I saw a very " + adjective + " " + animal + " " + verb1 + " " + "down the hallway." + " " + exclamation + " " + "I yelled. But all I could think to do was to " + verb2 + " " + "over and over. Miraculously, that caused it to stop, but not before it tried to " + verb3 + " " + "right infront of my family.")

# firstName = "Daniel John"
# lastName = "Idorot"
# print(firstName + " " + lastName)

# # Need decimal by using float
# lengthRectangle = float(input("What is the lenght of the rectangle? "))
# # length = rectagle * 6
# widthRectagle = float(input("What is the width of a side of the rectangle? "))
# # width = rectagle * 7
# print(f"The area of the rectangle is: {lengthRectangle*widthRectagle} ")


# PI = 3.14
# r = float(input("Enter the radius of a circle:"))
# area = PI * r * r
# print(area)

# class bcolors:
#     HEADER = '\033[95m'
#     OKBLUE = '\033[94m'
#     OKCYAN = '\033[96m'
#     OKGREEN = '\033[92m'
#     WARNING = '\033[93m'
#     FAIL = '\033[91m'
#     ENDC = '\033[0m'
#     BOLD = '\033[1m'
#     UNDERLINE = '\033[4m'

# print(f"{bcolors.WARNING}Warning: No active frommets remain. Continue?{bcolors.ENDC}")


# What is the price of a child's meal? 4.50
# What is the price of an adult's meal? 9.00
# How many children are there? 4
# How many adults are there? 2
# What is the sales tax rate? 0.06

# Subtotal: $36.00
# Sales Tax: $2.16
# Total: $38.16

# variables for price, number of persons, and tax
child_meal = float(input("What is the price of a child's meal? "))
adult_meal = float(input("What is the price of a adult's meal? "))
number_of_children = int(input("How many children are there? "))
number_of_adult = int(input("How many adult are there? "))

# multiply the price of food and number of both children and adult 
child_meal_total = child_meal * number_of_children
adult_meal_total = adult_meal * number_of_adult

# add the total meal of both children and adult
subtotal = child_meal_total + adult_meal_total

print(f"Subtotal {subtotal}")
print()

# tax rate
tax_rate = float(input("What is the sales tax rate? "))
print()

sales_tax = tax_rate * subtotal

print(f"Sales Tax {sales_tax}")
print()

# Total of all calculations
total = subtotal + sales_tax

print(f"Total {total}")




