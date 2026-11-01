# Lesson 04 讲义：把代码整理成函数

**时长：** 60 分钟  
**本节作品：** Function Challenge（函数挑战程序）  
**核心概念：** `def`、函数调用、参数、`return`、函数复用

本节把函数看成“给一组步骤取一个名字”。学生先学习定义和调用函数，再学习如何传入参数、返回结果，最后把函数与条件和循环结合起来。

---

## 0. 课前准备

教师准备可以直接运行的 Python 文件。学生需要能使用变量、`input()`、条件判断和循环，并知道代码块需要保持一致缩进。

课堂约定：每个函数先预测调用结果，再运行；看到报错先检查函数名、括号、冒号、参数数量和缩进。

---

## 1. 为什么需要函数（0-8 分钟）

### 教师演示

先展示重复代码：

```python
print("Welcome to Coding Club!")
print("Today we are learning Python.")

print("Welcome to Coding Club!")
print("Today we are learning Python.")
```

提问：如果欢迎语需要修改，要改几处？如果有十处重复代码呢？

说明：函数可以把一组步骤保存起来并给它一个名字。以后需要这些步骤时，只需调用这个名字。

---

## 2. 定义和调用函数（8-18 分钟）

### 最小例子

```python
def say_hello():
    print("Hello!")


say_hello()
```

解释：

- `def` 表示开始定义函数。
- `say_hello` 是函数名。
- `()` 表示本例没有参数。
- 冒号后缩进的代码属于函数体。
- 定义函数不会自动运行；写出 `say_hello()` 才是调用函数。

### 立即练习 1

预测下面程序的输出行数，再运行：

```python
def show_message():
    print("Start")
    print("Keep coding")


show_message()
show_message()
```

答案：输出 4 行，因为函数被调用了 2 次，每次输出 2 行。

### 修复任务

下面的程序定义了函数，但没有显示任何内容。补上一行调用：

```python
def show_rule():
    print("Test your code before you submit it.")

____________________
```

参考答案：

```python
show_rule()
```

---

## 3. 参数：让函数处理不同数据（18-28 分钟）

### 示例

```python
def greet(name):
    print("Hello,", name)


greet("Mina")
greet("Alex")
```

说明：

- `name` 是参数，函数调用时会接收一个值。
- `"Mina"` 和 `"Alex"` 是传给参数的实参。
- 同一个函数可以处理不同的名字。
- 参数只需要在函数体中直接使用，不要再次加引号。

### 立即练习 2

完成函数，使它显示科目名称：

```python
def show_subject(subject):
    print("Today we study", ____________________)

show_subject("Python")
```

参考答案：

```python
def show_subject(subject):
    print("Today we study", subject)
```

### 多个参数

```python
def show_score(name, score):
    print(name, "scored", score)


show_score("Mina", 8)
show_score("Alex", 5)
```

参数的顺序很重要：第一个值传给第一个参数，第二个值传给第二个参数。

---

## 4. `return`：让函数交出结果（28-38 分钟）

### 对比 `print()` 和 `return`

只显示结果：

```python
def show_double(number):
    print(number * 2)


show_double(4)
```

返回结果：

```python
def double(number):
    return number * 2


result = double(4)
print(result)
print(result + 1)
```

说明：

- `print()` 把内容显示在输出区。
- `return` 把结果交回调用位置。
- 返回的结果可以保存到变量中，也可以继续参与计算。
- 执行 `return` 后，函数会结束本次调用。

### 条件与返回值

```python
def get_level(score):
    if score >= 8:
        return "advanced"
    elif score >= 4:
        return "explorer"
    else:
        return "beginner"


level = get_level(7)
print(level)
```

### 立即练习 3

补全函数，让它返回价格加上 2 的结果：

```python
def add_bonus(price):
    return ____________________

final_price = add_bonus(10)
print(final_price)
```

参考答案：

```python
def add_bonus(price):
    return price + 2
```

---

## 5. 函数与循环结合（38-45 分钟）

```python
def show_rounds(count):
    for round_number in range(1, count + 1):
        print("Round", round_number)


show_rounds(3)
```

解释：函数接收回合数，循环负责重复显示。函数调用时改成 `show_rounds(5)`，就会显示 5 个回合。

### 函数检查表

让学生对下面代码指出：函数名、参数、返回值和函数调用。

```python
def is_ready(score):
    if score >= 5:
        return True
    return False


score = int(input("Score: "))
print(is_ready(score))
```

本节只需要知道 `True` 和 `False` 表示两种判断结果，不展开复杂布尔表达式。

---

## 6. 独立课程任务：Function Challenge（45-55 分钟）

### 任务目标

创建一个由多个函数组成的互动挑战程序。程序询问玩家姓名和分数，根据分数返回等级，计算奖励分数，并显示挑战回合。

### 必须完成

1. 定义一个带参数的欢迎函数。
2. 定义一个根据分数返回等级的函数。
3. 定义一个计算总分的函数，并使用 `return`。
4. 定义一个使用 `for` 循环显示多个回合的函数。
5. 使用 `input()` 获取姓名和分数。
6. 在主程序中调用所有核心函数。
7. 输出清晰的姓名、等级、总分和回合信息。

### 起步模板

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

学生必须改动模板中的提示、输出或挑战主题，并能指出：

- 哪些函数有参数；
- 哪些函数使用 `return`；
- 哪个函数包含循环；
- 主程序从哪里开始调用函数。

### 分层支持

**需要支持的学生：** 先完成 `show_welcome()` 和 `get_level()`，再复制 `calculate_total()` 和 `show_rounds()`。教师逐项询问“这个函数接收什么、做什么、交出什么”。

**提前完成的学生：** 增加一个 `get_message()` 函数、为奖励分数增加条件，或让玩家选择回合数。不引入递归、默认参数和复杂作用域。

### 检查清单

- [ ] 每个函数定义后都有实际调用。
- [ ] 函数名和参数名能说明用途。
- [ ] 至少一个函数接收参数。
- [ ] 至少一个函数使用 `return`。
- [ ] 至少一个函数包含条件或循环。
- [ ] 输出包含姓名、等级和计算结果。
- [ ] 程序运行到最后没有报错。

---

## 7. 展示与快速评估（55-60 分钟）

### 分享问题

邀请 2-3 位学生展示结果，每人回答一个问题：

- 函数定义和函数调用有什么区别？
- 你的哪个函数接收参数？参数是什么？
- 哪个函数使用了 `return`？返回的是什么？
- 为什么不能只定义函数而不调用它？
- `print()` 和 `return` 在你的程序中分别负责什么？

### Exit Ticket

1. 写一行代码调用下面的函数：

```python
def show_name(name):
    print(name)
```

参考答案：`show_name("Alex")`

2. 参数的作用是什么？  
   答案：让函数接收数据，并根据不同数据完成相同类型的工作。

3. `print()` 和 `return` 的区别是什么？  
   答案：`print()` 显示内容，`return` 把结果交回调用位置。

4. 为什么下面的函数调用后可以继续计算？

```python
def add_one(number):
    return number + 1

result = add_one(4)
print(result * 2)
```

参考答案：函数使用 `return` 返回了一个数字，该数字保存到 `result` 后可以继续参与计算。

### 课后教师复盘

记录学生是否能够：

- 正确写出函数定义和调用；
- 使用参数传入数据；
- 理解 `return` 与 `print()` 的区别；
- 把条件判断或循环放入函数；
- 在一个程序中组织和调用多个函数。

下一节可以介绍模块和库，让学生把代码拆分到不同文件，或使用 Python 已有的工具。
