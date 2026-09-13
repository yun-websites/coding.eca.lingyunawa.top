# Lesson 01 讲义：让 Python 说话

**时长：** 60 分钟  
**本节作品：** 个人欢迎卡（Personal Welcome Card）  
**核心概念：** `print()`、字符串、变量、变量命名

---

## 0. 课前准备

教师课前确认：

- 每位学生能打开 Python 编辑器或课程指定的在线环境。
- 所有学生知道运行按钮或终端命令的位置。
- 准备以下开场代码，先不要运行：

```python
print("Hello, Coding Club!")
```

课堂约定：看不懂时可以先猜；代码报错是信息，不是失败。提交前先运行一次，再读一遍输出。

---

## 1. 开场：第一行 Python（0-8 分钟）

### 教师说

“今天不是记一堆命令。我们要学会让电脑准确地显示我们想说的话。每一段程序都从一行能运行的代码开始。”

展示：

```python
print("Hello, Coding Club!")
```

先提问，不运行：

- 这段程序会显示什么？
- 哪一部分是给电脑的指令？哪一部分是我们想显示的文字？

运行后指出：

- `print` 是一个让 Python 显示内容的指令。
- 圆括号装着要显示的内容。
- 双引号中的内容是一段文字，叫作**字符串**（string）。
- Python 只会显示引号里面的文字，不会把引号本身显示出来。

### 学生操作

新建 `lesson01.py`，输入并运行：

```python
print("Hello, Coding Club!")
```

把引号内的文字改成自己的问候语，再运行一次。

### 快速检查

请学生在输出区找到自己修改后的文字。若没有输出，先检查是否点击了运行、是否保存到了正确文件。

---

## 2. 预测，再运行（8-16 分钟）

### 规则

每次运行前，先在纸上或聊天区写出你认为的输出。输出必须逐行写，不能只写“大概意思”。

### 练习 A

不要运行，先预测：

```python
print("My name is Alex.")
print("I am learning Python.")
```

正确输出：

```text
My name is Alex.
I am learning Python.
```

强调：两次 `print()`，所以有两行输出。

### 练习 B

不要运行，先预测：

```python
print(5 + 3)
print("5 + 3")
```

正确输出：

```text
8
5 + 3
```

讲解：

- 没有引号的 `5 + 3` 是让 Python 计算。
- 有引号的 `"5 + 3"` 是一段原样显示的文字。
- 引号会改变 Python 对内容的理解。

### 立即练习 1

写两行程序，输出：

```text
I can code.
Python is fun.
```

参考答案：

```python
print("I can code.")
print("Python is fun.")
```

教师巡视重点：是否遗漏引号、圆括号或第二行 `print`。

---

## 3. 字符串与常见报错（16-24 分钟）

展示以下代码，请学生先判断哪里有问题：

```python
print(Hello)
```

运行后会看到类似：

```text
NameError: name 'Hello' is not defined
```

解释：Python 会把没有引号的 `Hello` 当作一个变量名，而我们还没有创建这个变量。修正为：

```python
print("Hello")
```

再展示：

```python
print("Hello)
```

解释：引号必须成对。Python 读到一半找不到结束的引号，就无法理解这一行，会报 `SyntaxError`。

### 两分钟修复任务

修好下面三行代码，使其输出三行文字：

```python
print(Welcome)
print("My first program)
print(I will keep trying.)
```

答案：

```python
print("Welcome")
print("My first program")
print("I will keep trying.")
```

### 教师提示语

“报错信息先看最后一行：它通常会告诉你 Python 在抱怨什么。今天最常见的两个问题是少引号，或者把文字忘在引号外。”

---

## 4. 变量：给信息一个名字（24-36 分钟）

### 演示

```python
name = "Alex"
club = "ECA Coding Club"

print(name)
print(club)
```

提问：运行后会显示 `name` 这四个字母，还是 `Alex`？为什么？

说明：

- `name = "Alex"` 的意思是把右边的信息保存到左边叫作 `name` 的变量里。
- 变量像一个贴着标签的盒子；标签是变量名，盒子里的内容是变量的值。
- 在 `print(name)` 中没有引号，因为我们要 Python 取出变量里的内容。
- 在 `print("name")` 中有引号，所以 Python 会原样显示文字 `name`。

