## 描述

A cyclic number is an integer n digits in length which, when multiplied by any integer from 1 to n, yields a"cycle"of the digits of the original number. That is, if you consider the number after the last digit to "wrap around"back to the first digit, the sequence of digits in both numbers will be the same, though they may start at different positions.For example, the number 142857 is cyclic, as illustrated by the following table: 142857 *1 = 142857 142857 *2 = 285714 142857 *3 = 428571 142857 *4 = 571428 142857 *5 = 714285 142857 *6 = 857142 

## 输入格式

Write a program which will determine whether or not numbers are cyclic. The input file is a list of integers from 2 to 60 digits in length. (Note that preceding zeros should not be removed, they are considered part of the number and count in determining n. Thus, "01"is a two-digit number, distinct from "1" which is a one-digit number.) 

## 输出格式

For each input integer, write a line in the output indicating whether or not it is cyclic. 

## 输入样例

```plaintext
142857 142856 142858 01 0588235294117647 
```

## 输出样例

```plaintext
142857 is cyclic 142856 is not cyclic 142858 is not cyclic 01 is not cyclic 0588235294117647 is cyclic 
```

Hint

Greater New York 2001 北京大学POJ：http://poj.org/ 13、任意精度运算、数字游戏、高精度计算 关于本模块题型： 1001 1023 1047 1060 1079 1131 1140 1142 1207 1220 1284 1289 1306 1316 1338 1405 1454 1503 1504 1519 1565 1650 1969 2000 2006 2081 2247 2262 2305 2316 2389 1001, 1220, 1405, 1503,1001（高精度乘法） 2413(高精度加法，还有二分查找)

## 来源

http://poj.org/problem?id=1047

