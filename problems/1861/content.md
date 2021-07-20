## 描述

<p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> 小 C 同学认为跑步非常有趣，于是决定制作一款叫做《天天爱跑步》的游戏。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> 《天 天爱跑步》是一个养成类游戏，需要玩家每天按时上线，完成打卡任务。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> 这个游戏的地图可以看作一棵包含 <i>n </i>个结点和 <i>n </i>− 1 条边的树，每条边连接两个结点，且任意两个结点存在一条路径互相可达。树上结点编号为从 1 到 <i>n </i>的连续正整数。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> 现在有 <i>m </i>个玩家，第 <i>i </i>个玩家的起点为 <i>S<sub>i</sub> </i>，终点为 <i>T<sub>i</sub></i><i> </i>。每天打卡任务开始时，所 有玩家<u>在第</u><u> </u><u>0 </u><u>秒</u>同时从<u>自己的起点</u>出发，以<u>每秒跑一条边</u>的速度，不间断地沿着 最短 路径向着<u>自己的终点</u>跑去，跑到终点后该玩家就算完成了打卡任务。（由于地图是一棵树，所以每个人的路径是唯一的）<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> 小 C 想知道游戏的活跃度，所以在每个结点上都放置了一个观察员。在结点 <i>j </i>的 观 察员会选择在第 <i>W<sub>j</sub></i><i> </i>秒观察玩家，一个玩家能被这个观察员观察到当且仅当该玩家 在第 <i>W<sub>j</sub></i><i> </i>秒也<u>正好</u>到达了结点 <i>j </i>。小 C 想知道每个观察员会观察到多少人？<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> <u>注意：</u>我们认为一个玩家到达自己的终点后该玩家就会结束游戏，他不能等待一 段时间后再被观察员观察到。即对于把结点 <i>j </i>作为终点的玩家：若他在第 <i>W<sub>j</sub></i><i> </i>秒<u>前</u>到达 终点，则在结点 <i>j </i>的观察员<u>不能观察到</u>该玩家；若他<u>正好</u>在第 <i>W<sub>j</sub></i><i> </i>秒到达终点，则在结 点 <i>j </i>的观察员<u>可以观察到</u>这个玩家。<span></span> </p>

## 输入格式

<p class="MsoNormal" style="text-align:justify;"> 从文件 <b><i>running.in </i></b>中读入数据。 </p> <p class="MsoNormal"> 第一行有两个整数 <i>n </i>和 <i>m </i>。其中 <i>n </i>代表树的结点数量，同时也是观察员的数量，<i>m</i><i> </i>代表玩家的数量。 </p> <p class="MsoNormal" style="text-align:justify;"> 接下来 <i>n </i>− 1 行每行两个整数 <i>u </i>和 <i>v </i>，表示结点 <i>u </i>到结点 <i>v </i>有一条边。<span></span> </p> <p class="MsoNormal" style="text-align:justify;"> 接下来一行 <i>n </i>个整数，其中第 <i>j </i>个整数为 <i>W<sub>j</sub></i><i> </i>，表示结点 <i>j </i>出现观察员的时间。<span></span> </p> <p class="MsoNormal" style="text-align:justify;"> 接下来 <i>m </i>行，每行两个整数 <i>S<sub>i</sub> </i>和 <i>T<sub>i</sub></i><i> </i>，表示一个玩家的起点和终点。<span></span> </p> <p class="MsoNormal" style="text-align:justify;"> 对于所有的数据，保证 <i>1 ≤ S<sub>i</sub> , T<sub>i</sub> ≤ n ， 0 ≤ W<sub>j</sub> ≤ n </i>。 </p>

## 输出格式

<p class="MsoNormal" style="text-align:justify;"> 输出到文件 <b><i>running.out </i></b>中。 </p> <p class="MsoNormal" style="text-align:justify;"> 输出 1 行 <i>n </i>个整数，第 <i>j </i>个整数表示结点 <i>j </i>的观察员可以观察到多少人。 </p>

## 输入样例

```plaintext
【样例 1 输入】 6 3 2 3 1 2 1 4 4 5 4 6 0 2 5 1 2 3 1 5 1 3 2 6 【样例 2 输入】 5 3 1 2 2 3 2 4 1 5 0 1 0 3 0 3 1 1 4 5 5
```

## 输出样例

```plaintext
【样例 1 输出】 2 0 0 1 1 1 【样例 2 输出】 1 2 1 0 1
```

Hint

<p class="41" style="margin-left:0cm;text-align:justify;"> 【样例<span> 1 </span>说明】<span></span> </p> <p class="MsoNormal"> 对于 1 号点， <i>W</i><sub>1</sub> = 0 ，故只有起点为 1 号点的玩家才会被观察到，所以玩家 1 和玩家 2 被观察到，共 2 人被观察到。 </p> <p class="MsoNormal"> 对于 2 号点，没有玩家在第 2 秒时在此结点，共 0 人被观察到。 </p> <p class="MsoNormal"> 对于 3 号点，没有玩家在第 5 秒时在此结点，共 0 人被观察到。<span></span> </p> <p class="MsoNormal"> 对于 4 号点，玩家 1 被观察到，共 1 人被观察到。<span></span> </p> <p class="MsoNormal"> 对于 5 号点，玩家 1 被观察到，共 1 人被观察到。<span></span> </p> <p class="MsoNormal"> 对于 6 号点，玩家 3 被观察到，共 1 人被观察到。<span></span> </p>

## 来源

NOIP2016DAY1（二）