### 读代码练习

预测输出：

```python
pet = "Milo"
age = 12

print(pet)
print(age)
print("pet")
```

正确输出：

```text
Milo
12
pet
```

### 变量名三条规则

1. 只能使用字母、数字和下划线 `_`。
2. 不能以数字开头。
3. 不能使用连字符 `-`；连字符在 Python 中表示减法。

好的变量名还要让人看懂用途。`student_name` 比 `x` 更清楚。

### 快速判断

请学生写 C（可以用）或 X（不可以用）：

```text
name
student_name
2students
my-score
age2
```

答案：

```text
C
C
X
X
C
```

教师用一句话复盘：下划线可以，连字符不可以；数字不能放在开头。

---

## 5. 主任务：个人欢迎卡（36-51 分钟）

### 任务说明

创建一个 Python 程序，向别人介绍你。程序必须：

1. 创建至少两个变量。
2. 至少用两次 `print()`。
3. 输出你的名字、一个喜欢的活动或物品，以及一句欢迎语。
4. 运行无报错。

### 最小可完成版本

```python
name = "Alex"
favorite_thing = "basketball"

print("Welcome to my profile!")
print(name)
print(favorite_thing)
```

### 建议版式

```python
name = "Alex"
grade = 9
favorite_thing = "basketball"

print("--- My Welcome Card ---")
print("Name:")
print(name)
print("Grade:")
print(grade)
print("I like:")
print(favorite_thing)
```

### 学生检查清单

运行前逐项确认：

- [ ] 每一段文字是否有成对引号？
- [ ] 每个变量名是否没有空格、连字符或开头数字？
- [ ] `print(name)` 中的 `name` 是否不加引号？
- [ ] 输出区是否和我想展示的内容一致？

### 教师巡视与分层支持

**需要支持的学生：**

- 先给出最小版本，让学生只替换引号中的值。
- 要求学生指出每个变量的“名字”和“里面保存的内容”。
- 遇到报错时不直接改代码，先问：“哪一行有标记？这一行里有没有少引号或少括号？”

**提前完成的学生：**

在不改变基础要求的前提下完成任意两项：

- 增加两个变量，例如 `city`、`favorite_food`。
- 用 `+` 把字符串和变量连接成一句话：

  ```python
  print("Hello, " + name + "!")
  ```

- 设计更清晰的文本边框和栏目标题。
- 将 `name` 的值改为另一个名字，预测并验证哪些输出会变化。

注意：扩展学生可以解释自己的代码或帮助同伴找错，但不替同伴输入答案。

---

## 6. 分享与代码讲解（51-56 分钟）

邀请 2-3 位学生展示输出。每位展示者只回答一个问题：

- “请指出一个变量，并说出它保存了什么。”
- “为什么这段文字要放在引号里？”
- “你修改了哪个值？输出发生了什么变化？”

教师总结：程序不是魔法；我们把信息放进变量，再用 `print()` 要 Python 显示它。

---

## 7. Exit Ticket（56-60 分钟）

学生独立完成并提交。可写在指定平台、纸上或课程表单中。

### 题 1：预测输出

```python
city = "Suzhou"
print(city)
print("city")
```

写出两行输出。

答案：

```text
Suzhou
city
```

### 题 2：选择合法变量名

从下面选择所有合法的变量名：

```text
my_name
3dogs
favorite-color
score2
```

答案：`my_name`、`score2`

### 题 3：写一行代码

创建变量 `food`，保存一种你喜欢的食物，然后打印它的值。

参考答案：

```python
food = "noodles"
print(food)
```

### 记录方式

- 三题均正确且欢迎卡独立完成：下一节可优先承担小挑战。
- 能完成欢迎卡但 exit ticket 有错：下一节开始前进行 3 分钟小复习。
- 无法完成欢迎卡：安排教师或同伴支持，先重新练习“字符串 vs. 变量”。

---

## 课后教师复盘

记录而非猜测：

- 哪些学生仍把变量名写进引号？
- 哪些学生遗漏引号或括号？
- 哪些学生能准确预测每一行输出？
- 哪些学生可以在下一节尝试 `input()` 扩展？

下一节从欢迎卡改成“询问名字并回应”的程序，引入 `input()`，但先保持输入和输出都是文字，不引入数值转换。
