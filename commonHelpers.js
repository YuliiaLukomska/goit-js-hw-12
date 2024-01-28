import{S as y,a as b,i as v}from"./assets/vendor-951421c8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const L="/goit-js-hw-12/assets/left-close-f1c537d4.svg",p=new y(".gallery a",{captionsData:"alt",captionDelay:250}),o={form:document.querySelector("form"),button:document.querySelector("button"),list:document.querySelector("ul"),loader:document.querySelector("span"),loadbtn:document.querySelector(".btn-load-more")},w="41896397-c8b989416d0fb53fd1030eb96",S="https://pixabay.com/api/";let l=1,i="",m=0;o.form.addEventListener("submit",E);async function E(a){a.preventDefault(),d(),l=1,o.loader.classList.add("loader"),o.list.innerHTML="";const r=a.currentTarget;if(i=r.elements.image.value.trim(),!!i)try{const e=await f(i);m=Math.ceil(e.totalHits/40),h(e),o.loader.classList.remove("loader"),e.hits.length>0&&e.hits.length!==e.totalHits?(o.loadbtn.classList.remove("is-hidden"),o.loadbtn.addEventListener("click",g)):d(),p.refresh(),e.hits.length===0&&n("Sorry, there are no images matching your search query. Please try again!")}catch{n("Error")}finally{r.reset()}}async function f(a,r=1){return(await b.get(`${S}`,{params:{key:w,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:r}})).data}async function g(){l+=1,I(),o.loader.classList.add("loader");try{const a=await f(i,l);h(a),o.loader.classList.remove("loader"),p.refresh()}catch{n("Error")}finally{l===m&&(d(),o.loadbtn.removeEventListener("click",g),n("We are sorry, but you have reached the end of search results."))}}function h(a){const r=a.hits.map(e=>`<li class="gallery-item">
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
        </li>`).join("");o.list.insertAdjacentHTML("beforeend",r)}function I(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:e,behavior:"smooth"})}function d(){o.loadbtn.classList.add("is-hidden")}function n(a){v.error({message:a,messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:L,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}
//# sourceMappingURL=commonHelpers.js.map
