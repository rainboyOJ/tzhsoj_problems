## 描述

佳佳有许多黑色和白色的小珠子，他最喜欢用它们穿成一串串漂亮的项链了。他的每条项链都是由不超过n个小珠子串在一起的环（称项链上的珠子数为项链的长度），每条项链至少有一个珠子。每做完一条项链就在其中的某一个珠子上贴一个标签，从贴有标签的那颗珠子开始, 顺时针记录每个珠子的颜色（白色用0表示，黑色用1表示）。标签上写着这种记录。 <img border=0 src=http://60.191.162.158:8080/JudgeOnline/images/p1117.gif> 佳佳发现，这样做，每条项链都可以用多个标签来表示，例如图(a)的项链，当标签分别贴在珠子1，2，3，4的时候，标签上应分别写作0100，1000，0001和0010。在这样的情况下，佳佳总是选择字典序最小的一个串写在标签上。例如图(a)的项链, 在珠子3处帖上标签0001。 再考虑图(b)所示的项链，最小字典序的标签串是0101，可是标签应该贴在哪颗珠子上呢？珠子1上还是珠子3上呢？佳佳不希望出现这样的情况。所以他在做项链的时候格外小心，保证做出来的项链是合法的（也就是不会出现标签位置不唯一的情况）。 这样，标签上的记录就可以标识一个串。根据标签上串的字典序就可以对项链进行排序，例如图(c)的项链比图(d)的小，因为00101的字典序比0011小。 任务一：新年快到了，佳佳决定给自己的两个双胞胎表妹一人做一条项链。刚做完其中一条项链后，佳佳突然有了一个绝妙的想法：既然是送给孪生姐妹，为什么不做一对“孪生项链”呢？换句话说，如果把所有可能的项链排好顺序，“孪生项链”的位置应当是相邻的，姐姐的项链标签的字典序要比妹妹的大。佳佳想把已经做好的一条项链送给妹妹，那么姐姐的项链应该是什么样子的呢？ 任务二：佳佳还想知道所有合法的项链中长度恰好为k的有多少条，你能告诉他吗？ 

## 输入格式

输入文件twins.in的第1行包含三个整数n、m和k(1<=m, k<=n)，相邻整数用一个空格隔开， 其中n表示每条项链的珠子数上限；m表示任务一中妹妹的项链长度； k表示任务二中的项链长度。 第2行包括一个长度为m的01串，表示妹妹的项链上的标签。输入数据保证无误。

## 输出格式

输出文件twins.out的第1行有一个正整数t，表示长度恰好为k的项链有t条； 第2行包括一个01串，表示姐姐的项链上的标签。 输入数据保证姐姐的项链一定可以做出来。

## 输入样例

```plaintext
twins.in 5 5 5 00101 
```

## 输出样例

```plaintext
twins.out 6 0011 
```

Hint

【评分方法】 仅第一行正确，得40%的分数 仅第二行正确，得60%的分数 两行都正确，得100%的分数 【数据规模】 n的范围： 20%的数据：1<=n<=10 40%的数据：1<=n<=100 70%的数据：1<=n<=1000 100%的数据：1<=n<=200,000 k的范围： 30%的数据：1<=k<=10 60%的数据：1<=k<=50 100%的数据：1<=k<=1000 【样例解释】 项链可能有以下14种： 0, 00001, 0001, 00011, 001, 00101, 0011, 00111, 01, 01011, 011, 0111, 01111, 1 其中长度为1, 2, 3, 4, 5的项链分别有2, 1, 2, 3, 6个。 

## 来源

冬令营_2004.1:twins孪生项链

