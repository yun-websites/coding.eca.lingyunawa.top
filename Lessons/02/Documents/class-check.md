# Class Check 02: Variable Toolbox

## Purpose

Use this in class to check whether you can collect, convert, store, and use different kinds of data in Python. This is a classroom check, not a take-home project. Complete it during Lesson 02 and ask for a quick check after each section.

You may use the lesson examples and the starter template. The goal is to show what you understand, not to write a large program from memory.

## What You Will Practise

- Read the type suggested by a value.
- Use `input()` to collect text.
- Convert input to an `int` or `float` when a calculation needs it.
- Create and use a `str`, `int`, `float`, `list`, `dict`, and `tuple`.
- Read or update simple data with a list index, `append()`, or a dictionary key.
- Predict a result, run the code, and explain one choice.

## Timing

| Section | Suggested time |
|---|---:|
| 1. Type Sort | 3 minutes |
| 2. Input Fix | 4 minutes |
| 3. Container Check | 5 minutes |
| 4. Mini Dashboard | 12 minutes |
| 5. Exit Ticket | 4 minutes |

## 1. Type Sort

Write the most suitable Python type beside each value. Do not run the code yet.

```python
"blue"                         # __________
42                              # __________
3.14                            # __________
["editor", "terminal"]         # __________
{"name": "Mina", "age": 13}   # __________
(31.2, 120.6)                   # __________
```

Then answer:

> Which value would you choose for a collection that needs to grow during the program? Why?

**Quick check:** Show your answers to a partner or teacher before moving on.

## 2. Input Fix

The program should print the user's age two years from now, but it does not work correctly.

```python
age = input("How old are you? ")
print(age + 2)
```

Rewrite the program so that it performs the calculation correctly:

```python


```

Now complete the sentence:

> `input()` returns a __________ by default, so I used __________ to make a number.

**Quick check:** Test the program with the input `13`. It should print `15`.

## 3. Container Check

Use the variables below to answer the questions. You may run the code after making your predictions.

```python
items = ["coding", "music"]
profile = {"name": "Mina", "city": "Suzhou"}
location = (31.2, 120.6)
```

### A. Predict

1. What will `items[0]` show? ____________________
2. What will `profile["city"]` show? ____________________
3. What type is `location`? ____________________

### B. Write one line for each action

1. Add `"drawing"` to the end of `items`.

```python

```

2. Change the city in `profile` to `Nanjing`.

```python

```

3. Print the first value in `location`.

```python

```

**Quick check:** Explain why the list uses `items[0]`, while the dictionary uses `profile["city"]`.

## 4. Mini Dashboard

Build a small personal data dashboard. You have 12 minutes. Use the starter template, but replace the example choices with your own suitable data.

### Minimum evidence

Your program must:

- use `input()` to collect a name and an age;
- convert the age with `int()` and collect one decimal measurement with `float()`;
- create a `str` for another piece of text, such as a city or subject;
- create a `list` with at least two items and use `.append()` once;
- create a `dict` with at least three key-value pairs and read one value by key;
- create a `tuple` with two fixed values;
- calculate and print the user's age next year; and
- print at least four clear lines of output.

### Starter template

```python
name = input("Name: ")
age = int(input("Age: "))
height = float(input("Height in metres: "))
city = input("City: ")

hobbies = ["coding", "music"]
hobbies.append("drawing")

profile = {
    "name": name,
    "city": city,
    "age": age
}

location = (31.2, 120.6)

print("--- Personal Data Dashboard ---")
print("Name:", profile["name"])
print("Next year:", age + 1)
print("Height:", height)
print("Hobbies:", hobbies)
print("Location:", location)
```

### Before you run

Write one example of each required type from your program:

| Type | Variable and value from my program |
|---|---|
| `str` | |
| `int` | |
| `float` | |
| `list` | |
| `dict` | |
| `tuple` | |

### Self-check after you run

- [ ] I entered values at every prompt and the program reached the end.
- [ ] My age calculation is correct.
- [ ] My list changed after `.append()`.
- [ ] I read a value from my dictionary using a key.
- [ ] I can point to the tuple in my code.
- [ ] My output has at least four readable lines.
- [ ] I can explain the type of every required variable.

**Teacher check:** Ask the teacher to initial this section after you demonstrate one input conversion and one container operation.

Teacher initials: ____________________

## 5. Exit Ticket

Answer without copying the question.

1. Why does this line use `int()`?

   ```python
   age = int(input("Age: "))
   ```

   ________________________________________________________________

2. Write a line that reads the city from this dictionary:

   ```python
   person = {"name": "Mina", "city": "Suzhou"}
   ```

   ```python

   ```

3. What is the difference between a list and a tuple in this lesson?

   ________________________________________________________________

4. What does `input()` return before any conversion?

   ________________________________________________________________

## Completion Record

This check is complete when you have shown evidence of all five sections and received feedback on your mini dashboard.

| Evidence | Complete |
|---|---|
| Type Sort | [ ] |
| Input Fix runs correctly | [ ] |
| Container Check | [ ] |
| Mini Dashboard runs correctly | [ ] |
| Exit Ticket | [ ] |

### Teacher snapshot

Mark the current level for the next lesson:

- [ ] Independent: chooses types and fixes simple input issues independently.
- [ ] Prompted: completes the task after a hint or example.
- [ ] Needs support: needs a follow-up mini-lesson on input, conversion, or containers.
