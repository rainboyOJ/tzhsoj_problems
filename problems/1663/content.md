## 描述

<div class="Section1" style="layout-grid:15.6pt"> <p class="MsoNormal"><span lang="EN-US"><span style="mso-spacerun:yes">    </span></span><span style="font-family:宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family: "Times New Roman"">【问题描述】</span></p> <p class="MsoNormal"><span lang="EN-US"><span style="mso-spacerun:yes">    </span></span><span style="font-family:宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family: "Times New Roman"">在一个长方形框子里，最多有</span><span lang="EN-US">N</span><span style="font-family:宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family: "Times New Roman"">（</span><span lang="EN-US">0<=N<=6</span><span style="font-family:宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family: "Times New Roman"">）<span class="GramE">个</span>相异的点。在其中任何一个点上放一个很小的油滴，那么这个油滴会一直扩展，直到接触到其他油滴或者框子的边界。必须等一个油滴扩展完毕才能放置下一个油滴。那么应该按照怎样的顺序在这</span><span lang="EN-US">N</span><span class="GramE"><span style="font-family:宋体;mso-ascii-font-family: "Times New Roman";mso-hansi-font-family:"Times New Roman"">个</span></span><span style="font-family:宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family: "Times New Roman"">点上放置油滴，才能使放置完毕后所有油滴占据的总体积最大呢？（不同的油滴不会相互融合）</span></p> <p class="MsoNormal"><span lang="EN-US"><span style="mso-spacerun:yes">    </span></span><span style="font-family:宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family: "Times New Roman"">注：圆的面积公式</span><span lang="EN-US">V =pi*r*r</span><span style="font-family:宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family: "Times New Roman"">，其中</span><span lang="EN-US">r</span><span style="font-family: 宋体;mso-ascii-font-family:"Times New Roman";mso-hansi-font-family:"Times New Roman"">为圆的半径。</span></p> <p class="MsoNormal"><span lang="EN-US"><span style="mso-spacerun:yes">    </span></span></p> <p class="MsoNormal"><span lang="EN-US"><span style="mso-spacerun:yes">    </span></span></p> <p class="MsoNormal"><span lang="EN-US"><span style="mso-spacerun:yes">    </span></span></p> <p class="MsoNormal"><span lang="EN-US"><span style="mso-spacerun:yes"> </span></span></p> <p class="MsoNormal"><span lang="EN-US"><span style="mso-spacerun:yes">   </span></span></p> </div>

## 输入格式

<p class="MsoNormal"><span style="font-family: 宋体;">【输入】</span></p> <p class="MsoNormal"><span style="font-family: 宋体;">第一行一个整数</span><span lang="EN-US">N</span><span style="font-family: 宋体;">。</span></p> <p class="MsoNormal"><span style="font-family: 宋体;">第二行为长方形边框一个顶点及其对角顶点的坐标：</span><span lang="EN-US">x</span><span style="font-family: 宋体;">，</span><span lang="EN-US">y</span><span style="font-family: 宋体;">，</span><span lang="EN-US">x'</span><span style="font-family: 宋体;">，</span><span lang="EN-US">y'</span><span style="font-family: 宋体;">。</span></p> <p class="MsoNormal" style="text-indent: 21.75pt;"><span lang="EN-US"> </span></p> <p class="MsoNormal" style="text-indent: 21.75pt;"><span lang="EN-US"> </span></p> <p class="MsoNormal"><span lang="EN-US">  </span></p> <p class="MsoNormal"><span style="font-family: 宋体;">接下去</span><span lang="EN-US">N</span><span style="font-family: 宋体;">行，每行两个整数</span><span lang="EN-US">xi</span><span style="font-family: 宋体;">，</span><span class="SpellE"><span lang="EN-US">yi</span></span><span style="font-family: 宋体;">，表示盒子内</span><span lang="EN-US">N</span><span class="GramE"><span style="font-family: 宋体;">个</span></span><span style="font-family: 宋体;">点的坐标。</span></p> <p class="MsoNormal"><span style="font-family: 宋体;">以上所有的整数都在</span><span lang="EN-US">[-1000,1000] </span><span style="font-family: 宋体;">内。</span></p>

## 输出格式

<p class="MsoNormal"><span style="font-family: 宋体;">【输出】</span></p> <p class="MsoNormal"><span lang="EN-US">    </span><span style="font-family: 宋体;">一行，一个整数，长方形<span class="GramE">盒子剩余的</span>最小空间（结果四<span class="GramE">舍五入输</span>出）。</span></p> <p></p>

## 输入样例

```plaintext
【输入样例】 2 0 0 10 10 3 3 7 7 
```

## 输出样例

```plaintext
【输出样例】 50 
```



 



 

