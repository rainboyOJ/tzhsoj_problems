## 描述

<p class="MsoNormal" align="left" style="text-indent:24pt;"> 有 <i><span>n</span></i><span> </span>个同学（编号为 1 到 <i><span>n</span></i>）正在玩一个信息传递的游戏。在游戏里每人都有一个固定的信息传递对象，其中，编号为 <i><span>i</span></i><span> </span>的同学的信息传递对象是编号为 <i><span>Ti</span></i><span> </span>的同学。 游戏开始时，每人都只知道自己的生日。之后每一轮中，所有人会同时将自己当前所知的生日信息告诉各自的信息传递对象（注意：可能有人可以从若干人那里获取信息，但是每人只会把信息告诉一个人，即自己的信息传递对象）。当有人从别人口中得知自己的生日时，游戏结束。请问该游戏一共可以进行几轮？ </p>

## 输入格式

<p class="MsoNormal" align="left" style="text-indent:24pt;"> 输入文件名为 message.in。<b></b> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 输入共 2 行。<span></span> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 第 1 行包含 1 个正整数 <i>n </i>，表示 <i><span>n</span></i><span> </span>个人。<span></span> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 第 2 行包含 <i><span>n</span></i><span> </span>个用空格隔开的正整数<i><span>T1,T2,</span></i><i>… ,</i><i>Tn</i>，其中第<i><span>Ti</span></i>个整数表示编号为 <i>i </i>的同学的信息传递对象是编号为 <i>Ti</i> 的同学，<i>Ti</i> ≤<i>n</i> 且<i><span>Ti</span></i><span> </span>≠<i>i</i>。<span></span> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 数据保证游戏一定会结束。<span></span> </p>

## 输出格式

<p class="MsoNormal" align="left" style="text-indent:23.5pt;"> 输出文件名为 message.out。<b><span></span></b> </p> <p class="MsoNormal" align="left" style="text-indent:23.5pt;"> 输出共 1 行，包含 1 个整数，表示游戏一共可以进行多少轮。 <span></span> </p>

## 输入样例

```plaintext
5 2 4 2 3 1
```

## 输出样例

```plaintext
3
```

Hint

<p class="MsoNormal" align="left"> <b>【输入输出样例 </b><b>1</b><b> </b><b>说明】</b><b></b> </p> <p class="MsoNormal" align="left"> <b><img src="/JudgeOnline/upload/image/20170728/20170728210007_24774.jpg" alt="" /><br /> </b> </p> <p class="MsoNormal" align="left"> <b> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 游戏的流程如图所示。当进行完第 3 轮游戏后，4 号玩家会听到 2 号玩家告诉他自己的生日，所以答案为 3。当然，第 3 轮游戏后，2 号玩家、3 号玩家都能从自己的消息 来源得知自己的生日，同样符合游戏结束的条件。 </p> <div class="WordSection1"> <p class="MsoNormal" align="left"> <b>【数据规模与约定】</b><b></b> </p> <p class="MsoNormal" style="text-indent:24.0pt;"> 对于<span> 30%</span>的数据 <i><span>n</span></i><span> ≤200</span>； <span></span> </p> <p class="MsoNormal" style="text-indent:24.0pt;"> 对于<span> 60%</span>的数据，<i><span>n </span></i><span>≤ 2500</span>； <span></span> </p> <p class="MsoNormal" style="text-indent:24.0pt;"> 对于<span> 100%</span>的数据，<i><span>n </span></i><span>≤ 200000</span>。<span></span> </p> </div> <br /> <br /> </b> </p>

## 来源

NOIP2015DAY1（二）

