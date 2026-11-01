# Class Check 04: Functions

## Purpose

Use this in class to check whether you can define, call, and reuse Python functions. Complete it during Lesson 04 and ask for a quick check after each section.

You may use the lesson examples and the starter template. The goal is to show what you understand, not to write a large program from memory.

## What You Will Practise

- Define a function with `def`.
- Call a function and predict its output.
- Pass values through parameters.
- Use `return` to send a result back.
- Explain the difference between `print()` and `return`.
- Use functions with conditions and loops.
- Organise a small program into several functions.

## Timing

| Section | Suggested time |
|---|---:|
| 1. Function prediction | 4 minutes |
| 2. Call fix | 4 minutes |
| 3. Parameter check | 5 minutes |
| 4. Return check | 5 minutes |
| 5. Function challenge | 12 minutes |
| 6. Exit ticket | 4 minutes |

## 1. Function Prediction

Do not run the code yet.

```python
def show_message():
    print("Start")
    print("Keep coding")


show_message()
show_message()
```

1. How many lines will print? ____________________
2. What will the first line say? ____________________
3. Why does the message appear twice? ____________________

**Quick check:** Explain the difference between the function definition and the two function calls.

## 2. Call Fix

The function is defined, but the program does not show anything. Add the missing line.

```python
def show_rule():
    print("Test your code before you submit it.")

____________________
```

Now complete the sentence:

> Defining a function does not run it. The function runs when I ____________________ it.

**Quick check:** Run the program and make sure the rule appears once.

## 3. Parameter Check

Complete the function so it uses its parameter.

```python
def greet(name):
    print("Hello,", ____________________)


greet("Mina")
greet("Alex")
```

### Predict

1. What will the first call print? ____________________
2. What will the second call print? ____________________
3. What is the parameter in this function? ____________________

**Quick check:** Explain why one function can greet two different people.

## 4. Return Check

### A. Predict

```python
def double(number):
    return number * 2


result = double(4)
print(result + 1)
```

What will the program print? ____________________

### B. Complete

Write the missing expression so the function returns a score with a two-point bonus.

```python
def add_bonus(score):
    return ____________________


final_score = add_bonus(7)
print(final_score)
```

### C. Explain

Complete the sentence:

> `print()` displays a value, while `return` ________________________________.

**Quick check:** Show that the returned value can be saved in a variable and used in another calculation.

## 5. Function Challenge

Build and run a small program organised with functions. You may use the starter template, but replace the example words and values with your own choices.

### Minimum evidence

Your program must:

- define at least three functions;
- call all of the core functions from the main program;
- use a parameter in at least one function;
- use `return` in at least one function;
- use a condition or loop inside at least one function;
- collect a name and an integer with `input()`; and
- print a clear final result.

### Starter template

```python
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
```

### Before you run

Write what each function does in your program:

| Function | What it does | Parameter or return value? |
|---|---|---|
| | | |
| | | |
| | | |
| | | |

### Self-check after you run

- [ ] I defined at least three functions.
- [ ] I called the functions I defined.
- [ ] At least one function uses a parameter.
- [ ] At least one function uses `return`.
- [ ] At least one function contains a condition or loop.
- [ ] My output shows a clear final result.
- [ ] I can explain what one function receives and returns.

**Teacher check:** Point to one parameter, one `return`, and one function call in your program.

Teacher initials: ____________________

## 6. Exit Ticket

1. What is the difference between a function definition and a function call?

   ________________________________________________________________

2. Write one line that calls this function:

   ```python
   def show_name(name):
       print(name)
   ```

   ```python

   ```

3. What is the difference between `print()` and `return`?

   ________________________________________________________________

4. Why can the result of this function be used in another calculation?

   ```python
   def add_one(number):
       return number + 1
   ```

   ________________________________________________________________

## Completion Record

This check is complete when you have shown evidence of all six sections and received feedback on your Function Challenge.

| Evidence | Complete |
|---|---|
| Function Prediction | [ ] |
| Call Fix runs correctly | [ ] |
| Parameter Check | [ ] |
| Return Check | [ ] |
| Function Challenge runs correctly | [ ] |
| Exit Ticket | [ ] |

### Teacher snapshot

Mark the current level for the next lesson:

- [ ] Independent: defines, calls, and explains functions with parameters and return values.
- [ ] Prompted: completes the task after a hint or example.
- [ ] Needs support: needs a follow-up mini-lesson on calls, parameters, or return values.
