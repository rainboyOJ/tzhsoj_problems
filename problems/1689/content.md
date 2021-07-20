## 描述

<div style="margin: 0cm 0cm 0pt 18pt; line-height: 150%" align="left"><b><span style="font-size: 12pt; line-height: 150%">问题描述</span></b></div> <div style="text-indent: 24pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">有n根木棍，每根的长度1和重量w已知。这些木棍将被一台机器一根一根地加工。机器需要一些启动时间来做准备工作，启动时间与木棍被加工的具体情况有关。启动时间遵循以下规则：</span></div> <div style="margin: 0cm 0cm 0pt 18pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">1.</span><span style="font-size: 12pt; line-height: 150%">加工第一根木棍的启动时间为1分钟。</span></div> <div style="text-indent: 18pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">2.</span><span style="font-size: 12pt; line-height: 150%">加工完长度为l<sub>i</sub>，重量问w<sub>i</sub>的木棍后，紧跟着加工长度为l<sub>i+1</sub>,重量为w<sub>i+1</sub>的木棍时，若l<sub>i</sub>≤l<sub>i+1</sub>,且w<sub>i</sub>≤w<sub>i+</sub>1,则加工木棍i+1时，不需要启动时间。例如：有5根木棍，它们的长度和重量为（9,4），（2,5），（1,2），（5,3），（4,1），则最小总启动时间为2分钟（加工序列为（4,1），（5,3），（9,4），（1,2），（2,5））。</span></div>

## 输入格式

<div style="margin: 0cm 0cm 0pt 17.95pt; text-indent: 5.9pt; line-height: 150%" align="left"><b><span style="font-size: 12pt; line-height: 150%">输入格式</span></b></div> <div style="text-indent: 24pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">输入文件wooden.in第一行一个整数n（1≤n≤5000）,表示木棍的数量。第二行2*n个整数，l<sub>1</sub>,w<sub>1</sub>,l<sub>2</sub>,w<sub>2</sub>,……，l<sub>n</sub>, w<sub>n</sub>(1≤l<sub>i</sub>,w<sub>i</sub>≤10000),为各根木棍的长度和重量，这2*n个整数以若干个空格分隔。</span></div>

## 输出格式

<div style="text-indent: 24.1pt; line-height: 150%" align="left"><b><span style="font-size: 12pt; line-height: 150%">输出格式</span></b></div> <div style="text-indent: 24pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">输出文件wooden.out仅一行，一个整数，即最小总启动时间。</span></div>

## 输入样例

```plaintext
样例输入1 5 4 9 5 2 2 1 3 5 1 4 样例输入2 3 2 2 1 1 2 2 
```

## 输出样例

```plaintext
样例输出1 2 样例输出2 1 
```



 



 

