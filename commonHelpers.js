import{S as b,i as u,a as v}from"./assets/vendor-951421c8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const p="/goit-js-hw-12/assets/left-close-f1c537d4.svg",m=new b(".gallery a",{captionsData:"alt",captionDelay:250}),s={form:document.querySelector("form"),button:document.querySelector("button"),list:document.querySelector("ul"),loader:document.querySelector("span"),loadbtn:document.querySelector(".btn-load-more")},L="41896397-c8b989416d0fb53fd1030eb96",w="https://pixabay.com/api/";let l=1,i="",f=0;s.form.addEventListener("submit",S);async function S(a){a.preventDefault(),s.loadbtn.classList.add("is-hidden"),l=1,s.loader.classList.add("loader"),s.list.innerHTML="";const r=a.currentTarget;if(i=r.elements.image.value.trim(),!!i)try{const e=await g(i);f=Math.ceil(e.totalHits/40),y(e),s.loader.classList.remove("loader"),e.hits.length>0&&e.hits.length!==e.totalHits?(s.loadbtn.classList.remove("is-hidden"),s.loadbtn.addEventListener("click",h)):s.loadbtn.classList.add("is-hidden"),m.refresh(),e.hits.length===0&&u.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:p,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}catch{c("Error")}finally{r.reset()}}async function g(a,r=1){return(await v.get(`${w}`,{params:{key:L,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:r}})).data}async function h(){l+=1,x(),s.loader.classList.add("loader");try{const a=await g(i,l);y(a),s.loader.classList.remove("loader"),m.refresh()}catch{c("Error")}finally{l===f&&(s.loadbtn.classList.add("is-hidden"),s.loadbtn.removeEventListener("click",h),c("We are sorry, but you have reached the end of search results."))}}function y(a){const r=a.hits.map(e=>`<li class="gallery-item">
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
        </li>`).join("");s.list.insertAdjacentHTML("beforeend",r)}function x(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:e,behavior:"smooth"})}function c(a){u.error({message:a,messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:p,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}
//# sourceMappingURL=commonHelpers.js.map
