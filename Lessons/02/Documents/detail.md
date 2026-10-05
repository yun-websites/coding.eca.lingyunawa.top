# Lesson 02 讲义：变量工具箱

**时长：** 60 分钟  
**本节作品：** Personal Data Dashboard（个人数据档案）  
**核心概念：** `print()`、`input()`、`str`、`int`、`float`、`list`、`dict`、`tuple`

本节是独立课程，不要求学生把上一节的欢迎卡继续扩展。课堂目标是快速建立“变量保存数据，类型决定数据如何处理”的整体概念。

---

## 0. 课前准备

教师准备一个可以直接运行的 Python 文件。学生需要知道运行按钮或终端位置，并知道输入要在程序暂停的位置完成。

课堂约定：每段代码先预测，再运行；看到报错先定位行号，再检查括号、引号、变量名和输入内容。

---

## 1. 变量不只是名字（0-8 分钟）

### 教师演示

```python
name = "Mina"
age = 13
height = 1.58

print(name)
print(age)
print(height)
```

快速提问：三个变量保存的内容有什么不同？

说明：变量是一个名字，值是它当前保存的数据。不同的数据适合不同的类型：

| 类型 | 示例 | 适合保存 |
|---|---|---|
| `str` | `"Mina"` | 文字 |
| `int` | `13` | 没有小数的整数 |
| `float` | `1.58` | 带小数的数字 |
| `list` | `["music", "coding"]` | 有顺序、可修改的一组值 |
| `dict` | `{"name": "Mina"}` | 用键和值保存资料 |
| `tuple` | `("Suzhou", "China")` | 一组通常不改变的值 |

暂时不要求学生背诵定义；先观察值的写法和用途。

### 快速练习

判断下列值最适合哪一种类型：

```python
"blue"
42
3.14
["red", "blue"]
{"subject": "Python"}
(31.2, 120.6)
```

---

## 2. `print()` 与 `input()`：程序收集资料（8-18 分钟）

### 先看输出

```python
name = "Mina"
age = 13
print("Name:", name)
print("Next year:", age + 1)
```

强调：`print()` 可以同时显示多个内容；逗号会让 Python 分开显示它们。数字可以直接参与计算。

### 再看输入

```python
name = input("Name: ")
age_text = input("Age: ")

print(name)
print(age_text)
```

说明：`input()` 得到的结果默认是 `str`，即使用户输入的是 `13`，Python 先把它看成文字。需要计算时再转换：

```python
age = int(input("Age: "))
height = float(input("Height in metres: "))

print("Next year:", age + 1)
print("Height doubled:", height * 2)
```

程序流程：

```text
显示提示语 -> 用户输入 -> 保存到变量 -> 必要时转换 -> 处理 -> print 输出
```

### 立即练习 1

修改下面程序，让它可以计算用户两年后的年龄：

```python
age = input("How old are you? ")
print(age + 2)
```

参考答案：

```python
age = int(input("How old are you? "))
print(age + 2)
```

指出：直接对字符串和整数做 `+` 会报错；转换不是为了“好看”，而是为了让数据可以进行数字运算。

---

## 3. 六种类型的最小操作（18-35 分钟）

每介绍一种类型，只做一个最小例子，避免在同一节课中展开复杂语法。

### `str`：连接和读取长度

```python
name = "Mina"
city = "Suzhou"
print(name + " lives in " + city)
print(len(name))
```

### `int` 和 `float`：计算和更新

```python
age = 13
height = 1.58
age = age + 1
height = height + 0.02
print(age)
print(height)
```

说明：`age = age + 1` 是先读取旧值，再把新值放回同一个变量。

### `list`：按顺序保存，可修改

```python
hobbies = ["coding", "music"]
hobbies.append("drawing")
print(hobbies)
print(hobbies[0])
print(len(hobbies))
```

索引从 `0` 开始；本节只使用正数索引。`append()` 把一个新项目放到列表末尾。

### `dict`：用键找到值

