## 描述

单词接龙是一个与我们经常玩的成语接龙相类似的游戏，现在我们己知一组单词，且给定一个开头的字母，要求出以这个字母开头的最长的“龙”（每个单词都最多在“龙" 中出现两次），在两个单词相连时，其重合部分合为一部分，例如beast和astonish，如果接成一条龙则变为beastonish，另外相邻的两部分不能存在包含关系，例如at和atide间不能相连。 

## 输入格式

输入的第一行为一个单独的整数n(n<=20）表示单词数，以下n行每行有一个单词，输入的最后一行为一个单个字符，表来“龙”开头的字母。你可以假定以此字母开头的“龙" 一定存在。 

## 输出格式

只需输出以此字母开头的最长的“龙”的长度

## 输入样例

```plaintext
5 at touch cheat choose tact a
```

## 输出样例

```plaintext
23 （连成的“龙”为atoucheatactactouchoose）
```



 

## 来源

NOIP_2000.PJ4
