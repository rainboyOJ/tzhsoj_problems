## 描述

给定一个带权（无负权）的有向图，求顶点1到其外他各顶点的最短路。 《Dijkstra算法》思想： Dijkstra算法是解决单源点最短路径问题的贪心算法。其基本思想是设置顶点集合S，首先将源点加入该集合，然后依据源点到其他顶点的路径长度，选择路径长度最小的顶点加入集合，根据所加入顶点更新源点到其他顶点的路径长度，然后再选取最小边的顶点，依次来做，直到求解出所有顶点的路径长度。 给定带权有向图G＝（V，E），其中每条边的权是非负实数，另外，再给定 V 中的一个顶点，我们称之为源点。再计算从源点到其他顶点的最短路径长度。这个问题称为图论单源点最短路问题。 

## 输入格式

 

## 输出格式

 

## 输入样例

```plaintext
5 0 4 29 4 0 2 0 0 0 3 0 6 0 0 4 0 0 0 0 6 0 0 4 0 0 
```

## 输出样例

```plaintext
4 11 4 7
```



 

## 来源

数据结构与算法设计 P69

