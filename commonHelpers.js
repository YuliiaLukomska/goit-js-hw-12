import{S as f,i as n,a as h}from"./assets/vendor-951421c8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))p(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&p(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function p(s){if(s.ep)return;s.ep=!0;const t=e(s);fetch(s.href,t)}})();const c="/goit-js-hw-12/assets/left-close-f1c537d4.svg",u=new f(".gallery a",{captionsData:"alt",captionDelay:250}),r={form:document.querySelector("form"),button:document.querySelector("button"),list:document.querySelector("ul"),loader:document.querySelector("span"),loadbtn:document.querySelector(".btn-load-more")},y="41896397-c8b989416d0fb53fd1030eb96",b="https://pixabay.com/api/";let d=1,l="";r.form.addEventListener("submit",v);async function v(a){a.preventDefault(),d=1,r.loader.classList.add("loader"),r.list.innerHTML="";const o=a.currentTarget;if(l=o.elements.image.value.trim(),!!l)try{const e=await m(l);console.log(e),g(e),r.loader.classList.remove("loader"),e.hits.length>0?(r.loadbtn.classList.remove("is-hidden"),r.loadbtn.addEventListener("click",L)):r.loadbtn.classList.add("is-hidden"),u.refresh(),e.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:c,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}catch(e){console.log(e),n.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:c,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}finally{o.reset()}}async function m(a,o=1){return(await h.get(`${b}`,{params:{key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:o}})).data}async function L(){d+=1,r.loader.classList.add("loader");try{const a=await m(l,d);r.loader.classList.remove("loader"),g(a),u.refresh()}catch(a){console.log(a),n.error({message:"Error",messageColor:"#FAFAFB",messageLineHeight:"24px",messageSize:"16px",position:"topRight",iconUrl:c,backgroundColor:"#EF4040",maxWidth:"350px",timeout:!1})}}function g(a){const o=a.hits.map(e=>`<li class="gallery-item">
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
        </li>`).join("");r.list.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map
