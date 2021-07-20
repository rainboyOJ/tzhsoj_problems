## 描述

Before ACM can do anything, a budget must be prepared and the necessary financial support obtained. ACM要正常运转的前提，准备并提供好一定的财务预算费用是必需的。 The main income for this action comes from Irreversibly Bound Money (IBM). 这项活动最主要的收支来自于IBM公司。 The idea behind is simple. Whenever some ACM member has any small money, he takes all the coins and throws them into a piggy-bank. 想法很简单，只要ACM成员有一些散钱，他就可以取出所有钱并将其投放到猪猪储蓄罐中。 You know that this process is irreversible, the coins cannot be removed without breaking the pig. After a sufficiently long time, there should be enough cash in the piggy-bank to pay everything that needs to be paid. 你要知道的是，这项操作是不可以撤销的，这些硬币投入进去之后是没有打碎猪猪是取不出来的。当充分储备一段较长时间后，在猪猪储蓄罐中可能会有足够多的钱来去付我们需要的费用。 But there is a big problem with piggy-banks. It is not possible to determine how much money is inside. So we might break the pig into pieces only to find out that there is not enough money. Clearly, we want to avoid this unpleasant situation. 但是同样也带来了一个大问题。我们没法准确知道猪猪储蓄罐中到底有多少钱。因此我们必须把它打碎才能知道钱是否足够。很显然，我们大家都会尽可能避免这种不愉快的情形。 The only possibility is to weigh the piggy-bank and try to guess how many coins are inside. Assume that we are able to determine the weight of the pig exactly and that we know the weights of all coins of a given currency. 唯一的可能就是去称一称猪猪储蓄罐的重量，然后试着去猜猜它里面到底有多少钱币。假设我们能够确定猪猪储蓄罐准确的重量并知道所有给定的硬币的各个重量。 Then there is some minimum amount of money in the piggy-bank that we can guarantee. Your task is to find out this worst case and determine the minimum amount of cash inside the piggy-bank. We need your help. No more prematurely broken pigs! 因此我们可以保证猪猪储蓄罐中最少数量的钱币。你的任务是找出最糟糕的情况：猪猪储蓄罐中最少可能多少钱，我们需要你的帮助，以免过早地打碎这些猪猪们。 

## 输入格式

The input consists of T test cases. The number of them (T) is given on the first line of the input file. 输入文件有T组测试数据。数据T在输入文件首行给出。 Each test case begins with a line containing two integers E and F. They indicate the weight of an empty pig and of the pig filled with coins. Both weights are given in grams. No pig will weigh more than 10 kg, that means 1 <= E <= F <= 10000. 每组测试数据，包含两个整数E、F。他们分别表示空的猪猪储蓄罐的重量，和装满钱币后的猪猪储蓄罐的重量。两者重量单位为：克。没有任何一个猪猪储蓄罐总重量超出10千克（即：1<=E<=F<=10000） On the second line of each test case, there is an integer number N (1 <= N <= 500) that gives the number of various coins used in the given currency. 每组测试数据的第二行，这儿将有一个整数N (1 <= N <= 500) ，N指是的当前给定的使用到的硬币的种类。 Following this are exactly N lines, each specifying one coin type. These lines contain two integers each, Pand W (1 <= P <= 50000, 1 <= W <=10000). P is the value of the coin in monetary units, W is it's weight in grams. 接下来是N行，每一行指定的一种硬币。这些行每行均包含两个整数P、W(1 <= P <= 50000, 1 <= W <=10000). P是这种硬币的面额，W是这种硬币的重量。 

## 输出格式

Print exactly one line of output for each test case. 每组输出文件均占一行。 The line must contain the sentence "The minimum amount of money in the piggy-bank is X." where X is the minimum amount of money that can be achieved using coins with the given total weight. If the weight cannot be reached exactly, print a line "This is impossible.". 该行必须包含了内容："The minimum amount of money in the piggy-bank is X." ，X是一个整数，指的是使用指定的那些硬币，能够构成总重量，并请输出构成总重量中最小的硬币面额。 如果这种猪猪储蓄罐，给定的钱币总重量是不可能达到的，请输出一行："This is impossible."。

## 输入样例

```plaintext
3 10 110 2 1 1 30 50 10 110 2 1 1 50 30 1 6 2 10 3 20 4
```

## 输出样例

```plaintext
The minimum amount of money in the piggy-bank is 60. The minimum amount of money in the piggy-bank is 100. This is impossible. 
```



 

## 来源

Piggy-Bank

