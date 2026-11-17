# Class Check 06: Python Prediction Quiz

## Purpose

这份检查表不是速度比赛。每道题先预测，再运行，再写出解释。允许预测错误；重点是能根据规则修正自己的想法。

## 1. Boolean Numbers

不要先运行：

```python
print(True + False)
print(False * 8)
print(1 == True)
print(2 == True)
```

我的预测：

| 表达式 | 预测 | 实际输出 | 我用到的规则 |
|---|---|---|---|
| `True + False` | | | |
| `False * 8` | | | |
| `1 == True` | | | |
| `2 == True` | | | |

**Quick check:** `True` 在数字运算中相当于 `1`，`False` 相当于 `0`。

## 2. Chained Comparisons

先预测：

```python
print(True < False + False > True)
print(1 < 2 < 3)
print(1 < 2 > 3)
```

1. `False + False` 的结果是：____________________
2. 第一行可以拆成：`True < 0` ______ `0 > True`。运算符应填：____________________
3. 第一行最终输出：____________________
4. `a < b < c` 等价于：`a < b` ______ `b < c`。运算符应填：____________________

**Quick check:** 比较链表示多个条件同时成立，不是把比较结果继续当作普通数字链起来。

## 3. Parentheses and Priority

预测并运行：

```python
print(-2 ** 2)
print((-2) ** 2)
print(2 + 3 * 4)
print((2 + 3) * 4)
```

写出一条观察：

> __________________________________________________________________

把这行改写得更清楚（目标是得到 `4`）：

```python
answer = ____________________
```

## 4. `and` / `or`

```python
print(False and "hello")
print(True and "hello")
print("" or "fallback")
```

完成：

- `False and "hello"` 输出：____________________
- `True and "hello"` 输出：____________________
- 空字符串 `""` 在条件中通常被当作：____________________
- `"" or "fallback"` 输出：____________________

把下面代码运行一次，并用一句话解释：

```python
name = ""
shown_name = name or "Anonymous"
print(shown_name)
```

> __________________________________________________________________

## 5. `==` or `is`?

```python
first = [1, 2]
second = [1, 2]
third = first

print(first == second)
print(first is second)
print(first is third)
```

| 表达式 | 预测 | 实际输出 | 原因 |
|---|---|---|---|
| `first == second` | | | 比较 ____________________ |
| `first is second` | | | 检查 ____________________ |
| `first is third` | | | `third` 和 `first` 是 ____________________ |

## 6. Mini Challenge

选择上面的任意一题，把一行表达式拆成至少两步，并使用有意义的变量名。例如：

```python
left = True < (False + False)
right = (False + False) > True
answer = left and right
print(answer)
```

我的改写：

```python

```

我这样改写的好处：

> __________________________________________________________________

## Exit Ticket

1. `True < False + False > True` 最终输出什么？为什么？
2. `a < b < c` 等价于什么？
3. `==` 和 `is` 有什么区别？
4. 写出一条本节你认为有趣、但不应滥用的写法：

> __________________________________________________________________

### Completion Record

- [ ] 完成了至少 6 道预测题。
- [ ] 运行并记录了实际结果。
- [ ] 解释了比较链。
- [ ] 拆解了一条表达式。
- [ ] 完成 Exit Ticket。

Teacher initials: ____________________
