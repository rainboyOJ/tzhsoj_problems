## 描述

<p class="MsoNormal" align="left" style="text-indent:24pt;"> 公元 2044 年，人类进入了宇宙纪元。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> L 国有 n 个星球，还有 n-1 条<b><i><u>双向</u></i></b>航道，每条航道建立在两个星球之间，这 n-1 条航道<b><i><u>连通</u></i></b>了 L 国的所有星球。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 小 P 掌管一家物流公司，该公司有很多个运输计划，每个运输计划形如：有一艘物流飞船需要从 ui 号星球沿<b><i><u>最快</u></i></b>的宇航路径飞行到 vi 号星球去。显然，飞船驶过一条航道是需要时间的，对于航道j，任意飞船驶过它所花费的时间为 tj，并且任意两艘飞船之间<b><i><u>不会</u></i></b>产生任何干扰。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 为了鼓励科技创新，L 国国王同意小 P 的物流公司参与 L 国的航道建设，即允许小 P 把某一条航道改造成虫洞，飞船驶过虫洞<b><i><u>不消耗</u></i></b>时间。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 在虫洞的建设完成前小 P 的物流公司就预接了 m 个运输计划。在虫洞建设完成后，这 m 个运输计划会<b><i><u>同时</u></i></b>开始，所有飞船<b><i><u>一起</u></i></b>出发。当这 m 个运输计划<b><i><u>都完成</u></i></b>时，小 P 的 物流公司的阶段性工作就完成了。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 如果小 P 可以<b><i><u>自由选择</u></i></b>将哪一条航道改造成虫洞，试求出小 P 的物流公司完成阶段性工作所需要的最短时间是多少？ </p>

## 输入格式

<p class="MsoNormal" align="left" style="text-indent:24pt;"> 输入文件名为 transport.in。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 第一行包括两个正整数 n、m，表示 L 国中星球的数量及小 P 公司预接的运输计划的数量，星球从 1 到 n 编号。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 接下来 n-1 行描述航道的建设情况，其中第 i 行包含三个整数 ai, bi 和 ti，表示第 i 条双向航道修建在 ai 与 bi 两个星球之间，任意飞船驶过它所花费的时间为 ti。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 接下来 m 行描述运输计划的情况，其中第 j 行包含两个正整数 uj 和 vj，表示第 j 个 运输计划是从 uj 号星球飞往 vj 号星球。 </p>

## 输出格式

<p class="MsoNormal" align="left" style="text-indent:24pt;"> 输出文件名为 transport.out。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 共 1 行，包含 1 个整数，表示小 P 的物流公司完成阶段性工作所需要的最短时间。 </p>

## 输入样例

```plaintext
6 3 1 2 3 1 6 4 3 1 7 4 3 6 3 5 5 3 6 2 5 4 5
```

## 输出样例

```plaintext
11
```

Hint

<p class="MsoNormal" align="left"> <b>【输入输出样例 </b><b>1</b><b> </b><b>说明】</b><b></b> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 将第 1 条航道改造成虫洞：则三个计划耗时分别为：11、12、11，故需要花费的时间为 12。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 将第 2 条航道改造成虫洞：则三个计划耗时分别为：7、15、11，故需要花费的时间为 15。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 将第 3 条航道改造成虫洞：则三个计划耗时分别为：4、8、11，故需要花费的时间为 11。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 将第 4 条航道改造成虫洞：则三个计划耗时分别为：11、15、5，故需要花费的时间为 15。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 将第 5 条航道改造成虫洞：则三个计划耗时分别为：11、10、6，故需要花费的时间为 11。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 故将第 3 条或第 5 条航道改造成虫洞均可使得完成阶段性工作的耗时最短，需要花费的时间为 11。 </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> <br /> </p> <p class="MsoNormal" align="left"> <b>【数据规模与约定】</b><b></b> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 所有测试数据的范围和特点如下表所示 </p> <img src="/JudgeOnline/upload/image/20170728/20170728212726_45457.png" alt="" /> <p> <br /> </p> <p class="MsoNormal" align="left" style="text-indent:24pt;"> <p class="MsoNormal" align="left" style="text-indent:24pt;"> 请注意常数因子带来的程序效率上的影响。 </p> </p>

## 来源

NOIP2015DAY2（三）

