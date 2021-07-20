## 描述

<p class="MsoNormal" style="text-indent:21.0pt;"> <br /> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> Flappy Bird 是一款风靡一时的休闲手机游戏。玩家需要不断控制点击手机屏幕的频率来调节小鸟的飞行高度，让小鸟顺利通过画面右方的管道缝隙。如果小鸟一不小心撞到了水管或者掉在地上的话，便宣告失败。 </p> <p class="MsoNormal" style="text-align:center;text-indent:21pt;"> <img src="/JudgeOnline/upload/image/20170728/20170728223525_49435.png" alt="" /> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 为了简化问题，我们对游戏规则进行了简化和改编：<span></span> </p> <p class="ListParagraph" style="margin-left:42.0pt;text-indent:-21.0pt;"> 1.   游戏界面是一个长为<span>n</span>，高 为<span>m</span>的二维平面，其中有<span>k</span>个管道（忽略管道的宽度）。<span></span> </p> <p class="ListParagraph" style="margin-left:42.0pt;text-indent:-21.0pt;"> 2.   小鸟始终在游戏界面内移动。小鸟从游戏界面最左边任意整数高度位置出发，到达游戏界面最右边时，游戏完成。<span></span> </p> <p class="ListParagraph" style="margin-left:42.0pt;text-indent:-21.0pt;"> 3.   小鸟每个单位时间沿横坐标方向右移的距离为<span>1</span>，竖直移动的距离由玩家控制。如果点击屏幕，小鸟就会上升一定高度<span>X</span>，每个单位时间可以点击多次，效果叠加；如果不点击屏幕，小鸟就会下降一定高度<span>Y</span>。小鸟位于横坐标方向不同位置时，上升的高度<span>X</span>和下降的高度<span>Y</span>可能互不相同。<span></span> </p> <p class="ListParagraph" style="margin-left:42.0pt;text-indent:-21.0pt;"> 4.   小鸟高度等于<span>0</span>或者小鸟碰到管道时，游 戏 失 败 。小 鸟 高 度 为<span>m</span>时，无法再上升。 </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 现在，请你判断是否可以完成游戏。如果可以，输出最少点击屏幕数；否则，输出小鸟<span>最多可以通过多少个管道缝隙。</span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> <span></span> </p>

## 输入格式

<p class="MsoNormal" style="text-indent:21.0pt;"> 输入文件名为<span> bird.in</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 第<span>1</span>行有<span>3</span>个整数<span>n</span>，<span>m</span>，<span>k</span>，分别表示游戏界面的长度，高度和水管的数量，每两个整数之间用一个空格隔开；<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 接下来的<span>n</span>行，每行<span>2</span>个用一个空格隔开的整数<span>X</span>和<span>Y</span>，依次表示在横坐标位置<span>0~n-1</span>上玩家点击屏幕后，小鸟在下一位置上升的高度<span>X</span>，以及在这个位置上玩家不点击屏幕时，小鸟在下一位置下降的高度<span>Y</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 接下来<span>k</span>行，每行<span>3</span>个整数<span>P</span>，<span>L</span>，<span>H</span>，每两个整数之间用一个空格隔开。每行表示一个管道，其中<span>P</span>表示管道的横坐标，<span>L</span>表示此管道缝隙的下边沿高度为<span>L</span>，<span>H</span>表示管道缝隙上边沿的高度（输入数据保证<span>P</span>各不相同，但不保证按照大小顺序给出）。<span></span> </p>

## 输出格式

<p class="MsoNormal" style="text-indent:21.0pt;"> 输出文件名为<span>bird.out</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 共两行。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 第一行，包含一个整数，如果可以成功完成游戏，则输出<span>1</span>，否则输出<span>0</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 第二行，包含一个整数，如果第一行为<span>1</span>，则输出成功完成游戏需要最少点击屏幕数，否则，输出小鸟最多可以通过多少个管道缝隙。<span></span> </p>

## 输入样例

```plaintext
【输入输出样例1】 10 10 6 3 9 9 9 1 2 1 3 1 2 1 1 2 1 2 1 1 6 2 2 1 2 7 5 1 5 6 3 5 7 5 8 8 7 9 9 1 3 【输入输出样例2】 10 10 4 1 2 3 1 2 2 1 8 1 8 3 2 2 1 2 1 2 2 1 2 1 0 2 6 7 9 9 1 4 3 8 10
```

## 输出样例

```plaintext
【输入输出样例1】 1 6 【输入输出样例2】 0 3
```

Hint

<p class="MsoNormal"> <b>【输入输出样例说明】<span></span></b> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 如下图所示，蓝色直线表示小鸟的飞行轨迹，红色直线表示管道。 <span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> <img src="/JudgeOnline/upload/image/20170728/20170728223654_86511.png" alt="" /> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> <p class="MsoNormal"> 【数据范围】<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于<span>30%</span>的数据：<span>5</span>≤<span>n</span>≤<span>10</span>，<span>5</span>≤<span>m</span>≤<span>10</span>，<span>k=0</span>，保证存在一组最优解使得同一单位时间最多点击屏幕<span>3</span>次； <span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于<span>50%</span>的数据：<span>5</span>≤<span>n</span>≤<span>20</span>，<span>5</span>≤<span>m</span>≤<span>10</span>，保证存在一组最优解使得同一单位时间最多点击屏幕<span>3</span>次；<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于<span>70%</span>的数据：<span>5</span>≤<span>n</span>≤<span>1000</span>，<span>5</span>≤<span>m</span>≤<span>100</span>；<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于<span>100%</span>的数据：<span>5</span>≤<span>n</span>≤<span>10000</span>，<span>5</span>≤<span>m</span>≤<span>1000</span>，<span>0</span>≤<span>k<n</span>，<span>0<X<m</span>，<span>0<Y<m</span>，<span>0<P<n</span>，<span>0</span>≤<span>L<H </span>≤<span>m</span>，<span>L+1<H</span>。<span></span> </p> </p>

## 来源

NOIP2014DAY1（三）

