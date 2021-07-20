## 描述

<p style="vertical-align:baseline;"> Alice和Bob玩了一个古老的游戏：首先画一个n * n的点阵（下图n = 3）  接着，他们两个轮流在相邻的点之间画上红边和蓝边： </p> <p style="vertical-align:baseline;"> <img src="/JudgeOnline/upload/image/20180408/20180408003717_29415.jpg" alt="" /> </p> <p style="vertical-align:baseline;"> <p style="vertical-align:baseline;"> 直到围成一个封闭的圈（面积不必为1）为止，“封圈”的那个人就是赢家。因为棋盘实在是太大了(n <= 200)，他们的游戏实在是太长了！他们甚至在游戏中都不知道谁赢得了游戏。于是请你写一个程序，帮助他们计算他们是否结束了游戏？  </p> </p>

## 输入格式

输入数据第一行为两个整数n和m。m表示一共画了m条线。以后m行，每行首先有两个数字(x, y)，代表了画线的起点坐标，接着用空格隔开一个字符，假如字符是"D "，则是向下连一条边，如果是"R "就是向右连一条边。输入数据不会有重复的边且保证正确。 

## 输出格式

输出一行：在第几步的时候结束。假如m步之后也没有结束，则输出一行“draw”。

## 输入样例

```plaintext
3 5 　　1 1 D 　　1 1 R 　　1 2 D 　　2 1 R 　　2 2 D 
```

## 输出样例

```plaintext
4
```



 



 
