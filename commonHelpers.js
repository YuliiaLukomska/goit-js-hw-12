import{S as b,i as c,a as v}from"./assets/vendor-951421c8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="/goit-js-hw-12/assets/left-close-f1c537d4.svg",p=new b(".gallery a",{captionsData:"alt",captionDelay:250}),a={form:document.querySelector("form"),button:document.querySelector("button"),list:document.querySelector("ul"),loader:document.querySelector("span"),loadbtn:document.querySelector(".btn-load-more")},L="41896397-c8b989416d0fb53fd1030eb96",w="https://pixabay.com/api/";let i=1,l="",m=0;a.form.addEventListener("submit",x);async function x(s){s.preventDefault(),a.loadbtn.classList.add("is-hidden"),i=1,a.loader.classList.add("loader"),a.list.innerHTML="";const o=s.currentTarget;if(l=o.elements.image.value.trim(),!!l)try{const e=await g(l);m=Math.ceil(e.totalHits/40),h(e),a.loader.classList.remove("loader"),e.hits.length>0&&e.hits.length!==e.totalHits?(a.loadbtn.classList.remove("is-hidden"),a.loadbtn.addEventListener("click",f)):a.loadbtn.classList.add("is-hidden"),p.refresh(),e.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:d,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}catch{y()}finally{o.reset()}}async function g(s,o=1){return(await v.get(`${w}`,{params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:o}})).data}async function f(){i+=1,S(),a.loader.classList.add("loader");try{const s=await g(l,i);h(s),a.loader.classList.remove("loader"),p.refresh()}catch{y()}finally{i===m&&(a.loadbtn.classList.add("is-hidden"),a.loadbtn.removeEventListener("click",f),c.error({message:"We are sorry, but you have reached the end of search results.",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"center",iconUrl:d,backgroundColor:"grey",maxWidth:"350px",timeout:!1}))}}function h(s){const o=s.hits.map(e=>`<li class="gallery-item">
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
        </li>`).join("");a.list.insertAdjacentHTML("beforeend",o)}function S(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:e,behavior:"smooth"})}function y(){c.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:d,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}
//# sourceMappingURL=commonHelpers.js.map
