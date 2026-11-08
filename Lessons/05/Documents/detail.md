# Lesson 05 讲义：借用 Python 的工具

**时长：** 60 分钟  
**本节作品：** Random Challenge（随机挑战程序）  
**核心概念：** 模块、标准库、`import`、`from ... import ...`、模块函数调用

本节把模块比作“已经整理好的工具箱”。`import` 把工具箱带进程序；点号 `.` 用来找到工具箱里的某件工具。学生先使用 Python 自带的标准库，再把导入的工具与上一节学习的函数结合。

---

## 0. 课前准备

教师准备可以直接运行的 Python 文件。学生需要能使用变量、条件、循环、函数和 `print()`，并知道代码区与输出区的位置。

课堂约定：每段代码先预测，再运行；看到导入错误先检查模块名、函数名、拼写和调用方式。本节所有示例都使用 Python 自带的标准库，不要求安装任何新库。

---

## 1. 为什么需要别人写好的工具（0-8 分钟）

### 教师演示

先展示自己写一个最简单的随机数函数会需要很多步骤，而标准库已经提供了现成工具：

```python
import random

number = random.randint(1, 6)
print("You rolled", number)
```

连续运行几次，观察结果可能不同。说明：随机结果不是程序“忘记了答案”，而是 `random` 模块提供了产生随机值的工具。

### 三个词的关系

| 词语 | 本节的简单理解 | 例子 |
|---|---|---|
| 模块 module | 保存 Python 代码的文件或工具箱 | `random`、`math` |
| 函数 function | 完成一件工作的可调用代码 | `randint()`、`sqrt()` |
| 库 library | 一组可复用的代码工具 | Python 标准库 |

说明：日常交流中“库”和“模块”有时会混用；本节只需要知道模块中可以有函数，导入后才能使用它们。

---

## 2. `import module`：导入整个模块（8-20 分钟）

### 最小例子

```python
import math

print(math.sqrt(25))
print(math.ceil(3.2))
```

解释：

- `import math` 导入名为 `math` 的模块。
- `math.sqrt` 表示 `math` 模块中的 `sqrt` 工具。
- 括号表示调用函数。
- 点号前的模块名帮助我们看出工具来自哪里。

### 立即练习 1

预测下面程序的输出：

```python
import math

radius = 3
area = math.pi * radius ** 2
print(area)
```

答案：大约 `28.274333882308138`。本节不要求记住 `pi` 的具体数值，只要知道 `math.pi` 是 `math` 模块提供的数据。

### 给模块起别名

```python
import math as m

print(m.sqrt(81))
```

说明：`as m` 可以给模块一个较短的别名。初学阶段优先使用完整的 `math`，只有在示例需要时认识别名即可。

### 立即练习 2

补全模块名前缀：

```python
import random

roll = ____________________.randint(1, 6)
print(roll)
```

答案：`random`。

---

## 3. `from module import function`：只导入指定工具（20-32 分钟）

### 对比两种写法

```python
import random

number = random.randint(1, 10)
print(number)
```

```python
from random import randint

number = randint(1, 10)
print(number)
```

两段代码都可以调用 `randint`。区别是：

- `import random` 后，调用时写 `random.randint()`；
- `from random import randint` 后，可以直接写 `randint()`；
- 第二种写法只拿出指定的函数，代码较短，但读者需要记得 `randint` 来自哪里。

### 一次导入多个工具

```python
from math import sqrt, ceil

print(sqrt(16))
print(ceil(2.1))
```

本节建议每行清楚地写出导入内容，不使用 `from math import *`，因为这样很难知道名字来自哪里。

### 立即练习 3

把下面代码补完整：

```python
from random import randint

secret = ____________________(1, 5)
print(secret)
```

答案：`randint`。

### 关键对照表

| 导入方式 | 正确调用 | 常见错误 |
|---|---|---|
| `import random` | `random.randint(1, 6)` | 直接写 `randint(1, 6)` |
| `from random import randint` | `randint(1, 6)` | 写成 `random.randint(1, 6)`（本文件没有导入 `random` 名字） |
| `import math` | `math.sqrt(25)` | 写成 `sqrt(25)` |
| `from math import sqrt` | `sqrt(25)` | 把 `sqrt` 拼成 `square` |

---

