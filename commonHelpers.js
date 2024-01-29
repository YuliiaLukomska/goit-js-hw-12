import{S as b,a as v,i as L}from"./assets/vendor-951421c8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))p(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&p(u)}).observe(document,{childList:!0,subtree:!0});function e(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(a){if(a.ep)return;a.ep=!0;const s=e(a);fetch(a.href,s)}})();const w="/goit-js-hw-12/assets/left-close-f1c537d4.svg",f=new b(".gallery a",{captionsData:"alt",captionDelay:250}),o={form:document.querySelector("form"),button:document.querySelector("button"),list:document.querySelector("ul"),loader:document.querySelector("span"),loadbtn:document.querySelector(".btn-load-more")},S="41896397-c8b989416d0fb53fd1030eb96",E="https://pixabay.com/api/";let l=1,i="",m=0,n;o.form.addEventListener("submit",I);async function I(t){t.preventDefault(),c(n=!0),l=1,o.loader.classList.add("loader"),o.list.innerHTML="";const r=t.currentTarget;if(i=r.elements.image.value.trim(),!!i)try{const e=await g(i);m=Math.ceil(e.totalHits/40),y(e),o.loader.classList.remove("loader"),e.hits.length>0&&e.hits.length!==e.totalHits?(c(n=!1),o.loadbtn.addEventListener("click",h)):c(n=!0),f.refresh(),e.hits.length===0&&d("Sorry, there are no images matching your search query. Please try again!")}catch{d("Error")}finally{r.reset()}}async function g(t,r=1){return(await v.get(`${E}`,{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:r}})).data}async function h(){l+=1,k(),o.loader.classList.add("loader");try{const t=await g(i,l);y(t),o.loader.classList.remove("loader"),f.refresh()}catch{d("Error")}finally{l===m&&(c(n=!0),o.loadbtn.removeEventListener("click",h),d("We are sorry, but you have reached the end of search results."))}}function y(t){const r=t.hits.map(e=>`<li class="gallery-item">
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
        </li>`).join("");o.list.insertAdjacentHTML("beforeend",r)}function k(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:e,behavior:"smooth"})}function c(t){t?o.loadbtn.classList.add("is-hidden"):o.loadbtn.classList.remove("is-hidden")}function d(t){L.error({message:t,messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:w,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}
//# sourceMappingURL=commonHelpers.js.map
