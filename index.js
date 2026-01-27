import{a as c,S as u,i as f}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="34730863-c268bffb7a5a82490d4aafc58";c.defaults.baseURL="https://pixabay.com/api/";function g(a){return c.get("",{params:{key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits)}const i=document.querySelector(".gallery"),d=document.querySelector(".loader-wrapper"),y=new u(".gallery a",{captionsData:"alt",captionDelay:250}),h=a=>{const t=a.map(s=>`<li class="gallery-item">
          <a href=${s.largeImageURL} class="gallery-link">
            <img
              src=${s.webformatURL}
              alt=${s.tags}
              class="gallery-img"
              loading="lazy"
            />
          </a>  
          <div class="img-descr-wrapper">
            <p class="img-descr">
              <span class="descr-title">Likes</span>
              <span class="descr-text">${s.likes}</span>
            </p>
            <p class="img-descr">
              <span class="descr-title">Views</span>
              <span class="descr-text">${s.views}</span>
            </p>
            <p class="img-descr">
              <span class="descr-title">Comments</span>
              <span class="descr-text">${s.comments}</span>
            </p>
            <p class="img-descr">
              <span class="descr-title">Downloads</span>
              <span class="descr-text">${s.downloads}</span>
            </p>
          </div>
        </li>`).join("");i.insertAdjacentHTML("beforeend",t),y.refresh()},L=()=>{i.innerHTML=""},b=()=>{d.classList.add("is-visible")},w=()=>{d.classList.remove("is-visible")},o={createGallery:h,clearGallery:L,showLoader:b,hideLoader:w},p=document.querySelector(".form");p.addEventListener("submit",v);function v(a){a.preventDefault();const t=a.target.searchText.value.trim();o.clearGallery(),o.showLoader(),g(t).then(s=>{s.length===0&&f.warning({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",closeOnClick:!0}),o.createGallery(s)}).catch(s=>console.log(s)),o.hideLoader(),p.reset()}
//# sourceMappingURL=index.js.map
