## 描述

你有一条由N个红色的，白色的，或蓝色的珠子组成的项链(3<=N<=350)，珠子是随意安排的。 这里是 n=29 的二个例子: <img src="/JudgeOnline/upload/image/20170720/20170720151431_18434.png" alt="" /> 第一和第二个珠子在图片中已经被作记号。 图片 A 中的项链可以用下面的字符串表示： brbrrrbbbrrrrrbrrbbrbbbbrrrrb . 假如你要在一些点打破项链,展开成一条直线，然后从一端开始收集同颜色的珠子直到你遇到一个不同的颜色珠子，在另一端做同样的事。(颜色可能与在这之前收集的不同) 确定应该在哪里打破项链来收集到最大多数的数目的子。 Example 举例来说，在图片 A 中的项链，可以收集到8个珠子,在珠子 9 和珠子 10 或珠子 24 和珠子 25 之间打断项链。 在一些项链中，包括白色的珠子如图片 B 所示。 当收集珠子的时候，一个被遇到的白色珠子可以被当做红色也可以被当做蓝色。 表现项链的字符串将会包括三符号 r ， b 和 w 。 写一个程序来确定从一条被供应的项链最大可以被收集珠子数目。

## 输入格式

第 1 行: N, 珠子的数目 第 2 行: 一串度为N的字符串, 每个字符是 r ， b 或 w。

## 输出格式

单独的一行包含从被供应的项链可以被收集的珠子数目的最大值。

## 输入样例

```plaintext
29 wwwbbrwrbrbrrbrbrwrwwrbwrwrrb
```

## 输出样例

```plaintext
11
```



 

## 来源

USACO_1.1-4

