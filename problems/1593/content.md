## 描述

树树发现好多计算机中的单词都是缩写的，如GDB，它是全称Gnu DeBug的缩写。但是，有时缩写对应的全称会不固定，如缩写LIUNUX，可以理解为： （1） LINus’s UniX （2） LINUs’s miniX （3） Linux Is Not Unix 现在树树给出一个单词缩写，以及一个固定的全称（若干个单词组成，空格隔开）。全称中可能会有无效的单词，需要忽略掉，一个合法缩写要求每个有效单词至少有一个字符出现在缩写中，缩写必须按顺序出现在全称中。 对于给定的缩写和一个固定的全称，问有多少种解释方法？解释方法为缩写的每个字母在全称每个有效单词中出现的位置，有一个字母位置不同，就认为是不同的解释方法。 

## 输入格式

第一行输入一个N，表示有N个无效单词； 接下来N行分别描述一个有小写字母组成的无效单词； 最后是若干个询问，先给出缩写（只有大写字母），然后给出一个全称，读入以"LAST CASE"结束。 【数据规模】 1≤N≤100，每行字符串长度不超过150，询问不超过20，最后方案数不超过10^9。 

## 输出格式

对于每个询问先输出缩写，如果当前缩写不合法，则输出"is not a valid abbreviation"， 否则输出"can be formed in i ways"（i表示解释方法种数）。

## 输入样例

```plaintext
2 and of ACM academy of computer makers RADAR radio detection and ranging LAST CASE 
```

## 输出样例

```plaintext
ACM can be formed in 2 ways RADAR is not a valid abbreviation 
```

Hint

【数据规模】 1≤N≤100，每行字符串长度不超过150，询问不超过20，最后方案数不超过10^9。 

## 来源

【分区联赛模拟试题2_2.单词缩写】

