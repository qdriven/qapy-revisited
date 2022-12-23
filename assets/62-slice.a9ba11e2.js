import{_ as i,a as l,b as u}from"./BaseDisclaimerTitle.631caf82.js";import{q as h,o as d,c as g,b as t,f as n,t as m,B as k,s,e as b}from"./app.e6b4b7b5.js";const f={class:"markdown-body"},y=b("a",{target:"_blank",href:"https://docs.python.org/3/library/functions.html#slice"},"Python 3 documentation",-1),_=m(`<h2 id="examples" tabindex="-1">Examples</h2><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> furniture <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;table&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;chair&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rack&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;shelf&#39;</span><span class="token punctuation">]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> furniture<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token comment"># [&#39;table&#39;, &#39;chair&#39;, &#39;rack&#39;, &#39;shelf&#39;]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> furniture<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token comment"># [&#39;chair&#39;, &#39;rack&#39;]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> furniture<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment"># [&#39;table&#39;, &#39;chair&#39;, &#39;rack&#39;]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> furniture<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token comment"># [&#39;table&#39;, &#39;chair&#39;]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> furniture<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token comment"># [&#39;chair&#39;, &#39;rack&#39;, &#39;shelf&#39;]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> furniture<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token comment"># [&#39;table&#39;, &#39;chair&#39;, &#39;rack&#39;, &#39;shelf&#39;]</span>
</code></pre><p>Slicing the complete list will perform a copy:</p><pre class="language-python"><code class="language-python"><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam2 <span class="token operator">=</span> spam<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token comment"># [&#39;cat&#39;, &#39;bat&#39;, &#39;rat&#39;, &#39;elephant&#39;]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&#39;dog&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam
<span class="token comment"># [&#39;cat&#39;, &#39;bat&#39;, &#39;rat&#39;, &#39;elephant&#39;, &#39;dog&#39;]</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> spam2
<span class="token comment"># [&#39;cat&#39;, &#39;bat&#39;, &#39;rat&#39;, &#39;elephant&#39;]</span>
</code></pre>`,4),T="Python slice() built-in function - Python Cheatsheet",R="Return a slice object representing the set of indices specified by range(start, stop, step). The start and step arguments default to None. Slice objects have read-only data attributes start, stop, and step which merely return the argument values (or their default).",x=[{property:"og:title",content:"Python slice() built-in function - Python Cheatsheet"},{property:"og:description",content:"Return a slice object representing the set of indices specified by range(start, stop, step). The start and step arguments default to None. Slice objects have read-only data attributes start, stop, and step which merely return the argument values (or their default)."},{name:"description",content:"Return a slice object representing the set of indices specified by range(start, stop, step). The start and step arguments default to None. Slice objects have read-only data attributes start, stop, and step which merely return the argument values (or their default)."}],C={__name:"62-slice",setup(v,{expose:a}){const e={title:"Python slice() built-in function - Python Cheatsheet",description:"Return a slice object representing the set of indices specified by range(start, stop, step). The start and step arguments default to None. Slice objects have read-only data attributes start, stop, and step which merely return the argument values (or their default).",meta:[{property:"og:title",content:"Python slice() built-in function - Python Cheatsheet"},{property:"og:description",content:"Return a slice object representing the set of indices specified by range(start, stop, step). The start and step arguments default to None. Slice objects have read-only data attributes start, stop, and step which merely return the argument values (or their default)."},{name:"description",content:"Return a slice object representing the set of indices specified by range(start, stop, step). The start and step arguments default to None. Slice objects have read-only data attributes start, stop, and step which merely return the argument values (or their default)."}]};return a({frontmatter:e}),h({title:"Python slice() built-in function - Python Cheatsheet",meta:[{property:"og:title",content:"Python slice() built-in function - Python Cheatsheet"},{property:"og:description",content:"Return a slice object representing the set of indices specified by range(start, stop, step). The start and step arguments default to None. Slice objects have read-only data attributes start, stop, and step which merely return the argument values (or their default)."},{name:"description",content:"Return a slice object representing the set of indices specified by range(start, stop, step). The start and step arguments default to None. Slice objects have read-only data attributes start, stop, and step which merely return the argument values (or their default)."}]}),(P,N)=>{const o=k,p=l,r=u,c=i;return d(),g("div",f,[t(o,{title:e.title,description:e.description},{default:n(()=>[s(" Python slice() built-in function ")]),_:1},8,["title","description"]),t(c,null,{default:n(()=>[t(p,null,{default:n(()=>[s(" From the "),y]),_:1}),t(r,null,{default:n(()=>[s(" Return a slice object representing the set of indices specified by range(start, stop, step). The start and step arguments default to None. Slice objects have read-only data attributes start, stop, and step which merely return the argument values (or their default). ")]),_:1})]),_:1}),_])}}};export{C as default,R as description,x as meta,T as title};
