## 描述

背景 Background 小杉坐在教室里，透过口袋一样的窗户看口袋一样的天空。有很多云飘在那里，看起来很漂亮，小杉想摘下那样美的几朵云，做成棉花糖。 描述 Description 给你云朵的个数N，再给你M个关系，表示哪些云朵可以连在一起。 现在小杉要把所有云朵连成K个棉花糖，一个棉花糖最少要用掉一朵云，小杉想知道他怎么连，花费的代价最小。 

## 输入格式

每组测试数据的 第一行有三个数N,M,K(1<=N<=1000,1<=M<=10000,1<=K<=10) 接下来M个数每行三个数X,Y,L，表示X云和Y云可以通过L的代价连在一起。(1<=X,Y<=N,0<=L<10000) 30%的数据N<=100,M<=1000 

## 输出格式

对每组数据输出一行，仅有一个整数，表示最小的代价。 如果怎么连都连不出K个棉花糖，请输出'No Answer'。

## 输入样例

```plaintext
样例1： Input: 3 1 2 1 2 1 样例2： Input: 3 1 1 1 2 1
```

## 输出样例

```plaintext
样例1： Output: 1 样例2： Output: No Answer 
```

Hint

【并查集】

## 来源

VIJOS_P1234:口袋的天空
