## 描述

给定A,B,C三根足够长的细柱，在A柱上放有2n个中间有空的圆盘，共有n个不同的尺寸，每个尺寸都有两个相同的圆盘，注意这两个圆盘是不加区分的(下图为n=3的情形）。现要将 这些国盘移到C柱上，在移动过程中可放在B柱上暂存。要求: (1)每次只能移动一个圆盘； (2) A、B、C三根细柱上的圆盘都要保持上小下大的顺序； 任务:设An为2n个圆盘完成上述任务所需的最少移动次数，对于输入的n，输出An。

## 输入格式

输入文件hanoi.in为一个正整数n，表示在A柱上放有2n个圆盘。

## 输出格式

输出文件hanoi.out仅一行，包含一个正整数，为完成上述任务所需的最少移动次数An。 

## 输入样例

```plaintext
【输入样例1】 1 【输入样例2】 2
```

## 输出样例

```plaintext
【输出样例1】 2 【输出样例2】 6
```

Hint

【限制】 对于50%的数据， 1<=n<=25 对于100% 数据， 1<=n<=200 【提示】 设法建立An与An-1的递推关系式。

## 来源

NOIP_2007.PJ4

