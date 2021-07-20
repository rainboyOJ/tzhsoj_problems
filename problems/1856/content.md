## 描述

<p> <span style="font-size:16px;">有一个长度为n的序列bi，初始全为0，pluto认为这个序列是优雅的当且仅当bi = ai(1<i<n)</span> </p> <p> <span style="font-size:16px;">现在有 m 组操作，对于第 i 组操作有三个参数</span><span style="font-size:16px;">l</span><sub><span style="font-size:16px;">i</span></sub><span style="font-size:16px;">，r</span><sub><span style="font-size:16px;">i</span></sub><span style="font-size:16px;">，d</span><sub><span style="font-size:16px;">i</span></sub><span style="font-size:16px;">，表示将b</span><sub><span style="font-size:16px;">li</span></sub><span style="font-size:16px;">……b</span><sub><span style="font-size:16px;">ri</span></sub><span style="font-size:16px;"> 都加上d</span><sub><span style="font-size:16px;">i</span></sub> </p> <span style="font-size:16px;">问是否存在一个k(0<=k<=n)，经过 k 组操作后，序列 b 是优雅的，如果存在则输出满足条件的最小的k，否则输出’-1’</span><br />

## 输入格式

<span style="font-size:16px;">一行两个数n，m</span><br /> <span style="font-size:16px;"> 第二行 n 个数a</span><sub><span style="font-size:16px;">1</span></sub><span style="font-size:16px;">……a</span><sub><span style="font-size:16px;">n</span></sub><br /> <span style="font-size:16px;"> 接下来 m 行每行三个数l</span><sub><span style="font-size:16px;">i</span></sub><span style="font-size:16px;">，r</span><sub><span style="font-size:16px;">i</span></sub><span style="font-size:16px;">，d</span><sub><span style="font-size:16px;">i</span></sub><br />

## 输出格式

<span style="font-size:16px;">一行一个数最小的满足条件的 k 或者是’-1’</span><br />

## 输入样例

```plaintext
5 6 1 3 2 5 6 1 5 1 2 5 2 3 4 -1 4 5 3 1 5 2 1 5 -2
```

## 输出样例

```plaintext
4
```

Hint

Explanation<br /> step0(bi)：0 0 0 0 0<br /> step1(bi)：1 1 1 1 1<br /> step2(bi)：1 3 3 3 3<br /> step3(bi)：1 3 2 2 3<br /> step4(bi)：1 3 2 5 6<br /> step5(bi)：3 5 4 7 8<br /> step6(bi)：1 3 2 5 6<br /> Scoring<br /> • 对于50% 的数据，1 <= n，m <= 1000。<br /> • 对于80% 的数据，1 <= n，m <= 10<sup>5</sup>。<br /> • 对于100% 的数据，1 <span><=</span> n，m <span><=</span> 10<sup>6</sup>，|a<sub>i</sub>| <span><=</span> 10<sup>18</sup>，1 <span><=</span> l<sub>i</sub> <span><=</span> r<sub>i</sub> <span><=</span> n，、|d<sub>i</sub>| <span><=</span> 10<sup>9</sup>。<br />

## 来源

清北学堂夏令营模拟考（一）

