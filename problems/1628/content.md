## 描述

有一系列产品，给定每个产品的加工时间和冷却成型时间（冷却过程产品之间没有关系，是单独冷却的）。 现在你手上有两台机器可以用来加工，你需要安排产品的加工顺序以及去哪台机器加工，使得所有产品都成型的时间最早。 机器之间互不相关，可以同时进行工作，一个机器一个时刻只能加工一个产品。

## 输入格式

第一行一个数n，表示产品个数； 以下n行，每行两个数：分别表示产品的加工时间A[i]和冷却时间B[i]。

## 输出格式

输出一个数，表示所有产品成型的最早时间。

## 输入样例

```plaintext
3 1 4 3 3 4 1 
```

## 输出样例

```plaintext
6 
```

Hint

对于20%的数据，满足n≤6； 对于100%的数据，满足n、A[i]、B[i]≤200 

## 来源

【分区联赛模拟试题11_1.产品排序】
