import{q as t,o as p,c as o,b as e,f as c,t as l,B as u,s as r}from"./app.e6b4b7b5.js";const k={class:"markdown-body"},i=l(`<p>The <a href="https://docs.python.org/3/library/random.html" target="_blank" rel="noopener">random</a> module is a built-in module that allow us to generate random elements.</p><pre class="language-python"><code class="language-python"><span class="token keyword">import</span> random
</code></pre><h2 id="seed" tabindex="-1">seed()</h2><p>The <code>seed</code> method is used to initialize the random number generator.</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>seed<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 0.13436424411240122</span>
</code></pre><p>Setting the seed to a number will always return the same random number:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>seed<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 0.13436424411240122</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>seed<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 0.13436424411240122</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>seed<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 0.13436424411240122</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>seed<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 0.13436424411240122</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>seed<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 0.13436424411240122</span>
</code></pre><p>The default value of the <code>seed</code> method is the <em>current system time</em>, that is why we always get a different number:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 0.8474337369372327</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 0.763774618976614</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 0.2550690257394217</span>
</code></pre><h2 id="randint" tabindex="-1">randint()</h2><pre class="language-python"><code class="language-python">random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span>start<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> stop<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
</code></pre><p>This method returns a random number between a given start and stop parameters:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment"># 3</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment"># 2</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment"># 5</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment"># 1</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment"># 3</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment"># 1</span>
</code></pre><h2 id="choice" tabindex="-1">choice()</h2><p>The <code>choice</code> method return a randomly selected element from an iterable, like a <code>list</code>, <code>set</code> or <code>str</code>:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 1</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 2</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 4</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># 4</span>
</code></pre><h2 id="shuffle" tabindex="-1">shuffle()</h2><p>The <code>shuffle</code> method takes in an iterable and shuffle it:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>shuffle<span class="token punctuation">(</span>my_list<span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_list
<span class="token comment"># [1, 4, 3, 2]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>shuffle<span class="token punctuation">(</span>my_list<span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_list
<span class="token comment"># [2, 4, 3, 1]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>shuffle<span class="token punctuation">(</span>my_list<span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_list
<span class="token comment"># [4, 2, 3, 1]</span>
</code></pre><h2 id="sample" tabindex="-1">sample()</h2><pre class="language-python"><code class="language-python">random<span class="token punctuation">.</span>sample<span class="token punctuation">(</span>iterable<span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
</code></pre><p><code>sample</code> returns a list with a random selection from an iterable. The number of elements returned is equal to the <code>k</code> parameter:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>sample<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment"># [3]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>sample<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment"># [3, 4]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>sample<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment"># [4, 3, 2]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>sample<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token comment"># [1, 2, 4, 3]</span>
</code></pre><h2 id="random" tabindex="-1">random()</h2><p>The <code>random</code> method returns a random floating point number between 0.0 and 1.0:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 0.4143139993007743</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 0.17300740157905092</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 0.548798761388153</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>random<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 0.7030407620656315</span>
</code></pre><h2 id="uniform" tabindex="-1">uniform()</h2><p>the <code>uniform</code> method is similar to <code>randint</code>, but return a floating point number:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment"># 3.697943322009309</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment"># 2.498812082006561</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment"># 2.7558465201782525</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment"># 3.0337059529999273</span>
</code></pre>`,29),y="Python Random Module - Python Cheatsheet",f="The random module is a built-in module that allow us to generate random elements.",_=[{property:"og:title",content:"Python Random Module - Python Cheatsheet"},{property:"og:description",content:"The random module is a built-in module that allow us to generate random elements."},{name:"description",content:"The random module is a built-in module that allow us to generate random elements."}],w={__name:"25-random-module",setup(m,{expose:a}){const n={title:"Python Random Module - Python Cheatsheet",description:"The random module is a built-in module that allow us to generate random elements.",meta:[{property:"og:title",content:"Python Random Module - Python Cheatsheet"},{property:"og:description",content:"The random module is a built-in module that allow us to generate random elements."},{name:"description",content:"The random module is a built-in module that allow us to generate random elements."}]};return a({frontmatter:n}),t({title:"Python Random Module - Python Cheatsheet",meta:[{property:"og:title",content:"Python Random Module - Python Cheatsheet"},{property:"og:description",content:"The random module is a built-in module that allow us to generate random elements."},{name:"description",content:"The random module is a built-in module that allow us to generate random elements."}]}),(g,h)=>{const s=u;return p(),o("div",k,[e(s,{title:n.title,description:n.description},{default:c(()=>[r(" Python Random Module ")]),_:1},8,["title","description"]),i])}}};export{w as default,f as description,_ as meta,y as title};
