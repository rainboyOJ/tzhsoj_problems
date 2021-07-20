## 描述

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【问题描述】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">小B 写了一个程序，随机生成了n 个正整数，分别是a[i]..a[n]，他取出了其中一些数，并把它们乘起来之后模 p，得到了余数c。但是没过多久，小B 就忘记他逃了哪些数，他想把所有可能的取数方案都找出来。你能帮他计算一下一共有多少种取数方案吗?请把最后的方案数模1000000007 后输出。小 B 记得他至少取了一个数。</span></p> <p></p> <p></p>

## 输入格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输入】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">第一行三个正整数 n、p、c，含义如题目所述。接下来一行有n 个正整数，表示生成的n 个随机数。</span></p> <p></p> <p></p>

## 输出格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输出】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">一个数。方案数模 1000000007。</span></p> <p></p> <p></p>

## 输入样例

```plaintext
【输入样例】 2 7 2 1 2 4 
```

## 输出样例

```plaintext
【输出样例】 2 
```

Hint

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【数据规模】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">对 30%的数据有：n≤16，p≤10000；</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">对 100%的数据有：n≤32，p≤10^9，c≤10^9，a[i]<p，p 是质数。</span></p> <p></p> <p></p>



 

