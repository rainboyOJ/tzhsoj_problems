## 描述

引子： 断桥是否下过雪 我望着湖面 水中寒月如雪 指尖轻点融解 断桥是否下过雪 又想起你的脸 若是无缘再见 白堤柳帘垂泪好几遍 背景： 在美丽的WJMZBMR的家乡，有很多的断桥，在冬天的时候，就会出现断桥残雪的景象。WJMZBMR不禁会哼起许嵩的《断桥残雪》。 但有时候这对交通也是一种阻碍T_T，在这里我们把位置看成节点，把连接位置之间的桥看成边。由于某些信春哥的原因，这些桥都是单向的囧。 但是由于雪大的原因，有些桥是会突然断掉的。由于WJMZBMR是信春哥的，桥不会在WJMZBMR走过的时候断掉，只会在WJMZBMR到它前面的时候突然断掉。而且春哥告诉WJMZBMR，只有一座桥由于有一次春哥在上面跑步承受了春哥的霸气有断掉的可能。 但春哥日理万机已经忘掉了是哪座桥了T_T。 WJMZBMR想从他的家去春哥那里膜拜！他的家是0号结点，春哥在1号。 WJMZBMR想知道在最坏的情况下，他最少需要多少时间能到到达春哥所在处。 数学定义： 这个是为了更加清楚的说明写的，如果您在上面已经看懂了就不用看了。如果您在上面没有看懂的话就别管上面的了。直接看数学模型吧。 这是一个二人博弈问题。假设是WJMZBMR在跟NZK神犇玩游戏。 给你一个带权有向图，每条边有一个经过的时间，有两个玩家WJMZBMR和NZK神犇在玩游戏， WJMZBMR的目标是最快的从结点0到达结点1，他可以沿着一条边走到另一条边并花去一定的时间。 NZK神犇的目标是让WJMZBMR到达结点1的时间最长，NZK神犇的能力是在一个特定的时间让一条边断掉，但只能使用一次，并且不能在WJMZBMR在一条边上的时候使用。 求两者都是最优决策的情况下，WJMZBMR到达结点1的时间。

## 输入格式

第一行四个数N，M分别表示点数，边数 然后 M行，每行a和b和c表示有一条从a到b的长度为c的有向边。 结点编号从0到N-1

## 输出格式

一个数表示答案。 

## 输入样例

```plaintext
Sampe Input 1: 3 3 0 1 1 0 2 2 2 1 3 Sample Input 2： 4 5 0 2 1 0 3 1 2 3 1 2 1 1 3 1 1 
```

## 输出样例

```plaintext
Sample Output 1: 5 Sample Output 2: 3 样例的解释： Sample 1 Explanation: 在WJMZBMR在0号结点的时候，让0->1的桥断掉，WJMZBMR就只能走0->2->1的路径了，长度为5. Sample 2 Explanation: WJMZBMR一开始可以往2号结点和3号结点走，但是如果WJMZBMR往3号结点走。那么如果3->1的桥被切断，WJMZBMR就无路可走悲剧了。 所以WJMZBMR只能一开始往2号结点走，然后2->1被切断（注意，这就是最坏情况，也是NZK神犇的决策），WJMZBMR就只能往2->3->1走了。总长度为3。 
```

Hint

数据范围： 40%的数据 N<=20 100%的数据 N<=300 M<=1000 一些解释： 这个题目是为了对应NOIP2009 trade出的图论题，因为本身的模型涉及二人博弈有点绕，本来不想出的，但由于此题的算法比较好，还是出了。我已经尽量将题目写清楚了，如果还是有不理解的，可以去答疑贴问，不过最好自己先看两遍，我怕被问爆囧T_T。 

## 来源

分区联赛模拟试题4_3.断桥残雪】

