## 描述

若一个数（首位不为零）从左到右读与从右到左读都是一样，我们就将其称之为回文数。 例如：给定一个10进制数56，将56加65（即把56从右向左读），得到121是一个回文数。 又如，对于10进制数87：　　　　 STEP1：87+78=165 STEP2：165+561=726　　　　 STEP3：726+627=1353 STEP4：1353+3531=4884　　 在这里的一步是指进行了一次N进制的加法，上例最少用了4步得到回文数4884。 　　 写一个程序，给定一个N（2<=N<=10，N=16）进制数M，求最少经过几步可以得到回文数。 如果在30步以内（包含30步）不可能得到回文数，则输出“Impossible!”

## 输入格式

输入样例： N=9 M=87

## 输出格式

输出样例： STEP=6

## 输入样例

```plaintext
N=9 M=87
```

## 输出样例

```plaintext
STEP=6
```

Hint

N进制加法即逢N进一



 
