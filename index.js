import{a as c,S as l,i as d}from"./assets/vendor-9JG-xWWr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(s){return c.get(`https://pixabay.com/api/?key=55607491-fd459ee64175eeb9e585f94df&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>r)}function p({webformatURL:s,largeImageURL:r,tags:o,likes:i,views:e,comments:t,downloads:a}){return`  <li class="gallery-item">
  <a href="${r}">
        <img src="${s}"alt="${o}"></a>
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
      </li>`}const n={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},m=new l(".gallery-item a",{captionsData:"alt",captionDelay:250});n.form.addEventListener("submit",f);function f(s){s.preventDefault();let r=n.input.value.trim();n.loader.classList.add("is-active"),n.gallery.innerHTML="",u(r).then(({data:o})=>{if(o.total===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}n.gallery.innerHTML=o.hits.map(i=>p(i)).join(""),m.refresh()}).catch(o=>console.log(o)).finally(()=>n.loader.classList.remove("is-active"))}
//# sourceMappingURL=index.js.map
