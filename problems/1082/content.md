## 描述

若一个数（首位不为零）从左向右读与从右向左读都一样，我们就将其称之为回文数。 例如：给定一个10进制数56，将56加65（即把56从右向左读），得到121是一个回文数。 又如：对于10进制数87： STEP1：87+78 = 165 STEP2：165+561 = 726 STEP3：726+627 = 1353 STEP4：1353+3531 = 4884 在这里的一步是指进行了一次N进制的加法，上例最少用了4步得到回文数4884。 写一个程序，给定一个N（2<=N<=10或N=16）进制数M，求最少经过几步可以得到回文数。 如果在30步以内（包含30步）不可能得到回文数，则输出“Impossible！” 

## 输入格式

输入数据共两行： 第一行：N进制，如：N = 9 第二行：N进制对应数字，如：M= 87 

## 输出格式

输出数据共一行，格式为： STEP=6

## 输入样例

```plaintext
9 87 
```

## 输出样例

```plaintext
STEP=6 
```



 

## 来源

NOIP_1999.TG2:回文数
