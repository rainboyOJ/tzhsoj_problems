## 描述

<p class="MsoNormal"><span lang="EN-US">       Black Box</span>是一种原始的数据库。它可以储存一个整数数组，还有一个特别的变量 <span lang="EN-US">i </span>。</p> <p class="MsoNormal">       最开始的时候<span lang="EN-US">Black Box</span>是空的，而 <span lang="EN-US">i </span>等于<span lang="EN-US">0</span>。</p> <p class="MsoNormal">    这个<span lang="EN-US">Black Box</span>要处理一串命令。</p> <p class="MsoNormal"></p> <p class="MsoNormal"><span lang="EN-US">    </span>命令只有两种：</p> <p class="MsoNormal"><span lang="EN-US">    ADD（x）</span>：把<span lang="EN-US">x</span>元素放进<span lang="EN-US">Black Box</span>；</p> <p class="MsoNormal"><span lang="EN-US">   GET</span>：<span lang="EN-US">   i </span>加<span lang="EN-US">1</span>，然后输出<span lang="EN-US">Black Box</span>中第 <span lang="EN-US">i </span>小的数。</p> <p class="MsoNormal" style="text-indent:21.75pt">记住：第 <span lang="EN-US">i </span>小的数，就是<span lang="EN-US">Black Box</span>里的数的按从小到大的顺序排序后的第 <span lang="EN-US">i </span>个元素。</p> <p class="MsoNormal" style="text-indent:21.75pt"><span lang="EN-US"> </span></p> <p class="MsoNormal"><span lang="EN-US">    </span>例如：我们来演示一下一个有<span lang="EN-US">11</span>个命令的命令串。（如下图所示）</p> <table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt; mso-yfti-tbllook:480;mso-padding-alt:0cm 5.4pt 0cm 5.4pt;mso-border-insideh: .5pt solid windowtext;mso-border-insidev:.5pt solid windowtext"> <tbody> <tr> <td width="114" valign="top" style="width:85.2pt;border:solid windowtext 1.0pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal">序号</p> </td> <td width="114" valign="top" style="width:85.2pt;border:solid windowtext 1.0pt; border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt: solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal">操作</p> </td> <td width="114" valign="top" style="width:85.2pt;border:solid windowtext 1.0pt; border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt: solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">i</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border:solid windowtext 1.0pt; border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt: solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal">数据库</p> </td> <td width="114" valign="top" style="width:85.25pt;border:solid windowtext 1.0pt; border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt: solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal">输出</p> </td> </tr> <tr> <td width="114" valign="top" style="width:85.2pt;border:solid windowtext 1.0pt; border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt; padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">1</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">ADD(3)</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">0</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">3</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US"> </span></p> </td> </tr> <tr> <td width="114" valign="top" style="width:85.2pt;border:solid windowtext 1.0pt; border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt; padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">2</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">GET</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">1</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">3</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">3</span></p> </td> </tr> <tr> <td width="114" valign="top" style="width:85.2pt;border:solid windowtext 1.0pt; border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt; padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">3</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">ADD(1)</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">1</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">1,3</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US"> </span></p> </td> </tr> <tr> <td width="114" valign="top" style="width:85.2pt;border:solid windowtext 1.0pt; border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt; padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">4</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">GET</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">2</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">1,3</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">3</span></p> </td> </tr> <tr> <td width="114" valign="top" style="width:85.2pt;border:solid windowtext 1.0pt; border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt; padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">5</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">ADD(-4)</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">2</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">-4,1,3</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US"> </span></p> </td> </tr> <tr> <td width="114" valign="top" style="width:85.2pt;border:solid windowtext 1.0pt; border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt; padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">6</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">ADD(2)</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">2</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">-4,1,2,3</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US"> </span></p> </td> </tr> <tr> <td width="114" valign="top" style="width:85.2pt;border:solid windowtext 1.0pt; border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt; padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">7</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">ADD(8)</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">2</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">-4,1,2,3,8</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US"> </span></p> </td> </tr> <tr> <td width="114" valign="top" style="width:85.2pt;border:solid windowtext 1.0pt; border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt; padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">8</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">ADD(-1000)</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">2</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">-1000,-4,1,2,3,8</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US"> </span></p> </td> </tr> <tr> <td width="114" valign="top" style="width:85.2pt;border:solid windowtext 1.0pt; border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt; padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">9</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">GET</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">3</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">-1000,-4,1,2,3,8</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">1</span></p> </td> </tr> <tr> <td width="114" valign="top" style="width:85.2pt;border:solid windowtext 1.0pt; border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt; padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">10</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">GET</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">4</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">-1000,-4,1,2,3,8</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">2</span></p> </td> </tr> <tr> <td width="114" valign="top" style="width:85.2pt;border:solid windowtext 1.0pt; border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt; padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">11</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">ADD(2)</span></p> </td> <td width="114" valign="top" style="width:85.2pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">4</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US">-1000,-4,1,2,2,3,8</span></p> </td> <td width="114" valign="top" style="width:85.25pt;border-top:none;border-left: none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt; mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt; mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt"> <p class="MsoNormal"><span lang="EN-US"> </span></p> </td> </tr> </tbody> </table> <p class="MsoNormal" style="text-indent:21.75pt"><span lang="EN-US"> </span></p> <p class="MsoNormal"><span lang="EN-US">    </span>现在要求找出对于给定的命令串的最好的处理方法。</p> <p class="MsoNormal"><span lang="EN-US">    ADD</span>和<span lang="EN-US">GET</span>命令分别最多有<span lang="EN-US">200000</span>个。</p> <p class="MsoNormal"><span lang="EN-US">    </span>现在用两个整数数组来表示命令串：</p> <p class="MsoNormal"><span lang="EN-US">    1</span>、<span lang="EN-US">A(1), A(2),</span>…<span lang="EN-US">A(M) </span>：一串将要被放进<span lang="EN-US">Black Box</span>的元素。每个数都是绝对值不超过<span lang="EN-US">2000000000</span>的整数，<span lang="EN-US">M<=200000</span>。例如上面的例子就是<span lang="EN-US">A=</span>（<span lang="EN-US">3,1,-4,2,8,-1000,2</span>）。</p> <p class="MsoNormal"><span lang="EN-US">    2.u(1)</span>，<span lang="EN-US">.u(1)</span>，…<span lang="EN-US">u(N)</span>，：表示第<span lang="EN-US">.u(j)</span>个元素被放进了<span lang="EN-US">Black Box</span>里后就出现一个<span lang="EN-US">GET</span>命令。例如上面的例子中<span lang="EN-US">u=(1,2,6,6)。</span>输入数据不用判错。</p> <p></p>

