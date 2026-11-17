"""Lesson 06: predict first, then run these Python experiments."""


def show_result(label, predicted, actual):
    print(label)
    print("  predicted:", predicted)
    print("  actual:   ", actual)
    print()


# 1. Booleans can take part in number operations.
show_result("True + False", "?", True + False)
show_result("1 == True", "?", 1 == True)

# 2. Comparisons can be chained.
show_result(
    "True < False + False > True",
    "?",
    True < False + False > True,
)
show_result("1 < 2 < 3", "?", 1 < 2 < 3)

# 3. Parentheses can make the intended order explicit.
show_result("-2 ** 2", "?", -2 ** 2)
show_result("(-2) ** 2", "?", (-2) ** 2)

# 4. and/or may return an operand, not only True or False.
show_result('"" or "fallback"', "?", "" or "fallback")
show_result('True and "hello"', "?", True and "hello")

# 5. == compares values; is checks object identity.
first = [1, 2]
second = [1, 2]
third = first
show_result("first == second", "?", first == second)
show_result("first is second", "?", first is second)
show_result("first is third", "?", first is third)


# Optional challenge: make this easier to read by naming each step.
left = True < (False + False)
right = (False + False) > True
print("split comparison:", left and right)
