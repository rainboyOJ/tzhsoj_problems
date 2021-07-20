## 描述

<p> 给出一张地图，这张地图被分为n×m（n,m<=100）个方块，任何一个方块不是平地就是高山。平地可以通过，高山则不能。现在你处在地图的（x1,y1）这块平地，问：你至少需要拐几个弯才能到达目的地（x2,y2）？你只能沿着水平和垂直方向的平地上行进，拐弯次数就等于行进方向的改变（从水平到垂直或从垂直到水平）的次数。例如：如图8-6，最少的拐弯次数为5。 </p> <p> <img src="/JudgeOnline/upload/image/20170529/20170529203119_83629.png" alt="" /> </p>

## 输入格式

第1行：n m<br /> 第2至n+1行：整个地图地形描述（0：空地；1：高山），<br /> 如（图1）第2行地形描述为：1 0 0 0 0 1 0<br /> 第3行地形描述为：0 0 1 0 1 0 0<br /> ……<br /> 第n+2行：x1 y1 x2 y2 （分别为起点、终点坐标）<br />

## 输出格式

s （即最少的拐弯次数）

## 输入样例

```plaintext
5 7 1 0 0 0 0 1 0 0 0 1 0 1 0 0 0 0 0 0 1 0 1 0 1 1 0 0 0 0 0 0 0 0 1 1 0 1 3 1 7
```

## 输出样例

```plaintext
5
```



 



 
