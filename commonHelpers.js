import{S as b,i as c,a as y}from"./assets/vendor-951421c8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const d="/goit-js-hw-12/assets/left-close-f1c537d4.svg",m=new b(".gallery a",{captionsData:"alt",captionDelay:250}),a={form:document.querySelector("form"),button:document.querySelector("button"),list:document.querySelector("ul"),loader:document.querySelector("span"),loadbtn:document.querySelector(".btn-load-more")},v="41896397-c8b989416d0fb53fd1030eb96",L="https://pixabay.com/api/";let l=1,i="",p=0;a.form.addEventListener("submit",x);async function x(t){t.preventDefault(),a.loadbtn.classList.add("is-hidden"),l=1,a.loader.classList.add("loader"),a.list.innerHTML="";const r=t.currentTarget;if(i=r.elements.image.value.trim(),!!i)try{const e=await g(i);console.log(e),p=Math.ceil(e.totalHits/40),console.log(p),h(e),a.loader.classList.remove("loader"),e.hits.length>0?(a.loadbtn.classList.remove("is-hidden"),a.loadbtn.addEventListener("click",f)):a.loadbtn.classList.add("is-hidden"),m.refresh(),e.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:d,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}catch(e){console.log(e),c.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:d,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}finally{r.reset()}}async function g(t,r=1){return(await y.get(`${L}`,{params:{key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:r}})).data}async function f(){l+=1,a.loader.classList.add("loader");try{const t=await g(i,l);h(t),a.loader.classList.remove("loader"),m.refresh()}catch(t){console.log(t),c.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:d,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}finally{l===p&&(a.loadbtn.classList.add("is-hidden"),a.loadbtn.removeEventListener("click",f))}}function h(t){const r=t.hits.map(e=>`<li class="gallery-item">
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
        </li>`).join("");a.list.insertAdjacentHTML("beforeend",r)}
//# sourceMappingURL=commonHelpers.js.map
