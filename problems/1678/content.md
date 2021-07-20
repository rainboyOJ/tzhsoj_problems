## 描述

<p class="MsoNormal">小胖最近迷上了<span lang="EN-US">3D</span>物体，尤其是立方体。他手里有很多个立方体，他想让所有的立方体全都长得一样，所以他决定给某些立方体的表面重涂颜色，使得所有的立方体完全相同。但是小胖是很懒的，他想知道最少涂多少次颜色，可以让所有立方体完全相同。<span lang="EN-US"><o:p></o:p></span></p> <p class="MsoNormal"></p> <p class="MsoNormal" align="center" style="text-align:center"><span lang="EN-US"><o:p></o:p></span></p> <p class="MsoNormal"></p> <p class="MsoNormal"><img src="http://10.208.83.181:80/upload/201307/【2010NOI导刊_03】染色的立方体1.jpg" width="0" height="0" alt="" /></p> <p class="MsoNormal"><span lang="EN-US"><o:p></o:p></span></p> <p></p>

## 输入格式

<p class="MsoNormal"><span lang="EN-US">Input</span>：<span lang="EN-US"><o:p></o:p></span></p> <p class="MsoNormal">输入包含多组数据，每组数据第一行<span lang="EN-US">n(1</span>≤<span lang="EN-US">n</span>≤<span lang="EN-US">4)</span>，表示立方体的数量，接下来<span lang="EN-US">n</span>行，每行<span lang="EN-US">6</span>个字符串，表示立方体<span lang="EN-US">6</span>个面的颜色。<span lang="EN-US"><o:p></o:p></span></p> <p class="MsoNormal"><span lang="EN-US">Color1 Color2 Color3 Color4 Color5 Color6<o:p></o:p></span></p> <p class="MsoNormal">其中，面的标号如下：<a href="http://localhost/upload/201307/file/%E3%80%902010NOI%E5%AF%BC%E5%88%8A_03%E3%80%91%E6%9F%93%E8%89%B2%E7%9A%84%E7%AB%8B%E6%96%B9%E4%BD%93/%E3%80%902010NOI%E5%AF%BC%E5%88%8A_03%E3%80%91%E6%9F%93%E8%89%B2%E7%9A%84%E7%AB%8B%E6%96%B9%E4%BD%931.jpg"><img src="http://localhost/upload/201307/file/%E3%80%902010NOI%E5%AF%BC%E5%88%8A_03%E3%80%91%E6%9F%93%E8%89%B2%E7%9A%84%E7%AB%8B%E6%96%B9%E4%BD%93/%E3%80%902010NOI%E5%AF%BC%E5%88%8A_03%E3%80%91%E6%9F%93%E8%89%B2%E7%9A%84%E7%AB%8B%E6%96%B9%E4%BD%931.jpg" alt="" /></a></p> <p class="MsoNormal"><img src="http://localhost/upload/201307/%E3%80%902010NOI%E5%AF%BC%E5%88%8A_03%E3%80%91%E6%9F%93%E8%89%B2%E7%9A%84%E7%AB%8B%E6%96%B9%E4%BD%932.jpg" width="602" height="817" alt="" /></p> <p class="MsoNormal"></p> <p class="MsoNormal"><span style="text-align: center;">Figure4:An example of recoloring</span></p> <p></p>

## 输出格式

<p class="MsoNormal">每组数据输出一行一个整数，表示最小的涂色数。（涂一个面算一个涂色）<span lang="EN-US"><o:p></o:p></span></p> <p></p>

## 输入样例

```plaintext
3 scareIet green blue yellow magenta cyan blue pink green magenta cyan lemon purple red blue yellow cyan green 2 red green blue yellow magenta cyan cyan green blue yellow magenta red 2 red green gray gray magenta cyan cyan green gray gray magenta red 2 red green blue yellow magenta cyan magenta red blue yellow cyan green 3 red green blue yellow magenta cyan cyan green blue yellow magenta red magenta red blue yellow cyan green 3 blue green green green green blue green blue blue green green green green green green green green sea-green 3 red yellow red yellow red yellow red red yellow yellow red yellow red red red red red red 4 violet violet salmon salmon salmon salmon violet salmon salmon salmon salmon violet violet violet salmon salmon violet violet violet violet violet violet salmon salmon 1 red green blue yellow magenta cyan 4 magenta pink red scarlet vermilion wine-red aquamarine blue cyan indigo sky-blue turquoise-blue blond cream chrome-yellow lemon olive yellow chrome-green emerald-green green olive vilidian sky-blue 0 
```

## 输出样例

```plaintext
4 2 0 0 2 3 4 4 0 16 
```



 



 

