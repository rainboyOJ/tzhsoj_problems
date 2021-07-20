## 描述

<p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> 小南有一套可爱的玩具小人，它们各有不同的职业。 </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> 有一天，这些玩具小人把小南的眼镜藏了起来。小南发现玩具小人们围成了一个圈，它们有的面朝圈内，有的面朝圈外。如下图： </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> <img src="/JudgeOnline/upload/image/20170720/20170720191437_39467.png" alt="" width="598" height="500" title="" align="" /> </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> <br /> </p> <div class="WordSection1"> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> 这时 singer 告诉小南一个谜题：“眼镜藏在我左数第 3 个玩具小人的右数第 1 个玩具小人的左数第 2 个玩具小人那里。” </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> 小南发现，这个谜题中玩具小人的朝向非常关键，因为朝内和朝外的玩具小人的左右方向是相反的：面朝圈内的玩具小人，它的左边是顺时针方向，右边是逆时针方向；而面向圈外的玩具小人，它的左边是逆时针方向，右边是顺时针方向。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> 小南一边艰难地辨认着玩具小人，一边数着：<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> “singer 朝内，左数第 3 个是 archer。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> “archer 朝外，右数第 1 个是 thinker。 </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> “thinker 朝外，左数第 2 个是 writer。 </p> <p class="MsoBodyText" style="margin-left:0cm;text-align:justify;"> “所以眼镜藏在 writer 这里！”<span></span> </p> <p class="MsoBodyText" style="margin-left:-3.85pt;text-align:justify;"> 虽然成功找回了眼镜，但小南并没有放心。如果下次有更多的玩具小人藏他的眼镜，或是谜题的长度更长，他可能就无法找到眼镜了。所以小南希望你写程序帮他解决类似的谜题。这样的谜题具体可以描述为：<span></span> </p> <p class="MsoBodyText" style="margin-left:-3.85pt;text-align:justify;"> 有 <i>n </i>个玩具小人围成一圈，己知它们的职业和朝向。现在第 1 个玩具小人告诉小南一个包含 <i>m </i>条指令的谜题，其中第 <i>i </i>条指令形如“左数/右数第 <i>s<sub>i</sub></i><i> </i>个玩具小人”。你需要输出依次数完这些指令后，到达的玩具小人的职业。 </p> </div> <p> <br /> </p>

## 输入格式

<p class="MsoNormal"> 从文件 <b><i>toy.in</i></b><b><i> </i></b>中读入数据。 </p> <p class="MsoBodyText" style="margin-left:0cm;"> 输入的第一行包含两个正整数 <i>n</i>,<i>m</i><i> </i>，表示玩具小人的个数和指令的条数。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 接下来 <i>n </i>行，每行包含一个整数和一个字符串，以<u>逆时针</u>为顺序给出每个玩具小人的朝向和职业。其中 0 表示朝向圈内， 1 表示朝向圈外。保证不会出现其他的数。字符串长度不超过 10 且仅由小写字母构成，字符串不为空，并且字符串两两不同。整数和字符串之间用一个空格隔开。<span></span> </p> <p class="MsoBodyText" style="margin-left:0cm;"> 接下来 <i>m </i>行，其中第 <i>i </i>行包含两个整数 <i>a</i><i>i</i>, <i>s</i><i>i </i>，表示第 <i>i </i>条指令。若 <i>a</i><i>i </i>= 0 ，表示向左数 <i>s</i><i>i </i>个人；若 <i>a</i><i>i </i>= 1 ，表示向右数 <i>s</i><i>i </i>个人。保证 <i>a</i><i>i </i>不会出现其他的数， 1 ≤ <i>s</i><i>i </i>< <i>n</i><i>。</i><span></span> </p>

## 输出格式

<p class="MsoBodyText" style="margin-left:0cm;"> 输出到文件 <b><i>toy.out</i></b><b><i> </i></b>中。输出一个字符串，表示从第一个读入的小人开始，依次数完 <i>m </i>条指令后到达的小人的职业。 </p>

## 输入样例

```plaintext
【样例一输入】 7 3 0 singer 0 reader 0 mengbier 1 thinker 1 archer 0 writer 1 mogician 0 3 1 1 0 2 【样例二输入】 10 10 1 c 0 r 0 p 1 d 1 e 1 m 1 t 1 y 1 u 0 v 1 7 1 1 1 4 0 5 0 3 0 1 1 6 1 2 0 8 0 4
```

## 输出样例

```plaintext
【样例一输出】 writer 【样例二输出】 y
```



 

## 来源

NOIP2016DAY1（一）