```python
profile = {"name": "Mina", "city": "Suzhou"}
print(profile["name"])
profile["city"] = "Nanjing"
print(profile)
```

字典通过键读取和更新，不使用列表那样的数字位置。

### `tuple`：一组固定顺序的值

```python
location = (31.2, 120.6)
latitude, longitude = location
print(latitude)
print(longitude)
```

本节把元组用于固定资料，例如坐标或出生日期。学生只需会创建、读取和解包，不要求修改元组。

### 立即练习 2：类型侦探

不运行，写出每个变量的类型，以及一行能读取其中内容的代码：

```python
subject = "Python"
lessons = 6
rating = 4.5
tools = ["editor", "terminal"]
book = {"title": "Code", "pages": 80}
size = (1920, 1080)
```

教师检查重点：字符串有引号；整数和浮点数没有引号；列表用位置读取；字典用键读取；元组可以解包。

---

## 4. 独立课程任务：Personal Data Dashboard（35-52 分钟）

### 任务目标

创建一个独立运行的“个人数据档案”。程序收集一些资料，把资料放入不同类型的变量，再输出处理结果。它不是上一节欢迎卡的改版，而是一个小型的数据练习。

### 必须完成

1. 用 `input()` 获取姓名和年龄。
2. 用 `int()` 保存年龄，用 `float()` 保存身高或其他小数资料。
3. 创建一个 `str`，例如城市或最喜欢的科目。
4. 创建一个 `list` 保存至少三项兴趣或工具，并使用 `append()` 增加一项。
5. 创建一个 `dict` 保存至少三个带标签的资料，并读取其中一个键。
6. 创建一个 `tuple` 保存两个固定值，例如城市坐标、出生日期或屏幕尺寸。
7. 计算并输出明年的年龄或其他数字结果。
8. 输出至少四行清晰的结果。

### 起步模板

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

学生必须至少改动模板中的问题、数据和输出内容，并能解释每个变量的类型。完成后可从模板重新编写，但不要求脱离模板盲写。

### 检查清单

- [ ] `input()` 的姓名和城市保存为文字。
- [ ] 年龄使用 `int(input(...))`，身高使用 `float(input(...))`。
- [ ] `hobbies` 是列表，并实际调用了 `.append()`。
- [ ] `profile` 是字典，并使用了一个键读取值。
- [ ] `location` 是元组，没有尝试调用 `.append()`。
- [ ] 至少有一次数字计算。
- [ ] 所有变量名拼写一致，程序实际运行过。

### 分层支持

**需要支持的学生：** 从起步模板开始，先完成输入和四条输出；教师逐项询问“这个变量保存什么、属于什么类型”。

**提前完成的学生：** 增加一个字典键、替换元组内容、计算列表长度，或让一条输出同时包含姓名和城市。不引入条件判断和循环。

---

## 5. 展示与快速评估（52-60 分钟）

### 分享问题

邀请 2-3 位学生展示结果，每人回答一个问题：

- 为什么年龄要用 `int()`，姓名不需要？
- 你的列表和字典分别保存什么？
- 你从字典中通过哪个键读取了值？
- 哪个变量是元组？为什么它适合保存这组资料？

### Exit Ticket

1. `input()` 返回的默认类型是什么？  
   答案：`str`。
2. 写一行代码，把输入的年龄转换成整数并保存到 `age`。  
   参考答案：`age = int(input("Age: "))`
3. 从下面的字典中读取城市：

```python
person = {"name": "Mina", "city": "Suzhou"}
```

参考答案：`person["city"]`
4. 写出 `items[0]` 的含义。  
   参考答案：读取列表 `items` 的第一个元素。

### 课后教师复盘

记录学生是否能够：

- 区分输入文字和数字输入；
- 正确选择 `int()` 与 `float()`；
- 使用列表索引、`append()` 和字典键；
- 理解元组是有顺序但本节不修改的一组值；
- 在没有条件判断和循环的情况下完成一个多类型变量任务。

下一节可直接在本节档案上加入比较运算和条件判断，让程序根据年龄或其他数据给出不同回应。
