## 描述

有一天，TENSHI发现了一本叫《Road to NOI》的书。这本书是用英语写的，奇怪的是这本书完全没有标点符号，也没有空格！也就是说这本书整篇都是由一连串字母组成的。TENSHI研究了一会，发现了一种断句的方法： 1)单词是由字母组成的，并且都可以在《天使字典》（和《魔鬼字典》相对的）找到，且这些单词是不区分大小写的（也就是说TenShi和tenshi是一个单词） 2)每个单词的长度不超过１０。 3)句子是由至少三个单词组成的，并且这些单词的字母总数是这些单词个数的倍数。 例如：iwanttoseeheragain　可以看成是这样一句话： I want to see her again.　因为单词数为６，且字母总数为１８，１８是６的倍数。 4)句子的第一个字母不一定要是大写字母。 5)每个句子的字母总数不超过５０。 任　务　：给出一个字典以及一串字母，请为这串字母划分句子，使句子总数最多。 

## 输入格式

输入文件的第一行为一个正整数N（3 ≤ N ≤ 100），表示《天使字典》的词汇总数。 紧跟着N行，每行有一个《天使字典》中的单词。 最后一行是一串待断句的字母串，字母串长度不大于255。输入文件没有多余空格。 

## 输出格式

把最多的句子总数输出到屏幕只有一行。 

## 输入样例

```plaintext
样例1： 8 Again I Her See Tenshi To Want Zig IwaNttoseehEraGAin 样例2： 12 A BC DEFG Hijk Lmno Pqrst Uv Wx Yz Tenshi XY MM Abcdefghijklmnopqrstuvwxyztenshixymm 
```

## 输出样例

```plaintext
样例1： 1 样例2： 3 （说明：断句方案为： A bc defg hijk lmno。 pqrst uv wx. Yz tenshi xy mm.） 
```



 

## 来源

【分区联赛模拟试题3_4.标点符号】

