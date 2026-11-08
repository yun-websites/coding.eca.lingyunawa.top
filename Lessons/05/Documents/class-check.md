# Class Check 05: Modules and Libraries

## Purpose

Use this in class to check whether you can import and call tools from Python's standard library. Complete it during Lesson 05 and ask for a quick check after each section.

You may use the lesson examples and the starter template. The goal is to show what you understand, not to memorise a large program.

## What You Will Practise

- Recognise the relationship between a module and its functions.
- Use `import module` and call a function with `module.function()`.
- Use `from module import function` and call the function directly.
- Combine an imported function with your own function.
- Avoid replacing a module or function name with a variable.
- Build a small random challenge and explain its imports.

## Timing

| Section | Suggested time |
|---|---:|
| 1. Import prediction | 4 minutes |
| 2. Call fix | 4 minutes |
| 3. Import style check | 5 minutes |
| 4. Random Challenge | 12 minutes |
| 5. Exit ticket | 4 minutes |

## 1. Import Prediction

Do not run the code yet.

```python
import math

number = math.sqrt(36)
print(number)
```

1. What number will print? ____________________
2. What is the module name? ____________________
3. What is the function name? ____________________
4. Why is there a dot between `math` and `sqrt`? ____________________

**Quick check:** Explain that `math` is the module and `sqrt` is a function inside it.

## 2. Call Fix

The program imports a module but uses the function incorrectly. Add the missing module name.

```python
import random

number = ____________________.randint(1, 6)
print(number)
```

Now complete the sentence:

> After `import random`, I call a function from the module by writing `module_name.____________________()`.

**Quick check:** Run the program twice. The result should be a number from 1 to 6, although it may be the same by chance.

## 3. Import Style Check

### A. Complete the direct import

```python
from random import randint

number = ____________________(1, 10)
print(number)
```

### B. Match the import with the correct call

Write `1` or `2` beside each call.

```python
1. import math
2. from math import ceil
```

- `math.ceil(2.1)` ______
- `ceil(2.1)` ______

### C. Explain

Complete the sentence:

> `import random` and `from random import randint` both give access to `randint`, but the first version uses ____________________ and the second version can call ____________________ directly.

**Quick check:** Point to the name that came from the module and the name that you wrote yourself.

## 4. Random Challenge

Build and run a small random challenge. You may use the starter template, but replace the example words and values with your own choices.

### Minimum evidence

Your program must:

- use `import random` or `from random import randint`;
- call an imported function to produce a random number;
- define and call at least one function of your own;
- collect a name and a number with `input()`;
- use a condition to give different feedback; and
- use a loop with a clear ending condition.

### Starter template

```python
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
    print("Attempt", attempt, ":", give_hint(guess, target))
    if guess == target:
        print("You solved it!")
        break
else:
    print("The number was", target)
```

### Before you run

Write what each name does in your program:

| Name | Module, imported function, or your function? | What does it do? |
|---|---|---|
| `random` | | |
| `randint` or `random.randint` | | |
| `show_welcome` | | |
| `give_hint` | | |

### Self-check after you run

- [ ] My import statement is correct.
- [ ] My call matches my import style.
- [ ] I defined and called my own function.
- [ ] Different guesses produce different feedback.
- [ ] My loop has a clear ending condition, and I may use `break` when the challenge is solved.
- [ ] I did not name a variable `random`, `math`, `randint`, or `sqrt`.
- [ ] My program runs without an import or name error.

**Teacher check:** Point to the import, the imported function call, and one function that you wrote.

Teacher initials: ____________________

## 5. Exit Ticket

1. What is the correct call after this import?

   ```python
   import math
   ```

   ```python
   ____________________
   ```

2. Complete the code:

   ```python
   from random import randint
   value = ____________________(1, 6)
   ```

3. What is the difference between these two calls?

   ```python
   random.randint(1, 6)
   randint(1, 6)
   ```

   ________________________________________________________________

4. Why should you not write this?

   ```python
   import random
   random = 5
   ```

   ________________________________________________________________

## Completion Record

This check is complete when you have shown evidence of all five sections and received feedback on your Random Challenge.

| Evidence | Complete |
|---|---|
| Import Prediction | [ ] |
| Call Fix runs correctly | [ ] |
| Import Style Check | [ ] |
| Random Challenge runs correctly | [ ] |
| Exit Ticket | [ ] |

### Teacher snapshot

Mark the current level for the next lesson:

- [ ] Independent: imports tools, calls them correctly, and explains the two import styles.
- [ ] Prompted: completes the task after a hint or example.
- [ ] Needs support: needs a follow-up mini-lesson on module names, function names, or call syntax.
