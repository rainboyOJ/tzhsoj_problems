## 描述

“蜂窝玉米”是一道湖南名菜，也是岳岳和佳佳的最爱。既然名叫“蜂窝玉米”，这道菜自然由很多颗玉米粒组成，两颗玉米粒之间可以用一根可食用的线连接。他们观察发现，如果把玉米粒看作点，把线看成边的话，每盘“蜂窝玉米”恰好构成一棵树。他们还发现，饭馆用来装“蜂窝玉米”的盘子一般是正方形的，如果适当地建立平面直角坐标系，玉米粒均放在整点（横坐标和纵坐标都是整数的点）上，连接玉米粒的线都被拉直且不相交。 回家后不久就要过年了，岳岳和佳佳想为朋友们表演一下自己的厨艺——做一盆色香味俱全的“蜂窝玉米”。但是问题来了，要一个多大的正方形盘子才能够装下这道菜呢？ 

## 输入格式

输入文件corn*.in第一行为玉米粒的颗数n， 以下n-1行每行包含两个整数u和v，表示玉米粒u和v连有一条线。

## 输出格式

输出文件corn*.out包含n行，依次表示玉米粒1,2,3...n的坐标， 用两个非负整数x, y表示。按照题意，正方形盘子的边长就等于 <img border=0 src=http://60.191.162.158:8080/JudgeOnline/images/p1122a.gif>

## 输入样例

```plaintext
4 1 2 2 3 2 4 
```

## 输出样例

```plaintext
0 1 0 0 1 0 1 1 
```

Hint

【评分方法】 对于每个测试点，如果你的输出非法，得0分，否则至少得1分，具体计算公式如下： 假设参考解的边长为Best，你的边长为Ans，则你的得分为： <img border=0 src=http://60.191.162.158:8080/JudgeOnline/images/p1122b.gif> 【如何测试你的输出】 你可以使用checker程序检查你的输出，格式为： checker TestNo 其中TestNo为测试点编号。例如你已经得到了数据5的输出corn5.out，可以使用命令 checker 5 来测试你的输出是否合法。执行此命令时corn5.in和corn5.out必须存在。 【特别提示】 请妥善保存输入文件*.in和你的输出*.out，及时备份，以免误删。 

## 来源

冬令营_2005.3:corn蜂窝玉米

