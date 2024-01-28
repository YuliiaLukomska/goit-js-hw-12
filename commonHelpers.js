import{S as b,i as c,a as y}from"./assets/vendor-951421c8.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="/goit-js-hw-12/assets/left-close-f1c537d4.svg",m=new b(".gallery a",{captionsData:"alt",captionDelay:250}),s={form:document.querySelector("form"),button:document.querySelector("button"),list:document.querySelector("ul"),loader:document.querySelector("span"),loadbtn:document.querySelector(".btn-load-more")},v="41896397-c8b989416d0fb53fd1030eb96",L="https://pixabay.com/api/";let l=1,i="",p=0;s.form.addEventListener("submit",w);async function w(o){o.preventDefault(),s.loadbtn.classList.add("is-hidden"),l=1,s.loader.classList.add("loader"),s.list.innerHTML="";const a=o.currentTarget;if(i=a.elements.image.value.trim(),!!i)try{const e=await g(i);console.log(e),p=Math.ceil(e.totalHits/40),console.log(p),h(e),s.loader.classList.remove("loader"),e.hits.length>0&&e.hits.length!==e.totalHits?(s.loadbtn.classList.remove("is-hidden"),s.loadbtn.addEventListener("click",f)):s.loadbtn.classList.add("is-hidden"),m.refresh(),e.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:d,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}catch(e){console.log(e),c.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:d,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}finally{a.reset()}}async function g(o,a=1){return(await y.get(`${L}`,{params:{key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:a}})).data}async function f(){l+=1,x(),s.loader.classList.add("loader");try{const o=await g(i,l);h(o),s.loader.classList.remove("loader"),m.refresh()}catch(o){console.log(o),c.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:d,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}finally{l===p&&(s.loadbtn.classList.add("is-hidden"),s.loadbtn.removeEventListener("click",f))}}function h(o){const a=o.hits.map(e=>`<li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}"
            ><img class="gallery-img" src="${e.webformatURL}" data-sourse="${e.largeImageURL}" alt="${e.tags}"
          /></a>
          <div class="description-wrapper">
            <div class="value-wrapper">
              <p class="label"><b>Likes</b></p>
              <p class="value">${e.likes}</p>
            </div>
            <div class="value-wrapper">
              <p class="label"><b>Views</b></p>
              <p class="value">${e.views}</p>
            </div>
            <div class="value-wrapper">
              <p class="label"><b>Comments</b></p>
              <p class="value">${e.comments}</p>
            </div>
            <div class="value-wrapper">
              <p class="label"><b>Downloads</b></p>
              <p class="value">${e.downloads}</p>
            </div>
          </div>
        </li>`).join("");s.list.insertAdjacentHTML("beforeend",a)}function x(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:e,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
