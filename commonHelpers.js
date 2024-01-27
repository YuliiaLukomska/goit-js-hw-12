import{S as b,i as c,a as y}from"./assets/vendor-951421c8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const d="/goit-js-hw-12/assets/left-close-f1c537d4.svg",m=new b(".gallery a",{captionsData:"alt",captionDelay:250}),t={form:document.querySelector("form"),button:document.querySelector("button"),list:document.querySelector("ul"),loader:document.querySelector("span"),loadbtn:document.querySelector(".btn-load-more")},v="41896397-c8b989416d0fb53fd1030eb96",L="https://pixabay.com/api/";let l=1,i="",p=0;t.form.addEventListener("submit",x);async function x(a){a.preventDefault(),t.loadbtn.classList.add("is-hidden"),l=1,t.loader.classList.add("loader"),t.list.innerHTML="";const r=a.currentTarget;if(i=r.elements.image.value.trim(),!!i)try{const e=await g(i);console.log(e),p=Math.ceil(e.totalHits/40),console.log(p),h(e),t.loader.classList.remove("loader"),e.hits.length>0&&e.hits.length!==e.totalHits?(t.loadbtn.classList.remove("is-hidden"),t.loadbtn.addEventListener("click",f)):t.loadbtn.classList.add("is-hidden"),m.refresh(),e.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:d,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}catch(e){console.log(e),c.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:d,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}finally{r.reset()}}async function g(a,r=1){return(await y.get(`${L}`,{params:{key:v,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:r}})).data}async function f(){l+=1,t.loader.classList.add("loader");try{const a=await g(i,l);h(a),t.loader.classList.remove("loader"),m.refresh()}catch(a){console.log(a),c.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:d,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}finally{l===p&&(t.loadbtn.classList.add("is-hidden"),t.loadbtn.removeEventListener("click",f))}}function h(a){const r=a.hits.map(e=>`<li class="gallery-item">
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
        </li>`).join("");t.list.insertAdjacentHTML("beforeend",r)}
//# sourceMappingURL=commonHelpers.js.map
