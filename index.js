import{a as l,S as u,i as c}from"./assets/vendor-9JG-xWWr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function d(o){return l.get(`https://pixabay.com/api/?key=55607491-fd459ee64175eeb9e585f94df&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>r.data)}const m=new u(".gallery-item a",{captionsData:"alt",captionDelay:250});function p({webformatURL:o,largeImageURL:r,tags:n,likes:s,views:e,comments:t,downloads:a}){return`  <li class="gallery-item">
  <a href="${r}">
        <img src="${o}"alt="${n}"></a>
        <div class="info">
          <div class=content>
            <p class="name">Likes</p>
            <p>${s}</p>
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
      </li>`}function f(o){return i.gallery.innerHTML=o}function g(){m.refresh()}function y(){return i.loader.classList.add("is-active")}function h(){return i.loader.classList.remove("is-active")}function v(){return i.gallery.innerHTML=""}const i={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.form.addEventListener("submit",L);function L(o){o.preventDefault();let r=i.input.value.trim();if(!r){c.error({message:"input empty",position:"topRight"});return}y(),v(),d(r).then(n=>{if(n.total===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}let e=n.hits.map(t=>p(t)).join("");f(e),g()}).catch(n=>c.error({message:"Error loud render",position:"topRight"})).finally(()=>h())}
//# sourceMappingURL=index.js.map
