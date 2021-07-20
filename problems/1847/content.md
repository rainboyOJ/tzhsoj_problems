## 描述

某个地区有n(n<=1000)个犯罪团伙，当地警方按照他们的危险程度由高到低给他们编号为1-n，他们有些团伙之间有直接联系，但是任意两个团伙都可以通过直接或间接的方式联系，这样这里就形成了一个庞大的犯罪集团，犯罪集团的危险程度由集团内的犯罪团伙数量唯一确定，而与单个犯罪团伙的危险程度无关（该犯罪集团的危险程度为n）。现在当地警方希望花尽量少的时间（即打击掉尽量少的团伙），使得庞大的犯罪集团分离成若干个较小的集团，并且他们中最大的一个的危险程度不超过n/2。为达到最好的效果，他们将按顺序打击掉编号1到k的犯罪团伙，请编程求出k的最小值。

## 输入格式

第一行一个正整数n。接下来的n行每行有若干个正整数，第一个整数表示该行除第一个外还有多少个整数，若第i行存在正整数k，表示i，k两个团伙可以直接联系。

## 输出格式

一个正整数，为k的最小值

## 输入样例

```plaintext
7 2 2 5 3 1 3 4 2 2 4 2 2 3 3 1 6 7 2 5 7 2 5 6
```

## 输出样例

```plaintext
1
```

Hint

<p> 输出1（打击掉犯罪团伙） </p> <p> <img src="/JudgeOnline/upload/image/20170603/20170603225311_22513.bmp" alt="" /> </p>



 
