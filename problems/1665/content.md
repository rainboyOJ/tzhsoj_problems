## 描述

<p>       一个软件开发公司同时要开发两个软件，并且要同时交付给用户，现在公司为了尽快完成这一任务，将每个软件划分成<span lang="EN-US">m</span><span class="GramE">个</span>模块，由公司里的技术人员分工完成，每个技术人员完成同一软件的不同模块的所用的天数是相同的，并且是已知的，但完成不同软件的一个模块的时间是不同的，</p> <p>        每个技术人员在同一时刻只能做<span class="GramE">一个模块，一个模块</span>只能由一个人独立完成而不能由多人协同完成。一个技术人员在整个开发期内完成一个模块以后可以接着做任一软件的任一模块。</p> <p>       写一个程序，求出公司最早能在什么时候交付软件。</p> <p></p>

## 输入格式

<p class="MsoNormal" style="TEXT-INDENT: 21.75pt">【输入】</p> <p class="MsoNormal" style="TEXT-INDENT: 21.75pt">输入文件第一行包含两个由空格隔开的整数<span lang="EN-US">n</span>和<span lang="EN-US">m</span>，其中<span lang="EN-US">1<=n<=100</span>，<span lang="EN-US">1<=m<=100</span>。</p> <p class="MsoNormal" style="TEXT-INDENT: 21.75pt">接下来的<span lang="EN-US">n</span><span class="GramE">行，每行包</span>含两个用空格隔开的整数<span lang="EN-US">d1</span>和<span lang="EN-US">d2</span>，</p> <p class="MsoNormal" style="TEXT-INDENT: 21.75pt"><span lang="EN-US">d1</span>表示该技术人员完成第一个软件中的一个模块所需的天数，</p> <p class="MsoNormal" style="TEXT-INDENT: 21.75pt"><span lang="EN-US">d2</span>表示该技术人员完成第二个软件中的一个模块所需的天数，其中<span lang="EN-US">l <=d1</span>，<span lang="EN-US">d2<= l00</span>。</p> <p class="MsoNormal" style="TEXT-INDENT: 21.75pt"></p> <p></p>

## 输出格式

<p class="MsoNormal">【输出】</p> <p class="MsoNormal" style="TEXT-INDENT: 21.75pt">输出文件仅有一行包含一个整数<span lang="EN-US">d</span>，表示公司最早能于<span lang="EN-US">d</span>天后交付软件。</p> <p></p>

## 输入样例

```plaintext
【样例】 SOFTWARE.IN 3 20 1 1 2 4 1 6 
```

## 输出样例

```plaintext
SOFTWARE.OUT 18 【样例】 最快的方案是： 第一个技术人员完成第二个软件的18个模块，用时18天； 第三个技术人员完成第一个软件的18个模块，用时18天； 其余的模块由第二个技术人员完成，用时12天； 做完所有模块需要18天。 如果第一个技术人员完成第二个软件的17个模块，第三个技术人员完成第一个软件的17个模块，其余的模块由第二个技术人员完成，需要用时18天，做完所有模块仍然需要18天，所以少于18天不可能做完所有模块。 
```



 



 

