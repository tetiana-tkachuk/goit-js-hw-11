import{a as i,S as f,i as c}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="34730863-c268bffb7a5a82490d4aafc58";i.defaults.baseURL="https://pixabay.com/api/";function g(a){return i.get("",{params:{key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits)}const d=document.querySelector(".gallery"),p=document.querySelector(".loader-wrapper"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250}),h=a=>{const t=a.map(s=>`<li class="gallery-item">
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
        </li>`).join("");d.insertAdjacentHTML("beforeend",t),y.refresh()},L=()=>{d.innerHTML=""},b=()=>{p.classList.add("is-visible")},w=()=>{p.classList.remove("is-visible")},o={createGallery:h,clearGallery:L,showLoader:b,hideLoader:w},u=document.querySelector(".form");u.addEventListener("submit",v);function v(a){a.preventDefault();const t=a.target.searchText.value.trim();o.clearGallery(),o.showLoader(),g(t).then(s=>{s.length===0&&(c.warning({message:"Sorry, there are no images matching<br>your search query. Please try again!",messageColor:"#ffffff",messageSize:"16",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",closeOnClick:!0}),o.hideLoader()),o.createGallery(s)}).catch(s=>{c.error({position:"topRight",message:"Sorry, something went wrong...Try later",messageColor:"black",messageSize:"18",backgroundColor:"yellow"}),o.hideLoader()}),u.reset()}
//# sourceMappingURL=index.js.map
