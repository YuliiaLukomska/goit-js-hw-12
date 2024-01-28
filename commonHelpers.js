import{S as h,a as y,i as b}from"./assets/vendor-951421c8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const v="/goit-js-hw-12/assets/left-close-f1c537d4.svg",u=new h(".gallery a",{captionsData:"alt",captionDelay:250}),s={form:document.querySelector("form"),button:document.querySelector("button"),list:document.querySelector("ul"),loader:document.querySelector("span"),loadbtn:document.querySelector(".btn-load-more")},L="41896397-c8b989416d0fb53fd1030eb96",w="https://pixabay.com/api/";let l=1,i="",p=0;s.form.addEventListener("submit",S);async function S(a){a.preventDefault(),s.loadbtn.classList.add("is-hidden"),l=1,s.loader.classList.add("loader"),s.list.innerHTML="";const r=a.currentTarget;if(i=r.elements.image.value.trim(),!!i)try{const e=await m(i);p=Math.ceil(e.totalHits/40),g(e),s.loader.classList.remove("loader"),e.hits.length>0&&e.hits.length!==e.totalHits?(s.loadbtn.classList.remove("is-hidden"),s.loadbtn.addEventListener("click",f)):s.loadbtn.classList.add("is-hidden"),u.refresh(),e.hits.length===0&&n("Sorry, there are no images matching your search query. Please try again!")}catch{n("Error")}finally{r.reset()}}async function m(a,r=1){return(await y.get(`${w}`,{params:{key:L,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:r}})).data}async function f(){l+=1,E(),s.loader.classList.add("loader");try{const a=await m(i,l);g(a),s.loader.classList.remove("loader"),u.refresh()}catch{n("Error")}finally{l===p&&(s.loadbtn.classList.add("is-hidden"),s.loadbtn.removeEventListener("click",f),n("We are sorry, but you have reached the end of search results."))}}function g(a){const r=a.hits.map(e=>`<li class="gallery-item">
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
        </li>`).join("");s.list.insertAdjacentHTML("beforeend",r)}function E(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:e,behavior:"smooth"})}function n(a){b.error({message:a,messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:v,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}
//# sourceMappingURL=commonHelpers.js.map
