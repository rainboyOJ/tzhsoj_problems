## 描述

Preface Numbering 序言页码 译 by Jeru 一类书的序言是以罗马数字标页码的。传统罗马数字用单个字母表示特定的数值，一下是标准数字表: I V X L C D M 1 5 10 50 100 500 1000 最多3个可以表示为10n的数字(I,X,C,M)可以连续放在一起，表示它们的和: III=3 CCC=300 可表示为5x10n的字符(V,L,D)从不连续出现。 除了下一个规则，一般来说，字符以递减的顺序接连出现: CCLXVIII = 100+100+50+10+5+1+1+1 = 268 有时，一个可表示为10^n的数出现在一个比它大的数前(I在V或X前面，X在L或C前面，等等)。在这种情况下，数值等于后面的那个数减去前面的那个数: IV = 4 IX = 9 XL = 40 像XD, IC, 和XM这样的表达是非法的，因为前面的数比后面的数小太多。对于XD(490的错误表达)，可以写成 CDXC; 对于IC(99的错误表达)，可以写成XCIX; 对于XM(990的错误表达)，可以写成CMXC。 给定N(1 <= N < 3,500)， 序言的页码数，请统计在第1页到第N也中，有几个I出现，几个V出现，等等 (从小到大的顺序)。不要输出并没有出现过的字符。 比如N = 5, 那么页码数为: I, II, III, IV, V. 总共有7个I出现，2个V出现。 

## 输入格式

一个整数N。

## 输出格式

每行一个字符和一个数字k，表示这个字符出现了k次。字符必须按数字表中的递增顺序输出。

## 输入样例

```plaintext
5
```

## 输出样例

```plaintext
I 7 V 2
```



 

## 来源

USACO_2.2-1
