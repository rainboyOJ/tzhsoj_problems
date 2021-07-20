## 描述

<p class="MsoNormal" style="text-indent:21.0pt;"> 涵涵有两盒火柴，每盒装有<span> n </span>根火柴，每根火柴都有一个高度。现在将每盒中的火柴各自排成一列，同一列火柴的高度互不相同，两列火柴之间的距离定义为：<img src="/JudgeOnline/upload/image/20170729/20170729085742_37065.png" alt="" /><span>，其中</span><span> ai </span><span>表示第一列火柴中第</span><span> i </span><span>个火柴的高度，</span><span>bi </span><span>表示第二列火柴中第</span><span> i </span><span>个火柴的高度。</span><span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 每列火柴中相邻两根火柴的位置都可以交换，请你通过交换使得两列火柴之间的距离最 小。请问得到这个最小的距离，最少需要交换多少次？<b>如果这个数字太大，请输出这个最小交换次数对<span> 99,999,997 </span>取模的结果。<span></span></b> </p>

## 输入格式

<p class="MsoBodyText" style="margin-left:0cm;text-indent:20.6pt;"> 输入文件为 match.in。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-indent:20.6pt;"> 共三行，第一行包含一个整数 n，表示每盒中火柴的数目。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-indent:20.8pt;"> 第二行有 n 个整数，每两个整数之间用一个空格隔开，表示第一列火柴的高度。 <span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-indent:20.8pt;"> 第三行有 n 个整数，每两个整数之间用一个空格隔开，表示第二列火柴的高度。<span></span> </p>

## 输出格式

<p class="MsoBodyText" style="margin-left:0cm;text-indent:20.6pt;"> 输出文件为 match.out。<span></span> </p> <p class="MsoNormal" style="text-indent:20.8pt;"> 输出共一行，包含一个整数，表示<b><u>最少交换次数对</u></b><b><u> </u></b><b><u>99,999,997</u></b><b><u> </u></b><b><u>取模的结果</u></b>。 </p>

## 输入样例

```plaintext
【输入输出样例 1】 4 2 3 1 4 3 2 1 4 【输入输出样例 2】 4 1 3 4 2 1 7 2 4 
```

## 输出样例

```plaintext
【输入输出样例 1】 1 【输入输出样例 2】 2
```

Hint

<p class="MsoBodyText" style="margin-left:0cm;"> <b>【输入输出样例1说明】</b><b><span></span></b> </p> <p class="MsoBodyText" style="margin-left:0cm;text-indent:20.6pt;"> 最小距离是 0，最少需要交换 1 次，比如：交换第 1 列的前 2 根火柴或者交换第 2 列的前 2 根火柴。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-indent:20.6pt;"> <br /> </p> <p class="MsoBodyText" style="margin-left:0cm;"> <b>【输入输出样例2说明】</b><b><span></span></b> </p> <p class="MsoNormal" style="text-indent:22.0pt;"> 最小距离是<span> 10</span>，最少需要交换<span> 2 </span>次，比如：交换第<span> 1 </span>列的中间<span> 2 </span>根火柴的位置，再交换第<span> 2 </span>列中后<span> 2 </span>根火柴的位置。<span></span> </p> <p class="MsoNormal" style="text-indent:22.0pt;"> <p class="MsoNormal"> <b>【数据范围】</b><b><span></span></b> </p> <p class="MsoNormal" style="text-indent:22.0pt;"> 对于<span> 10%</span>的数据，<span> 1 ≤ n ≤ 10</span>；<span></span> </p> <p class="MsoNormal" style="text-indent:22.0pt;"> 对于<span> 30%</span>的数据，<span>1 ≤ n ≤ 100</span>；<span></span> </p> <p class="MsoNormal" style="text-indent:22.0pt;"> 对于<span> 60%</span>的数据，<span>1 ≤ n ≤ 1,000</span>；<span></span> </p> <p class="MsoNormal" style="text-indent:22.0pt;"> 对于<span> 100%</span>的数据，<span>1 ≤ n ≤ 100,000</span>，<span>0 ≤</span>火柴高度<span>≤ 2<sup>31</sup> − 1</span>。<span></span> </p> </p> <p> <br /> </p>

## 来源

NOIP2013DAY1（二）

