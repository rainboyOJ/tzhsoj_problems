## 描述

帅帅经常跟同学玩一个矩阵取数游戏：对于一个给定的n*m的矩阵，矩阵中的每个元素a<sub>ij</sub>均为非负整数。游戏规则如下：<br /> 1、每次取数时须从每行各取走一个元素，共n个。m次后取完矩阵所有元素；<br /> 2、每次取走的各个元素只能是该元素所在行的行首或行尾；<br /> 3、每次取数都有一个得分值，为每行取数的得分之和，每行取数的得分 = 被取走的元素值*2<sup>i</sup>，其中i表示第i次取数（从1开始编号）；<br /> 4、游戏结束总得分为m次取数得分之和。<br /> 帅帅想请你帮忙写一个程序，对于任意矩阵，可以求出取数后的最大得分。<br />

## 输入格式

输入文件game.in包括n+1行：<br /> 第1行为两个用空格隔开的整数n和m。<br /> 第2~n+1行为n*m矩阵，其中每行有m个用单个空格隔开的非负整数。<br />

## 输出格式

输出文件game.out仅包含1行，为一个整数，即输入矩阵取数后的最大得分。

## 输入样例

```plaintext
【输入样例1】 2 3 1 2 3 3 4 2 【输入样例2】 1 4 4 5 0 5 【输入样例3】 2 10 96 56 54 46 86 12 23 88 80 43 16 95 18 29 30 53 88 83 64 67
```

## 输出样例

```plaintext
【输出样例1】 82 【输出样例2】 122 【输出样例3】 316994 
```

Hint

【输入输出样例1解释】<br /> 第1次：第1行取行首元素，第2行取行尾元素，本次得分为1*21+2*21=6<br /> 第2次：两行均取行首元素，本次得分为2*22+3*22=20<br /> <p> 第3次：得分为3*23+4*23=56。总得分为6+20+56=82 </p> <p> 【限制】<br /> 60%的数据满足：1<=n, m<=30, 答案不超过10<sup>16</sup><br /> 100%的数据满足：1<=n, m<=80, 0<=a<sub>ij</sub><=1000 </p>



 

