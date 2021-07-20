## 描述

<p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 小<span> B </span>最近迷上了华容道，可是他总是要花很长的时间才能完成一次。于是，他想到用编程来完成华容道：给定一种局面，华容道是否根本就无法完成，如果能完成，最少需要多少时间。<span></span> </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 小 B 玩的华容道与经典的华容道游戏略有不同，游戏规则是这样的： </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 1.  在一个 n*m 棋盘上有 n*m 个格子，其中有且只有一个格子是空白的，其余 n*m-1个格子上每个格子上有一个棋子，每个棋子的大小都是 1*1 的； </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 2.  有些棋子是固定的，有些棋子则是可以移动的； </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 3.  任何与空白的格子相邻（有公共的边）的格子上的棋子都可以移动到空白格子上。游戏的目的是把某个指定位置可以活动的棋子移动到目标位置。 </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 给定一个棋盘，游戏可以玩<span> q </span>次，当然，每次棋盘上固定的格子是不会变的，但是棋盘上空白的格子的初始位置、指定的可移动的棋子的初始位置和目标位置却可能不同。第<span> i </span>次玩的时候，空白的格子在第<span> EX<sub>i</sub> </span>行第<span> EY<sub>i</sub> </span>列，指定的可移动棋子的初始位置为第<span> SX<sub>i</sub> </span>行第<span> SY<sub>i</sub> </span>列，目标位置为第<span> TX<sub>i</sub> </span>行第<span> TY<sub>i</sub> </span>列。<span></span> </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 假设小 B 每秒钟能进行一次移动棋子的操作，而其他操作的时间都可以忽略不计。请你告诉小<span> B </span>每一次游戏所需要的最少时间，或者告诉他不可能完成游戏。<span></span> </p>

## 输入格式

<p class="MsoBodyText" style="margin-left:0cm;text-align:justify;text-indent:20.6pt;"> 输入文件为 puzzle.in。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;text-indent:20.8pt;"> 第一行有 <span>3 </span>个整数，每两个整数之间用一个空格隔开，依次表示 n、<span>m</span> 和 <span>q</span>；<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;text-indent:20.8pt;"> 接下来的 <span>n </span>行描述一个 n*m 的棋盘，每行有 <span>m </span>个整数，每两个整数之间用一个空格隔开，每个整数描述棋盘上一个格子的状态，<span>0</span> 表示该格子上的棋子是固定的，<span>1</span> 表示该格子上的棋子可以移动或者该格子是空白的。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;text-indent:20.8pt;"> 接下来的 <span>q </span>行，每行包含 <span>6 </span>个整数依次是 EXi、<span>EYi</span>、<span>SXi</span>、<span>SYi</span>、<span>TXi</span>、<span>TYi</span>，每两个整数之间用一个空格隔开，表示每次游戏空白格子的位置，指定棋子的初始位置和目标位置。 </p>

## 输出格式

<p class="MsoNormal" style="text-indent:22.0pt;"> 输出文件名为<span> puzzle.out</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:22.0pt;"> 输出有<span> q </span>行，每行包含<span> 1 </span>个整数，表示每次游戏所需要的最少时间，如果某次游戏无法完成目标则输出<span>−1</span>。<span></span> </p>

## 输入样例

```plaintext
3 4 2 0 1 1 1 0 1 1 0 0 1 0 0 3 2 1 2 2 2 1 2 2 2 3 2
```

## 输出样例

```plaintext
2 -1
```

Hint

<p class="MsoBodyText" style="margin-left:0cm;"> <b>【输入输出样例说明】</b><b> <span></span></b> </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 棋盘上划叉的格子是固定的，红色格子是目标位置，圆圈表示棋子，其中绿色圆圈表示目标棋子。<span></span> </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 1. 第一次游戏，空白格子的初始位置是<span>  (3,2)</span>（图中空白所示），游戏的目标是将初始位置在<span>(1,2)</span>上的棋子（图中绿色圆圈所代表的棋子）移动到目标位置<span>(2,2)</span>（图中红色的格子）上。<span></span> </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 移动过程如下：<span></span> </p> <p class="MsoNormal" style="text-align:left;text-indent:52.5pt;"> 初始状态<span>                                       </span>第一步之后<span>                          </span>第二步之后<img src="/JudgeOnline/upload/image/20170729/20170729092137_18992.png" alt="" /> </p> <p class="MsoNormal" style="text-align:justify;text-indent:52.5pt;"> <br /> </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 2. 第二次游戏，空白格子的初始位置是（<span>1,2</span>）（图中空白所示），游戏的目标是将初始位置在（<span>2,2</span>）上的棋子（图中绿色圆圈所示）移动到目标位置<span>  (3,2)</span>上。<span></span> </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 初始状态 </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> <img src="/JudgeOnline/upload/image/20170729/20170729092227_96523.png" alt="" /> </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 要将指定块移入目标位置，必须先将空白块移入目标位置，空白块要移动到目标位置，必然是从位置（<span>2</span>，<span> 2</span>）上与当前图中目标位置上的棋子交换位置，之后能与空白块交换位置的只有当前图中目标位置上的那个棋子，因此目标棋子永远无法走到它的目标位置， 游戏无法完成。 </p> <p class="MsoNormal" style="text-align:justify;"> <b>【数据范围】<span></span></b> </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 对于<span> 30%</span>的数据，<span>1 </span>≤<span> n, m </span>≤<span> 10</span>，<span>q = 1</span>；<span></span> </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 对于<span> 60%</span>的数据，<span>1 </span>≤<span> n, m </span>≤<span> 30</span>，<span>q </span>≤<span> 10</span>；<span></span> </p> <p class="MsoNormal" style="text-align:justify;text-indent:21.0pt;"> 对于<span> 100%</span>的数据，<span>1 </span>≤<span> n, m </span>≤<span> 30</span>，<span>q </span>≤<span> 500</span>。 </p>

## 来源

NOIP2013DAY2（三）

