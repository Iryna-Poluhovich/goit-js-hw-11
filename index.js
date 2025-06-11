import{a as d,S as f,i}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",m="50805377-c760a6bd689a5892724b0890e";async function y(s){return(await d.get(p,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const n=document.querySelector(".gallery"),h=new f(".gallery a");function g(s){const o=s.map(t=>`
    <li class="photo-card">
      <a href="${t.largeImageURL}">
        <div class="thumb">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        </div>
        <div class="info">
          <p><b>Likes</b> ${t.likes}</p>
          <p><b>Views</b> ${t.views}</p>
          <p><b>Comments</b> ${t.comments}</p>
          <p><b>Downloads</b> ${t.downloads}</p>
        </div>
      </a>
    </li>`).join("");n.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){n.innerHTML=""}function L(){n.classList.add("loading")}function l(){n.classList.remove("loading")}const u=document.querySelector(".form"),v=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async s=>{s.preventDefault();const o=v.value.trim();if(!o){i.warning({title:"Увага",message:"Поле пошуку не може бути порожнім."});return}b(),L();try{const t=await y(o);if(l(),t.length===0){i.info({title:"Увага",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(t)}catch(t){l(),console.error(t),i.error({title:"Помилка",message:"Щось пішло не так. Спробуйте знову пізніше."})}});
//# sourceMappingURL=index.js.map
