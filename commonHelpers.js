import{S as u,i as n,a as p}from"./assets/vendor-951421c8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=l(s);fetch(s.href,r)}})();const c="/goit-js-hw-12/assets/left-close-f1c537d4.svg",d=new u(".gallery a",{captionsData:"alt",captionDelay:250}),o={form:document.querySelector("form"),button:document.querySelector("button"),list:document.querySelector("ul"),loader:document.querySelector("span")},m="41896397-c8b989416d0fb53fd1030eb96",f="https://pixabay.com/api/";o.form.addEventListener("submit",g);async function g(t){t.preventDefault(),o.loader.classList.add("loader"),o.list.innerHTML="";const e=t.currentTarget,l=e.elements.image.value;try{const a=await h(l);o.loader.classList.remove("loader"),o.list.innerHTML=y(a),d.refresh(),a.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:c,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}catch{n.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:c,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}finally{e.reset()}}async function h(t){const e=new URLSearchParams({key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await p.get(`${f}?${e}`)).data}function y(t){return t.hits.map(e=>`<li class="gallery-item">
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
