## 描述

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【问题描述】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">在一个凹槽中放置了 n 层砖块、最上面的一层有n 块砖，从上到下每层依次减少一块砖。每块砖都有一个分值，敲掉这块砖就能得到相应的分值。</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">如果你想敲掉第 i 层的第j 块砖的话，若i=1，你可以直接敲掉它；若i>1，则你必须先敲掉第i-1 层的第j 和第j+1 块砖。</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">你现在可以敲掉最多 m 块砖，求得分最多能有多少。</span></p> <p></p> <p></p>

## 输入格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输入】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">输入文件的第一行为两个正整数 n 和m；接下来n 行，描述这n 层砖块上的分值a[i][j],满足0≤a[i][j]≤100。</span></p> <p></p> <p></p>

## 输出格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输出】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">输出文件仅一行为一个正整数，表示被敲掉砖块的最大价值总和。</span></p> <p></p> <p></p>

## 输入样例

```plaintext
【输入样例】 4 5 2 2 3 4 8 2 7 2 3 49 
```

## 输出样例

```plaintext
【输出样例】 19 
```



 



 

