# Python Diagnostic Challenge

### ECA Coding Club · Session 1

Time: 25 minutes
Language: Python 3
Purpose: Find your starting point — this is not an exam.

> You do not need to finish everything.
> Start from Question 1 and go as far as you can.
>
> If you don't know something, just skip it.

---

## Part 0 — About You

### ~2 minutes

This section is not graded.

### 1. Have you programmed before?

Never
I've tried a little
I can write simple programs
I've made projects before

### 2. Have you used Python before?

Never
I've seen/read Python code
I've written some Python
I use Python regularly

### 3. Which languages have you used before?

> ---

### 4. How confident are you with programming?

1 — 2 — 3 — 4 — 5

---

# Part 1 —  

### ~4 minutes · 5 points

## Q1.   [1 point]

python
x = 5
y = 3

print(x + y)


Answer:

> ---

---

## Q2. What will this program print? [1 point]

python
name = "Alex"
age = 16

print(name)
print(age)


Answer:

> ---

---

## Q3. Which of these are valid Python variables? [1 point]

Select all that apply.

name
student_name
2students
my-score
age2

---

## Q4. What does input() do? [1 point]

 A. Prints something to the screen
 B. Gets information from the user
 C. Creates a variable
 D. Repeats a program

Answer: ______

---

## Q5. What does this print? [1 point]

python
print(10 > 5)


 A. 10 > 5
 B. True
 C. False
 D. Error

Answer: ______

---

# Part 2 — Logic & Control Flow

### ~5 minutes · 6 points

## Q6. What will this print? [2 points]

python
age = 15

if age >= 18:
    print("Adult")
else:
    print("Minor")


Answer:

> ---

---

## Q7. Fill in the blank. [1 point]

    Make the program print "Even" when number is even.

python
number = 10

if number % 2 == 0:
    print(__________)


---

## Q8.           [1 point]

python
    for i in range(3):
        print(i)


 A.

  text
  1
  2
  3
  

 B.

  text
  0
  1
  2
  

 C.

  text
  0
  1
  2
  3
  

 D. Error

Answer: ______

---

## Q9. What will this print? [2 points]

python
total = 0

for i in range(1, 4):
    total = total + i

print(total)


Answer:

> ---

---

# Part 3 — Data & Functions

### ~5 minutes · 6 points

## Q10. What is the value of numbers[2]? [1 point]

python
numbers = [10, 20, 30, 40]


Answer:

> ---

---

## Q11. What will this print? [1 point]

python
numbers = [1, 2, 3]

numbers.append(4)

print(numbers)


Answer:

> ---

---

## Q12. Write a function called square that returns the square of a number. [2 points]

For example:

python
square(5)


should return:

text
25


Your code:

python

________________________________

________________________________

________________________________



---

## Q13. What is the difference between these two? [2 points]

python
print(x)


and

python
return x


Explain in your own words.

> ---

> ---

---

# Part 4 — Problem Solving

### ~5 minutes · 7 points

This section is designed to distinguish different levels of problem-solving ability.

You do not need to use a specific method.

---

## Q14.      [3 points]

Given:

python
numbers = [3, 8, 2, 10, 5]


Write a program that prints:

text
10


Your code:

python

________________________________

________________________________

________________________________

________________________________

________________________________



---

## Q15. Count the vowels [4 points]

Write a program that counts how many vowels (a, e, i, o, u) appear in a string.

For example:

python
text = "hello world"


Your program should print:

text
3


You may assume the input only contains lowercase letters.

Your code:

python

________________________________

________________________________

________________________________

________________________________

________________________________

________________________________



---

# Part 5 — Advanced Challenge

### Optional · ~5 minutes

Do this only if you still have time.

This section is mainly used to identify advanced members.

---

## Q16. Number Guessing Logic

Write a program that:

1. Has a secret number.
2. Asks the user to guess it.
3. Prints "Too high" if the guess is too high.
4. Prints "Too low" if the guess is too low.
5. Prints "Correct" if the guess is correct.

For example:

text
Guess the number: 7
Too high

Guess the number: 4
Too low

Guess the number: 5
Correct


Your code:

python

________________________________

________________________________

________________________________

________________________________

________________________________

________________________________

________________________________

________________________________



---

# Teacher's Scoring Guide

## Suggested Levels

| Level               | Description                                         | Score |
| ------------------- | --------------------------------------------------- | ----: |
| 🟢 Zero         | Little or no Python experience                      |   0–5 |
| 🟡 Beginner     | Understands variables, conditions, and basic syntax |  6–11 |
| 🔵 Intermediate | Can use loops, lists, and functions                 | 12–17 |
| 🟣 Advanced     | Can independently solve unfamiliar problems         | 18–24 |
| 🔴 Advanced+    | Can complete the challenge with good structure      |   24+ |

Total: 24 points + 5 optional challenge points

---

# Important: Don't Use the Score Alone

The test is intended to measure more than Python syntax.

When grading, also observe:

| Student | Syntax | Logic | Problem Solving | Independence | Notes |
| ------- | -----: | ----: | --------------: | -----------: | ----- |
| A       |   ⭐⭐⭐⭐ |    ⭐⭐ |              ⭐⭐ |          ⭐⭐⭐ |       |
| B       |     ⭐⭐ |  ⭐⭐⭐⭐ |            ⭐⭐⭐⭐ |         ⭐⭐⭐⭐ |       |
| C       |      ⭐ |     ⭐ |              ⭐⭐ |          ⭐⭐⭐ |       |

Pay particular attention to Q14–Q16.

A student who knows lots of Python syntax but cannot solve a new problem is not necessarily stronger than a student who knows less syntax but can reason through an unfamiliar problem.

---

# Suggested Post-Test Reflection

## One last question

### Which question was the most challenging for you, and why?

> ---

> ---

### What would you like to be able to build with Python this year?

> ---

> ---

---

# Recommended Use of the Results

Do not necessarily split students into permanent classes.

Instead, use the results to determine the appropriate challenge level for each student.

For example, when teaching if statements:

### Beginner

python
number = int(input())

if number % 2 == 0:
    print("Even")
else:
    print("Odd")


### Intermediate

> Modify the program so that it can check 10 numbers.

### Advanced

> Write a function is_even(number) and use it to count how many even numbers were entered.

This allows the whole club to learn the same core concept while giving stronger students more difficult problems.

---

# Diagnostic Goal

The ultimate question this test should answer is not:

> “How much Python does this student know?”

It is:

> “Where should I start teaching this student, and how much challenge do they need?”
