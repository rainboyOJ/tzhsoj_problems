## 描述

读入一个带权连通图。（1、连通的无向图；2、强连通的有向图） <img border=0 src=http://127.0.0.1:80/JudgeOnline/images/P1565_1.jpg > 基本思想： 1. 在图G=(V, E) （V表示顶点 ，E表示边）中，从集合V中任取一个顶点（例如取顶点v0）放入集合 U中，这时 U={v0}，集合T(E)为空。 2. 寻找最小权值边，其中一个顶点在U中，（与U中顶点相邻的另一顶点在V中）权值最小的边的另一顶点v1，并使v1加入U。即U={v0,v1}，同时将该边加入集合T(E)中。 3. 重复2，直到U=V为止。 这时T(E)中有n-1条边，T = (U, T(E))就是一棵最小生成树。 Prim:最小生成树： 任取一个顶点加入生成树，然后对那些一个端点在生成树中，而另一个端点不在生成树中的边进行排序，取权值最小的边，将它和另一个端点加进生成树中。 重复上述步骤直到所有顶点都进入了生成树为止。

## 输入格式

第一直读入两个整数，结点数n；边数m； 接下来读入m行，每行均为3个整数：（a，b），w表示无向图；或 <a，b>，w表示有向图

## 输出格式

依次输出各个结点在无向图的连接情况。

## 输入样例

```plaintext
6 10 ( 1, 2) 7 ( 1, 3) 6 ( 1, 4) 2 ( 2, 4) 4 ( 2, 5) 4 ( 3, 4) 5 ( 3, 6) 3 ( 4, 5) 5 ( 4, 6) 4 ( 5, 6) 6 ****##########****** （说明：以上是数据读入整人模式，涉及字符串处理，建议掌握好；常见数据读入模式有，如下：） 6 0 7 6 2 0 0 7 0 0 4 4 0 6 0 0 5 0 3 2 4 5 0 5 4 0 4 0 5 0 6 0 0 3 4 6 0 
```

## 输出样例

```plaintext
1--->1 2--->4 3--->6 4--->1 5--->2 6--->4 ****##########****** （说明：以上是数据读出整人模式，建议掌握好；常见数据读入模式有：输出最小生成树对应的总费用，如下：） 17 
```

Hint

Prim算法的堆优化朴素的Prim算法如果使用邻接矩阵来保存图的话，时间复杂度是O(N^2)，观察代码很容易发现，时间主要浪费在每次都要遍历所有点找一个最小距离的顶点，对于这个操作，我们很容易想到用堆来优化，使得每次可以在log级别的时间找到距离最小的点。下面的代码是一个使用二叉堆实现的堆优化Prim算法，代码使用邻接表来保存图。另外，需要说明的是，为了松弛操作的方便， 堆里面保存的顶点的标号，而不是到顶点的距离，所以我们还需要维护一个映射pos[x]表示顶点x在堆里面的位置。 使用二叉堆优化Prim算法的时间复杂度为O((V + E) log(V)) = O(E log(V))，对于稀疏图相对于朴素算法的优化是巨大的，然而100行左右的二叉堆优化Prim相对于40行左右的并查集优化Kruskal，无论是在效率上，还是编程复杂度上并不具备多大的优势。另外，我们还可以用更高级的堆来进一步优化时间界，比如使用斐波那契堆优化后的时间界为O(E + V log(V))，但编程复杂度也会变得更高。 --YangZX 22:17 2011年9月11日 (CST) /* 二叉堆优化Prim算法 Author:YangZX Date：9.11 2011 */ #include <iostream> using namespace std; const int MAXV = 10001, MAXE = 100001, INF = (~0u)>>2; struct edge{ int t, w, next; }es[MAXE * 2]; int h[MAXV], cnt, n, m, heap[MAXV], size, pos[MAXV], dist[MAXV]; void addedge(int x, int y, int z) { es[++cnt].t = y; es[cnt].next = h[x]; es[cnt].w = z; h[x] = cnt; } void heapup(int k) { while(k > 1){ if(dist[heap[k>>1]] > dist[heap[k]]){ swap(pos[heap[k>>1]], pos[heap[k]]); swap(heap[k>>1], heap[k]); k>>=1; }else break; } } void heapdown(int k) { while((k<<1) <= size){ int j; if((k<<1) == size || dist[heap[(k<<1)]] < dist[heap[(k<<1)+1]]) j = (k<<1); else j = (k<<1) + 1; if(dist[heap[k]] > dist[heap[j]]){ swap(pos[heap[k]], pos[heap[j]]); swap(heap[k], heap[j]); k=j; }else break; } } void push(int v, int d) { dist[v] = d; heap[++size] = v; pos[v] = size; heapup(size); } int pop() { int ret = heap[1]; swap(pos[heap[size]], pos[heap[1]]); swap(heap[size], heap[1]); size--; heapdown(1); return ret; } int prim() { int mst = 0, i, p; push(1, 0); for(i=2; i<=n; i++) push(i, INF); for(i=1; i<=n; i++){ int t = pop(); mst += dist[t]; pos[t] = -1; for(p = h[t]; p; p = es[p].next){ int dst = es[p].t; if(pos[dst] != -1 && dist[dst] > es[p].w){ dist[dst] = es[p].w; heapup(pos[dst]); heapdown(pos[dst]); } } } return mst; } int main() { cin>>n>>m; for(int i=1; i<=m; i++){ int x, y, z; cin>>x>>y>>z; addedge(x, y, z); addedge(y, x, z); } cout<<prim()<<endl; return 0; }



 

