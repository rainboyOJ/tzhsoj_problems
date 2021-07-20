## 描述

牛奶包装是一个如此低利润的生意,所以尽可能低的控制初级产品(牛奶)的价格变的十分重要。请帮助快乐的牛奶制造公司(Merry Milk Makers')以可能的最廉价的方式取得他们所需的牛奶。快乐的牛奶制造公司从一些农民那购买牛奶，每个农民卖给牛奶制造公司的价格不一定相同。而且,如一只母牛一天只能生产一定量的牛奶,农民每一天只有一定量的牛奶可以卖。每天,快乐的牛奶制造公司从每个农民那购买一定量的牛奶,少于或等于农民所能提供的最大值。给出快乐牛奶制造公司的每日的牛奶需求,连同每个农民的可提供的牛奶量和每加仑的价格,请计算快乐的牛奶制造公司所要付出钱的最小值。 注意:每天农民生产的牛奶的总数对快乐的牛奶制造公司来说足够的。

## 输入格式

第 1 行:二个整数, N 和 M。 第一个数值,N,(0<= N<=2,000,000)是快乐的牛奶制造者的一天需要牛奶的数量。 第二个数值,M,(0<= M<=5,000)是提供牛奶的农民个数。 第 2 到 M+1 行:每行二个整数,Pi 和 Ai。 Pi(0<= Pi<=1,000) 是农民 i 牛奶的价格。 Ai(0 <= Ai <= 2,000,000)是农民 i 一天能卖给快乐的牛奶制造者的牛奶数量。

## 输出格式

单独的一行包含单独的一个整数，表示快乐的牛奶制造者拿到所需的牛奶所要的最小费用。 

## 输入样例

```plaintext
100 5 5 20 9 40 3 10 8 80 6 30
```

## 输出样例

```plaintext
630
```



 

## 来源

USACO_1.3-1
