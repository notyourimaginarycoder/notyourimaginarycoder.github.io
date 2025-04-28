(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();document.getElementById("app").innerHTML=`
  <button id="contact-btn">Show Contact Info</button>
  <div id="contact-info" style="display:none;">
    <p>GitHub: <a href="https://github.com/notyourimaginarycoder">imaginary friend</a></p>
  </div>

  test
`;const r=document.getElementById("contact-btn"),i=document.getElementById("contact-info");r.addEventListener("click",()=>{i.style.display==="none"?(i.style.display="block",r.textContent="Hide Contact Info"):(i.style.display="none",r.textContent="Show Contact Info")});
