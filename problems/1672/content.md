## 描述

<p class="MsoNormal"><b><span style="font-size: 15pt;">【题目描述】</span></b><b><span lang="EN-US" style="font-size:15.0pt"><o:p></o:p></span></b></p> <p class="MsoNormal" style="text-indent:15.75pt;mso-char-indent-count:1.5">破解了符文之语，小<span lang="EN-US">FF</span>开启了通往地下的道路。当他走到最底层时，发现正前方有一扇巨石门，门上雕刻着一幅古代人进行某种活动的图案。而石门上方用古代文写着“神的殿堂”。小<span lang="EN-US">FF</span>猜想里面应该就有王室的遗产了。但现在的问题是如何打开这扇门……<span lang="EN-US"><o:p></o:p></span></p> <p class="MsoNormal" style="text-indent:15.75pt;mso-char-indent-count:1.5">仔细研究后，他发现门上的图案大概是说：古代人认为只有智者才是最容易接近神明的。<span lang="EN-US"><o:p></o:p></span></p> <p class="MsoNormal">而最聪明的人往往通过一种仪式选拔出来。仪式大概是指，即将隐退的智者为他的候选人写下一串无序的数字，并让他们进行一种操作，即交换序列中相邻的两个元素。而用最少的交换次数使原序列变成不下降序列的人即是下一任智者。<span lang="EN-US"><o:p></o:p></span></p> <p class="MsoNormal"><span lang="EN-US">   </span>小<span lang="EN-US">FF</span>发现门上同样有着<span lang="EN-US">n</span>个数字。于是他认为打开这扇门的秘诀就是找到让这个序列变成不下降序列所需要的最小次数。但小<span lang="EN-US">FF</span>不会……只好又找到了你，并答应事成之后与你三七分……<span lang="EN-US"><o:p></o:p></span></p> <p></p>

## 输入格式

<p class="MsoNormal"><b><span style="font-size: 16pt;">【输入格式】</span></b><b><span lang="EN-US" style="font-size:16.0pt"><o:p></o:p></span></b></p> <p class="MsoNormal" style="text-indent:15.75pt;mso-char-indent-count:1.5">第一行为一个整数<span lang="EN-US">n</span>，表示序列长度<span lang="EN-US"><o:p></o:p></span></p> <p class="MsoNormal" style="text-indent:15.75pt;mso-char-indent-count:1.5">第二行为<span lang="EN-US">n</span>个整数，表示序列中每个元素。</p> <p class="MsoNormal" style="text-indent:15.75pt;mso-char-indent-count:1.5"></p> <p class="MsoNormal" style="text-indent:15.75pt;mso-char-indent-count:1.5"><span lang="EN-US"><o:p></o:p></span></p> <p></p>

## 输出格式

<p class="MsoNormal"><span style="font-size: 16pt;">【<b>输出格式】</b></span><b><span lang="EN-US" style="font-size:16.0pt"><o:p></o:p></span></b></p> <p class="MsoNormal" style="text-indent:15.75pt;mso-char-indent-count:1.5">一个整数<span lang="EN-US">ans</span>，即最少操作次数。<span lang="EN-US"><o:p></o:p></span></p> <p></p>

## 输入样例

```plaintext
【输入样例】 4 2 8 0 3 
```

## 输出样例

```plaintext
【输出样例】 3 样例说明：开始序列为2 8 0 3，目标序列为0 2 3 8，可进行三次操作的目标序列： 1. Swap(8,0)：2 0 8 3 2. Swap (2,0)：0 2 8 3 3. Swap (8,3)：0 2 3 8 【数据范围】 对于30%的数据1≤n≤104。 对于100%的数据 1≤n≤5*105。 
```



 



 

