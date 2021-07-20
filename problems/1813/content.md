## 描述

程序设计对抗赛设有N（0<N≤50的整数）个价值互不相同的奖品，每个奖品的价值分别为S1，S2，S3……Sn（均为不超过100的正整数）。现将它们分给甲乙两队，为了使得甲乙两队得到相同价值的奖品，必须将这N个奖品分成总价值相等的两组。<br /> 编程要求：对给定N及N个奖品的价值，求出将这N个奖品分成价值相等的两组，共有多少种分法？<br /> 例如：N = 5，S1，S2，S3……Sn分别为1，3，5，8，9<br /> 则可分为{1，3，9}与{5，8}<br /> 仅有1种分法；<br /> 例如：N = 7，S1，S2，S3……Sn分别为1，2，3，4，5，6，7<br /> 则可分为：<br /> {1,6,7}与{2,3,4,5}<br /> {2,5,7}与{1,3,4,6}<br /> {3,4,7}与{1,2,5,6}<br /> {1,2,4,7}与{3,5,6}<br /> 有4种分法。<br />

## 输入格式

输入文件中包含N及S1，S2，S3……Sn。（每两个相邻的数据之间有一个空格隔开）。

## 输出格式

输出文件包含一个整数，表示多少种分法的答案，数据若无解，则输出0。

## 输入样例

```plaintext
7 1 2 3 4 5 6 7
```

## 输出样例

```plaintext
4
```



 



 
