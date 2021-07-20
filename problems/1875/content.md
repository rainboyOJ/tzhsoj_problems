## 描述

<p class="MsoNormal" style="text-indent:21.0pt;"> 随着智能手机的日益普及，人们对无线网的需求日益增大。某城市决定对城市内的公共场所覆盖无线网。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 假设该城市的布局为由严格平行的<span>129</span>条东西向街道和<span>129</span>条南北向街道所形成的网格状，并且相邻的平行街道之间的距离都是恒定值<span>1</span>。东西向街道从北到南依次编号为<span>0,1,2</span>…<span>128,</span>南北向街道从西到东依次编号为<span>0,1,2</span>…<span>128</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 东西向街道和南北向街道相交形成路口，规定编号为<span>x</span>的南北向街道和编号为<span>y</span>的东西向街道形成的路口的坐标是（<span>x, y</span>）。 在 某 些 路 口 存 在 一 定 数 量 的 公 共 场 所 。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 由于政府财政问题，只能安装一个大型无线网络发射器。该无线网络发射器的传播范围是一个以该点为中心，边长为<span>2*d</span>的正方形。传播范围包括正方形边界。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 例如下图是一个<span>d = 1</span>的无线网络发射器的覆盖范围示意图。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> <img src="/JudgeOnline/upload/image/20170728/20170728223816_49770.png" alt="" width="500" height="177" title="" align="" /> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> <p class="MsoNormal" style="text-indent:21.0pt;"> 现在政府有关部门准备安装一个传播参数为<span>d</span>的无线网络发射器，希望你帮助他们在城市内找出合适的安装地点，使得覆盖的公共场所最多。<span></span> </p> </p>

## 输入格式

<p class="MsoNormal" style="text-indent:21.0pt;"> 输入文件名为<span>wireless.in</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 第一行包含一个整数<span>d</span>，表示无线网络发射器的传播距离。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 第二行包含一个整数<span>n</span>，表示有公共场所的路口数目。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 接下来<span>n</span>行，每行给出三个整数<span>x, y, k,  </span>中间用一个空格隔开，分别代表路口的坐标<span>(x, y)</span>以及该路口公共场所的数量。同一坐标只会给出一次。<span></span> </p>

## 输出格式

<p class="MsoNormal" style="text-indent:21.0pt;"> 输出文件名为<span>wireless.out</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 输出一行，包含两个整数，用一个空格隔开，分别表示能覆盖最多公共场所的安装地点方案数，以及能覆盖的最多公共场所的数量。<span></span> </p>

## 输入样例

```plaintext
1 2 4 4 10 6 6 20 
```

## 输出样例

```plaintext
1 30
```

Hint

<p class="MsoNormal"> <b>【数据说明】<span></span></b> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于<span>100%</span>的数据，<span>1 </span>≤<span> d </span>≤<span> 20</span>，<span>1 </span>≤<span> n </span>≤<span>  20</span>，<span> 0 </span>≤<span> x </span>≤<span> 128, 0 </span>≤<span> y </span>≤<span>  128, 0 < k </span>≤<span> 1,000,000</span>。<span></span> </p>

## 来源

NOIP2014DAY2（一）

