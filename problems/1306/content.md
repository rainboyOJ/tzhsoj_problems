## 描述

读入一个图，N为图的阶， 接下来读入N*N个数据，表示图中各个结点间对应的权值； 读入一个整数m，表示要求求出m对结点间的最短路径。 如果图中某对结点之间无路可走，则输出："no find road!"

## 输入格式

6{n为图的阶} 0 7 6 2 0 0{读入图的相关信息：带权邻接矩阵} 7 0 0 3 4 0 6 0 0 5 0 3 2 3 5 0 5 4 0 4 0 5 0 6 0 0 3 4 6 0 2{读入要求的点对数目：m} 1 5 3 6

## 输出格式

7{结点：1、5之间的最短路径为：7} 3{结点3、6之间的最短路径为：3}

## 输入样例

```plaintext
6 0 7 6 2 0 0 7 0 0 3 4 0 6 0 0 5 0 3 2 3 5 0 5 4 0 4 0 5 0 6 0 0 3 4 6 0 2 1 5 3 6
```

## 输出样例

```plaintext
7 3
```



 



 

