## 描述

引子： 你灰色头像不会再跳动 哪怕是一句简单的问候 心贴心的交流一页页翻阅多难过 是什么 坠落 升空 又想起你曾说的陪我到最后 暖色的梦变冰凉的枷锁 如果时光倒流我们又能抓得住什么。 背景： WJMZBMR喜欢上QQ。。但是很多人的头像已经变成灰色了。这让他压力很大。而且WJMZBMR的好友太多了，大量的灰色头像让他无法准确的找到他想找的好友。。 今天WJMZBMR决定清理一下他的QQ，找出那些不会在跳动的头像并且把它们踢掉。为此他翻出了最近一个月的聊天记录。 如果一个头像在在最近一个月中与WJMZBMR聊天次数小于等于2次，WJMZBMR就会认为这是不会再跳动的灰色头像然后把他删掉。 那么请你为WJMZBMR写个程序完成这件事情，并输出剩下的头像。 定义： 头像其实就是ID，是一个长度小于等于30的，由小写或者大写英文字母组成的字符串。 严格的数学定义： 给出一些字符串，输出其中出现次数大于等于3次的。 关于输出的顺序，出现次数多在前，如果次数一样多就按字典序，相同的ID只输出一次。 

## 输入格式

第一行N表示聊天记录的长度 接下来N行每行一个字符串表示与WJMZBMR聊天的ID。 

## 输出格式

第一行表示要输出的头像的个数M 之后M行每行一个字符串表示输出的ID(请按给定顺序输出,两个相同的ID只输出一次) 

## 输入样例

```plaintext
6 Gx tracyhenry seventhplus Gx seventhplus Gx 
```

## 输出样例

```plaintext
1 Gx 
```

Hint

数据范围： 20%的数据N<=1000； 100%的数据 N<=100000 本次比赛满分400分。试题来源：陈立杰 感谢： NZK神犇帮我审题。 Ftiasch神犇帮我审题。 许嵩。 题目类型没有丝毫超纲（你看下去就知道了）。难度相当于 NOIP提高组。 250分以上应该一等奖稳了。 注： 所有题目内存限制为512MB，然后时间限制没有明说是每个测试点2s。

## 来源

【分区联赛模拟试题4_1.灰色头像】

