## 描述

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【题目描述】 </span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">多年以后，笨笨长大了，成为电话线布置师。由于地震使得某市的电话线全部损坏，笨笨是负责接到震中市的负责人。该市周围分布着N(1 <= N <= 1000)根据序号1…n顺序编号的废弃电话杆，任意两根电线杆之间没有电话线连接，一共有p(1 <= p <= 10000)对电线杆可以拉电话线。其他的由于地震使得无法连接。</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">第i对电线杆的两个端点分别是ai，bi，他们的距离为li(1 <= li <= 1000000)。数据中每对（ai，bi）只出现一次。编号为1的电线杆已经接入了全国的电话网络，整个使得电话线全部练到了编号N的电线杆上。也就是说，笨笨的任务仅仅是找一条将1号和N号电线杆连起来的路径，其余的电线杆并不一定要连入电话网络，</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">电信公司决定支援灾区免费为此市连接k（0 <= k <= n）对由笨笨指定的电线杆，对于此外的那些电话线，需要为他们付费，总费用取决于其中最长的电话线的长度（每根电话线仅连接一对电线杆）。如果需要连接的电线杆不超过k对，那么费用支出为0。</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">请你计算一下，将电话线引到震中市需要在电话线上花多少钱？</span></p> <div><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;"><br /> </span></div> <p></p>

## 输入格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输入】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">输入文件的第一行包含数字n,p,k；</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">第二行到第p+1行，每行分别都为三个整数ai，bi，li。</span></p> <div><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;"><br /> </span></div> <p></p>

## 输出格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输出】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">一个整数，表示该项工程的最小支出，如果不可能完成则输出-1。 </span></p> <div><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;"><br /> </span></div> <p></p>

## 输入样例

```plaintext
【输入样例】 5 7 1 1 2 5 3 1 4 2 4 8 3 2 3 5 2 9 3 4 7 4 5 6 
```

## 输出样例

```plaintext
【输出样例】 4 
```



 



 

