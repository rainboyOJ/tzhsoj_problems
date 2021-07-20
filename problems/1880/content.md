## 描述

<p class="MsoNormal" style="text-align:justify;text-indent:22.0pt;"> <span>A </span>国有<span> n </span>座城市，编号从<span> 1 </span>到<span> n</span>，城市之间有<span> m </span>条双向道路。每一条道路对车辆都有重量限制，简称限重。现在有 <span>q </span>辆货车在运输货物，司机们想知道每辆车在不超过车辆限重的情况下，最多能运多重的货物。<span></span> </p>

## 输入格式

<p class="MsoBodyText" style="margin-left:0cm;text-indent:20.8pt;"> 输入文件名为 truck.in。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-indent:20.6pt;"> 输入文件第一行有两个用一个空格隔开的整数 n，<span>m</span>，表示 <span>A </span>国有 <span>n </span>座城市和 <span>m </span>条道路。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-indent:21.0pt;"> 接下来 <span>m </span>行每行 <span>3 </span>个整数 <span>x</span>、y、z，每两个整数之间用一个空格隔开，表示从 <span>x </span>号城市到 <span>y </span>号城市有一条限重为 <span>z </span>的道路。注意：<span>x</span> 不等于 y，两座城市之间可能有多条道路。 <span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-indent:20.6pt;"> 接下来一行有一个整数 q，表示有 <span>q </span>辆货车需要运货。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-indent:20.8pt;"> 接下来 <span>q </span>行，每行两个整数 x、<span>y</span>，之间用一个空格隔开，表示一辆货车需要从 <span>x </span>城市 运输货物到 <span>y </span>城市，注意：<span>x</span><span> </span>不等于 y。<span></span> </p>

## 输出格式

<p class="MsoBodyText" style="margin-left:0cm;text-indent:20.8pt;"> 输出文件名为 truck.out。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-indent:20.8pt;"> 输出共有 <span>q </span>行，每行一个整数，表示对于每一辆货车，它的最大载重是多少。如果货车不能到达目的地，输出<span>-1</span>。<span></span> </p>

## 输入样例

```plaintext
4 3 1 2 4 2 3 3 3 1 1 3 1 3 1 4 1 3
```

## 输出样例

```plaintext
3 -1 3
```

Hint

<p class="MsoBodyText" style="margin-left:0cm;"> <b>【数据说明】</b> </p> <p class="MsoNormal" style="text-indent:22.0pt;"> 对于<span> 30%</span>的数据，<span>0 < n < 1,000</span>，<span>0 < m < 10,000</span>，<span>0 < </span><span>q</span><span>< 1,000</span>； <span></span> </p> <p class="MsoNormal" style="text-indent:22.0pt;"> 对于<span> 60%</span>的数据，<span>0 < n < 1,000</span>，<span>0 < m < 50,000</span>，<span>0 < </span><span>q</span><span>< 1,000</span>；<span></span> </p> <p class="MsoNormal" style="text-indent:22.0pt;"> 对于<span> 100%</span>的数据，<span>0 < n < 10,000</span>，<span>0 < m < 50,000</span>，<span>0 < </span><span>q</span><span>< 30,000</span>，<span>0 ≤ z ≤ 100,000</span>。<span></span> </p>

## 来源

NOIP2013DAY1（三）

