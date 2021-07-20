## 描述

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【问题描述】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">熊大妈的奶牛在时针的带领下，围成了一个圆圈跳舞。由于没有严格的教育，奶牛们之间的间隔不一致。</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">奶牛想知道两只最远的奶牛到底隔了多远。奶牛A 到B 的距离为A 顺时针走和逆时针走，到达B的较短路程。告诉你相邻两个奶牛间的距离，请你告诉奶牛两只最远的奶牛到底隔了多远。</span></p> <p></p>

## 输入格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">第一行一个整数 N，表示有N 只奶牛。(2≤N≤100000)</span></p> <p><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">接下来2～N+1 行，第I 行有一个数，表示第I-1 头奶牛顺时针到第I 头奶牛的距离。(1≤距离≤maxlongint，距离和≤maxlongint)</span></p> <p><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">第N+l 行的数表示第N 头奶牛顺时针到第1 头奶牛的距离。</span></p> <p></p>

## 输出格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">一行，表示最大距离。</span></p> <p></p>

## 输入样例

```plaintext
【输入样例】 5 1 2 3 4 5
```

## 输出样例

```plaintext
【输出样例】 7 【Hint】 所有奶牛 I 到J 之间的距离和到达方式（顺为顺时针，逆为逆时针）如下： I\J 1 2 3 4 5 1 O 1 (顺) 3(顺) 6（顺） 5（逆） 2 1（逆） O 2（顺） 5（顺） 6（逆） 3 3（逆） 2（逆） 0 3（顺） 7（顺） 4 6（逆） 5（逆） 3（逆） 0 4(顺) 5 5（顺） 6（顺） 7（逆） 4（逆） 0 所以，最远的两头奶牛为3 到5，距离是7。
```

Hint

<p></p>



 

