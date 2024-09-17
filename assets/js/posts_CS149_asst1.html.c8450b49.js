"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[6181],{8789:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,i]of t)a[e]=i;return a}},7853:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>n,data:()=>r});var i=a(5252);const s={},n=(0,a(8789).A)(s,[["render",function(e,t){return(0,i.uX)(),(0,i.CE)("div",null,t[0]||(t[0]=[(0,i.Fv)('<h2 id="prog1-mandelbort-threads" tabindex="-1"><a class="header-anchor" href="#prog1-mandelbort-threads"><span>Prog1_mandelbort_threads</span></a></h2><h3 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置"><span>环境配置</span></a></h3><p>本人使用OS为<code>Ubuntu 22.04</code>, 还是建议使用Linux系统做Lab, 很多环境配置会方便一些.</p><p>CS149_Asst1并不需要额外配置运行环境, 下载解压一下编译环境就好啦!<br> 下载包:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    wget https://github.com/ispc/ispc/releases/download/v1.21.0/ispc-v1.21.0-linux.tar.gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>解压包:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    tar -xvf ispc-v1.21.0-linux.tar.gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>配置环境路径:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    export PATH=$PATH:${HOME}/Downloads/ispc-v1.21.0-linux/bin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>环境配置完成后就可以clone repo到本地来开始lab了:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    git clone https://github.com/stanford-cs149/asst1.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="任务分析" tabindex="-1"><a class="header-anchor" href="#任务分析"><span>任务分析</span></a></h3><blockquote><p>Pro1的内容主要是为了让学生了解<code>std::thread</code>的并行机制和&quot;多线程不一定高效率&quot;的并发事实, 所以难度并不算大~~(这是我的事后诸葛亮)~~, 整体框架已经在源码中基本完成了.完成后可以通过<code>make</code> + <code>./mandelbort --&lt;args&gt;</code>检验正确与否.</p></blockquote><p>task :</p><ul><li>创建<code>线程0</code>和<code>线程1</code>, 分别计算图像的上下两个部分, 即<code>将图像的不同空间交给不同线程</code>计算, 这被称为<code>空间分解(spatial decomposition)</code>.</li><li>扩展代码使其能够使用<code>2, 3, 4, 5, 6, 7, 8</code>个线程, 进行空间分解, 生成加速图, 假设加速是否与线程数线性相关并加以验证.</li><li>在<code>workerThreadStart()</code>的开头和结尾插入计时代码, 验证并解释task2中提出的猜想.</li><li>修改一开始的线程分配方式, 实现将两个图片都拉到<code>8线程时7-8倍加速比</code>的效果, 找到适应任何线程数的泛型分配方式(不需要线程之间进行响应和同步), 报告最后得出的8线程加速比.</li><li>使用<code>16个线程</code>运行改进后代码, 回答性能是否明显高于8线程并解释原因.</li></ul><p>事实上task中给的提示还是比较明显的, 在<code>task1</code>中解释了空间分解的概念, 那么通过对图片本身的<code>上下多份分割</code>,就可以解决这个问题,要注意分割的时候会不会漏行.</p><h3 id="任务实现" tabindex="-1"><a class="header-anchor" href="#任务实现"><span>任务实现</span></a></h3><p>我们将一开始就对任务给出泛型的解决方式, 并在后续针对数据结果决定是否要进行优化.</p>',18)]))}]]),r=JSON.parse('{"path":"/posts/CS149_asst1.html","title":"CS149 Lab Assignment1","lang":"zh-CN","frontmatter":{"title":"CS149 Lab Assignment1","date":"2024-09-16T00:00:00.000Z","category":["CS149_Lab"],"tag":["公开课","并行计算","Lab"],"sticky":true,"star":true,"order":-1.01,"description":"Prog1_mandelbort_threads 环境配置 本人使用OS为Ubuntu 22.04, 还是建议使用Linux系统做Lab, 很多环境配置会方便一些. CS149_Asst1并不需要额外配置运行环境, 下载解压一下编译环境就好啦! 下载包: 解压包: 配置环境路径: 环境配置完成后就可以clone repo到本地来开始lab了: 任务分析...","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/CS149_asst1.html"}],["meta",{"property":"og:site_name","content":"CS_Blog"}],["meta",{"property":"og:title","content":"CS149 Lab Assignment1"}],["meta",{"property":"og:description","content":"Prog1_mandelbort_threads 环境配置 本人使用OS为Ubuntu 22.04, 还是建议使用Linux系统做Lab, 很多环境配置会方便一些. CS149_Asst1并不需要额外配置运行环境, 下载解压一下编译环境就好啦! 下载包: 解压包: 配置环境路径: 环境配置完成后就可以clone repo到本地来开始lab了: 任务分析..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-16T12:56:30.000Z"}],["meta",{"property":"article:author","content":"LearnData"}],["meta",{"property":"article:tag","content":"公开课"}],["meta",{"property":"article:tag","content":"并行计算"}],["meta",{"property":"article:tag","content":"Lab"}],["meta",{"property":"article:published_time","content":"2024-09-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-16T12:56:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CS149 Lab Assignment1\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-16T12:56:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LearnData\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"Prog1_mandelbort_threads","slug":"prog1-mandelbort-threads","link":"#prog1-mandelbort-threads","children":[{"level":3,"title":"环境配置","slug":"环境配置","link":"#环境配置","children":[]},{"level":3,"title":"任务分析","slug":"任务分析","link":"#任务分析","children":[]},{"level":3,"title":"任务实现","slug":"任务实现","link":"#任务实现","children":[]}]}],"git":{"createdTime":1726473616000,"updatedTime":1726491390000,"contributors":[{"name":"YuanaHao","email":"youthandqueen@qq.com","commits":8}]},"readingTime":{"minutes":2.43,"words":730},"filePathRelative":"_posts/CS149_asst1.md","localizedDate":"2024年9月16日","excerpt":"<h2>Prog1_mandelbort_threads</h2>\\n<h3>环境配置</h3>\\n<p>本人使用OS为<code>Ubuntu 22.04</code>, 还是建议使用Linux系统做Lab, 很多环境配置会方便一些.</p>\\n<p>CS149_Asst1并不需要额外配置运行环境, 下载解压一下编译环境就好啦!<br>\\n下载包:</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>    wget https://github.com/ispc/ispc/releases/download/v1.21.0/ispc-v1.21.0-linux.tar.gz</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);