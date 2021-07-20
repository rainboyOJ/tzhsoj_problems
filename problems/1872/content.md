## 描述

<p class="MsoNormal" style="text-indent:21.0pt;"> 石头剪刀布是常见的猜拳游戏：石头胜剪刀，剪刀胜布，布胜石头。如果两个人出拳一样，则不分胜负。在《生活大爆炸》第二季第<span>8</span>集中出现了一种石头剪刀布的升级版游戏。升级版游戏在传统的石头剪刀布游戏的基础上，增加了两个新手势：<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 斯波克：《星际迷航》主角之一。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 蜥蜴人：《星际迷航》中的反面角色。 </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 这五种手势的胜负关系如表一所示，表中列出的是甲对乙的游戏结果。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> <img src="/JudgeOnline/upload/image/20170728/20170728222947_68127.png" alt="" width="600" height="197" title="" align="" /> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> <br /> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 现在，小<span>A</span>和小<span>B</span>尝试玩这种升级版的猜拳游戏。已知他们的出拳都是有周期性规律的，但周期长度不一定相等。例如：如果小<span>A</span>以“石头<span>-</span>布<span>-</span>石头<span>-</span>剪刀<span>-</span>蜥蜴人<span>-</span>斯波克”长度为<span>6</span>的周期出拳，那么他的出拳序列就是“石头<span>-</span>布<span>-</span>石头<span>-</span>剪刀<span>-</span>蜥蜴人<span>-</span>斯波克<span>-</span>石头<span>-</span>布<span>-</span>石头<span>-</span>剪刀<span>-</span>蜥蜴人<span>-</span>斯波克<span>-</span>……”，而如果小<span>B</span>以“剪刀<span>-</span>石头<span>-</span>布<span>-</span>斯波克<span>-</span>蜥蜴人”长度为<span>5</span>的周期出拳，那么他出拳的序列就是“剪刀<span>-</span>石头<span>-</span>布<span>-</span>斯波克<span>-</span>蜥蜴人<span>-</span>剪刀<span>-</span>石头<span>-</span>布<span>-</span>斯波克<span>-</span>蜥蜴人<span>-……”</span> </p> <p class="MsoNormal" style="text-indent:21.0pt;">   </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 已知小<span>A</span>和小<span>B</span>一共进行<span>N</span>次猜拳。每一次赢的人得<span>1</span>分，输的得<span>0</span>分；平局两人都得<span>0</span>分。现请你统计<span>N</span>次猜拳结束之后两人的得分。<span></span> </p> <p> <br /> </p>

## 输入格式

<p class="MsoNormal" style="text-indent:21.0pt;"> 输入文件名为<span>rps.in</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 第一行包含三个整数：<span>N</span>，<span>NA</span>，<span>NB</span>，分 别 表 示 共 进 行<span>N</span>次猜拳、小<span>A</span>出拳的周期长度，小<span>B</span>出拳的周期长度。数与数之间以一个空格分隔。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 第二行包含<span>NA</span>个整数，表示小<span>A</span>出拳的规律，第三行包含<span>NB</span>个整数，表示小<span>B</span>出拳的规律。其中，<span>0</span>表示“剪刀”，<span>1</span>表示“石头”，<span>2</span>表示“布”，<span>3</span>表示“蜥蜴人”，<span>  4</span>表示“斯波克”。数与数之间以一个空格分隔。<span></span> </p>

## 输出格式

<p class="MsoNormal" style="text-indent:21.0pt;"> 输出文件名为<span>rps.out</span>。<span></span> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 输出一行，<span>  </span>包含两个整数，以一个空格分隔，分别表示小<span>A</span>、小<span>B</span>的得分。<span></span> </p>

## 输入样例

```plaintext
【输入输出样例1】 10 5 6 0 1 2 3 4 0 3 4 2 1 0 【输入输出样例2】 9 5 5 0 1 2 3 4 1 0 3 2 4 
```

## 输出样例

```plaintext
【输入输出样例1】 6 2 【输入输出样例2】 4 4
```

Hint

<p class="MsoNormal"> <b>【数据说明】<span></span></b> </p> <p class="MsoNormal" style="text-indent:21.0pt;"> 对于<span>100%</span>的数据，<span>0 < N </span>≤<span> 200</span>，<span>0 < NA  </span>≤<span>  200</span>，<span>  0 < NB  </span>≤<span>  200</span>。<span></span> </p>

## 来源

NOIP2014DAY1（一）

