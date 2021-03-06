## 描述

在一个暴风雨的夜晚,农民约翰的牛棚的屋顶、门被吹飞了。 好在许多牛正在度假，所以牛棚没有住满。 剩下的牛一个紧挨着另一个被排成一行来过夜。 有些牛棚里有牛，有些没有。 所有的牛棚有相同的宽度。 自门遗失以后,农民约翰很快在牛棚之前竖立起新的木板。 他的新木材供应者将会供应他任何他想要的长度,但是供应者只能提供有限数目的木板。 农民约翰想将他购买的木板总长度减到最少。 给出 M(1<= M<=50),可能买到的木板最大的数目;S(1<= S<=200),牛棚的总数;C(1 <= C <=S) 牛棚里牛的数目,和牛所在的牛棚的编号stall_number(1 <= stall_number <= S),计算拦住所有有牛的牛棚所需木板的最小总长度。 输出所需木板的最小总长度作为的答案。

## 输入格式

第 1 行: M ， S 和 C(用空格分开) 第 2 到 C+1行: 每行包含一个整数，表示牛所占的牛棚的编号。

## 输出格式

单独的一行包含一个整数表示所需木板的最小总长度。

## 输入样例

```plaintext
4 50 18 3 4 6 8 14 15 16 17 21 25 26 27 30 31 40 41 42 43 
```

## 输出样例

```plaintext
25
```

Hint

[ 一种最优的安排是用板拦住牛棚3-8,14-21,25-31,40-43.] 

## 来源

USACO_1.3-2

