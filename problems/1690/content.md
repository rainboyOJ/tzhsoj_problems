## 描述

<div style="margin: 0cm 0cm 0pt 18pt; line-height: 150%" align="left"><b><span style="font-size: 12pt; line-height: 150%">问题描述</span></b></div> <div style="text-indent: 24pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">翻转游戏是在一个4格*4格的长方形上进行的，在长方形的16个格上每个格子都放着一个双面的物件。每个物件的两个面，一面是白色的，另一面是黑色，每个物件要么白色朝上，要么黑色朝上，每一轮你只能翻3至5个物件，从而由黑到白地改变这些物件上面的颜色，反之亦然。每一轮被选择翻转的物件遵循以下规则：</span></div> <div style="margin: 0cm 0cm 0pt 39pt; text-indent: -18pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">1.<span style="font: 7pt 'Times New Roman'">    </span></span><span style="font-size: 12pt; line-height: 150%">从16个物件中任选一个。</span></div> <div style="margin: 0cm 0cm 0pt 39pt; text-indent: -18pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">2.<span style="font: 7pt 'Times New Roman'">    </span></span><span style="font-size: 12pt; line-height: 150%">翻转所选择的物件的同时，所有与它相邻的左方物件、右方物件、上方物件和下方物件（如果有的话），都要跟着翻转。</span></div> <div style="margin: 0cm 0cm 0pt 39pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">以下为例：</span></div> <div style="margin: 0cm 0cm 0pt 39pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">bwbw</span></div> <div style="margin: 0cm 0cm 0pt 39pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">wwww</span></div> <div style="margin: 0cm 0cm 0pt 39pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">bbwb</span></div> <div style="margin: 0cm 0cm 0pt 39pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">bwwb</span></div> <div style="margin: 0cm 0cm 0pt 39pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">这里”b”表示该格子放的物件黑色面朝上，”w”表示该格子放的物件白色朝上。如果我们选择翻转第三行的第一个物件（如下图所示），那么格子状态将变为：</span></div> <div style="margin: 0cm 0cm 0pt 39pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">bwbw</span></div> <div style="margin: 0cm 0cm 0pt 39pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">bwww</span></div> <div style="margin: 0cm 0cm 0pt 39pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">wwwb</span></div> <div style="margin: 0cm 0cm 0pt 39pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">wwwb</span></div> <div style="margin: 0cm 0cm 0pt 39pt; line-height: 150%" align="left"></div> <div style="text-indent: 24pt; line-height: 150%" align="left"> <img height="181" width="240" alt="" src="http://10.208.83.181:80/upload/201307/p1690.jpg" /></div> <p><span style="font-size: 12pt">游戏的目标是翻转到所有的物件白色朝上或黑色朝上。你的任务就是写一个程序求最少的翻转次数来实现这一目标。</span></p>

## 输入格式

<div style="text-indent: 24.1pt; line-height: 150%" align="left"><b><span style="font-size: 12pt; line-height: 150%">输入格式</span></b></div> <div style="text-indent: 24pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">输入文件flip.in包含4行，每行4个字符，每个字符”w”或“b”表示游戏开始时格子上物件的状态。</span></div>

## 输出格式

<div style="text-indent: 24.1pt; line-height: 150%" align="left"><b><span style="font-size: 12pt; line-height: 150%">输出格式</span></b></div> <div style="text-indent: 24pt; line-height: 150%" align="left"><span style="font-size: 12pt; line-height: 150%">输出文件flip.out仅一个整数，即从给定状态到实现这一任务的最少翻转次数。如果给定的状态已经实现了目标就输出0，如果不可能实现目标就输出“Impossible”。</span></div>

## 输入样例

```plaintext
输入样例 bwwb bbwb bwwb bwww 
```

## 输出样例

```plaintext
输出样例 4 
```



 



 

