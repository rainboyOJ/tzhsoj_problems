## 描述

长方形(rectangle.pas/c/cpp) 【题目描述】 小明今天突发奇想，想从一张用过的纸中剪出一个长方形。 为了简化问题，小明做如下的规定： （1）这张纸的长度、宽度分别为n，m。小明将这张纸看成是由n*m个格子组成，在剪的时候，只能沿着格子的边缘剪。 （2）这张纸有些地方小明以前在上面画过，剪出来的长方形不能含有以前画过的地方。 （3）剪出来的长方形的大小没有限制。 小明看着这张纸，想到了好多好多种剪的方法，可是到底有多少种呢？小明数不过来了，你能帮帮他吗？ 

## 输入格式

第一行两个正整数，n，m，表示这张纸的长度和宽度。 接下来有n行，每行m个字符，每个字符为‘*’或者‘.’。 字符‘*’表示以前在这个格子上画过，字符‘.’表示以前在这个格子上没有画过。 

## 输出格式

仅一个整数，表示方案数。

## 输入样例

```plaintext
6 4 .... .*** .*.. .*** ...* .*** 
```

## 输出样例

```plaintext
38 
```

Hint

【数据规模】 对于10%的数据，满足1<=n<=10，1<=m<=10 对于30%的数据，满足1<=n<=50，1<=m<=50 对于60%的数据，满足1<=n<=200，1<=m<=200 对于100%的数据，满足1<=n<=1000，1<=m<=1000 最后一个点所有的字符都为‘.’。 

## 来源

NOIP2009模拟题《NOI专刊》

