## 描述

<p class="MsoNormal" align="left"> H 国有 n 个城市，这 n 个城市用 n-1 条双向道路相互连通构成一棵树，1 号城市是首都，也是树中的根节点。 </p> <p class="MsoNormal" align="left"> H 国的首都爆发了一种危害性极高的传染病。当局为了控制疫情，不让疫情扩散到边境城市（叶子节点所表示的城市），决定动用军队在一些城市建立检查点，使得从首都到边境城市的每一条路径上都至少有一个检查点，边境城市也可以建立检查点。但特别要注意的是，首都是不能建立检查点的。 </p> <p class="MsoNormal" align="left"> 现在，在 H国的一些城市中已经驻扎有军队，且一个城市可以驻扎多个军队。一支军队可以在有道路连接的城市间移动，并在除首都以外的任意一个城市建立检查点，且只能在一个城市建立检查点。一支军队经过一条道路从一个城市移动到另一个城市所需要的时间等于道路的长度（单位：小时）。 </p> <p class="MsoNormal" align="left"> 请问最少需要多少个小时才能控制疫情。注意：不同的军队可以同时移动。 </p>

## 输入格式

<p class="MsoNormal" align="left"> 输入文件名为 <span>blockade.in</span>。 </p> <p class="MsoNormal" align="left"> 第一行一个整数 <span>n</span>，表示城市个数。 </p> <p class="MsoNormal" align="left"> 接下来的 <span>n-1 </span>行，每行 <span>3 </span>个整数，u、v、w，每两个整数之间用一个空格隔开，表示从城市 <span>u </span>到城市 <span>v </span>有一条长为 <span>w </span>的道路。数据保证输入的是一棵树，且根节点编号为 <span>1</span>。接下来一行一个整数 <span>m</span>，表示军队个数。接下来一行 <span>m </span>个整数，每两个整数之间用一个空格隔开，分别表示这 <span>m </span>个军队所驻扎的城市的编号。 </p>

## 输出格式

<p class="MsoNormal" align="left"> 输出文件为 blockade.out。 </p> <p class="MsoNormal" align="left"> 共一行，包含一个整数，表示控制疫情所需要的最少时间。如果无法控制疫情则输出-1。 </p>

## 输入样例

```plaintext
4 1 2 1 1 3 2 3 4 3 2 2 2
```

## 输出样例

```plaintext
3
```

Hint

<div class="WordSection1"> <p class="MsoNormal" align="left"> 【输入输出样例说明】 </p> </div> <p class="MsoNormal" align="left"> 第一支军队在 2 号点设立检查点，第二支军队从 2 号点移动到 3 号点设立检查点，所需时间为 3 个小时。 </p> <p class="MsoNormal" align="left"> 【数据范围】 </p> <p class="MsoNormal" align="left"> 保证军队不会驻扎在首都。 </p> <p class="MsoNormal" align="left"> 对于 20%的数据，2≤ n≤ 10； </p> <p class="MsoNormal" align="left"> 对于 40%的数据，2 ≤n≤50，0<w <10<sup>5</sup>； </p> <p class="MsoNormal" align="left"> 对于 60%的数据，2 ≤ n≤1000，0<w <10<sup>6</sup>； </p> <p class="MsoNormal" align="left"> 对于 80%的数据，2 ≤ n≤10,000； </p> <p class="MsoNormal" align="left"> 对于 100%的数据，2≤m≤n≤50,000，0<w <10<sup>9</sup>。 </p>

## 来源

NOIP2012DAY2（三）

