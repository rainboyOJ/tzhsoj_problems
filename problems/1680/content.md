## 描述

<div style="text-indent: 21.1pt"><b>【题目描述】</b></div> <div style="text-indent: 10.5pt">  新牛到部队，CG要求它们每天早上搞晨跑，从A农场跑到B农场。从A农场到B农场中有n-2个路口，分别标上号，A农场为1号，B农场为n号，路口分别为2...n-1号，从A 农场到B农场有很多条路径可以到达，而CG发现有的路口是必须经过的，即每条路径都经过的路口，CG要把它们记录下来，这样CG就可以先到那个路口，观察新牛们有没有偷懒，而你的任务就是找出所有必经路口。</div>

## 输入格式

<div style="text-indent: 21.1pt"><b>【输入数据】</b></div> <div style="text-indent: 21pt">第一行两个用空格隔开的整数n（3≤n≤<span>2000）和e（1≤e≤8000）。</span></div> <div style="text-indent: 21pt">接下来从第<span>2到第e+1行，每行两个用空格隔开的整数p和q，表示路口p和q之间有路径直达。</span></div> <div style="text-indent: 21pt">输入数据保证必经路口一定存在，并且每个路口都和<span>A农场、B农场相连通。</span></div>

## 输出格式

<div style="text-indent: 21.1pt"><b>【输出数据】</b></div> <div style="text-indent: 21pt">第一行一个整数<span>m，表示必经路口的数目。</span></div> <div style="text-indent: 21pt">第二行按从小到大的顺序依次输出每个必经路口的编号，每两个数之间用一个空格隔开。</div> <div style="text-indent: 21pt">注意：不包括起点和终点。</div>

## 输入样例

```plaintext
【样例输入】 6 6 1 2 2 4 2 3 3 5 4 5 5 6 
```

## 输出样例

```plaintext
【样例输出】 2 2 5 
```



 



 