## 输入格式

<p> 【输入】</p> <p class="MsoNormal"><span lang="EN-US">    </span>第一行，两个整数，<span lang="EN-US">M</span>，<span lang="EN-US">N</span></p> <p class="MsoNormal"><span lang="EN-US">    </span>第二行，<span lang="EN-US">M</span><span class="GramE">个</span>整数．表示<span lang="EN-US">A(l)</span>……<span lang="EN-US">A(M)</span>。</p> <p class="MsoNormal">   第三行，<span lang="EN-US">N</span><span class="GramE">个</span>整数，表示<span lang="EN-US">u(1) </span>…… <span lang="EN-US">u(N)</span>。</p>

## 输出格式

<p class="MsoNormal" style="TEXT-INDENT: 21.75pt">【输出】</p> <p class="MsoNormal" style="TEXT-INDENT: 21.75pt">输出<span lang="EN-US">Black Box </span>根据<span class="GramE">命令串所得出</span>的串，一个数字一行。</p> <p></p>

## 输入样例

```plaintext
【输入样例】 7 4 3 1 -4 2 8 -1000 2 1 2 6 6 
```

## 输出样例

```plaintext
【输出样例】 3 3 1 2 数据规模： 对于30%的数据， M<=10000； 对于5%的数据， M<=100000； 对于100%的数据，M<=200000； 
```



 



 
