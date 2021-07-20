## 描述

<p class="MsoNormal" style="text-indent:24.0pt;"> 有两个仅包含小写英文字母的字符串A和B。现在要从字符串A中取出k个<b><i><u>互不重叠</u></i></b>的非空子串，然后把这<i> </i>k<i> </i>个子串按照其在字符串<i> </i>A<i> </i>中出现的顺序依次连接起来得到一个新的字符串，请问有多少种方案可以使得这个新串与字符串 B 相等？注意：子串取出的位置不同也认为是不同的方案。<span></span> </p>

## 输入格式

<p class="MsoNormal" align="left" style="text-indent:24pt;"> 输入文件名为 substring.in。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 第一行是三个正整数 n，m，k，分别表示字符串 A 的长度，字符串 B 的长度，以及问题描述中所提到的 k，每两个整数之间用一个空格隔开。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 第二行包含一个长度为 n 的字符串，表示字符串A。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 第三行包含一个长度为 m 的字符串，表示字符串B。 </p>

## 输出格式

<p class="MsoNormal" align="left" style="text-indent:24pt;"> 输出文件名为 substring.out。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 输出共一行，包含一个整数，表示所求方案数。<b>由于答案可能很大</b><b>，</b><b>所以这里要求输出答案对 </b><b>1,000,000,007</b><b> </b><b>取模的结果。</b> </p>

## 输入样例

```plaintext
【输入输出样例 1】 6 3 1 aabaab aab 【输入输出样例 2】 6 3 2 aabaab aab 【输入输出样例 3】 6 3 3 aabaab aab 
```

## 输出样例

```plaintext
【输入输出样例 1】 2 【输入输出样例 2】 7 【输入输出样例 3】 7
```

Hint

<p class="MsoNormal" align="left"> <b>【输入输出样例说明】</b><b> </b> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 所有合法方案如下：（加下划线的部分表示取出的子串） <span></span> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 样例 1：<b><u>aab</u></b> aab / aab <b><u>aab</u></b> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 样例 2：<b><u>a</u></b><b> <u>ab</u></b> aab / <b><u>a</u></b> aba <b><u>ab</u></b> / a <b><u>a</u></b> ba <b><u>ab</u></b> / aab <b><u>a</u></b><b> <u>ab</u></b> </p> <p class="MsoNormal" align="left" style="text-indent:71.3pt;"> <b><u>aa</u></b><b> <u>b</u> </b>aab /<b> <u>aa</u> </b>baa<b> <u>b</u> </b>/ aab<b> <u>aa</u> <u>b</u></b> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 样例 3：<b><u>a</u></b><b> <u>a</u> <u>b</u></b> aab / <b><u>a</u></b><b> <u>a</u></b> baa <b><u>b</u></b> / <b><u>a</u></b> ab <b><u>a</u></b> a <b><u>b</u></b> / <b><u>a</u></b> aba <b><u>a</u></b><b> <u>b</u></b> </p> <p class="MsoNormal" align="left" style="text-indent:72pt;"> a <b><u>a</u></b> b <b><u>a</u></b> a <b><u>b</u></b> / a <b><u>a</u></b> ba <b><u>a</u> <u>b</u></b> / aab <b><u>a</u> <u>a</u> <u>b</u></b> </p> <p class="MsoNormal" align="left" style="text-indent:72pt;"> <b><u> </u></b> </p> <p class="MsoNormal" align="left"> <b><u><b>【数据规模与约定】</b><b></b> </u></b> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> <b><u>对于第 1 组数据：1≤n≤500，1≤m≤50，k=1；</u></b> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> <b><u>对于第 2 组至第 3 组数据：1≤n≤500，1≤m≤50，k=2； <span></span> </u></b> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> <b><u>对于第 4 组至第 5 组数据：1≤n≤500，1≤m≤50，k=m； <span></span> </u></b> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> <b><u>对于第 1 组至第 7 组数据：1≤n≤500，1≤m≤50，1≤k≤m； <span></span> </u></b> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> <b><u>对于第 1 组至第 9 组数据：1≤n≤1000，1≤m≤100，1≤k≤m； <span></span> </u></b> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> <b><u>对于所有 10 组数据：1≤n≤1000，1≤m≤200，1≤k≤m。</u></b> </p> <p> <br /> </p>

## 来源

NOIP2015DAY2（二）

