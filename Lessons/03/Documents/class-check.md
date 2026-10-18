# Class Check 03: Conditions and Loops

## Purpose

Use this in class to check whether you can make a Python program choose and repeat. Complete it during Lesson 03 and ask for a quick check after each section.

You may use the lesson examples and the starter template. The goal is to show what you understand, not to write a large program from memory.

## What You Will Practise

- Compare values with `>`, `<`, `>=`, `<=`, `==`, and `!=`.
- Use `if`, `elif`, and `else` with consistent indentation.
- Repeat an action with `for` and `range()`.
- Repeat an action with `while` and a changing counter.
- Use input, conditions, and loops in one small program.

## Timing

| Section | Suggested time |
|---|---:|
| 1. Condition prediction | 4 minutes |
| 2. Branch fix | 4 minutes |
| 3. Loop tracing | 5 minutes |
| 4. Challenge program | 12 minutes |
| 5. Exit ticket | 4 minutes |

## 1. Condition Prediction

Do not run the code yet.

```python
score = 7

if score >= 10:
    result = "Gold"
elif score >= 5:
    result = "Silver"
else:
    result = "Try again"
```

1. What value will `result` store? ____________________
2. Which condition is the first one that is `True`? ____________________
3. Why is the `else` block not used? ____________________

**Quick check:** Explain your prediction to a partner or teacher before moving on.

## 2. Branch Fix

Complete the program so it gives three different messages.

```python
age = int(input("Age: "))

if ____________________:
    print("Beginner")
elif ____________________:
    print("Explorer")
else:
    print("Advanced")
```

Use these rules: below 8 is Beginner, below 13 is Explorer, and all other ages are Advanced.

**Quick check:** Test with `6`, `10`, and `14`. Each input should use a different branch.

## 3. Loop Trace

### A. Predict

```python
for round_number in range(1, 4):
    print("Round", round_number)
```

How many lines will print? __________

Write the first and last output:

First: ____________________    Last: ____________________

### B. Fix the while loop

The loop should print `1`, `2`, and `3`, but it does not finish. Add one line.

```python
count = 1
while count <= 3:
    print(count)
    ____________________
```

**Quick check:** Run it and make sure it stops after 3.

## 4. Challenge Program

Build and run a small interactive challenge. You may use the starter template, but replace the example words and values with your own choices.

### Minimum evidence

Your program must:

- collect a name and an integer with `input()`;
- use `if`, `elif`, and `else` to choose a level;
- use `for` with `range()` or a list;
- use `while` with a counter and a clear ending condition;
- change the result or message when the user gives a different input; and
- print a clear final result.

### Starter template

```python
name = input("Name: ")
target = int(input("Choose a target from 1 to 10: "))

if target >= 8:
    level = "advanced"
elif target >= 4:
    level = "explorer"
else:
    level = "beginner"

print("Welcome", name)
print("Level:", level)

for round_number in range(1, 4):
    print("Round", round_number)

attempts = 0
answer = 0
while answer != target and attempts < 3:
    answer = int(input("Guess the target: "))
    attempts = attempts + 1

if answer == target:
    print("Correct!")
else:
    print("Try again next time.")
```

### Before you run

Write what each control structure does in your program:

| Structure | What it controls |
|---|---|
| `if` / `elif` / `else` | |
| `for` | |
| `while` | |

### Self-check after you run

- [ ] My conditions use comparison operators.
- [ ] My branches and loop bodies are indented consistently.
- [ ] My `for` loop runs the expected number of times.
- [ ] My `while` loop changes a counter or input and ends.
- [ ] Different inputs can produce different output.
- [ ] I can explain why my program stops.

**Teacher check:** Demonstrate one branch and point to the line that makes your `while` loop end.

Teacher initials: ____________________

## 5. Exit Ticket

1. What does `==` check, and how is it different from `=`?

   ________________________________________________________________

2. Complete the code to print 1, 2, and 3:

   ```python
   for number in ____________________:
       print(number)
   ```

3. Why must a `while` loop change a value related to its condition?

   ________________________________________________________________

4. If an `if` condition is `False` and there is an `else`, which block runs?

   ________________________________________________________________

## Completion Record

This check is complete when you have shown evidence of all five sections and received feedback on your challenge program.

| Evidence | Complete |
|---|---|
| Condition Prediction | [ ] |
| Branch Fix runs correctly | [ ] |
| Loop Trace | [ ] |
| Challenge Program runs correctly | [ ] |
| Exit Ticket | [ ] |

### Teacher snapshot

Mark the current level for the next lesson:

- [ ] Independent: chooses conditions and loops and explains when they stop.
- [ ] Prompted: completes the task after a hint or example.
- [ ] Needs support: needs a follow-up mini-lesson on conditions, indentation, or loop endings.
