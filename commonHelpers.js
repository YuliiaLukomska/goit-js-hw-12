import{S as g,i as n,a as f}from"./assets/vendor-951421c8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const c="/goit-js-hw-12/assets/left-close-f1c537d4.svg",h=new g(".gallery a",{captionsData:"alt",captionDelay:250}),r={form:document.querySelector("form"),button:document.querySelector("button"),list:document.querySelector("ul"),loader:document.querySelector("span"),loadbtn:document.querySelector(".btn-load-more")},y="41896397-c8b989416d0fb53fd1030eb96",b="https://pixabay.com/api/";let p=1,l="";r.form.addEventListener("submit",v);async function v(t){t.preventDefault(),r.loader.classList.add("loader"),r.list.innerHTML="";const e=t.currentTarget;if(l=e.elements.image.value.trim(),!!l)try{const o=await u(l);r.loader.classList.remove("loader"),r.list.innerHTML=m(o),o.hits.length>0?(r.loadbtn.classList.remove("is-hidden"),r.loadbtn.addEventListener("click",L)):r.loadbtn.classList.add("is-hidden"),h.refresh(),o.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:c,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}catch(o){console.log(o),n.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:c,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}finally{e.reset()}}async function u(t,e=1){return(await f.get(`${b}`,{params:{key:y,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:e}})).data}async function L(){p+=1,r.loader.classList.add("loader");try{const t=await u(l,p);r.loader.classList.remove("loader"),r.list.innerHTML=m(t)}catch(t){console.log(t),n.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:c,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}}function m(t){return t.hits.map(e=>`<li class="gallery-item">
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
