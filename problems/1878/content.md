## 描述

<p class="MsoNormal" style="text-indent:21pt;"> n 个小伙伴（编号从 0 到 n-1）围坐一圈玩游戏。按照顺时针方向给 n 个位置编号，从 0 到 n-1。最初，第 0 号小伙伴在第 0 号位置，第 1 号小伙伴在第 1 号位置，……，依此类推。 </p> <p class="MsoNormal" style="text-indent:21pt;"> 游戏规则如下：每一轮第<span> 0 </span>号位置上的小伙伴顺时针走到第<span> m </span>号位置，第<span> 1 </span>号位置小伙伴走到第<span> m+1 </span>号位置，……，依此类推，第<span>n </span>− m号位置上的小伙伴走到第<span> 0 </span>号位置，第<span>n-m+1 </span>号位置上的小伙伴走到第<span> 1 </span>号位置，……，第<span> n-1 </span>号位置上的小伙伴顺时针走到第<span>m-1 </span>号位置。<span></span> </p> <p class="MsoNormal" style="text-indent:22pt;"> 现在，一共进行了<span> 10<sup>k </sup></span>轮，请问<span> x </span>号小伙伴最后走到了第几号位置。<span></span> </p>

## 输入格式

<p class="MsoNormal" style="text-indent:22pt;"> 输入文件名为<span> circle.in</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:22pt;"> 输入共<span> 1 </span>行，包含<span> 4 </span>个整数<span> n</span>、<span>m</span>、<span>k</span>、<span>x</span>，每两个整数之间用一个空格隔开。<span></span> </p>

## 输出格式

<p class="MsoBodyText" style="text-indent:20.8pt;margin-left:0cm;"> 输出文件名为 circle.out。<span></span> </p> <p class="MsoBodyText" style="text-indent:20.8pt;margin-left:0cm;"> 输出共 1 行，包含 1 个整数，表示 10<sup>k </sup>轮后 x 号小伙伴所在的位置编号。<span></span> </p>

## 输入样例

```plaintext
10 3 4 5
```

## 输出样例

```plaintext
5
```

Hint

<p class="MsoBodyText"> <b>【数据说明】</b><b><span></span></b> </p> <p class="MsoNormal" style="text-indent:22pt;"> 对于<span> 30%</span>的数据，<span>0 < </span><span>k </span><span>< 7</span>； <span></span> </p> <p class="MsoNormal" style="text-indent:22pt;"> 对于<span> 80%</span>的数据，<span>0 < </span><span>k </span><span>< 10<sup>7</sup></span>；<span></span> </p> <p class="MsoNormal" style="text-indent:22pt;"> 对于<span> 100%</span>的数据，<span>1 < </span><span>n</span><span>< 1,000,000</span>，<span>0 <</span><span>m</span><span> <</span><span>n</span><span> </span>，<span>0</span><span> ≤ x ≤ n</span>，<span>0 < </span><span>k</span><span>< 10<sup>9</sup></span>。<span></span> </p>

## 来源

NOIP2013DAY1（一）

