## 描述

农民JOHN以拥有世界上最健康的奶牛为骄傲。他知道每种饲料中所包含的的牛所需的最低的维他命量是多少。请你帮助农夫喂养他的牛，以保持它们的健康，使喂给牛的饲料的种数最少。 给出牛所需的最低的维他命量，输出喂给牛需要哪些种类的饲料，且所需的饲料剂量最少。 维他命量以整数表示，每种饲料最多只能对牛使用一次，数据保证存在解。 

## 输入格式

第1行：一个整数V(1<=V<=25)，表示需要的维他命的种类数。 第2行：V个整数(1<=每个数<=1000)，表示牛每天需要的维他命的最小量。 第3行：一个整数G(1<=G<=15)，表示可用来喂牛的饲料的种数。下面G行，第i行表示编号为i饲料包含的各种维他命的量的多少。 

## 输出格式

输出文件只有一行，包括： 牛必需的最小的饲料种数P 后面有P个数，表示所选择的饲料编号（按从小到大排列）。 （如果饮料种数P相同的解有多个的话，选择输出的解是其中所有总维他命最少的那个解）

## 输入样例

```plaintext
4 100 200 300 400 3 50 50 50 50 200 300 200 300 900 150 389 399
```

## 输出样例

```plaintext
2 1 3
```



 

## 来源

USACO_2.1-4

