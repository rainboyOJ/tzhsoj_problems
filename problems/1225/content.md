## 描述

有一个未知的4×4的拼盘M，它的每个元素都是正整数。给出4行元素的总和，4列元素的总和以及两条对角线元素总和。另外还给出了拼盘中任意4个位置的元素值，它们的位置在输入文件中给定。 编写一个程序求出拼盘中另外12个位置的正整数的值，要求这些元素的行之和，列之和以及对角线之和与输入文件中给定的值相一致。 

## 输入格式

输入文件包含用空格隔开的22个正整数。 前四个数字分别表示四行中每一行元素的总和，接下来的4个数字分别表示4列中每列元素的总和。接下来的数字表示主对角线元素的总和，即M(0, 0)+M(1,1)+M(2, 2)+M(3, 3)。然后的数字(第10个数字)表示逆对角线上元数之和，即M(0, 3)+M(1, 2)+M(2, 1)+M(3, 0)。剩下的部分还包含12个数字，被分成三个一组的形式i，j，k。表示M(i,j)=k。 你可以假设任何行对角线或列之和不会超过300。另外还可假设对于给定的输入文件总是存在解决方案。 

## 输出格式

输出文件应包含按4×4的形式输出的16个数字，同一行的四个数字用一个空个隔开。 注意：对于给定的输入文件，可能有一个以上可能的解决方案。任何一个方案都是可接受的。

## 输入样例

```plaintext
scrabble.in 130 120 172 140 157 93 144 168 66 195 0 1 15 1 3 49 2 2 16 3 0 33 
```

## 输出样例

```plaintext
scrabble.out 22 15 28 65 49 1 21 49 53 76 16 27 33 1 79 27 
```



 

## 来源

【培训习题．搜索】7.7scrabble拼字游戏

