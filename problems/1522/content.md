## 描述

有一片被大海包围的群岛，岛上居住着一个食人部族。很多年前部落里有一位巫师接受了神的召唤跳入海中，从此，那一片海域就被打上了神的烙印，被这片海域所包围的陆地也被赋予了神圣的意义（包围关系满足传递性，即海域A包围了岛B，岛B包围了海域C，而海域C中包含了岛D，则我们说海域A也包含了岛D）。从那以后，部落里的巫师死后都必须葬在这片神圣海域所包围的岛上，而且每一个岛都只能埋葬一位巫师（否则就会被视为对神的不敬，从而给部族带来灾难）。现在给你群岛的地图和最初那位巫师跳海的地方，请你计算一下最多可以埋葬多少巫师。 <img border=0 src=http://60.191.162.158:8080/JudgeOnline/images/P1522.png> 地图是一个n*m的字符矩阵，’#’代表陆地，’.’代表海洋。连通的一片陆地为一个岛，连通的一片海洋为一个海域。其中，陆地从上、下、左、右4个方向连通，海洋从上、下、左、右、左上、左下、右上、右下8个方向连通。如下图。 图3中有4个岛，2片海域。如果在A处落水，则落水的海域包围了除右上、左下两个顶角外的3个岛屿；如果在B处落水，则只包含了中间的2个岛。 数据范围是n,m<=500。空间限制1000Kb，时间限制1second 

## 输入格式

第1行，包含两个整数：n、m（n、m<=500）；如： 7 9：表示有7行，9列。 第2行到n+1行；每行均为m个字符，构成一个地图，如： ........# .#######. .#.....#. .#.#.#.#. .#.....#. .#######. #........ 地图是一个n*m（7*9）的字符矩阵，’#’代表陆地，’.’代表海洋。 接下来一行为一个整数k，表示下面有k行数据。如k:2；表示下面有两行： 每行均为两个整数，用来表示一个海域的位置坐标。 1 1 3 7 

## 输出格式

输出共k行，每行为一个整数，用来表示最多可以埋葬多少个巫师。 3（1 1坐标水域可以埋葬3个巫师） 2（3 7坐标水域可以埋葬3个巫师） 

## 输入样例

```plaintext
7 9 ........# .#######. .#.....#. .#.#.#.#. .#.....#. .#######. #........ 2 1 1 3 7 
```

## 输出样例

```plaintext
3 2 
```



 



 

