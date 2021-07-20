## 描述

<p class="MsoBodyText" style="margin-left:0cm;"> 本题中，我们将用符号 L<i>c</i>J 表示对 <i>c </i>向下取整，例如： L3.0J = L3.1J = L3.9J = 3。 </p> <p class="MsoBodyText" style="margin-left:0cm;"> 蛐蛐国最近蚯蚓成灾了！隔壁跳蚤国的跳蚤也拿蚯蚓们没办法，蛐蛐国王只好去请神刀手来帮他们消灭蚯蚓。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> 蛐蛐国里现在共有 <i>n </i>只蚯蚓（ <i>n </i>为正整数）。每只蚯蚓拥有长度，我们设第 <i>i </i>只蚯蚓的长度为 <i>a</i><i>i </i>( <i>i </i>= 1, 2, . . . , <i>n </i>)，并保证所有的长度都是<u>非负</u>整数（即：可能存在长度为0的蚯蚓）。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 每一秒，神刀手会在所有的蚯蚓中，准确地找到最长的那一只（如有多个则任选一个）将其切成两半。神刀手切开蚯蚓的位置由常数 <i>p </i>（是满足 0 < <i>p </i>< 1 的有理数）决定，设这只蚯蚓长度为 <i>x </i>，神刀手会将其切成两只长度分别为 L<i>px</i>J 和 <i>x </i>− L<i>px</i>J 的蚯蚓。特殊地，如果这两个数的其中一个等于 0 ，则这个长度为 0 的蚯蚓也会被保留。此 外，除了刚刚产生的两只新蚯蚓，其余蚯蚓的长度都会增加 <i>q</i>（是一个非负整常数）。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 蛐蛐国王知道这样不是长久之计，因为蚯蚓不仅会越来越多，还会越来越长。蛐 蛐国王决定求助于一位有着洪荒之力的神秘人物，但是救兵还需要 <i>m </i>秒才能到来......（<i>m </i>为非负整数）蛐蛐国王希望知道这 <i>m </i>秒内的战况。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 具体来说，他希望知道：<span></span> </p> <p class="MsoBodyText" style="margin-left:21.0pt;text-indent:-21.0pt;"> l  <i>m </i>秒内，每一秒被切断的蚯蚓被切断前的长度（有 <i>m </i>个数）；<span></span> </p> <p class="MsoBodyText" style="margin-left:21.0pt;text-indent:-21.0pt;"> l  <i>m </i>秒后，所有蚯蚓的长度（有 <i>n </i>+ <i>m </i>个数）。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 蛐蛐国王当然知道怎么做啦<span>! </span>但是他想考考你...... </p>

## 输入格式

<p class="MsoNormal"> 从文件 <b><i>earthworm.in</i></b><b><i> </i></b>中读入数据。 </p> <p class="MsoNormal" style="margin-left:0cm;"> 第一行包含六个整数 <i>n</i>, <i>m</i>, <i>q</i>, <i>u</i>, <i>v</i>, <i>t </i>，其中： <i>n</i>, <i>m</i>, <i>q </i>的意义见【问题描述】； <i>u</i>, <i>v</i>, <i>t </i>均 为正整数；你需要自己计算 <i>p </i>= <i>u</i>/<i>v </i>（保证 0 < <i>u </i>< <i>v </i>）；<i>t </i>是输出参数，其含义将会在【输出格式】中解释。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 第二行包含 <i>n </i>个非负整数，为 <i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, . . . , <i>a<sub>n</sub> </i>，即初始时 <i>n </i>只蚯蚓的长度。 </p> <p class="MsoBodyText" style="margin-left:0cm;"> 同一行中相邻的两个数之间，恰好用一个空格隔开。<span></span> </p> <p class="MsoNormal"> 保证 1 ≤ <i>n </i>≤ 10<sup>5</sup> ， 0 ≤ <i>m </i>≤ 7 × 10<sup>6</sup> ， 0 < <i>u </i>< <i>v </i>≤ 10<sup>9</sup> ， 0 ≤ <i>q </i>≤ 200 ， 1 ≤ <i>t </i>≤ 71 ，<span></span> </p> <p class="MsoNormal"> 0 ≤ <i>ai </i>≤ 10<sup>8</sup> 。<span></span> </p>

