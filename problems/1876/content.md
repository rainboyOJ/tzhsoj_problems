## 描述

<p class="MsoNormal" style="text-indent:21.0pt;"> 在有向图<span>G</span>中，每条边的长度均为<span>1</span>，现给定起点和终点，请你在图中找一条从起点到终点的路径，该路径满足以下条件：<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 1．路径上的所有点的出边所指向的点都直接或间接与终点连通。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 2．在满足条件<span>1</span>的情况下使路径最短。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 注意：图<span>G</span>中可能存在重边和自环，题目保证终点没有出边。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 请你输出符合条件的路径的长度。<span></span> </p>

## 输入格式

<p class="MsoNormal" style="text-indent:21.0pt;"> 输入文件名为<span>road.in</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 第一行有两个用一个空格隔开的整数<span>n</span>和<span>m</span>，表示图有<span>n</span>个点和<span>m</span>条边。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 接下来的<span>m</span>行每行<span>2</span>个整数<span>x</span>、<span>y</span>，之间用一个空格隔开，表示有一条边从点<span>x</span>指向点<span>y</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 最后一行有两个用一个空格隔开的整数<span>s</span>、<span>t</span>，表示起点为<span>s</span>，终点为<span>t</span>。<span></span> </p>

## 输出格式

<p class="MsoNormal" style="text-indent:21.0pt;"> 输出文件名为<span>road.out</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 输出只有一行，包含一个整数，表示满足题目描述的最短路径的长度。如果这样的路径不存在，输出<span>-1</span>。<span></span> </p>

## 输入样例

```plaintext
【输入输出样例1】 3 2 1 2 2 1 1 3 【输入输出样例2】 6 6 1 2 1 3 2 6 2 5 4 5 3 4 1 5
```

## 输出样例

```plaintext
【输入输出样例1】 -1 【输入输出样例2】 3
```

Hint

<p class="MsoNormal"> <b>【输入输出样例1说明】<span></span></b> </p> <p class="MsoNormal"> <b><img src="/JudgeOnline/upload/image/20170728/20170728224145_17502.png" alt="" /><br /> </b> </p> <p class="MsoNormal"> <b> <p class="MsoNormal" style="text-indent:21.0pt;"> 如上图所示，箭头表示有向道路，圆点表示城市。起点<span>1</span>与终点<span>3</span>不连通，所以满足题目描述的路径不存在，故输出<span>-1</span>。 </p> <p class="MsoNormal" style="text-indent:21.0pt;"> <b></b> </p> </b> </p> <p class="MsoNormal"> <b> <p class="MsoNormal"> <b>【输入输出样例2说明】<span></span></b> </p> <img src="/JudgeOnline/upload/image/20170728/20170728224204_26002.png" alt="" /><br /> </b> </p> <p class="MsoNormal"> <b> <p class="MsoNormal" style="text-indent:21.0pt;"> 如上图所示，满足条件的路径为<span>1->3->4->5</span>。注意点<span>2</span>不能在答案路径中，因为点<span>2</span>连了一条边到点<span>6</span>，而点<span>6</span>不与终点<span>5</span>连通。 </p> <p class="MsoNormal" style="text-indent:21.0pt;"> <b></b> </p> </b> </p> <p class="MsoNormal"> <b> <p class="MsoNormal"> 【数据说明】<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于<span>30%</span>的数据，<span>0< n </span>≤10，<span>0< m </span>≤20；<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于<span>60%</span>的数据，<span>0< n </span>≤100，<span>0< m </span>≤2000；<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于<span>100%</span>的数据，<span>0< n </span>≤10,000，<span>0< m </span>≤200,000，<span>0< x</span>,y,s,t≤<span>n</span>，<span>x</span>≠<span>t</span>。<b></b> </p> </b> </p>

## 来源

NOIP2014DAY2（二）

