def show_welcome(name):
    print("Welcome,", name)


def get_level(score):
    if score >= 8:
        return "advanced"
    elif score >= 4:
        return "explorer"
    else:
        return "beginner"


def calculate_total(score, bonus):
    return score + bonus


def show_rounds(count):
    for round_number in range(1, count + 1):
        print("Round", round_number)


name = input("Name: ")
score = int(input("Score from 1 to 10: "))

show_welcome(name)
print("Level:", get_level(score))
print("Total:", calculate_total(score, 2))
show_rounds(3)
