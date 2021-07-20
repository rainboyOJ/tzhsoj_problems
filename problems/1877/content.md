## 描述

<p class="MsoNormal" style="text-indent:21.0pt;"> 已知多项式方程：<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> <img src="/JudgeOnline/upload/image/20170728/20170728224306_94682.png" alt="" /> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> <br /> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 求这个方程在<span>[1, m]</span>内的整数解（<span>n</span>和<span>m</span>均为正整数）。<span></span> </p> <p> <br /> </p>

## 输入格式

<p class="MsoNormal" style="text-indent:21.0pt;"> 输入文件名为<span>equation.in</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 输入共<span>n+2</span>行。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 第一行包含<span>2</span>个整数<span>n</span>、<span>m</span>，每两个整数之间用一个空格隔开。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 接下来的<span>n+1</span>行每行包含一个整数，依次为a<sub>0</sub>,a<sub>1</sub>,a<sub>2</sub>,……,a<sub>n</sub>。 </p>

## 输出格式

<p class="MsoNormal" style="text-indent:21.0pt;"> 输出文件名为<span>equation.out</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 第一行输出方程在<span>[1, m]</span>内的整数解的个数。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 接下来每行一个整数，按照从小到大的顺序依次输出方程在<span>[1, m]</span>内的一个整数解。<span></span> </p>

## 输入样例

```plaintext
【输入输出样例1】 2 10 1 -2 1 【输入输出样例2】 2 10 2 -3 1 【输入输出样例3】 2 10 1 3 2 
```

## 输出样例

```plaintext
【输入输出样例1】 1 1 【输入输出样例2】 2 1 2 【输入输出样例3】 0
```

Hint

<p class="MsoNormal"> <b>【数据说明】<span></span></b> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于<span>30%</span>的数据，<span>0<</span>n≤2，|a<sub>i</sub>|≤<span>100</span>，a<sub>n</sub>≠<span>0</span>，<span>m</span>≤100；<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于<span>50%</span>的数据，<span>0<</span>n≤100，|a<sub>i</sub>|≤<span>10<sup>100</sup></span>，a<sub>n</sub>≠<span>0</span>，m≤100；<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于<span>70%</span>的数据，<span>0<</span>n≤100，|a<sub>i</sub>|≤<span>10<sup>10000</sup></span>，a<sub>n</sub>≠<span>0</span>，m≤10000；<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于<span>100%</span>的数据，<span>0<</span>n≤100，|a<sub>i</sub>|≤<span>10<sup>10000</sup></span>，a<sub>n</sub>≠<span>0</span>，m≤1000000。<span></span> </p>

## 来源

NOIP2014DAY2（三）

