## 描述

<p style="font-family:"font-size:15px;vertical-align:baseline;color:#666666;"> 给出一个长度不超过200的由小写英文字母组成的字母串(约定;该字串以每行20个字母的方式输入，且保证每行一定为20个)。要求将此字母串分成k份(1< k<=40)，且每份中包含的单词个数加起来总数最大(每份中包含的单词可以部分重叠。当选用一个单词之后，其第一个字母不能再用。例如字符串this中可包含this和is，选用this之后就不能包含th)。 </p> <p style="font-family:"font-size:15px;vertical-align:baseline;color:#666666;"> 单词在给出的一个不超过6个单词的字典中。 </p> <p style="font-family:"font-size:15px;vertical-align:baseline;color:#666666;"> 要求输出最大的个数。 </p>

## 输入格式

<p style="font-family:"font-size:15px;vertical-align:baseline;color:#666666;"> 每组的第一行有二个正整数(p，k) </p> <p style="font-family:"font-size:15px;vertical-align:baseline;color:#666666;"> p表示字串的行数; </p> <p style="font-family:"font-size:15px;vertical-align:baseline;color:#666666;"> k表示分为k个部分。 </p> <p style="font-family:"font-size:15px;vertical-align:baseline;color:#666666;"> 接下来的p行，每行均有20个字符。 </p> <p style="font-family:"font-size:15px;vertical-align:baseline;color:#666666;"> 再接下来有一个正整数s，表示字典中单词个数。(1<=s<=6) </p> <p style="font-family:"font-size:15px;vertical-align:baseline;color:#666666;"> 接下来的s行，每行均有一个单词。 </p>

## 输出格式

<span style="color:#666666;font-family:"font-size:15px;">一个整数，分别对应每组测试数据的相应结果。</span>

## 输入样例

```plaintext
输入： 1 3 thisisabookyouareaoh 4 is a ok sab 
```

## 输出样例

```plaintext
输出： //说明：(不必输出) 7 // this/isabookyoua/reaoh 
```



 

## 来源

NOIP_2001.TG3:统计单词个数

