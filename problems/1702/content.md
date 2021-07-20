## 描述

<p style="margin: 0px 0px 1em; padding: 0px; line-height: 27px; color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px;">【问题描述】</p> <p style="margin: 0px 0px 1em; padding: 0px; line-height: 27px; color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px;">传说中珠穆朗玛峰下有座古代人修建的神庙，神庙的地下室里有古代王室的遗产，但数千年来从未有人到达过……探险者小FF 一直梦想成为世界上最富有的人和最杰出的探险家并被永载史册。在证明了这个洞确实存在后，小FF 做好了充足准备，来到了神庙。<br /> 当他走到神庙地下最底层时，发现正前方有一扇巨石门，门上雕刻着一幅古代人进行某种活动的图案。而石门上方用古代文写着“神的殿堂”。小FF 猜想里面应该就有王室的遗产了。但现在的问题是如何打开这扇门……<br /> 仔细研究后，他发现门上的图案大概是说：古代人认为只有智者才是最容易接近神明的。而最聪明的人往往通过一种仪式选拔出来。仪式大概是指，即将隐退的智者为他的候选人写下一串无序的数字，并让他们进行一种操作，即交换序列中相邻的两个元素。而用最少的交换次数使原序列变成不下降序列的人即是下一任智者。<br /> 小 FF 发现门上同样有着n 个数字。于是他认为打开这扇门的秘诀就是找到让这个序列变成不下降序列所需要的最小次数。但小FF 不会……只好又找到了你，并答应事成之后与你三七分……</p> <p></p>

## 输入格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输入】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">第一行为一个整数 n，表示序列长度</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">第二行为 n 个整数，表示序列中每个元素。</span></p> <p></p>

## 输出格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输出】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">一个整数 ans，即最少操作次数。</span></p> <p></p>

## 输入样例

```plaintext
【输入样例】 4 2 8 0 3 
```

## 输出样例

```plaintext
【输出样例】 3 
```

Hint

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【Hint】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">开始序列为 2 8 0 3，目标序列为0 2 3 8，可进行三次操作的目标序列：</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">1．swap (8,0):2 0 8 3</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">2．swap (2,0):0 2 8 3</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">3．swap (8,3):0 2 3 8</span></p> <p></p> <p><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【数据规模】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">对于 30%的数据1≤n≤10^4。</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">对于 100%的数据1≤n≤5*10^5；</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">-maxlongint≤A[i]≤maxlongint。</span></p> <p></p>



 