## 4. 导入工具与自己的函数结合（32-40 分钟）

```python
from random import randint


def make_question():
    first = randint(1, 10)
    second = randint(1, 10)
    return first, second


number_a, number_b = make_question()
print("Add", number_a, "and", number_b)
```

观察：

- `randint()` 来自 `random`；
- `make_question()` 是我们自己定义的函数；
- 导入的函数和自己的函数可以放在同一个程序中；
- `return` 可以把两个值交回调用位置。

### 命名检查

下面的名字会带来问题：

```python
import random

random = 5
print(random.randint(1, 6))
```

`random = 5` 覆盖了模块名字，之后 `random.randint` 就不能使用。不要把变量命名为 `random`、`math`、`randint` 或 `sqrt`。

---

## 5. 独立课程任务：Random Challenge（40-54 分钟）

### 任务目标

创建一个随机挑战程序。程序询问玩家姓名，随机产生一个目标数字，让玩家最多猜三次，并显示结果。程序必须同时使用模块导入和自定义函数。

### 必须完成

1. 使用 `import random` 或 `from random import randint`。
2. 使用导入的工具产生一个范围内的随机整数。
3. 定义至少一个自己的函数，并实际调用它。
4. 使用 `input()` 获取玩家姓名和猜测。
5. 使用 `if` 判断猜测正确、太高或太低，或给出三种类似结果。
6. 使用 `for` 或 `while` 控制最多三次挑战。
7. 输出清晰的开始信息、提示和最终结果。

### 起步模板：`import random` 版本

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
    message = give_hint(guess, target)
    print("Attempt", attempt, ":", message)
    if guess == target:
        print("You solved it!")
        break
else:
    print("The number was", target)
```

### `from` 版本挑战

把第一行和目标数字那一行改为：

```python
from random import randint

target = randint(1, 10)
```

同时删除 `random.` 前缀。学生需要说明：这不是把两个版本混在一起，而是选择了另一种导入方式。

### 分层支持

**需要支持的学生：** 先运行 `import random` 的模板，圈出模块名、模块函数和自己的函数，再修改欢迎语和数字范围。

**提前完成的学生：** 加入 `math` 计算分数、使用 `random.choice()` 从自己的挑战列表中选题，或把“随机目标”整理成一个自己的函数。不引入第三方库。

### 检查清单

- [ ] 我写了正确的导入语句。
- [ ] 我使用了正确的调用形式（带或不带模块名前缀）。
- [ ] 我定义并调用了至少一个自己的函数。
- [ ] 我没有用 `random`、`math` 或 `randint` 作为变量名。
- [ ] 我的程序能根据不同猜测给出不同提示。
- [ ] 我的挑战最多进行三次，并在猜对时使用 `break` 提前结束，或自然结束循环。
- [ ] 程序从头运行到最后没有报错。

---

## 6. 展示与快速评估（54-60 分钟）

### 分享问题

邀请 2-3 位学生展示结果，每人回答一个问题：

- `import random` 后为什么写 `random.randint()`？
- `from random import randint` 后为什么可以直接写 `randint()`？
- 你的函数是自己写的，还是从模块导入的？
- 如果把变量命名为 `random`，会发生什么？
- 如何根据错误提示检查模块名和函数名？

### Exit Ticket

1. 写一行代码导入 `math` 模块，并写一行代码计算 25 的平方根。  
   参考答案：`import math`；`math.sqrt(25)`。
2. 补全导入和调用：

```python
from random import randint
number = ____________________(1, 6)
```

答案：`randint`。
3. `import random` 和 `from random import randint` 的调用方式有什么不同？  
   答案：前者写 `random.randint()`，后者可以直接写 `randint()`。
4. 下面的代码有什么问题？

```python
import math
math = 3
print(math.sqrt(9))
```

答案：变量 `math` 覆盖了模块名，之后不能通过它访问 `sqrt()`。

### 课后教师复盘

记录学生是否能够：

- 区分模块、函数和库的基本关系；
- 正确写出两种导入形式；
- 根据导入方式选择正确的调用写法；
- 将库函数与自己定义的函数结合；
- 避免覆盖模块名，并能定位基本导入错误。

下一节可以把自己的函数放入独立的 `.py` 文件，让学生导入自己写的模块；也可以继续学习文件读写。
