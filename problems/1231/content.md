## 描述

现在要把m本有顺序的书分给k给人复制（抄写），每一个人的抄写速度都一样，一本书不允许给两个（或以上）的人抄写，分给每一个人的书，必须是连续的，比如不能把第一、第三、第四本书给同一个人抄写。 现在请你设计一种方案，使得复制时间最短。复制时间为抄写页数最多的人用去的时间。 

## 输入格式

第一行两个整数m，k；（k≤m≤500） 第二行m个整数，第i个整数表示第i本书的页数。 

## 输出格式

共k行，每行两个整数，第i行表示第i个人抄写的书的起始编号和终止编号。 k行的起始编号应该从小到大排列，如果有多解，则尽可能让前面的人少抄写。

## 输入样例

```plaintext
book.in 9 3 1 2 3 4 5 6 7 8 9 
```

## 输出样例

```plaintext
book.out 1 5 6 7 8 9 
```



 

## 来源

【培训习题．动态规划】8.4book书的复制

