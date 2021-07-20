## 描述

<img alt="" src="/JudgeOnline/upload/image/20170720/20170720192657_69728.png" />

## 输入格式

<p class="MsoNormal"> 从文件 <b><i>problem.in</i></b><b><i> </i></b>中读入数据。 </p> <p class="MsoNormal" style="margin-left:0cm;"> 第一行有两个整数 <i>t</i>, <i>k </i>，其中 <i>t </i>代表该测试点总共有多少组测试数据，<i>k </i>的意义见【问题描述】。<span></span> </p> <p class="MsoNormal"> 接下来 <i>t </i>行每行两个整数 <i>n</i>, <i>m </i>，其中 <i>n</i>, <i>m </i>的意义见【问题描述】。<span></span> </p>

## 输出格式

<p class="MsoNormal"> 输出到文件 <b><i>problem.out</i></b><b><i> </i></b>中。<span></span> </p> <p class="MsoNormal"> <i>t</i>行，每行一个整数代表所有的 0 ≤ <i>i </i>≤ <i>n</i>, 0 ≤<i>j </i>≤ min (<i>i</i>, <i>m</i>) 中有多少对 (<i>i</i>, <i>j</i>) 满足C(i,j)是k的倍数。 </p>

## 输入样例

```plaintext
【样例 1 输入】 1 2 3 3 【样例 2 输入】 2 5 4 5 6 7 
```

## 输出样例

```plaintext
【样例 1 输出】 1 【样例 2 输出】 0 7 
```

Hint

<div class="WordSection1"> <p class="41" style="margin-left:0cm;"> 【样例<span> 1 </span>说明】<span></span> </p> <p class="41" style="margin-left:0cm;"> 在所有可能的情况中，只有C(2,1)=2是2的倍数。<span></span> </p> </div> <p> 【数据范围】 </p> <p> n,m<=2000，k<=21，t<=10<sup>4</sup> </p>

## 来源

NOIP2016DAY2（一）

