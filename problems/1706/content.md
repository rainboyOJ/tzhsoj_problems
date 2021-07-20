## 描述

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【问题描述】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">蠕虫是一个古老的电脑游戏，它有许多版本。但所有版本都有一个共同规则：操纵一条蠕虫在屏幕上转圈，并试着去避免撞到自己或障碍物。</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">这里我们将模拟一个简单的版本。游戏将在 50×50 的棋盘上进行，棋盘的左上角为(1,1)，蠕虫在初始时是一串20 个相连的方格。所谓连接是指方格在水平或垂直方向上相接。蠕虫开始时是水平地伸展开的，从（25，11）到（25，30）。其中（25，30）是它的头。蠕虫只能向东（E），西（W），南（S），北（N）四个方向移动，但不能向自己移动，因此在开始时向西（W）是不允许的。每次移动时，蠕虫向给定的方向移动，一次只移动一格，并且保证它的长度不变。因此只有蠕虫的头和尾所占据的方格在移动一步后被改变。注意：蠕虫的头能移动到虫尾刚刚让出的空格。</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">你将被给定一系列移动指令并模拟虫的移动，直到：蠕虫撞上了自己；蠕虫越出了棋盘；蠕虫成功地完成了这些指令。在前两种情况下你应当忽略剩下的指令。</span></p> <p></p> <p></p>

## 输入格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输入】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">每个输入文件包含了很多组数据。每个数据占2 行，第一行是一个整数（n<100），表示移动指令的指令数（以n=0 表示输入结束）；第2 行包括了n 个字符（E，W，S，N），字符之间没有空格，表示移动的指令。</span></p> <p></p> <p></p>

## 输出格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输出】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">每个数据输出一行，格式为以下 3 种中的一种（m 是你要决定输出的步数）：</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">The worm ran into itself on move m.</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">The worm ran off the board on move m.</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">The worm successfully made all m moves.</span></p> <p></p> <p></p>

## 输入样例

```plaintext
【输入样例】 18 NWWWWWWWWWWSESSSWS 20 SSSWWNENNNNNWWWWSSSS 30 EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE 13 SWWWWWWWWWNEE 0 
```

## 输出样例

```plaintext
【输出样例】 The worm successfully made all 18 moves. The worm ran into itself on move 9. The worm ran off the board on move 21. The worm successfully made all 13 moves. 
```



 



 

