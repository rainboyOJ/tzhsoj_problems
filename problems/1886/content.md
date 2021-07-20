## 描述

<p class="MsoNormal" style="margin-left:2.75pt;text-align:justify;text-indent:-.5pt;"> <img src="/JudgeOnline/upload/image/20170729/20170729115326_30018.png" alt="" width="600" height="89" title="" align="" /> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 旅行过程中，小 A 和小 B 轮流开车，第一天小 A 开车，之后每天轮换一次。他们计划选择一个城市 S 作为起点，一直向东行驶，并且最多行驶 X 公里就结束旅行。小 A 和小 B 的驾驶风格不同，小 B 总是沿着前进方向选择一个最近的城市作为目的地，而小 A 总是沿着前进方向选择第二近的城市作为目的地（注意：本题中如果当前城市到两个城市的距离相同，则认为离海拔低的那个城市更近）。如果其中任何一人无法按照自己的原则选择目的城市，或者到达目的地会使行驶的总距离超出 X 公里，他们就会结束旅行。 <span></span> </p> <p class="MsoNormal" style="margin-left:24.0pt;"> 在启程之前，小 A 想知道两个问题： <span></span> </p> <p class="MsoNormal" style="margin-left:2.25pt;text-align:justify;text-indent:21.0pt;"> 1．对于一个给定的 X=X<sub>0</sub>，从哪一个城市出发，小 A 开车行驶的路程总数与小 B 行驶的路程总数的比值最小（如果小 B 的行驶路程为 0，此时的比值可视为无穷大，且两个无穷大视为相等）。如果从多个城市出发，小 A 开车行驶的路程总数与小 B 行驶的路程总数的比值都最小，则输出海拔最高的那个城市。 <span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 2. 对任意给定的 X=X<sub>i </sub>和出发城市 S<sub>i</sub>，小 A 开车行驶的路程总数以及小 B 行驶的路程总数。 <span></span> </p>

## 输入格式

<p class="MsoNormal" style="margin-left:24.45pt;text-indent:-.5pt;"> 输入文件为 drive.in。 <span></span> </p> <p class="MsoNormal" style="margin-left:24.0pt;"> 第一行包含一个整数 N，表示城市的数目。 <span></span> </p> <p class="MsoNormal" style="margin-left:24.0pt;"> 第二行有 N 个整数，每两个整数之间用一个空格隔开，依次表示城市 1 到城市 N 的海<span>拔高度，即 H</span><sub>1</sub><span>，H</span><sub>2</sub><span>，</span><span>……</span><span>，H</span><sub>n</sub><span>，且每个 H</span><sub>i </sub><span>都是不同的。 第三行包含一个整数 X</span><sub>0</sub><span>。 第四行为一个整数 M，表示给定 M 组 S</span><sub>i </sub><span>和 X</span><sub>i</sub><span>。</span> </p> <p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21.0pt;"> <span></span> </p> <p class="MsoNormal" style="margin-left:24.0pt;"> 接下来的 M 行，每行包含 2 个整数 S<sub>i </sub>和 X<sub>i</sub>，表示从城市 S<sub>i </sub>出发，最多行驶 X<sub>i </sub>公里。 <span></span> </p>

## 输出格式

<p class="MsoNormal"> 输出文件为 drive.out。 </p> <p class="MsoNormal"> 输出共 M+1 行。 </p> <p class="MsoNormal"> 第一行包含一个整数 S<sub>0</sub>，表示对于给定的 X<sub>0</sub>，从编号为 S<sub>0 </sub>的城市出发，小 A 开车行驶<span>的路程总数与小 B 行驶的路程总数的比值最小。</span> </p> <p class="MsoNormal"> <span>接下来的 M 行，每行包含 2 个整数，之间用一个空格隔开，依次表示在给定的 S</span><sub>i </sub><span>和</span>X<sub>i </sub>下小 A 行驶的里程总数和小 B 行驶的里程总数。   </p> <p class="MsoNormal"> <span></span> </p>

## 输入样例

```plaintext
【输入输出样例 1】 4 2 3 1 4 3 4 1 3 2 3 3 3 4 3 【输入输出样例 2】 10 4 5 6 1 2 3 7 8 9 10 7 10 1 7 2 7 3 7 4 7 5 7 6 7 7 7 8 7 9 7 10 7
```

## 输出样例

```plaintext
【输入输出样例 1】 1 1 1 2 0 0 0 0 0 【输入输出样例 2】 2 3 2 2 4 2 1 2 4 5 1 5 1 2 1 2 0 0 0 0 0
```

Hint

