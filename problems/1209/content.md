## 描述

我们知道机器调度是计算机科学中一个非常经典的问题。调度问题有很多种，具体条件不同，问题就不同。现在我们要处理的是两个机器的调度问题。 有两个机器A和B。机器A有n种工作模式，我们称之为mode_0，mode_l，……，mode_n-1。同样，机器B有m种工作模式，我们称之为mode_0，mode_1,……，mode_m-1。初始时，两台机器的工作模式均为mode_0。现在有k个任务，每个工作都可以在两台机器中任意一台的特定的模式下被加工。例如，job0能在机器A的mode_3或机器B的mode_4下被加工，jobl能在机器A的mode_2或机器B的mode_4下被加工，等等。因此，对于任意的jobi，我们可以用三元组(i,x,y)来表示jobi在机器A的mode_x或机器B的mode_y下被加工。 显然，要完成所有工作，我们需要不时的改变机器的工作模式。但是，改变机器的工作状态就必须重启机器，这是需要代价的。你的任务是，合理的分配任务给适当的机器，使机器的重启次数尽量少。 

## 输入格式

第一行三个整数n，m（n,m<100），k（k<1000）。接下来的k行，每行三个整数i,x,y。

## 输出格式

只一行一个整数，表示最少的重启次数。

## 输入样例

```plaintext
machine.in 5 5 10 0 1 1 1 1 2 2 1 3 3 1 4 4 2 1 5 2 2 6 2 3 7 2 4 8 3 3 9 4 3 
```

## 输出样例

```plaintext
machine.out 3 
```



 

## 来源

【培训习题．图】5.7machine机器调度

