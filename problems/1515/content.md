## 描述

在m*n的主格中任意指定x个格子构成一个棋盘，在任一个构成的棋盘上放置k个棋子，要求任意两个棋子不得位于同一行或同一列上，要求输出满足条件的所有方案。 （注意棋盘是稀疏的，即x<1/2*m*n。1<m，n<10。） 编程要求： 1.对给定的一个棋盘，求出该棋盘可放置的最多的棋子数p。 2.记di为该棋盘上放置i个棋子时的方案总数（1<=i<=p），其中经旋转和镜面反射而得的方案记为不同的方案，对每一个i，求出相应的di。 3.程序应能够连续处理多个棋盘，对每一个棋盘，输出p和d1，d2，……，dp，只需输出数字，不必输出具体的棋盘方案。

## 输入格式

第一行是两个数字，代表第一个棋盘的m和n，以下为一个仅由0、1组成的m*n矩阵，某一个位置值为1表示相应的格子在这个棋盘上，为0表示相应的格子不在棋盘上。

## 输出格式

第一行是棋盘可放置的最多的棋子数p； 第二行分别列出放1个棋子到放p个棋子的方案总数。

## 输入样例

```plaintext
<img border=0 src=http://60.191.162.158:8080/JudgeOnline/images/P1515.jpg> 5 5 0 1 1 1 0 0 1 0 0 0 1 1 1 0 0 0 0 1 0 0 0 0 1 1 0 
```

## 输出样例

```plaintext
the maxnumber=4 1:10 2:28 3:24 4:5
```



 

## 来源

【培训教程．回溯法】

