## 描述

故事背景： 话说小FF在经历了上次“寻找古代王族遗产”的探险后，成为了世界上最伟大的探险家并拥有了一大笔财富。 当然他不能坐吃山空，必须创造财富！！ 于是他买下了传说中的Greed Island并优先发展那里的采矿业……他还将其称为Greed Island的“NewBe_One”计划。 试题一： 新的开始 【题目描述】 发展采矿业当然首先得有矿井， 小FF花了上次探险获得的千分之一的财富请人在岛上挖了n口矿井， 但他似乎忘记考虑的矿井供电问题…… 为了保证电力的供应， 小FF想到了两种办法： 1、 在这一口矿井上建立一个发电站， 费用为v（发电站的输出功率可以供给任意多个矿井）。 2、 将这口矿井与另外的已经有电力供应的矿井之间建立电网， 费用为p。 小FF希望身为”NewBe_One" 计划首席工程师的你帮他想出一个保证所有矿井电力供应的最小花费。 

## 输入格式

第一行一个整数n， 表示矿井总数。 第2～n+1行，每行一个整数， 第i个数v[i]表示在第i口矿井上建立发电站的费用。 接下来为一个n*n的矩阵P， 其中p[ i , j ]表示在第i口矿井和第j口矿井之间建立电网的费用（数据保证有p[ i, j ] = p[ j, i ], 且 p[ i, i ]=0）。

## 输出格式

仅一个整数， 表示让所有矿井获得充足电能的最小花费。 

## 输入样例

```plaintext
4 5 4 4 3 0 2 2 2 2 0 3 3 2 3 0 4 2 3 4 0 
```

## 输出样例

```plaintext
9 输出样例说明： 小FF可以选择在4号矿井建立发电站然后把所有矿井都与其建立电网，总花费是 3+2+2+2 = 9。
```

Hint

【数据范围】 对于30%的数据： 1<=n<=50; 对于100%的数据： 1<=n<=300; 0<=v[i], p[i,j] <=10^5.

## 来源

【NOI导刊2010模拟试题.新的开始】

