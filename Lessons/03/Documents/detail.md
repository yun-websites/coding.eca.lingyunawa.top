# Lesson 03 讲义：让程序做决定

**时长：** 60 分钟  
**本节作品：** Challenge Program（互动挑战程序）  
**核心概念：** 比较运算、`if`、`elif`、`else`、`for`、`range()`、`while`

本节把条件和循环看成两种控制程序流程的方法：条件选择路径，循环重复动作。学生会把 Lesson 02 的输入和变量放进一个可以互动的小程序中。

---

## 0. 课前准备

教师准备可以直接运行的 Python 文件。学生需要能输入文字和整数，知道代码块的缩进会影响程序结构。

课堂约定：每段代码先预测，再运行；看到报错先检查冒号、缩进、比较符号和循环结束条件。

---

## 1. 程序为什么需要做决定（0-8 分钟）

### 教师演示

```python
age = int(input("Age: "))

if age >= 13:
    print("You can join the challenge.")
else:
    print("Ask an adult before you start.")
```

说明：`if` 后面写一个条件。条件成立时运行缩进的代码；不成立时运行 `else` 的代码。冒号表示后面开始一个代码块，缩进表示哪些代码属于这个代码块。

### 快速预测

不运行，判断下面输入会输出什么：

```python
score = 7

if score >= 10:
    print("Gold")
elif score >= 5:
    print("Silver")
else:
    print("Try again")
```

强调：Python 从上到下检查条件，找到第一个成立的分支后就跳过其余分支。

---

## 2. 比较运算和三路选择（8-18 分钟）

### 比较运算

| 运算符 | 含义 |
|---|---|
| `>` | 大于 |
| `<` | 小于 |
| `>=` | 大于或等于 |
| `<=` | 小于或等于 |
| `==` | 两边相等 |
| `!=` | 两边不相等 |

`=` 是赋值；`==` 才是比较。这个区别需要反复提醒。

### 示例：年龄建议器

```python
age = int(input("How old are you? "))

if age < 8:
    print("Try the beginner challenge.")
elif age < 13:
    print("Try the explorer challenge.")
else:
    print("Try the advanced challenge.")
```

### 立即练习 1

把下面程序补成三个结果：分数至少 8 显示 `Great`，至少 5 显示 `Keep going`，否则显示 `Practise again`。

```python
score = int(input("Score: "))

if ____________________:
    print("Great")
elif ____________________:
    print("Keep going")
else:
    print("Practise again")
```

教师检查重点：比较条件完整；顺序从高到低；分支内代码缩进一致。

---

## 3. `for`：把同一动作做几次（18-30 分钟）

### 遍历列表

```python
hobbies = ["coding", "music", "drawing"]

for hobby in hobbies:
    print("I like", hobby)
```

解释：`hobby` 每次保存列表中的一个值；缩进的 `print()` 会对每个值运行一次。

### 使用 `range()`

```python
for number in range(1, 6):
    print(number)
```

这里会打印 1 到 5，结束数字 6 不包括在内。

### 立即练习 2：预测循环

```python
for round_number in range(3):
    print("Round", round_number + 1)
```

回答：输出几行？第一行和最后一行是什么？为什么要写 `round_number + 1`？

本节只要求学生理解“对每一项或每一个数字执行一次”，不要求记忆所有 `range()` 变化形式。

---

## 4. `while`：直到条件改变为止（30-40 分钟）

### 计数器示例

```python
attempt = 1

while attempt <= 3:
    print("Attempt", attempt)
    attempt = attempt + 1
```

说明：`while` 会在每次开始时检查条件。循环体必须改变条件相关的变量，否则可能永远运行。

### 输入控制的循环

```python
answer = ""

while answer != "yes":
    answer = input("Type yes to continue: ")

print("Starting!")
```

这个例子展示了输入如何改变循环条件。教师提醒：本节不处理拼写错误或大小写的所有情况。

### 无限循环检查

让学生找出问题：

```python
count = 1
while count <= 3:
    print(count)
```

答案：`count` 没有更新，条件始终成立。修复：在循环体中加入 `count = count + 1`。

---

## 5. 独立课程任务：Challenge Program（40-54 分钟）

### 任务目标

创建一个互动挑战程序。程序先询问玩家资料，再根据分数给出等级，使用 `for` 显示挑战回合，使用 `while` 允许玩家最多尝试三次。

### 必须完成

1. 使用 `input()` 获取名字，并用 `int()` 获取目标分数或年龄。
2. 使用 `if`、`elif`、`else` 输出至少三种不同结果。
3. 使用一次比较运算判断输入是否达到目标。
4. 使用 `for` 和 `range()` 显示 3 个挑战回合，或遍历一个列表。
5. 使用 `while` 让玩家重复输入，直到答对或用完 3 次尝试。
6. 在 `while` 中更新计数器，确保程序最终结束。
7. 输出清晰的开始信息、过程信息和最终结果。

### 起步模板

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
    print("You got it in", attempts, "tries!")
else:
    print("The target was", target)
```

学生必须改动模板中的提示、目标或输出文字，并能指出：哪个是 `if` 分支，哪个是 `for` 循环，哪个变量让 `while` 结束。

### 分层支持

**需要支持的学生：** 先完成年龄分类器和固定 3 次的 `for`，再复制 `while` 模板；教师逐项询问“条件什么时候变成 False”。

**提前完成的学生：** 增加一个 `elif` 分支、遍历自己的挑战列表，或在每次尝试后输出剩余次数。不引入函数或嵌套循环。

---

## 6. 展示与快速评估（54-60 分钟）

### 分享问题

邀请 2-3 位学生展示结果，每人回答一个问题：

- 为什么 `==` 和 `=` 不能互换？
- `for` 循环重复了什么？运行了几次？
- `while` 循环靠哪个变量结束？
- 如果把 `attempts = attempts + 1` 删除，会发生什么？

### Exit Ticket

1. `if` 条件为 `False` 且存在 `else` 时，程序会运行哪一段？  
   答案：`else` 缩进的代码。
2. 写一行代码，打印 1、2、3：

```python
for number in ____________________:
    print(number)
```

参考答案：`range(1, 4)`。
3. `while` 循环为什么需要改变条件相关的变量？  
   参考答案：否则条件可能永远成立，程序不会结束。
4. `=` 和 `==` 的区别是什么？  
   参考答案：`=` 赋值，`==` 比较是否相等。

### 课后教师复盘

记录学生是否能够：

- 使用比较运算写出完整条件；
- 保持 `if`、`elif`、`else` 和循环体的缩进；
- 说明 `for` 的遍历对象和次数；
- 说明 `while` 的结束条件；
- 在不使用函数的情况下完成一个能结束的互动程序。

下一节可把重复的判断或输入处理整理成函数，让程序更容易阅读和复用。
