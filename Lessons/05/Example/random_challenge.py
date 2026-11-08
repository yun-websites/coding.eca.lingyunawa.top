import random


def show_welcome(name):
    print("Welcome", name)
    print("Guess a number from 1 to 10.")


def give_hint(guess, target):
    if guess == target:
        return "Correct!"
    elif guess < target:
        return "Too low."
    else:
        return "Too high."


name = input("Name: ")
target = random.randint(1, 10)
show_welcome(name)

for attempt in range(1, 4):
    guess = int(input("Guess: "))
    message = give_hint(guess, target)
    print("Attempt", attempt, ":", message)
    if guess == target:
        print("You solved it!")
        break
else:
    print("The number was", target)
