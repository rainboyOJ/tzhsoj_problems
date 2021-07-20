## 描述

<p class="MsoBodyText" style="margin-left:0cm;"> Kiana 最近沉迷于一款神奇的游戏无法自拔。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 简单来说，这款游戏是在一个平面上进行的。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 有一架弹弓位于 (0, 0) 处，每次 Kiana 可以用它向第一象限发射一只红色的小鸟，小鸟们的飞行轨迹均为形如 y = ax<sup>2</sup> + bx 的曲线，其中 a, b 是 Kiana 指定的参数，且必须满足 a < 0。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 当小鸟落回地面（即 x 轴）时，它就会瞬间消失。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 在游戏的某个关卡里，平面的第一象限中有 n 只绿色的小猪，其中第 i 只小猪所在的坐标为 (xi, yi)。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 如果某只小鸟的飞行轨迹经过了 (xi, yi) ，那么第 i 只小猪就会被消灭掉，同时小鸟将会沿着原先的轨迹继续飞行；<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 如果一只小鸟的飞行轨迹没有经过 (xi, yi) ，那么这只小鸟飞行的全过程就不会对第 i 只小猪产生任何影响。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 例如，若两只小猪分别位于 (1, 3) 和 (3, 3) ，Kiana 可以选择发射一只飞行轨迹为 y = </p> <p class="MsoBodyText" style="margin-left:0cm;"> −x<sup>2</sup> + 4x 的小鸟，这样两只小猪就会被这只小鸟一起消灭。 </p> <p class="MsoBodyText" style="margin-left:0cm;"> 而这个游戏的目的，就是通过发射小鸟消灭所有的小猪。 </p> <p class="MsoBodyText" style="margin-left:0cm;"> 这款神奇游戏的每个关卡对 Kiana 来说都很难，所以 Kiana 还输入了一些神秘的指令，使得自己能更轻松地完成这个游戏。这些指令将在【输入格式】中详述。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 假设这款游戏一共有 T 个关卡，现在 Kiana 想知道，对于每一个关卡，至少需要发射多少只小鸟才能消灭所有的小猪。由于她不会算，所以希望由你告诉她。<span></span> </p>

## 输入格式

<div class="WordSection1"> <p class="MsoNormal" style="margin-left:0cm;"> 从文件 <b><i>angrybirds.in</i></b><b><i> </i></b>中读入数据。 </p> <p class="MsoNormal" style="margin-left:0cm;"> 第一行包含一个正整数 <i>T </i>，表示游戏的关卡总数。 </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> 下面依次输入这 <i>T </i>个关卡的信息。每个关卡第一行包含两个非负整数 <i>n</i>, <i>m </i>，分别表示该关卡中的小猪数量和 Kiana 输入的神秘指令类型。接下来的 <i>n </i>行中，第 <i>i </i>行包含两个正实数 <i>x<sub>i</sub></i>, <i>y<sub>i</sub> </i>，表示第 <i>i </i>只小猪坐标为 (<i>x<sub>i</sub></i>, <i>y<sub>i</sub></i>) 。数据保证同一个关卡中不存在两只坐标完全相同的小猪。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 如果<i>m</i> = 0 ，表示 Kiana 输入了一个没有任何作用的指令。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 如果<i>m</i> = 1 ，则这个关卡将会满足：至多用「<i>n</i>/3 + 1¬只小鸟即可消灭所有小猪。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 如果<i>m</i> = 2 ，则这个关卡将会满足：一定存在一种最优解，其中有一只小鸟消灭了至少L<i>n</i>/3J 只小猪。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> 保证 1 ≤ <i>n </i>≤ 18 ， 0 ≤ <i>m </i>≤ 2 ， 0 < <i>x<sub>i</sub></i>, <i>y<sub>i</sub> </i>< 10 ，输入中的实数均保留到小数点后两 位。<span></span> </p> </div> <p class="MsoBodyText" style="margin-left:0cm;"> 上文中，符号 「<i>c</i>¬ 和 L<i>c</i>J 分别表示对 <i>c </i>向上取整和向下取整，例如： 「2.1¬ = 「2.9¬ =「3.0¬ = L3.0J = L3.1J = L3.9J = 3 。 </p>

## 输出格式

<p class="MsoBodyText" style="margin-left:0cm;"> 输出到文件<b><i> angrybirds.out </i></b>中。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 对每个关卡依次输出一行答案。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 输出的每一行包含一个正整数，表示相应的关卡中，消灭所有小猪最少需要的小鸟数量。<span></span> </p>

## 输入样例

```plaintext
【样例 1 输入】 2 2 0 1.00 3.00 3.00 3.00 5 2 1.00 5.00 2.00 8.00 3.00 9.00 4.00 8.00 5.00 5.00 【样例 2 输入】 3 2 0 1.41 2.00 1.73 3.00 3 0 1.11 1.41 2.34 1.79 2.98 1.49 5 0 2.72 2.72 2.72 3.14 3.14 2.72 3.14 3.14 5.00 5.00 【样例 3 输入】 1 10 0 7.16 6.28 2.02 0.38 8.33 7.78 7.68 2.09 7.46 7.86 5.77 7.44 8.24 6.72 4.42 5.11 5.42 7.79 8.15 4.99
```

## 输出样例

```plaintext
【样例 1 输出】 1 1 【样例 2 输出】 2 2 3 【样例 3 输出】 6
```

Hint

<div class="WordSection1"> <p class="41" style="margin-left:0cm;"> 【样例<span> 1 </span>说明】<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 这组数据中一共有两个关卡。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 第一个关卡与【问题描述】中的情形相同，2只小猪分别位于(1.00,3.00)和(3.00,3.00)，只需发射一只飞行轨迹为y = −x<sup>2</sup> + 4x的小鸟即可消灭它们。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 第二个关卡中有 5 只小猪，但经过观察我们可以发现它们的坐标都在抛物线y = −x<sup>2</sup> + 6x上，故 Kiana 只需要发射一只小鸟即可消灭所有小猪。<span></span> </p> </div> <br />

## 来源

NOIP2016DAY2（三）

