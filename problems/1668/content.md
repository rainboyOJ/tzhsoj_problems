## 描述

<p class="MsoNormal"><span style="font-size: 12pt;">【问题描述】<span lang="EN-US"><o:p></o:p></span></span></p> <p class="MsoNormal"><span style="font-size: 12pt;">一条街的一边有几座房子。因为环保原因居民想要在路边种些树。路边的地区被分割成块，并被编号为<span lang="EN-US">1</span>…<span lang="EN-US">n </span>。每个块的大小为一个单位尺寸并最多可种一棵树。每个居民想在门前种些树并指定了三个号码<span lang="EN-US">b</span>，<span lang="EN-US">e</span>，<span lang="EN-US">t </span>。这三个数表示该居民想在<span lang="EN-US">b</span>和<span lang="EN-US">e</span>之间最少种<span lang="EN-US">t</span>棵树。当然，<span lang="EN-US">b<=e </span>，居民必须保证在指定地区不能种多于地区被分割成块数的树，即要求<span lang="EN-US">t<=e-b+1 </span>。允许居民想种树的各自区域可以交叉。出于资金短缺的原因，环保部门请你求出能够满足所有居民的要求，需要种树的最少数量。<span lang="EN-US"><o:p></o:p></span></span></p> <p></p>

## 输入格式

<p class="MsoNormal"><span style="font-size: 12pt;">【文件输入】<span lang="EN-US"><o:p></o:p></span></span></p> <p class="MsoNormal"><span style="font-size: 12pt;">第一行为<span lang="EN-US">n </span>，表示区域的个数；<span lang="EN-US"><o:p></o:p></span></span></p> <p class="MsoNormal"><span style="font-size: 12pt;">第二行为<span lang="EN-US">h </span>，表示房子的数目；<span lang="EN-US"><o:p></o:p></span></span></p> <p class="MsoNormal"><span style="font-size: 12pt;">下面<span lang="EN-US">h</span>行描述居民的需要：<span lang="EN-US">b e t (0<b<=e<=30000 ,r<=e-b+1)</span>分别用一个空格分开。<span lang="EN-US"><o:p></o:p></span></span></p> <p></p>

## 输出格式

<p class="MsoNormal"><span style="font-size: 12pt;">【文件输出】<span lang="EN-US"><o:p></o:p></span></span></p> <p class="MsoNormal"><span style="font-size: 12pt;">输出为满足所有要求的最少树的数量。<span lang="EN-US"><o:p></o:p></span></span></p> <p></p>

## 输入样例

```plaintext
【样例输入】 9 4 1 4 2 4 6 2 8 9 2 3 5 2 
```

## 输出样例

```plaintext
【样例输出】 5 【数据规模】 30％的数据满足0<n<=1000 ,0<h<=500 ； 100％的数据满足n<=30000 ,h<=5000 。 
```



 



 

