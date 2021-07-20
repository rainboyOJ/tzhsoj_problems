## 描述

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【问题描述】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">在影像比对中，有一种方法是利用影像中的边缘(edge)资讯，计算每个边缘资讯中具有代表性的结构化特征，以作为比对两张影像是否相似的判断标准。 Water-filling 方法是从每个边缘图的一个端点开始，绕着相连的边缘点走并依序编号。若走到某一步时，遇到一个以上不同的连接点，则分成不同路径同时继续走，直到没有任何连接点为止。如果一个点和另一个点为左右相邻或上下相邻，就称为连接。</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <a href="/JudgeOnline/admin/../upload/pimg1728_1.jpg" rel="lightbox[793]" style="outline: none; color: rgb(110, 161, 219); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;"><img alt="" src="/JudgeOnline/admin/../upload/pimg1728_1.jpg" style="border: none; height: auto; max-width: 100%; width: auto;" /></a><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">例如，在图一的影像中包含三个边缘图，每个边缘图由一些互相连接的边缘点构成。图中以黑色的方块代表边缘点，白色的方块代表背景。在Water-filling 方法中，首先，从第一行(row)开始，由左至右，由上至下，先找到第一个黑点并编号为1。接着，找1 的下一个尚未编号的连接点并编号为2。依此方法继续往下一个点前进并依序编号。在编号6 的点之后有两个尚未编号的连接点，此时，则分为两条路线，并同时编号为7 继续往下走。当走到没有任何的相连点时，则结束现有边缘图的编号，并继续对影像中的其它边缘图编号。走完图一所有边缘图后所得到的编号如图二所示。所以，走完这三个边缘图所需要的步数分别为12、7 及3；因此，12、7 及3 可以作为代表此张影像的结构化特征。请注意：位于斜对角上的两点不能算做连接。</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">请写一个程序计算每个影像中，以Water-filling 方法走完其中所有的边缘图后，将每个边缘图所需走的步数输出。</span></p> <p></p> <p></p>

## 输入格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输入】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">输入文件包含一个正方形的影像。</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">第一行是 n（1≤n≤1000），表示正方形的规模。</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">接下来的 n 行n 列表示影像内容：0 表示背景的白点，1 表示黑色的边缘点。</span></p> <div><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;"><br /> </span></div> <p></p>

## 输出格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输出】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">对于每个输入的影像，以Water-filling 方法走完所有的边缘图后，先输出此影像中共有几个边缘图。然后按升序方式输出每个边缘图所需走的步数。</span></p> <div><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;"><br /> </span></div> <p></p>

## 输入样例

```plaintext
【输入样例1】 10 0000000000 0011110000 0000010000 0011111000 0010110100 0010010110 0011110010 0100010010 0100000110 0100000000 【输入样例2】 9 000000011 111111101 100000101 111111101 100010101 100010101 111111101 000000001 000000011 
```

## 输出样例

```plaintext
【输出样例1】 3 3 7 12 【输出样例2】 2 11 12 
```



 



 

