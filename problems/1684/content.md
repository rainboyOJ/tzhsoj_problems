## 描述

<div style="text-indent: 10.5pt">【问题描述】</div> <div style="text-indent: 21pt">汤姆斯生活在一个等级为0的星球上。那里的环境极其恶劣，每天12小时的工作和成堆的垃圾让人忍无可忍。他向往着等级为N的星球上天堂般的生活。</div> <div style="text-indent: 21pt">有一些航班将人从低等级的星球送上高一级的星球，有时需要向驾驶员支付一定金额的费用，有时却又可以得到一定的金钱。</div> <div style="text-indent: 21pt">汤姆斯预先知道了从0等级星球去N等级星球所有的航线和需要支付（或者可以得到）的金钱，他想寻找一条价格最低（甚至获得金钱最多）的航线。</div>

## 输入格式

<div style="text-indent: 10.5pt">【输入】</div> <div style="text-indent: 21pt">第一行一个正整数N（N≤100）,接下来的数据可分为N个段落</div> <div style="text-indent: 21pt">每段的第一行一个整数Ki(Ki≤100)，表示等级为i的星球有Ki个。</div> <div style="text-indent: 21pt">接下来的Ki中第Tij行依次表示与等级为i，编号为j的星球相连的等级为i-1的星球的编号和此航线需要的费用（正数表示支出，负数表示收益，费用的绝对值不超过1000）。每行以0结束，每行的航线数≤100。</div>

## 输出格式

<div style="text-indent: 10.5pt">【输出】</div> <div style="text-indent: 21pt">输出所需（或所得）费用。正数表示支出，负数表示收益。</div>

## 输入样例

```plaintext
【输入样例】 3 2 1150 150 3 1-52100 130 2400 2 11253-50 2-193-200 
```

## 输出样例

```plaintext
【输出样例】 -1 【数据范围】 对于100%的数据 N≤100 Ki≤100。 
```

Hint

<p>【样例解释】<br /> 如图<br /> <img height="355" width="407" alt="" src="http://10.208.83.181:80/upload/201307/p1684.jpg" /></p>



 

