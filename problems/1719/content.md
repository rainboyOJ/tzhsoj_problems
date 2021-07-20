## 描述

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【问题描述】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">有 n 个石子围成一圈，每个石子都有一个权值a[i]。给你一次且仅一次取石子的机会，取石子的块数不限，取完后统计得分。现在要使取出的石子得分最大。</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">每个石子的得分计算公式是a[i]*d，d 表示这个石子到两边被取了的石子的距离和。如{1,2,7,9,8,6,4,5,3,10}这些权值的石子围成一圈，不同取法有不同得分：</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <a href="/JudgeOnline/admin/../upload/pimg1719_1.jpg" rel="lightbox[739]" style="outline: none; color: rgb(189, 201, 0); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;"><img alt="" src="/JudgeOnline/admin/../upload/pimg1719_1.jpg" style="border: none; height: auto; max-width: 100%; width: auto;" /></a></p> <p></p> <p></p>

## 输入格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输入】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">第一行一个整数 n。</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">接下来 n 行，每行一个整数a[i]。</span></p> <p></p> <p></p>

## 输出格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输出】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">仅一个整数，表示最大得分。</span></p> <div><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;"><br /> </span></div> <p></p>

## 输入样例

```plaintext
【输入样例】 5 1 2 3 4 20 
```

## 输出样例

```plaintext
【输出样例】 80 【数据规模】 1≤a[i]≤100000 对于 30%的数据，n≤60； 对于 60%的数据，n≤300； 对于 100%的数据，n≤100000。 
```



 



 

