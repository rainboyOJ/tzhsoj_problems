## 描述

<p align="left" class="MsoNormal" style="text-indent:24pt;"> 幻方是一种很神奇的<span> N*N </span>矩阵：它由数字 1,2,3, … … , N*N 构成，且每行、每列及两条对角线上的数字之和都相同。 </p> <p align="left" class="MsoNormal" style="text-indent:24pt;"> 当<span>N</span>为奇数时，我们可以通过以下方法构建一个幻方： <span></span> </p> <p align="left" class="MsoNormal" style="text-indent:24pt;"> 首先将 1 写在第一行的中间。 </p> <p align="left" class="MsoNormal" style="text-indent:24pt;"> 之后，按如下方式从小到大依次填写每个数<span>K</span>(K= 2,3, … , N*N )： </p> <p class="MsoNormal" style="text-indent:-18pt;margin-left:46pt;"> 1.  若 (K−1) 在第一行但不在最后一列，则将<span>K</span>填在最后一行，(K− 1) 所在列的右一列； </p> <p class="MsoNormal" style="text-indent:-18pt;margin-left:46pt;"> 2.  若 (K− 1) 在最后一列但不在第一行，则将<span>K</span>填在第一列，(K− 1) 所在行的上一行； </p> <p align="left" class="MsoNormal" style="text-indent:-18pt;margin-left:46pt;"> 3.  若 (K− 1) 在第一行最后一列，则将<span>K</span>填在 (K− 1) 的正下方； </p> <p class="MsoNormal" style="text-indent:-18pt;margin-left:46pt;"> 4.  若 (K− 1) 既不在第一行，也不在最后一列，如果 (K− 1) 的右上方还未填数， 则将K填在(K− 1)的右上方，否则将<span>K</span>填在 (K− 1) 的正下方 </p> <p class="MsoNormal" style="margin-left:28pt;"> 现给定<span>N</span>，请按上述方法构造<span> N*N </span>的幻方。 </p>

## 输入格式

<p align="left" class="MsoNormal" style="margin-left:27pt;"> 输入文件名为 magic.in。 </p> <p align="left" class="MsoNormal" style="margin-left:27pt;"> 输入文件只有一行，包含一个整数<span>N</span>，即幻方的大小。 </p>

## 输出格式

<p align="left" class="MsoNormal" style="margin-left:27pt;"> 输出文件名为 magic.out。 </p> <p align="left" class="MsoNormal" style="text-indent:21pt;"> 输出文件包含<span>N</span>行，每行<span>N</span>个整数，即按上述方法构造出的<span>N*N</span>的幻方。相邻 两个整数之间用单个空格隔开。 </p>

## 输入样例

```plaintext
3
```

## 输出样例

```plaintext
8 1 6 3 5 7 4 9 2
```

Hint

<p align="left" class="MsoNormal" style="margin-left:27pt;"> 对于 100% 的数据，1 ≤N≤39 且<span>N</span>为奇数。 </p>

## 来源

NOIP2015DAY2（一）

