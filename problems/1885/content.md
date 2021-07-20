## 描述

<p class="MsoNormal" style="margin-left:2.75pt;text-align:justify;text-indent:-.5pt;">     恰逢 H 国国庆，国王邀请 n 位大臣来玩一个有奖游戏。首先，他让每个大臣在左、右手上面分别写下一个整数，国王自己也在左、右手上各写一个整数。然后，让这 n 位大臣排成一排，国王站在队伍的最前面。排好队后，所有的大臣都会获得国王奖赏的若干金币，每位大臣获得的金币数分别是：<b>排在该大臣前面的所有人的左手上的数的乘积除以他自己右手上的数，然后向下取整得到的结果</b>。 </p> <p class="MsoNormal" style="margin-left:2.75pt;text-align:justify;text-indent:-.5pt;">     国王不希望某一个大臣获得特别多的奖赏，所以他想请你帮他重新安排一下队伍的顺序，使得获得奖赏最多的大臣，所获奖赏尽可能的少。注意，国王的位置始终在队伍的最前面。 </p>

## 输入格式

<p class="MsoNormal" style="margin-left:24.45pt;text-indent:-.5pt;"> 输入文件为 game.in。 </p> <p class="MsoNormal" style="margin-left:24.45pt;text-indent:-.5pt;"> 第一行包含一个整数 n，表示大臣的人数。 </p> <p class="MsoNormal" style="margin-left:24.45pt;text-indent:-.5pt;"> 第二行包含两个整数 a 和 b，之间用一个空格隔开，分别表示国王左手和右手上的整数。 接下来 n 行，每行包含两个整数 a 和 b，之间用一个空格隔开，分别表示每个大臣左手和右手上的整数。 </p> <p class="MsoNormal" style="margin-left:24.0pt;"> <span></span> </p>

## 输出格式

<p class="MsoNormal"> 输出文件名为 game.out。 </p> <p class="MsoNormal"> 输出只有一行，包含一个整数，表示重新排列后的队伍中获奖赏最多的大臣所获得的金币数。 </p> <p class="MsoNormal"> <span></span> </p>

## 输入样例

```plaintext
3 1 1 2 3 7 4 4 6
```

## 输出样例

```plaintext
2
```

Hint

<p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21.0pt;"> 【输入输出样例说明】 </p> <p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21.0pt;"> 按<span>1</span>、<span>2</span>、<span>3</span>号大臣这样排列队伍，获得奖赏最多的大臣所获得金币数为<span>2</span>； </p> <p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21.0pt;"> 按<span>1</span>、<span>3</span>、<span>2</span>这样排列队伍，获得奖赏最多的大臣所获得金币数为<span>2</span>； </p> <p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21.0pt;"> 按<span>2</span>、<span>1</span>、<span>3</span>这样排列队伍，获得奖赏最多的大臣所获得金币数为<span>2</span>； </p> <p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21.0pt;"> 按<span>2</span>、<span>3</span>、<span>1</span>这样排列队伍，获得奖赏最多的大臣所获得金币数为<span>9</span>； </p> <p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21.0pt;"> 按<span>3</span>、<span>1</span>、<span>2</span>这样排列队伍，获得奖赏最多的大臣所获得金币数为<span>2</span>； </p> <p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21.0pt;"> 按<span>3</span>、<span>2</span>、<span>1</span>这样排列队伍，获得奖赏最多的大臣所获得金币数为<span>9</span>。 </p> <p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21.0pt;"> 因此，奖赏最多的大臣最少获得 2 个金币，答案输出 2。 </p> <p class="MsoNormal"> 【数据范围】 <span></span> </p> <p class="MsoNormal" style="margin-left:24.45pt;text-indent:-.5pt;"> 对于 20%的数据，有 1≤ n≤ 10，0<a、b<8； 对于 40%的数据，有 1≤ n≤20，0 < a、b < 8； 对于 60%的数据，有 1≤ n≤100； 对于 60%的数据，保证答案不超过 10<sup>9</sup>； <span></span> </p> <p class="MsoNormal" style="margin-left:24.45pt;text-indent:-.5pt;"> 对于 100%的数据，有 1 ≤ n ≤1,000，0< a、b<10000。 <b> </b> </p>

## 来源

NOIP2012DAY1（二）

