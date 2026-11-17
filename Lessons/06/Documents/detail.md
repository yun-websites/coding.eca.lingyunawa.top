# Lesson 06 讲义：Python 的有趣角落

**时长：** 60 分钟  
**本节作品：** Python Prediction Quiz（预测题小测）  
**核心习惯：** 先猜、再跑、再解释  
**前提：** 本节不讲新的大主题，所有例子都使用已经学过的表达式、条件和输出。

---

## 0. 课堂规则（0-5 分钟）

每道题按三个步骤进行：

1. 不运行，先写下预测；
2. 运行代码，记录实际输出；
3. 用一条 Python 规则解释差异或确认原因。

提醒学生：猜错不是失败，猜错正好说明我们需要拆解表达式。不要只回答“Python 就是这样”，要问“它按照什么顺序计算？”

---

## 1. 布尔值也能参加数字运算（5-15 分钟）

```python
print(True + True)
print(True + False)
print(False * 10)
print(10 == True)
print(1 == True)
```

预期输出：

```text
2
1
0
False
True
```

解释：在 Python 中，`bool` 是一种特殊的数字类型；进行数字运算时，`True` 可以看作 `1`，`False` 可以看作 `0`。但 `10 == True` 是比较 10 和 1，所以为 `False`；`1 == True` 为 `True`。

### 立即练习

先预测，再运行：

```python
score = 3
print(score + (True == True))
print(score + (False == True))
```

强调括号：括号让读者清楚知道比较结果会先变成布尔值，再参加加法。真实项目中，通常应写出更清楚的条件或计数代码，不要故意隐藏转换。

---

## 2. 重点例子：比较链（15-27 分钟）

```python
print(True < False + False > True)
```

拆解顺序：

1. 先算加法：`False + False` 是 `0`；
2. 表达式变成 `True < 0 > True`；
3. Python 把比较链读成：`True < 0 and 0 > True`；
4. `True < 0` 等价于 `1 < 0`，为 `False`；
5. 整个 `and` 的结果是 `False`。

所以最终输出：

```text
False
```

### 比较链的正常用法

```python
age = 15
print(13 <= age < 18)
```

这等价于：

```python
print(13 <= age and age < 18)
```

注意：比较链不是把前一个比较的 `True` 或 `False` 再拿去和下一个值比较；它表达的是多个比较条件同时成立。

### 小挑战

不运行，预测三行结果：

```python
print(1 < 2 < 3)
print(1 < 2 > 3)
print(1 == True < 2)
```

答案：`True`、`False`、`True`。第三行可以拆成 `1 == True and True < 2`；这里只用于观察规则，不能替代清晰的变量命名。

---

## 3. 运算顺序：短代码不等于好代码（27-36 分钟）

比较下面两种写法：

```python
print(-2 ** 2)
print((-2) ** 2)
```

输出分别是 `-4` 和 `4`。这是因为幂运算优先于一元负号：`-2 ** 2` 会被理解为 `-(2 ** 2)`。如果想表达负数的平方，应加括号。

再看：

```python
print(2 + 3 * 4)
print((2 + 3) * 4)
```

输出分别是 `14` 和 `20`。让学生说出为什么括号改变了结果。

### 读代码检查表

遇到“看起来很神奇”的一行时：

- 先找括号；
- 再找幂运算、乘除、加减；
- 再看比较和逻辑；
- 不确定时拆成变量逐步打印；
- 代码给别人看时，优先选择清楚而不是最短。

---

## 4. `and` / `or` 的有趣行为（36-44 分钟）

```python
print(False and "hello")
print(True and "hello")
print(False or "hello")
print("" or "fallback")
```

预期输出：

```text
False
hello
hello
fallback
```

初步解释：`and` 和 `or` 会短路，并且在 Python 中可能返回参与运算的对象，而不只是 `True` 或 `False`。空字符串 `""` 在条件中会被视为假，非空字符串通常会被视为真。

### 实用但要谨慎的写法

```python
name = input("Name: ")
shown_name = name or "Anonymous"
print(shown_name)
```

如果输入为空，就使用备用名字。把它改写成普通 `if` 也可以，而且更适合刚学习这条规则的读者：

```python
if name:
    shown_name = name
else:
    shown_name = "Anonymous"
```

本节只需要理解结果，不要求掌握所有真假值规则。

---

## 5. 值相等，还是同一个对象？（44-50 分钟）

```python
first = [1, 2]
second = [1, 2]
third = first

print(first == second)
print(first is second)
print(first is third)
```

预期输出：

```text
True
False
True
```

解释：`==` 关注内容是否相等；`is` 关注两边是否指向同一个对象。对于列表，两个分别写出的 `[1, 2]` 内容相同，但不是同一个列表；`third = first` 后，`third` 和 `first` 指向同一个列表。

规则建议：比较值通常使用 `==`；`is` 最常见的初学示例是 `value is None`。不要用 `is` 代替普通的数字或字符串相等比较。

---

## 6. 独立任务：Prediction Quiz（50-57 分钟）

创建或运行 `Lessons/06/Example/fun_python.py`。对每道题填写：预测、实际输出、解释。完成后任选一题，改写成更容易读懂的多行版本。

### 最低要求

- 完成至少 6 道预测题；
- 至少解释一次布尔值与数字的关系；
- 至少解释一次比较链；
- 至少把一条表达式拆成两个或更多变量；
- 运行程序确认预测，而不是只抄答案。

### 挑战

自己设计一道“看起来很奇怪但有明确规则”的题目，不能依赖版本或内存实现细节。给同学预测，再公布拆解过程。

---

## 7. Exit Ticket（57-60 分钟）

1. `True < False + False > True` 中，哪一步先发生？最终结果是什么？
2. `a < b < c` 用普通逻辑运算如何表达？
3. `==` 和 `is` 分别比较什么？
4. 写出一条理由，说明为什么“最短的 Python 代码”不一定是“最好的 Python 代码”。

### 教师参考答案

1. 先算 `False + False`，结果为 `0`；比较链等价于 `True < 0 and 0 > True`，最终是 `False`。
2. `a < b and b < c`。
3. `==` 比较值，`is` 比较是否为同一个对象。
4. 短代码可能依赖不明显的优先级或真假值规则，难读、难检查，增加协作和调试成本。
