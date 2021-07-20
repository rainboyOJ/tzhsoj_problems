## 描述

输入多个数据（个数不确定），统计其中正、负和零的个数。

## 输入格式

 

## 输出格式

 

## 输入样例

```plaintext
2 3 3 4 0 0 -2 0 -4 
```

## 输出样例

```plaintext
4 2 3 
```

Hint

先简单地了解一下文件操作！ 注意：eof与seekeof在本题中的差异！ while not eof(input) do begin read(m); end; 2 3 0 0 3 -1 -3 1 3 0 0 0 1 2 4 5 其中零的个数输出为：6 while not seekeof(input) do begin read(m); end; 其中零的个数输出为：5 函数说明： eoln：endofline；eof：endoffile



 

