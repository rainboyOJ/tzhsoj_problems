## 描述

<p class="MsoNormal"><span style="font-size: 12pt;">【问题描述】<span lang="EN-US"><o:p></o:p></span></span></p> <p class="MsoNormal"><span style="font-size: 12pt;">物流公司要把一批货物从码头<span lang="EN-US">A</span>运到码头<span lang="EN-US">B</span>。由于货物量比较大，需要<span lang="EN-US">n</span>天才能运完。货物运输过程中一般要转停好几个码头。物流公司通常会设计一条固定的运输路线，以便对整个运输过程实施严格的管理和跟踪。由于各种因素的存在，有的时候某个码头会无法装卸货物。这时候就必须修改运输路线，让货物能够按时到达目的地。但是修改路线是一件十分麻烦的事情，会带来额外的成本。因此物流公司希望能够订一个<span lang="EN-US">n</span>天的运输计划，使得总成本尽可能的小。<span lang="EN-US"><o:p></o:p></span></span></p> <p></p>

## 输入格式

<p class="MsoNormal"><span style="font-size: 12pt;">【文件输入】<span lang="EN-US"><o:p></o:p></span></span></p> <p class="MsoNormal"><span style="font-size: 12pt;">第一行是四个整数<span lang="EN-US">n(1<=n<=100),m(1<=m<=20),K</span>和<span lang="EN-US">e</span>。<span lang="EN-US">n</span>表示货物运输所需天数，<span lang="EN-US">m </span>表示码头总数，<span lang="EN-US">K</span>表示每次修改运输路线所需成本。接下来<span lang="EN-US">e</span>行每行是一条航线描述，包括了三个整数，依次表示航线连接的两个码头编号以及航线长度（<span lang="EN-US">>0</span>）。其中码头<span lang="EN-US">A</span>编号为<span lang="EN-US">1</span>，码头<span lang="EN-US">B</span>编号为<span lang="EN-US">m</span>。单位长度的运输费用为<span lang="EN-US">1</span>。航线是双向的。再接下来一行是一个整数<span lang="EN-US">d,</span>后面的<span lang="EN-US">d</span>行每行是三个整数<span lang="EN-US">P</span>（<span lang="EN-US">1<P<m</span>）<span lang="EN-US">,a,b (1<=a<=b<=n)</span>。表示编号为<span lang="EN-US">P</span>的码头从第<span lang="EN-US">a</span>天到第<span lang="EN-US">b</span>天无法装卸货物（含头尾）。同一个码头有可能在多个时间段内不可用。但任何时间都存在至少一条从码头<span lang="EN-US">A</span>到码头<span lang="EN-US">B</span>的运输路线。<span lang="EN-US"><o:p></o:p></span></span></p> <p></p>

## 输出格式

<p class="MsoNormal"><span style="font-size: 12pt;">【文件输出】<span lang="EN-US"><o:p></o:p></span></span></p> <p class="MsoNormal"><span style="font-size: 12pt;">包括了一个整数表示最小的总成本。总成本<span lang="EN-US">=n</span>天运输路线长度之和<span lang="EN-US">+ K* </span>改变运输路线的次数。<span lang="EN-US"><o:p></o:p></span></span></p> <p></p>

## 输入样例

```plaintext
【样例输入】 5 5 10 8 1 2 1 1 3 3 1 4 2 2 3 2 2 4 4 3 4 1 3 5 2 4 5 2 4 2 2 3 3 1 1 3 3 3 4 4 5 
```

## 输出样例

```plaintext
【样例输出】 32 
```



 



 

