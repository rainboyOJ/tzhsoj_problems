## 描述

Step 大家好！我是kaikai。 在Online Judge上，有的题目具有不确定的数据量。并且也没有特别指出哪个符号是表示数据的结束。这种情况下如何才能正确的得到数据？ 使用EOF！对，你的想法是正确的。 while(scanf("%d",&a)!=EOF) { ... } 当然你也可以利用scanf的返回值。 while(scanf("%d",&a)==1) { ... } Free Pascal下面的代码： program p(Input,Output); begin while not seekeof(Input) do begin ... end; end. NOTE, SeekEof函数不是标准pascal函数库中的，使用SeekEof函数在GNU Pascal下不能通过编译。 这2种方法的效果是一样的。下面来试试看。 Program 对输入的整数求和。所有的整数都不大于100

## 输入格式

整数若干。每行一个。

## 输出格式

一个整数，表示所有输入整数的和。

## 输入样例

```plaintext
1 3 2 5 7
```

## 输出样例

```plaintext
18
```

Hint

Programming Steps 

## 来源

TJU_P1007

