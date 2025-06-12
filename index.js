import{a as u,S as f,i}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",m="50805377-c760a6bd689a5892724b0890e";async function y(s){return(await u.get(p,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const a=document.querySelector(".gallery"),g=new f(".gallery a");function h(s){const o=s.map(t=>`
    <li class="photo-card">
      <a href="${t.largeImageURL}">
        <div class="gallery-image">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        </div>
        <div class="info">
          <p class="info-card"><b>Likes</b> ${t.likes}</p>
          <p class="info-card"><b>Views</b> ${t.views}</p>
          <p class="info-card"><b>Comments</b> ${t.comments}</p>
          <p class="info-card"><b>Downloads</b> ${t.downloads}</p>
        </div>
      </a>
    </li>`).join("");a.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){a.innerHTML=""}function L(){a.classList.add("loading")}function l(){a.classList.remove("loading")}const d=document.querySelector(".form"),v=d.querySelector('input[name="search-text"]');d.addEventListener("submit",async s=>{s.preventDefault();const o=v.value.trim();if(!o){i.warning({title:"Увага",message:"Поле пошуку не може бути порожнім."});return}b(),L();try{const t=await y(o);if(l(),t.length===0){i.info({title:"Увага",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(t)}catch(t){l(),console.error(t),i.error({title:"Помилка",message:"Щось пішло не так. Спробуйте знову пізніше."})}});
//# sourceMappingURL=index.js.map
