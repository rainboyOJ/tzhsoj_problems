## 描述

从前有一个王国，这个王国的城堡是一个矩形，被分为M×N个方格。一些方格是墙，而另一些是空地。这个王国的国王在城堡里设了一些陷阱，每个陷阱占据一块空地。 一天，国王决定在城堡里布置守卫，他希望安排尽量多的守卫。守卫们都是经过严格训练的，所以一旦他们发现同行或同列中有人的话，他们立即向那人射击。因此，国王希望能够合理地布置守卫，使他们互相之间不能看见，这样他们就不可能互相射击了。守卫们只能被布置在空地上，不能被布置在陷阱或墙上，且一块空地只能布置一个守卫。如果两个守卫在同一行或同一列，并且他们之间没有墙的话，他们就能互相看见。(守卫就像象棋里的车一样) 你的任务是写一个程序，根据给定的城堡，计算最多可布置多少个守卫，并设计出布置的方案。 

## 输入格式

第一行两个整数M和N(1≤M，N≤200)，表示城堡的规模。 接下来M行N列的整数，描述的是城堡的地形。第i行j列的数用ai,j表示。 ai,j=0，表示方格[i,j]是一块空地； ai,j=1，表示方格[i,j]是一个陷阱； ai,j=2，表示方格[i,j]是墙。 

## 输出格式

第一行一个整数K，表示最多可布置K个守卫。 此后K行，每行两个整数xi和yi，描述一个守卫的位置。 

## 输入样例

```plaintext
guards.in 3 4 2 0 0 0 2 2 2 1 0 1 0 2 
```

## 输出样例

```plaintext
guards.out 2 1 2 3 3 
```

Hint

样例数据如图5-2（黑色方格为墙，白色方格为空地，圆圈为陷阱，G表示守卫） <img border=0 src=http://60.191.162.158:8080/JudgeOnline/images/p1207.gif >

## 来源

【培训习题．图】5.5guards宫廷守卫

