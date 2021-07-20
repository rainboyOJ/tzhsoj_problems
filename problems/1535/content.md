## 描述

在一条水平路边，有N（2<=n<=25）个钓鱼湖，从左边到右编号为1、2、3、。。。、n）。佳佳有H（1<=H<=16）个小时的空余时间，他希望用这些时间钓到尽量多的鱼。他从湖1出发，向右走，有选择的在一些湖边停留一定的时间钓鱼，最后在某一个湖边结束钓鱼。佳佳测出从第I个湖到I+1个湖需要走5*ti分钟的路，还测出在第I个湖边停留，第一个5分钟可以钓到鱼fi，以后再每钓5分钟鱼，鱼量减少di。为了简化问题，佳佳假定没有其他人钓鱼，也不会有其他因素影响他钓到期望数量的鱼。 请编程求出能钓最多鱼的数量。 

## 输入格式

第一行：湖的数量n。 第二行：时间h（小时）。 第三行：n个数，f1，f2，。。。fn。 第四行：n个数，d1，d2，。。。dn。 第五行：n-1个数，t1，t2，。。。tn-1 

## 输出格式

一个数，所能钓鱼的最大数量。 

## 输入样例

```plaintext
2 1 10 1 2 5 2 
```

## 输出样例

```plaintext
31 
```



 



 
