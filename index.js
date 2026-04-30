import{a as l,S as u,i as c}from"./assets/vendor-9JG-xWWr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(n){return l.get(`https://pixabay.com/api/?key=55607491-fd459ee64175eeb9e585f94df&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>r.data)}function p({webformatURL:n,largeImageURL:r,tags:o,likes:i,views:e,comments:t,downloads:a}){return`  <li class="gallery-item">
  <a href="${r}">
        <img src="${n}"alt="${o}"></a>
        <div class="info">
          <div class=content>
            <p class="name">Likes</p>
            <p>${i}</p>
          </div class=content>
          <div class=content>
            <p class="name">Views</p>
            <p>${e}</p>
          </div>
          <div class=content>
            <p class="name">Comments</p>
            <p>${t}</p>
          </div>
          <div class=content>
            <p class="name">Downloads</p>
            <p>${a}</p>
          </div>
        </div>
      </li>`}function f(){new u(".gallery-item a",{captionsData:"alt",captionDelay:250}).refresh()}function m(){return s.loader.classList.add("is-active")}function g(){return s.loader.classList.remove("is-active")}function y(){return s.gallery.innerHTML=""}const s={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};s.form.addEventListener("submit",h);function h(n){n.preventDefault();let r=s.input.value.trim();if(!r){c.error({message:"input empty",position:"topRight"});return}m(),y(),d(r).then(o=>{if(o.total===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}console.log(o);const i=o.hits.map(e=>p(e)).join("");s.gallery.innerHTML=i,f()}).catch(o=>c.error({message:"Error loud render",position:"topRight"})).finally(()=>g())}
//# sourceMappingURL=index.js.map
