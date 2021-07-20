## 描述

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【问题描述】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">Jzabc 更是一个狂热的旅游爱好者。这次他想去一个诡异的地方。这个地方有n 个村庄，编号为1 到n。此刻他在1 号村庄，他想去n 号村庄。这n 个村庄之间有m 条单向道路。通过某些道路时，可能会花费一些钱作为“买路钱”，可是通过一些道路时，不仅不需要交“买路钱”，而且会得到一些奖励（这就是诡异的地方？）。当然两个村庄之间可能有多条直接相连的道路，但是每一条道路只能通过一次。这些村庄有这样的特性，从任何一个村庄出发，沿着任一条路径走都不会回到出发点。找到一条路径从1 号村庄到n 号村庄后，他需要计算一共得到多少奖励，一共交了多少“买路钱”。如果得到的总奖励钱数大于交的“买路钱”数，那么称走这一条路径可以得到奖励；相反，如果前者小于后者，那么称走这一条路径需要花费。如果两者相等，那么Jzabc 不会选这一条路（我也不知道他为什么不选这一条路径）。不会出现所有的路径两者都相等。他又需要你的帮助，让你找一条路径，使他得到的奖励最小（为什么不是最大的奖励？），并输出最小奖励。如果找不到一条路径能使他得到奖励，那么就找一条路径使他得到的花费最大（为什么就不是最小的花费？），并输出最大花费。</span></p> <div><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;"><br /> </span></div> <p></p>

## 输入格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输入】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">第一行两个正整数 n 和m，n 是村庄数，m 是道路数。</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">以下m 行，每行三个数x,y,w，表示x 为起点，y 是终点，若w 为正，则是通过此条道路得到的奖励；若w 为负，则是通过此条道路交的“买路钱”。w≠0 且|w|≤10。</span></p> <div><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;"><br /> </span></div> <p></p>

## 输出格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输出】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">一个整数。若有最小奖励，则输出。否则输出最大花费。</span></p> <div><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;"><br /> </span></div> <p></p>

## 输入样例

```plaintext
【输入样例1】 3 4 1 2 2 2 3 -1 2 3 3 1 3 -1 【输入样例2】 3 4 1 2 2 2 3 -3 2 3 -5 1 3 -2 
```

## 输出样例

```plaintext
【输出样例1】 1 【输出样例2】 3 
```

Hint

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【数据规模】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">20%的数据，n≤20，m≤200；</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">50%的数据，n≤50，m≤2000；</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">100%的数据，n≤100，m≤20000。</span></p> <div><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;"><br /> </span></div> <p></p>



 

