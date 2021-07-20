## 描述

现在是晚餐时间,而母牛们在外面分散的牧场中。农民约翰按响了电铃,所以她们开始向谷仓走去。你的工作是要指出哪只母牛会最先到达谷仓(在给出的测试数据中,总会有且只有一只速度最快的母牛)。在挤奶的时候(晚餐前),每只母牛都在她自己的牧场上,一些牧场上可能没有母牛。每个牧场由一条条道路和一个或多个牧场连接(可能包括自己)。有时，两个牧场(可能是自我相同的)之间会有超过一条道路相连。至少有一个牧场和谷仓之间有道路连接。因此,所有的母牛最后都能到达谷仓,并且母牛总是走最短的路径。当然,母牛能向着任意一方向前进,并且她们以相同的速度前进。牧场被标记为'a'..'z'和'A'..'Y',在用大写字母表示的牧场中有一只母牛,小写字母中则没有。谷仓的标记是'Z',注意没有母牛在谷仓中。 注意'm'和'M'不是一个牧场

## 输入格式

第 1 行: 整数 P(1<= P<=10000),表示连接牧场(谷仓)的道路的数目。 第 2 ..P+1行: 用空格分开的两个字母和一个整数: 被道路连接牧场的标记和道路的长度(1<=长度<=1000)。 

## 输出格式

单独的一行包含二个项目: 最先到达谷仓的母牛所在的牧场的标记,和这只母牛走过的路径的长度。

## 输入样例

```plaintext
5 A d 6 B d 3 C e 9 d Z 8 e Z 3 
```

## 输出样例

```plaintext
B 11 
```



 



 
