## 描述

设一个n个节点的二叉树tree的中序遍历为（l,2,3,…,n），其中数字1,2,3,…,n为节点编号。 每个节点都有一个分数（均为正整数），记第j个节点的分数为di，tree及它的每个子树都有一个加分，任一棵子树subtree（也包含tree本身）的加分计算方法如下： subtree的左子树的加分× subtree的右子树的加分＋subtree的根的分数 若某个子树为主，规定其加分为1，叶子的加分就是叶节点本身的分数。不考虑它的空 子树。 试求一棵符合中序遍历为（1,2,3,…,n）且加分最高的二叉树tree。要求输出； （1）tree的最高加分 （2）tree的前序遍历 

## 输入格式

文件输入格式： 第1行：一个整数n（n＜30），为节点个数。 第2行：n个用空格隔开的整数，为每个节点的分数（分数＜100）。 

## 输出格式

文件输出格式： 第1行：一个整数，为最高加分（结果不会超过4,000,000,000）。 第2行：n个用空格隔开的整数，为该树的前序遍历。 

## 输入样例

```plaintext
5 5 7 1 2 10 
```

## 输出样例

```plaintext
145 3 1 2 4 5 
```



 

## 来源

NOIP_2003.TG3:加分二叉树
