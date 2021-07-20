## 描述

有2n个棋子（n≥4）排成一行，开始为位置白子全部在左边，黑子全部在右边，如下图为n=5的情况： ○○○○○●●●●● 移动棋子的规则是：每次必须同时移动相邻的两个棋子，颜色不限，可以左移也可以右移到空位上去，但不能调换两个棋子的左右位置。每次移动必须跳过若干个棋子（不能平移），要求最后能移成黑白相间的一行棋子。如n=5时，成为： ○●○●○●○●○● 任务：编程打印出移动过程。

## 输入格式

 

## 输出格式

 

## 输入样例

```plaintext
chessman.in 7 
```

## 输出样例

```plaintext
chessman.out step 0:ooooooo*******-- step 1:oooooo--******o* step 2:oooooo--******o* step 3:ooooo--*****o*o* step 4:ooooo*****--o*o* step 5:oooo--****o*o*o* step 6:oooo****--o*o*o* step 7:ooo--***o*o*o*o* step 8:ooo*o**--*o*o*o* step 9:o--*o**oo*o*o*o* step10:o*o*o*--o*o*o*o* step11:--o*o*o*o*o*o*o* 
```



 

## 来源

【培训习题．分治】4.6chessman黑白棋子的移动

