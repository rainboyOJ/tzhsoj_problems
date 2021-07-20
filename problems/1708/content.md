## 描述

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【问题描述】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">阿兰是某机密部门的打字员，出于保密的需要，该部门用于输入密码的键盘是特殊设计的，键盘上没有数字键，而只有以下六个键：Swap0, Swap1, Up, Down, Left, Right。为了说明这六个键的作用，我们先定义录入区的6 个位置的编号，从左至右依次为1，2，3，4，5，6。下面列出每个键的作用：</span></p> <p><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">Swap0：按Swap0，光标位置不变，将光标所在位置的数字与录入区的1 号位置的数字（左起第一个数字）交换。如果光标已经处在录入区的1 号位置，则按Swap0 键之后，录入区的数字不变；</span></p> <p><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">Swap1：按Swap1，光标位置不变，将光标所在位置的数字与录入区的6 号位置的数字（左起第六个数字）交换。如果光标已经处在录入区的6 号位置，则按Swap1 键之后，录入区的数字不变；</span></p> <p><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">Up：按Up，光标位置不变，将光标所在位置的数字加1（除非该数字是9）。例如，如果光标所在位置的数字为2，按Up 之后，该处的数字变为3；如果该处数字为9，则按Up 之后，数字不变，光标位置也不变；</span></p> <p><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">Down：按Down，光标位置不变，将光标所在位置的数字减1（除非该数字是0），如果该处数字为0，则按Down 之后，数字不变，光标位置也不变；</span></p> <p><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">Left：按Left，光标左移一个位置，如果光标已经在录入区的1 号位置（左起第一个位置）上，则光标不动；</span></p> <p><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">Right：按Right，光标右移一个位置，如果光标已经在录入区的6 号位置（左起第六个位置）上，则光标不动。</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">当然，为了使这样的键盘发挥作用，每次录入密码之前，录入区总会随机出现一个长度为 6 的初始密码，而且光标固定出现在1 号位置上。当巧妙地使用上述六个特殊键之后，可以得到目标密码，这时光标允许停在任何一个位置。</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">现在，阿兰有一个6 位的数字密码，请编写一个程序，求出录入一个密码需要的最少的击键次数。</span></p> <p></p>

## 输入格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输入】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">仅一行，含有两个长度为 6 的数，前者为初始密码，后者为目标密码，两数间用空格隔开。</span></p> <p></p> <p></p>

## 输出格式

<p><span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">【输出】</span><br style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;" /> <span style="color: rgb(102, 102, 102); font-family: 'LiSong Pro', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 27px;">仅一行，含有一个正整数，为最少需要的击键次数。</span></p> <p></p> <p></p>

## 输入样例

```plaintext
【输入样例】 123456 654321 
```

## 输出样例

```plaintext
【输出样例】 11 
```



 



 

