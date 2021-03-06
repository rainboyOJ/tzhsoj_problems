## 描述

（drawing.pas/c/cpp） 小渊是个聪明的孩子，他经常会给周围的小朋友们讲些自己认为有趣的内容。最近，他准备给小朋友们讲解立体图，请你帮他画出立体图。 小渊有一块面积为m*n的矩形区域，上面有m*n个边长为1的格子，每个格子上堆了一些同样大小的吉姆（积木的长宽高都是1），小渊想请你打印出这些格子的立体图。我们定义每个积木为如下格式，并且不会做任何翻转旋转，只会严格以这一种形式摆放： <img border=0 src=http://60.191.162.158:8080/JudgeOnline/images/noip/noip2008-pj-4-1.GIF> 每个顶点用1个加号’+’表示，长用3个”-“表示，宽用1个”/”表示，高用两个”|”表示。字符’+’ ‘-‘’/’ ‘|’的ASCII码分别为43，45，47，124。字符’.’（ASCII码46）需要作为背景输出，即立体图里的空白部分需要用’.’代替。立体图的画法如下面的规则： <img border=0 src=http://60.191.162.158:8080/JudgeOnline/images/noip/noip2008-pj-4-2.GIF> 立体图中，定义位于第(m,1)的格子（即第m行第1列的格子）上面自底向上的第一块积木（即最下面的一块积木）的左下角顶点为整张图最左下角的点。 

## 输入格式

输入文件drawing.in第一行有用空格隔开的两个整数m和n，表示有m*n个格子（1<=m，n<=50）。 接下来的m行，是一个m*n的矩阵，每行有n个用空格隔开的整数，其中第i行第j列上的整数表示第i行第j列的格子上摞有多少个积木（1<=每个格子上的积木数<=100）。 

## 输出格式

输出文件drawing.out中包含题目要求的立体图，是一个K行L列的字符矩阵，其中K和L表示最少需要K行L列才能按规定输出立体图。

## 输入样例

```plaintext
3 4 2 2 1 2 2 2 1 1 3 2 1 2 
```

## 输出样例

```plaintext
<img border=0 src=http://60.191.162.158:8080/JudgeOnline/images/noip/noip2008-pj-4-3.GIF> 
```



 



 