## 输出格式

<p class="MsoNormal"> 输出到文件 <b><i>earthworm.out</i></b> </p> 第一行输出[m/t]个整数，按时间顺序，依次输出第 <i>t</i>秒，第 2<i>t</i><i> </i>秒，第 3<i>t</i><i> </i>秒，......被切 断蚯蚓（在被切断前）的长度。第二行输出[(m+n)/t]个整数，输出 <i>m </i>秒后蚯蚓的长度：需要按从大到小的顺序，依次输出排名第 <i>t </i>，第 2<i>t </i>，第 3<i>t </i>，. . . . . . 的长度。 <p class="MsoBodyText" style="margin-left:0cm;"> <span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 同一行中相邻的两个数之间，恰好用一个空格隔开。即使某一行没有任何数需要输出，你也应输出一个空行。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 请阅读样例来更好地理解这个格式。<span></span> </p>

## 输入样例

```plaintext
【样例 1 输入】 3 7 1 1 3 1 3 3 2 【样例 2 输入】 3 7 1 1 3 2 3 3 2 【样例 3 输入】 3 7 1 1 3 9 3 3 2 
```

## 输出样例

```plaintext
【样例 1 输出】 3 4 4 4 5 5 6 6 6 6 5 5 4 4 3 2 2 【样例 2 输出】 4 4 5 6 5 4 3 2 【样例 3 输出】 2 
```

Hint

<p class="41" style="margin-left:0cm;"> 【样例<span> 1 </span>说明】<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 在神刀手到来前：3 只蚯蚓的长度为 3,3,2。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 1 秒后：一只长度为 3 的蚯蚓被切成了两只长度分别为 1 和 2 的蚯蚓，其余蚯蚓的长度增加了 1。最终 4 只蚯蚓的长度分别为(1,2),4,3。括号表示这个位置刚刚有一只蚯蚓被切断。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 2 秒后：一只长度为 4 的蚯蚓被切成了 1 和 3。5 只蚯蚓的长度分别为：2,3,(1,3),4。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 3 秒后：一只长度为 4 的蚯蚓被切断。6 只蚯蚓的长度分别为：3,4,2,4,(1,3)。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 4 秒后：一只长度为 4 的蚯蚓被切断。7 只蚯蚓的长度分别为：4,(1,3),3,5,2,4。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 5 秒后：一只长度为 5 的蚯蚓被切断。8 只蚯蚓的长度分别为：5,2,4,4,(1,4),3,5。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 6 秒后：一只长度为 5 的蚯蚓被切断。9 只蚯蚓的长度分别为：(1,4),3,5,5,2,5,4,6。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 7 秒后：一只长度为 6 的蚯蚓被切断。10 只蚯蚓的长度分别为：2,5,4,6,6,3,6,5,(2,4)。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 所以，7 秒内被切断的蚯蚓的长度依次为 3,4,4,4,5,5,6。7 秒后，所有蚯蚓长度从大到小排序为 6,6,6,5,5,4,4,3,2,2。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> <p class="41" style="margin-left:0cm;"> 【样例<span> 2 </span>说明】<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 这个数据中只有 <i>t </i>= 2 与上个数据不同。只需在每行都改为每两个数输出一个数即可。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 虽然第一行最后有一个 6 没有被输出，但是第二行仍然要重新从第二个数再开始输出。 </p> <p class="41" style="margin-left:0cm;"> 【样例<span> 3 </span>说明】<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 这个数据中只有 <i>t </i>= 9 与上个数据不同。注意第一行没有数要输出，但也要输出一个空行。<span></span> </p> </p>

## 来源

NOIP2016DAY2（二）

