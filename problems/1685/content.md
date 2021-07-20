## 描述

X博士想造福人类, 研发一种可以再生肢体的药物, 可是很不幸......研究失败了, 他在蜥蜴身上实验的时候, 蜥蜴发生了变异, 更糟糕的是, 蜥蜴逃出了生化实验室.<br /> <br /> 恐怖的事情发生了, 疫情以X博士所在的城市为中心向四周扩散开, 最终, 整个地球上的城市都被感染了.假设整个地球一共有N个城市, 这N个城市是连通的, 有N-1条通道把他们连接起来.病毒会以一座城市为中心,在一天的时间内, 会把和他相连的周围的所有城市感染. 那么, 多少天的时间, 整个地球的城市都感染呢?<br />

## 输入格式

第一行输入一个T(T <= 50), 表示一共有T组测试数据.<br /> 每组数据第一行两个数n, k. n表示有n(2 <= n <= 10000)个城市, 代表城市1-n, k是X博士所在的城市.<br /> 接下来n-1行, 每行有两个数u, v, 表示城市u和v之间有一条通道.<br />

## 输出格式

<span style="color:#333333;font-family:source_code_pro, PingFangSC-Regular, "font-size:15px;background-color:#FFFFFF;">每组数据第一行输出第一个数 x , 表示整个地球感染需要x天.<br /> 接下来 x 个数, 第i个数表示第i天感染了城市的数量.<br /> (注意， 每组数据第二行每个数据后边都有一个空格）<br /> </span><span style="color:#333333;font-family:source_code_pro, PingFangSC-Regular, "font-size:15px;background-color:#FFFFFF;"></span>

## 输入样例

```plaintext
2 3 1 1 2 2 3 3 2 1 2 2 3
```

## 输出样例

```plaintext
3 1 1 1 2 1 2
```



 

## 来源

QDU创新实验室第二次月赛

