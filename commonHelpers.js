import{S as d,i as n,a as p}from"./assets/vendor-951421c8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const c="/goit-js-hw-12/assets/left-close-f1c537d4.svg",u=new d(".gallery a",{captionsData:"alt",captionDelay:250}),a={form:document.querySelector("form"),button:document.querySelector("button"),list:document.querySelector("ul"),loader:document.querySelector("span"),loadbtn:document.querySelector(".btn-load-more")},m="41896397-c8b989416d0fb53fd1030eb96",f="https://pixabay.com/api/";let g=1;a.form.addEventListener("submit",h);async function h(r){r.preventDefault(),a.loader.classList.add("loader"),a.list.innerHTML="";const e=r.currentTarget,l=e.elements.image.value.trim();if(l)try{const o=await b(l);a.loader.classList.remove("loader"),a.list.innerHTML=y(o),o.hits.length>0?(a.loadbtn.classList.remove("is-hidden"),a.loadbtn.addEventListener("submit",onMoreImages)):a.loadbtn.classList.add("is-hidden"),u.refresh(),o.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:c,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}catch{n.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:c,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}finally{e.reset()}}async function b(r){return(await p.get(`${f}`,{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:g}})).data}function y(r){return r.hits.map(e=>`<li class="gallery-item">
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
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
