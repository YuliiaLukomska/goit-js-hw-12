import{S as u,i as n}from"./assets/vendor-46aac873.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const c="/goit-js-hw-12/assets/left-close-f1c537d4.svg",p=new u(".gallery a",{captionsData:"alt",captionDelay:250}),l={form:document.querySelector("form"),button:document.querySelector("button"),list:document.querySelector("ul"),loader:document.querySelector("span")},d="41896397-c8b989416d0fb53fd1030eb96",m="https://pixabay.com/api/";l.form.addEventListener("submit",f);function f(s){s.preventDefault(),l.loader.classList.add("loader"),l.list.innerHTML="";const e=s.currentTarget,o=e.elements.image.value;g(o).then(a=>{l.loader.classList.remove("loader"),l.list.innerHTML=h(a),p.refresh(),a.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:c,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}).catch(a=>n.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:c,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})).finally(()=>{e.reset()})}function g(s){const e=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}?${e}`).then(o=>{if(o.ok)return o.json();throw new Error(o.statusText)})}function h(s){return s.hits.map(e=>`<li class="gallery-item">
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
