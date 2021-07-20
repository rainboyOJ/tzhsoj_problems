## 描述

<p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 花匠栋栋种了一排花，每株花都有自己的高度。花儿越长越大，也越来越挤。栋栋决定把这排中的一部分花移走，将剩下的留在原地，使得剩下的花能有空间长大，同时，栋栋希望剩下的花排列得比较别致。<span></span> </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 具体而言，栋栋的花的高度可以看成一列整数ℎ1, ℎ2, … , ℎn。设当一部分花被移走后，剩下的花的高度依次为g<sub>1</sub>, g<sub>2</sub>, … , g<sub>m</sub>，则栋栋希望下面两个条件中至少有一个满足：<span></span> </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 条件<span> A</span>：对于所有的<span>1</span><span>≤</span>i<span>≤m/2</span>，有g<sub>2</sub><sub>i </sub> > g<sub>2i-1</sub>，同时对于所有的<span>1</span><span>≤</span>i<span>≤<span>m/2</span></span>，有g<sub>2</sub><sub>i </sub> > g<sub>2i+1</sub>； <span></span> </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 条件<span> B</span>：对于所有的<span>1</span><span>≤</span>i<span>≤<span>m/2</span></span>，有g<sub>2</sub><sub>i </sub> < g<sub>2i-1</sub>，同时对于所有的<span>1</span><span>≤</span>i<span>≤<span>m/2</span></span>，有g<sub>2</sub><sub>i </sub> < g<sub>2i+1</sub>。<span></span> </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 注意上面两个条件在 m = 1时同时满足，当 m > 1时最多有一个能满足。 </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 请问，栋栋最多能将多少株花留在原地。 </p>

## 输入格式

<p class="MsoBodyText" style="margin-left:0cm;text-indent:20.6pt;"> 输入文件为 flower.in。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-indent:20.6pt;"> 输入的第一行包含一个整数，表示开始时花的株数。 <span></span> </p> <p class="MsoNormal" style="text-indent:22.0pt;"> 第二行包含个整数，依次为ℎ<span>1, </span>ℎ<span>2, … , </span>ℎn，表示每株花的高度。<span></span> </p>

## 输出格式

<p class="MsoBodyText" style="margin-left:0cm;text-indent:20.6pt;"> 输出文件为 flower.out。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-indent:20.6pt;"> 输出一行，包含一个整数，表示最多能留在原地的花的株数。<span></span> </p>

## 输入样例

```plaintext
5 5 3 2 1 2 
```

## 输出样例

```plaintext
3
```

Hint

<p class="MsoBodyText" style="margin-left:0cm;"> <b>【输入输出样例说明】</b><b><span></span></b> </p> <p class="MsoBodyText" style="margin-left:0cm;text-indent:20.6pt;"> 有多种方法可以正好保留 3 株花，例如，留下第 1、4、5 株，高度分别为 5、1、2，满足条件B。 </p> <p class="MsoNormal"> <b>【数据范围】<span></span></b> </p> <p class="MsoNormal" style="text-indent:22.0pt;"> 对于<span> 20%</span>的数据，<span>n ≤ 10</span>； <span></span> </p> <p class="MsoNormal" style="text-indent:22.0pt;"> 对于<span> 30%</span>的数据，<span>n ≤ 25</span>；<span></span> </p> <p class="MsoNormal" style="text-indent:22.0pt;"> 对于<span> 70%</span>的数据，<span>n ≤ 1000</span>，<span>0 ≤ </span>ℎ<span>n</span><span>≤ 1000</span>；<span></span> </p> <p class="MsoNormal" style="text-indent:22.0pt;"> 对于<span> 100%</span>的数据，<span>1 ≤ n ≤ 100,000</span>，<span>0 ≤ </span>ℎ<span>n</span><span>≤ 1,000,000</span>，所有的ℎ<span>n</span>随机生成，所有随机数服从某区间内的均匀分布。 </p>

## 来源

NOIP2013DAY2（二）

