## 描述

考虑在下面被显示的数字金字塔。 写一个程序来计算从最高点开始在底部任意处结束的路径经过数字的和的最大。每一步可以走到左下方的点也可以到达右下方的点。 7 3 8 8 1 0 2 7 4 4 4 5 2 6 5 在上面的样例中,从7 到 3 到 8 到 7 到 5 的路径产生了最大和:30 

## 输入格式

第一个行包含 R(1<= R<=1000) ,表示行的数目。 后面每行为这个数字金字塔特定行包含的整数。 所有的被供应的整数是非负的且不大于100。

## 输出格式

单独的一行包含那个可能得到的最大的和。

## 输入样例

```plaintext
5 7 3 8 8 1 0 2 7 4 4 4 5 2 6 5
```

## 输出样例

```plaintext
30
```

Hint

很奇怪的问题再次出现，本题共9组数据，我的程序放上去的8组数据都没有问题，只有最后一组数据报出Wrong Answer 最后一组数据规模较大，为上限：1000 但我的程序应问题不大，毕竟是在USACO上通过的！

## 来源

USACO_1.5-1