<p class="MsoNormal"> 【输入输出样例 1 说明】 <span></span> </p> <p class="MsoNormal"> <img src="/JudgeOnline/upload/image/20170729/20170729113402_19205.jpg" alt="" /> </p> <p class="MsoNormal"> 各个城市的海拔高度以及两个城市间的距离如上图所示。 </p> <p class="MsoNormal"> <span>如果从城市1出发，可以到达的城市为 2,3,4，这几个城市与城市1的距离分别为 1,1,2，但是由于城市3的海拔高度低于城市2，所以我们认为城市3离城市1最近，城市2离城市1第二近，所以小A会走到城市2。到达城市2后，前面可以到达的城市为3,4，这两个城市与城市2的距离分别为 2,1，所以城市4离城市2最近，因此小B会走到城市4。到达城市4后，前面已没有可到达的城市，所以旅行结束。</span> </p> <p class="MsoNormal"> <span>如果从城市2出发，可以到达的城市为3,4，这两个城市与城市2的距离分别为 2,1，由于城市3离城市2第二近，所以小A会走到城市3。到达城市3后，前面尚未旅行的城市为4，所以城市4离城市3最近，但是如果要到达城市4，则总路程为 2+3=5>3，所以小B会直接在城市3结束旅行。</span> </p> <p class="MsoNormal"> <span>如果从城市3出发，可以到达的城市为4，由于没有离城市3第二近的城市，因此旅行还未开始就结束了。</span> </p> <p class="MsoNormal"> <span>如果从城市4出发，没有可以到达的城市，因此旅行还未开始就结束了。</span> </p> <p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21pt;"> 【输入输出样例 2 说明】 </p> <p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21pt;"> 当X=7 时， </p> <p class="MsoNormal" style="text-indent:21pt;"> 如果从城市 1 出发，则路线为 1 -> 2 -> 3 -> 8 -> 9，小 A 走的距离为 1+2=3，小 B 走的距离为 1+1=2。（在城市 1 时，距离小 A 最近的城市是 2 和 6，但是城市 2 的海拔更高，视为与城市 1 第二近的城市，所以小 A 最终选择城市 2；走到 9 后，小 A 只有城市 10 可以走，没有第 2 选择可以选，所以没法做出选择，结束旅行） </p> <p class="MsoNormal" style="text-indent:21pt;"> 如果从城市 2 出发，则路线为 2 -> 6 -> 7 ，小 A 和小 B 走的距离分别为 2，4。 </p> <p class="MsoNormal" style="text-indent:21pt;"> 如果从城市 3 出发，则路线为 3 -> 8 -> 9，小 A 和小 B 走的距离分别为 2，1。 </p> <p class="MsoNormal" style="text-indent:21pt;"> 如果从城市 4 出发，则路线为 4 -> 6 -> 7，小 A 和小 B 走的距离分别为 2，4。 </p> <p class="MsoNormal" style="text-indent:21pt;"> 如果从城市 5 出发，则路线为 5 -> 7 -> 8 ，小 A 和小 B 走的距离分别为 5，1。 </p> <p class="MsoNormal" style="text-indent:21pt;"> 如果从城市 6 出发，则路线为 6 -> 8 -> 9，小 A 和小 B 走的距离分别为 5，1。 </p> <p class="MsoNormal" style="text-indent:21pt;"> 如果从城市 7 出发，则路线为 7 -> 9 -> 10，小 A 和小 B 走的距离分别为 2，1。 </p> <p class="MsoNormal" style="text-indent:21pt;"> 如果从城市 8 出发，则路线为 8 -> 10，小 A 和小 B 走的距离分别为 2，0。 </p> <p class="MsoNormal" style="text-indent:21pt;"> 如果从城市 9 出发，则路线为 9，小 A 和小 B 走的距离分别为 0，0（旅行一开始就结束了）。 </p> <p class="MsoNormal" style="text-indent:21pt;"> 如果从城市 10 出发，则路线为 10，小 A 和小 B 走的距离分别为 0，0。 </p> <p class="MsoNormal" style="text-indent:21pt;"> 从城市 2 或者城市 4 出发小 A 行驶的路程总数与小 B 行驶的路程总数的比值都最小，但是城市 2 的海拔更高，所以输出第一行为 2。 </p> <p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21pt;"> 【数据范围】 </p> <p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21pt;"> 对于 30%的数据，有 1≤N≤20，1≤M≤20； </p> <p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21pt;"> 对于 40%的数据，有 1≤N≤100，1≤M≤100； </p> <p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21pt;"> 对于 50%的数据，有 1≤N≤100，1≤M≤1,000；  </p> <p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21pt;"> 对于 70%的数据，有 1≤N≤1,000，1≤M≤10,000； </p> <p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21pt;"> 对于 100%的数据，有 1≤N≤100,000，1≤M≤10,000，-1,000,000,000≤H<sub>i</sub>≤1,000,000,000， </p> <p class="MsoNormal" style="margin-left:23.25pt;text-indent:-21pt;"> 0≤X<sub>0</sub>≤1,000,000,000，1≤S<sub>i</sub>≤N，0≤X<sub>i</sub>≤1,000,000,000，数据保证 H<sub>i </sub>互不相同。 </p>

## 来源

NOIP2012DAY1（三）

