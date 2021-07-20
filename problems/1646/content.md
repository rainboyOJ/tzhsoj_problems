## 描述

<p style="color:#333333;font-family:source_code_pro, PingFangSC-Regular, "font-size:15px;background-color:#FFFFFF;"> 果果一直很谦虚，但是良辰还是对他出手了（汗。。<br /> <br /> 良辰拿出来一个 Pascal 三角形（也叫杨辉三角形。（请不要问是怎么拿出来的。。<br /> <br /> 我们用一个矩阵来表示 Pascal 三角形<br /> <br /> 0: C(0, 0)<br /> <br /> 1: C(1, 0) C(1, 1)<br /> <br /> 2: C(2, 0) C(2, 1) C(2, 2)<br /> <br /> ...<br /> <br /> 其中最左边的数字表示行号。C(x, y) 表示一个组合数，即 x 个元素中取 y 个的方法数。<br /> <br /> 良辰只有一个问题：Pascal 三角形中的第 n 行有多少个奇数？<br /> <br /> 这样的问题对于果果来说太水了，于是他把这个问题给了你。<br /> </p>

## 输入格式

第一行为一个整数 T，表示数据组数。<br /> 每组数据只有一行，包含一个整数 n，表示 Pascal 三角形的第 n 行。<br /> T <= 2000,0 <= n <= 2^31<br />

## 输出格式

每组数据输出一行，包含一个整数，表示Pascal 三角形的第 n 行中的奇数个数。

## 输入样例

```plaintext
2 0 1
```

## 输出样例

```plaintext
1 2
```



 

## 来源

重庆邮电大学2015校赛；QDU_15_11_08月赛

