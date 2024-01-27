import{S as d,i as n,a as p}from"./assets/vendor-951421c8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(s){if(s.ep)return;s.ep=!0;const t=l(s);fetch(s.href,t)}})();const c="/goit-js-hw-12/assets/left-close-f1c537d4.svg",u=new d(".gallery a",{captionsData:"alt",captionDelay:250}),o={form:document.querySelector("form"),button:document.querySelector("button"),list:document.querySelector("ul"),loader:document.querySelector("span"),loadbtn:document.querySelector(".btn-load-more")},m="41896397-c8b989416d0fb53fd1030eb96",f="https://pixabay.com/api/";let g=1;o.form.addEventListener("submit",h);async function h(a){a.preventDefault(),o.loader.classList.add("loader"),o.list.innerHTML="";const e=a.currentTarget,l=e.elements.image.value;if(l)try{const r=await y(l);o.loader.classList.remove("loader"),o.list.innerHTML=b(r),r.hits.length>0?o.loadbtn.classList.remove("is-hidden"):o.loadbtn.classList.add("is-hidden"),u.refresh(),r.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:c,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}catch{n.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:c,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}finally{e.reset()}}async function y(a){return(await p.get(`${f}`,{params:{key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:g}})).data}function b(a){return a.hits.map(e=>`<li class="gallery-item">
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
