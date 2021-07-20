## 描述

<p class="MsoNormal" style="text-indent:21.0pt;"> 无向连通图<span>G</span>有<span>n</span>个点，<span>n-1</span>条边。点从<span>1</span>到<span>n</span>依次编号，编号为<span>i</span>的点的权值为<span>Wi  </span>，每条边的长度均为<span>1</span>。图上两点<span>(u, v)</span>的距离定义为<span>u</span>点到<span>v</span>点的最短距离。对于图<span>G</span>上的点对<span>(u, v)</span>，若它们的距离为<span>2</span>，则它们之间会产生<b>W</b><b>u</b><b>×</b><b>W</b><b>v</b>的联合权值。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 请问图<span>G</span>上所有可产生联合权值的<b>有序点对</b>中，联合权值最大的是多少？所有联合权值之和是多少？<span></span> </p>

## 输入格式

<p class="MsoNormal" style="text-indent:21.0pt;"> 输入文件名为<span>link.in</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 第一行包含<span>1</span>个整数<span>n</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 接下来<span>n-1</span>行，每行包含<span>2</span>个用空格隔开的正整数<span>u</span>、<span>v</span>，表示编号为<span>u</span>和编号为<span>v</span>的点之间有边相连。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 最后<span>1</span>行，包含<span>n</span>个正整数，每两个正整数之间用一个空格隔开，其中第<span>i</span>个整数表示图<span>G</span>上编号为<span>i</span>的点的权值为<span>Wi</span>。<span></span> </p>

## 输出格式

<p class="MsoNormal" style="text-indent:21.0pt;"> 输出文件名为<span>link.out</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 输出共<span>1</span>行，包含<span>2</span>个整数，之间用一个空格隔开，依次为图<span>G</span>上联合权值的最大值和所有联合权值之和。<b>由于所有联合权值之和可能很大，输出它时要对<span>10007</span>取余。</b> <span></span> </p>

## 输入样例

```plaintext
5 1 2 2 3 3 4 4 5 1 5 2 3 10 
```

## 输出样例

```plaintext
20 74
```

Hint

<p class="MsoNormal"> <b>【样例说明】<span></span></b> </p> <p class="MsoNormal"> <b><img src="/JudgeOnline/upload/image/20170728/20170728223309_91465.png" alt="" /><br /> </b> </p> <p class="MsoNormal"> <b> <p class="MsoNormal" style="text-indent:21.0pt;"> 本例输入的图如上所示，距离为<span>2</span>的有序点对有<span>(1,3)</span>、<span>(2,4)</span>、<span>(3,1)</span>、<span>(3,5)</span>、<span>(4,2)</span>、<span>(5,3)</span>。其联合权值分别为<span>2</span>、<span>15</span>、<span>2</span>、<span>20</span>、<span>15</span>、<span>20</span>。其中最大的是<span>20</span>，总和为<span>74</span>。<span></span> </p> <p class="MsoNormal"> <b>【数据说明】<span></span></b> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于<span>30%</span>的数据，<span>1<</span>≤100；<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于<span>60%</span>的数据，<span>1<</span>≤2000；<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于<span>100%</span>的数据，<span>1<</span>≤200,000，<span>0<</span>Wi ≤<span>10,000</span>。<b></b> </p> </b> </p>

## 来源

NOIP2014DAY1（二）

