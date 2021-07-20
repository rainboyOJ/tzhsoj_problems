## 描述

<p class="MsoNormal" align="left"> 在大学期间，经常需要租借教室。大到院系举办活动，小到学习小组自习讨论，都需要向学校申请借教室。教室的大小功能不同，借教室人的身份不同，借教室的手续也不一样。 </p> <p class="MsoNormal" align="left"> 面对海量租借教室的信息，我们自然希望编程解决这个问题。 </p> <p class="MsoNormal" align="left"> 我们需要处理接下来n天的借教室信息，其中第i天学校有r<sub>i</sub>个教室可供租借。共有m份订单，每份订单用三个正整数描述，分别为d<sub>j</sub>, s<sub>j</sub>, t<sub>j</sub>，表示某租借者需要从第s<sub>j</sub>天到第t<sub>j</sub>天租借教室（包括第s<sub>j</sub>天和第t<sub>j</sub>天），每天需要租借d<sub>j</sub>个教室。 </p> <p class="MsoNormal" align="left"> 我们假定，租借者对教室的大小、地点没有要求。即对于每份订单，我们只需要每天提供d<sub>j</sub>个教室，而它们具体是哪些教室，每天是否是相同的教室则不用考虑。 </p> <p class="MsoNormal" align="left"> 借教室的原则是先到先得，也就是说我们要按照订单的先后顺序依次为每份订单分配教室。如果在分配的过程中遇到一份订单无法完全满足，则需要停止教室的分配，通知当前申请人修改订单。这里的无法满足指从第s<sub>j</sub>天到第t<sub>j</sub>天中有至少一天剩余的教室数量不足d<sub>j</sub>个。 </p> <p class="MsoNormal" align="left"> 现在我们需要知道，是否会有订单无法完全满足。如果有，需要通知哪一个申请人修改订单。 </p>

## 输入格式

<div class="WordSection1"> <p class="MsoNormal" align="left"> 输入文件为 classroom.in。 </p> <p class="MsoNormal" align="left"> 第一行包含两个正整数n, m，表示天数和订单的数量。 </p> </div> <p class="MsoNormal" align="left"> 第二行包含n个正整数，其中第i个数为r<sub>i</sub>，表示第i天可用于租借的教室数量。 </p> <p class="MsoNormal" align="left"> 接下来有m行，每行包含三个正整数d<sub>j</sub>, s<sub>j</sub>, t<sub>j</sub>，表示租借的数量，租借开始、结束分别在第几天。 </p> <p class="MsoNormal" align="left"> 每行相邻的两个数之间均用一个空格隔开。天数与订单均用从1开始的整数编号。 </p>

## 输出格式

<p class="MsoNormal" align="left"> 输出文件为 classroom.out。 </p> <p class="MsoNormal" align="left"> 如果所有订单均可满足，则输出只有一行，包含一个整数 0。否则（订单无法完全满足）输出两行，第一行输出一个负整数-1，第二行输出需要修改订单的申请人编号。 </p>

## 输入样例

```plaintext
4 3 2 5 4 3 2 1 3 3 2 4 4 2 4
```

## 输出样例

```plaintext
-1 2 
```

Hint

<div class="WordSection1"> <p class="MsoNormal" align="left"> 【输入输出样例说明】 </p> </div> <p class="MsoNormal" align="left"> 第1份订单满足后，4天剩余的教室数分别为 0，3，2，3。第2份订单要求第2天到第4天每天提供3个教室，而第3 天剩余的教室数为2，因此无法满足。分配停止，通知第2个申请人修改订单。 </p> <p class="MsoNormal" align="left"> 【数据范围】 </p> <p class="MsoNormal" align="left"> 对于10%的数据，有1 ≤ n, m ≤ 10； </p> <p class="MsoNormal" align="left"> 对于30%的数据，有1 ≤ n, m ≤ 1000； </p> <p class="MsoNormal" align="left"> 对于70%的数据，有1 ≤ n, m ≤ 10<sup>5</sup>； </p> <p class="MsoNormal" align="left"> 对于100%的数据，有1 ≤ n, m ≤ 10<sup>6</sup>, 0 ≤ r<sub>i</sub>, d<sub>j</sub>≤ 10<sup>9</sup>, 1 ≤ s<sub>j</sub>≤ t<sub>j</sub>≤ n。 </p>

## 来源

NOIP2012DAY2（二）

