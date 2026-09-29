(()=>{if(window.__ytWebTvFull)return;window.__ytWebTvFull=1;
const css=`
html,body,ytd-app{background:#050505!important;color:#fff!important}
ytd-masthead,#masthead-container,#guide,ytd-mini-guide-renderer{display:none!important}
#page-manager{margin-top:0!important;padding-top:96px!important}
ytd-rich-item-renderer{margin:8px!important;transition:transform .18s ease,filter .18s ease!important}
ytd-rich-item-renderer #thumbnail,ytd-video-renderer #thumbnail,ytd-grid-video-renderer #thumbnail,ytd-compact-video-renderer #thumbnail{border-radius:18px!important;overflow:hidden!important}
ytd-rich-item-renderer:focus-within{transform:scale(1.045)!important;z-index:30!important}
ytd-rich-item-renderer:focus-within #thumbnail,ytd-video-renderer:focus-within #thumbnail{box-shadow:0 0 0 4px rgba(255,255,255,.92),0 18px 48px rgba(0,0,0,.55)!important}
#tv-shell-nav{position:fixed;z-index:2147483640;top:24px;left:50%;transform:translateX(-50%);height:56px;display:flex;align-items:center;gap:3px;padding:4px;background:rgba(19,22,24,.80);border:1px solid rgba(255,255,255,.08);border-radius:30px;box-shadow:0 16px 50px rgba(0,0,0,.35);backdrop-filter:blur(22px) saturate(125%);font-family:Roboto,Arial,sans-serif}
#tv-shell-nav button{height:48px;min-width:105px;padding:0 18px;border:0;border-radius:25px;background:transparent;color:#aaa;font-size:16px;font-weight:700;white-space:nowrap}
#tv-shell-nav button:focus,#tv-shell-nav button.tv-active{background:#f5f5f5;color:#090909;outline:none}
#tv-search-box{display:none;position:fixed;z-index:2147483641;top:92px;left:50%;transform:translateX(-50%);width:min(760px,76vw);padding:14px 18px;border-radius:18px;border:1px solid rgba(255,255,255,.16);background:rgba(12,12,12,.96);color:white;font-size:22px;outline:none}
ytd-ad-slot-renderer,ytd-display-ad-renderer,ytd-in-feed-ad-layout-renderer,ytd-promoted-sparkles-web-renderer,ytd-promoted-video-renderer,ytd-companion-slot-renderer,#player-ads,.ytp-ad-module,.video-ads,[class*='ytd-ad-'],[id*='masthead-ad']{display:none!important;visibility:hidden!important;max-height:0!important}
`;
let st=document.createElement('style');st.textContent=css;document.documentElement.appendChild(st);
const nav=document.createElement('div');nav.id='tv-shell-nav';
const items=[['Inicio','https://www.youtube.com/'],['Explorar','https://www.youtube.com/feed/explore'],['Música','https://www.youtube.com/results?search_query=musica'],['Deportes','https://www.youtube.com/results?search_query=deportes'],['Kids','https://www.youtube.com/results?search_query=videos+para+ni%C3%B1os'],['Biblioteca','https://www.youtube.com/feed/you'],['Buscar',null]];
const search=document.createElement('input');search.id='tv-search-box';search.type='search';search.placeholder='Buscar en YouTube';
items.forEach(([l,u],i)=>{let b=document.createElement('button');b.textContent=l;b.tabIndex=0;if(i===0)b.classList.add('tv-active');b.onclick=()=>u?location.href=u:(search.style.display='block',search.focus());nav.appendChild(b)});document.documentElement.appendChild(nav);document.documentElement.appendChild(search);
search.onkeydown=e=>{if(e.key==='Enter'&&search.value.trim())location.href='https://www.youtube.com/results?search_query='+encodeURIComponent(search.value.trim());if(e.key==='Escape'){search.style.display='none';nav.lastChild.focus()}};
const badHosts=['doubleclick.net','googlesyndication.com','googleadservices.com','googletagservices.com','adservice.google.com','imasdk.googleapis.com'];
const blocked=u=>{try{let h=new URL(u,location.href).hostname;return badHosts.some(d=>h===d||h.endsWith('.'+d))||/\/pagead\/|\/api\/stats\/ads|googleads|adformat=|ad_type=/i.test(u)}catch(_){return false}};
const ofetch=window.fetch.bind(window);window.fetch=(input,init)=>{let u=typeof input==='string'?input:(input&&input.url)||'';return blocked(u)?Promise.resolve(new Response('',{status:204})):ofetch(input,init)};
const OXHR=window.XMLHttpRequest;window.XMLHttpRequest=function(){let x=new OXHR,o=x.open;x.open=function(m,u,...a){this.__b=blocked(u);if(this.__b)return o.call(this,m,'data:text/plain,',...a);return o.call(this,m,u,...a)};return x};
let state=null;
function clean(){document.querySelectorAll('ytd-ad-slot-renderer,ytd-display-ad-renderer,ytd-in-feed-ad-layout-renderer,ytd-promoted-sparkles-web-renderer,ytd-promoted-video-renderer,ytd-companion-slot-renderer,#player-ads,.ytp-ad-module,.video-ads,[id*="masthead-ad"]').forEach(e=>e.remove());document.querySelectorAll('.ytp-ad-skip-button,.ytp-skip-ad-button,.ytp-ad-skip-button-modern,[class*="skip-ad"]').forEach(b=>{try{b.click()}catch(_){}});let p=document.querySelector('.html5-video-player'),v=document.querySelector('video');let ad=p&&p.classList.contains('ad-showing');if(ad&&v){if(!state)state={m:v.muted,r:v.playbackRate};try{v.muted=true;v.playbackRate=16;if(Number.isFinite(v.duration)&&v.duration>0)v.currentTime=Math.max(0,v.duration-.05)}catch(_){}}else if(state&&v){try{v.muted=state.m;v.playbackRate=state.r||1}catch(_){}state=null}}
new MutationObserver(clean).observe(document.documentElement,{subtree:true,childList:true});setInterval(clean,700);clean();
function vis(e){let r=e.getBoundingClientRect(),s=getComputedStyle(e);return r.width>6&&r.height>6&&s.display!=='none'&&s.visibility!=='hidden'}
function all(){return [...document.querySelectorAll('#tv-shell-nav button,#tv-search-box,a[href],button,[role="button"],[tabindex="0"]')].filter(vis)}
function mv(d){let a=all(),c=document.activeElement;if(!a.includes(c)){a[0]?.focus();return}let r=c.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,b=null,sc=1e99;for(let e of a){if(e===c)continue;let q=e.getBoundingClientRect(),x=q.left+q.width/2,y=q.top+q.height/2,dx=x-cx,dy=y-cy;if(d==='l'&&dx>=-4||d==='r'&&dx<=4||d==='u'&&dy>=-4||d==='d'&&dy<=4)continue;let p=(d==='l'||d==='r')?Math.abs(dx):Math.abs(dy),s=(d==='l'||d==='r')?Math.abs(dy):Math.abs(dx),z=p+s*2.2;if(z<sc){sc=z;b=e}}if(b){b.focus({preventScroll:true});b.scrollIntoView({behavior:'smooth',block:'center',inline:'center'})}}
document.addEventListener('keydown',e=>{if(document.activeElement===search)return;let m={ArrowLeft:'l',ArrowRight:'r',ArrowUp:'u',ArrowDown:'d'}[e.key];if(m){e.preventDefault();e.stopPropagation();mv(m)}else if((e.key==='Enter'||e.key===' ')&&document.activeElement?.click){e.preventDefault();document.activeElement.click()}},true);
setTimeout(()=>nav.firstChild?.focus(),800)
})();