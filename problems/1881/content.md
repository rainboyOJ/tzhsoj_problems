## 描述

<p class="MsoNormal" style="text-indent:21.0pt;"> 春春幼儿园举办了一年一度的“积木大赛”。今年比赛的内容是搭建一座宽度为<span>n</span>的大厦，大厦可以看成由<span>n</span>块宽度为<span>1</span>的积木组成，第i块积木的最终高度需要是ℎi。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 在搭建开始之前，没有任何积木（可以看成块高度为<span> 0 </span>的积木）。接下来每次操作，小朋友们可以选择一段连续区间<span>[L,R]</span>，然后将第<span>L</span>块到第R块之间（含第<span> L </span>块和第<span> R </span>块）所有积木的高度分别增加<span>1</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 小<span>M</span>是个聪明的小朋友，她很快想出了建造大厦的最佳策略，使得建造所需的操作次数最少。但她不是一个勤于动手的孩子，所以想请你帮忙实现这个策略，并求出最少的操作次数。<span></span> </p>

## 输入格式

<p class="MsoNormal" style="text-indent:21.0pt;"> 输入文件为 block.in </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 输入包含两行，第一行包含一个整数<span>n</span>，表示大厦的宽度。 <span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 第二行包含<span>n</span>个整数，第i个整数为ℎi。<span></span> </p>

## 输出格式

<p class="MsoBodyText" style="margin-left:0cm;text-indent:20.6pt;"> 输出文件为 block.out </p> <p class="MsoBodyText" style="margin-left:0cm;text-indent:20.6pt;"> 仅一行，即建造所需的最少操作数。<span></span> </p>

## 输入样例

```plaintext
5 2 3 4 1 2
```

## 输出样例

```plaintext
5
```

Hint

<p class="MsoBodyText" style="margin-left:0cm;"> <b>【样例解释】<span></span></b> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 其中一种可行的最佳方案，依次选择 </p> <p class="MsoNormal" style="text-indent:21.0pt;"> [1,5]   [1,3]   [2,3]   [3,3]   [5,5] </p> <p class="MsoNormal"> <b>【数据范围】<span></span></b> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于<span> 30%</span>的数据，有<span>1 ≤ n ≤ 10</span>； <span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于 70%的数据，有1 ≤ n ≤ 1000； </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于 100%的数据，有1 ≤ n ≤ 100000，0 ≤ hi≤10000。 </p>

## 来源

NOIP2013DAY2（一）

