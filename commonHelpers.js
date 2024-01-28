import{S as y,i as n,a as b}from"./assets/vendor-951421c8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&p(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const c="/goit-js-hw-12/assets/left-close-f1c537d4.svg",u=new y(".gallery a",{captionsData:"alt",captionDelay:250}),s={form:document.querySelector("form"),button:document.querySelector("button"),list:document.querySelector("ul"),loader:document.querySelector("span"),loadbtn:document.querySelector(".btn-load-more")},v="41896397-c8b989416d0fb53fd1030eb96",L="https://pixabay.com/api/";let i=1,l="",m=0;s.form.addEventListener("submit",x);async function x(a){a.preventDefault(),s.loadbtn.classList.add("is-hidden"),i=1,s.loader.classList.add("loader"),s.list.innerHTML="";const o=a.currentTarget;if(l=o.elements.image.value.trim(),!!l)try{const e=await g(l);m=Math.ceil(e.totalHits/40),h(e),s.loader.classList.remove("loader"),e.hits.length>0&&e.hits.length!==e.totalHits?(s.loadbtn.classList.remove("is-hidden"),s.loadbtn.addEventListener("click",f)):s.loadbtn.classList.add("is-hidden"),u.refresh(),e.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:c,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}catch{n.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:c,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}finally{o.reset()}}async function g(a,o=1){return(await b.get(`${L}`,{params:{key:v,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:o}})).data}async function f(){i+=1,w(),s.loader.classList.add("loader");try{const a=await g(l,i);h(a),s.loader.classList.remove("loader"),u.refresh()}catch{n.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:c,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}finally{i===m&&(s.loadbtn.classList.add("is-hidden"),s.loadbtn.removeEventListener("click",f),n.error({message:"We are sorry, but you have reached the end of search results.",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"center",iconUrl:c,backgroundColor:"grey",maxWidth:"350px",timeout:!1}))}}function h(a){const o=a.hits.map(e=>`<li class="gallery-item">
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
        </li>`).join("");s.list.insertAdjacentHTML("beforeend",o)}function w(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:e,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
