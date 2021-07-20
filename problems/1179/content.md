## 描述

设有n个大小不等的中空圆盘，按从小到大的顺序从1到n编号。将这n个圆盘任意的迭套在三根立柱上，立柱的编号分别为A、B、C，这个状态称为初始状态。 现在要求找到一种步数最少的移动方案，使得从初始状态转变为目标状态。 移动时有如下要求： •一次只能移一个盘； •不允许把大盘移到小盘上面。 

## 输入格式

文件第一行是状态中圆盘总数； 第二到第四行分别是初始状态中A、B、C柱上圆盘的个数和从上到下每个圆盘的编号； 第五到第七行分别是目标状态中A、B、C柱上圆盘的个数和从上到下每个圆盘的编号。 

## 输出格式

每行一步移动方案，格式为：move I from P to Q 最后一行输出最少的步数。 

## 输入样例

```plaintext
Hanoi.in 5 3 3 2 1 2 5 4 0 1 2 3 5 4 3 1 1
```

## 输出样例

```plaintext
Hanoi.out move 1 from A to B move 2 from A to C move 1 from B to C move 3 from A to B move 1 from C to B move 2 from C to A move 1 from B to C 7 
```



 

## 来源

【培训习题．递规与递推】2.7hanoi新汉诺塔

