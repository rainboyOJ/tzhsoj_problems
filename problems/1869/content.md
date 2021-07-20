## 描述

<p class="MsoNormal" style="text-indent:24.0pt;"> 一年一度的<span>“</span>跳石头<span>”</span>比赛又要开始了！<b><span></span></b> </p> <p class="MsoNormal" style="text-indent:24.0pt;"> 这项比赛将在一条笔直的河道中进行，河道中分布着一些巨大岩石。组委会已经选择好了两块岩石作为比赛起点和终点。在起点和终点之间，有 N 块岩石（不含起点和终点的岩石）。在比赛过程中，选手们将从起点出发，每一步跳向相邻的岩石，直至到达终点。 </p> <p class="MsoNormal" style="text-indent:24.0pt;"> 为了提高比赛难度，组委会计划移走一些岩石，使得选手们在比赛过程中的最短跳跃距离尽可能长。由于预算限制，组委会至多从起点和终点之间移走 M 块岩石（不能移走起点和终点的岩石）。 </p>

## 输入格式

<p class="MsoNormal" style="text-indent:24.0pt;"> 输入文件名为<span> stone.in</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:24.0pt;"> 输入文件第一行包含三个整数 L，N，M，分别表示起点到终点的距离，起点和终点之间的岩石数，以及组委会至多移走的岩石数。 </p> <p class="MsoNormal" style="text-indent:24.0pt;"> 接下来 N 行，每行一个整数，第 i 行的整数 Di（0 < Di < L）表示第 i 块岩石与 起点的距离。这些岩石按与起点距离从小到大的顺序给出，且不会有两个岩石出现在同一个位置。<span></span> </p>

## 输出格式

<p class="MsoNormal" style="text-indent:24.0pt;"> 输出文件名为 stone.out。 </p> <p class="MsoNormal" style="text-indent:24.0pt;"> 输出文件只包含一个整数，即最短跳跃距离的最大值。<span></span> </p>

## 输入样例

```plaintext
25 5 2 2 11 14 17 21
```

## 输出样例

```plaintext
4
```

Hint

<p class="MsoNormal" align="left"> <b>【输入输出样例 </b><b>1</b><b> </b><b>说明】</b><b></b> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 将与起点距离为 2 和 14 的两个岩石移走后，最短的跳跃距离为 4（从与起点距离 17 的岩石跳到距离 21 的岩石，或者从距离 21 的岩石跳到终点）。 </p> <h4 style="text-indent:24pt;"> <b><span style="font-size:16px;">【数据规模与约定】<br /> </span></b><span style="font-size:16px;">对于 20%的数据，0 ≤ M ≤ N ≤ 10。<br /> </span><span style="font-size:16px;">对于 50%的数据，0 ≤ M ≤ N ≤ 100。<br /> </span><span style="font-size:16px;">对于 100%的数据，0 ≤ M ≤ N ≤ 50,000，1 ≤ L ≤ 1,000,000,000。</span> </h4> <p class="MsoNormal" align="left"> <b></b> </p> <p> <br /> </p>

## 来源

NOIP2015DAY2（一）

