# Lesson 06 — Python 趣味预测题

适用于 Python 3，全部为单选题，每题占一行。代码中的分号表示同一程序中依次执行的语句；字符串输出选项中的引号仅用于标明内容，实际输出不包含引号。先投票，再运行揭晓，可以按课堂时间选题，不必全部完成。

## 题目（可复制到问卷系统）

1. 运行 `print(True + True)`，会输出什么？ A. `True`；B. `2`；C. `11`；D. 报错。
2. 运行 `print(True + False)`，会输出什么？ A. `TrueFalse`；B. `False`；C. `0`；D. `1`。
3. 运行 `print(False * 10)`，会输出什么？ A. `0`；B. `False`；C. `10`；D. 报错。
4. 运行 `print(1 == True)`，会输出什么？ A. `1`；B. `False`；C. `True`；D. 报错。
5. 运行 `print(2 == True)`，会输出什么？ A. `True`；B. `False`；C. `2`；D. 报错。
6. 运行 `print(3 + (True == True))`，会输出什么？ A. `3`；B. `True`；C. 报错；D. `4`。
7. 运行 `print(1 < 2 < 3)`，会输出什么？ A. `True`；B. `False`；C. `3`；D. 报错。
8. 运行 `print(1 < 2 > 3)`，会输出什么？ A. `True`；B. `3`；C. `False`；D. 报错。
9. 运行 `print(3 > 2 > 1)`，会输出什么？ A. `False`；B. `True`；C. `1`；D. 报错。
10. 运行 `print(1 == True < 2)`，会输出什么？ A. 报错；B. `False`；C. `2`；D. `True`。
11. 运行 `print(True < False + False > True)`，会输出什么？ A. `True`；B. `0`；C. `False`；D. 报错。
12. 运行 `print(-2 ** 2)`，会输出什么？ A. `-4`；B. `4`；C. `-2`；D. 报错。
13. 运行 `print((-2) ** 2)`，会输出什么？ A. `-4`；B. `-2`；C. 报错；D. `4`。
14. 运行 `print(2 + 3 * 4)`，会输出什么？ A. `20`；B. `14`；C. `24`；D. 报错。
15. 运行 `print((2 + 3) * 4)`，会输出什么？ A. `14`；B. `24`；C. `20`；D. 报错。
16. 运行 `print(False and "hello")`，会输出什么？ A. `False`；B. `"hello"`；C. `True`；D. 报错。
17. 运行 `print(True and "hello")`，会输出什么？ A. `True`；B. `False`；C. 报错；D. `"hello"`。
18. 运行 `print(False or "hello")`，会输出什么？ A. `False`；B. `"hello"`；C. `True`；D. 报错。
19. 运行 `print("" or "fallback")`，会输出什么？ A. 一行空白；B. `True`；C. `"fallback"`；D. 报错。
20. 运行 `print("Python" or "fallback")`，会输出什么？ A. `"Python"`；B. `"fallback"`；C. `True`；D. 报错。
21. 运行 `print(False and (1 / 0))`，会输出什么？ A. `0`；B. `True`；C. 除以零报错；D. `False`。
22. 运行 `first = [1, 2]; second = [1, 2]; print(first == second)`，会输出什么？ A. `False`；B. `True`；C. `[1, 2]`；D. 报错。
23. 运行 `first = [1, 2]; second = [1, 2]; print(first is second)`，会输出什么？ A. `True`；B. `[1, 2]`；C. `False`；D. 报错。
24. 运行 `first = [1, 2]; third = first; print(first is third)`，会输出什么？ A. `True`；B. `False`；C. `[1, 2]`；D. 报错。

## 教师参考答案（不要复制到学生题目中）

1. B — `True` 在数字运算中相当于 `1`，所以 `1 + 1 = 2`。
2. D — `True + False` 相当于 `1 + 0`。
3. A — `False` 相当于 `0`，所以结果是整数 `0`。
4. C — 数字比较中，`True` 与 `1` 相等。
5. B — `2` 在条件中被视为真，但 `2` 不等于 `True` 所对应的数字 `1`。
6. D — 括号中的比较得到 `True`，再计算 `3 + 1`。
7. A — 比较链要求 `1 < 2` 和 `2 < 3` 都成立。
8. C — `2 > 3` 不成立；不能把它理解为 `(1 < 2) > 3`。
9. B — `3 > 2` 和 `2 > 1` 都成立；比较链也可以使用大于号。
10. D — `1 == True` 和 `True < 2` 都成立。
11. C — 先算 `False + False` 得到 `0`；比较链的第一个比较 `True < 0` 为假，后面的比较被短路。
12. A — 表达式按 `-(2 ** 2)` 计算，得到 `-4`。
13. D — 括号让 `-2` 整体参与平方，得到 `4`。
14. B — 先乘后加：`2 + 12 = 14`。
15. C — 先算括号：`5 * 4 = 20`。
16. A — `and` 的左侧为假，直接返回左侧的 `False`。
17. D — `and` 的左侧为真，求值并返回右侧的字符串。
18. B — `or` 的左侧为假，求值并返回右侧的字符串。
19. C — 空字符串被视为假，`or` 返回备用字符串。
20. A — 非空字符串被视为真，`or` 直接返回左侧字符串。
21. D — `and` 短路，右侧的除法不会执行，所以不会发生除以零错误。
22. B — 两个列表的内容相等。
23. C — 两次分别创建的列表是不同对象，即使内容相等。
24. A — 赋值没有复制列表，两个名字指向同一个对象。
