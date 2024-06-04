(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const g of r.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function c(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=c(n);fetch(n.href,r)}})();const k=async()=>{try{const e=await fetch("https://api.tech.redventures.com.br/broths",{method:"GET",headers:{"Content-Type":"application/json","x-api-key":"ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf"}});if(!e.ok)throw new Error("API response was not ok");return await e.json()}catch(e){console.error("There was a problem with the fetch operation:",e)}},D=async()=>{try{const e=await fetch("https://api.tech.redventures.com.br/proteins",{method:"GET",headers:{"Content-Type":"application/json","x-api-key":"ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf"}});if(!e.ok)throw new Error("API response was not ok");return await e.json()}catch(e){console.error("There was a problem with the fetch operation:",e)}},R=async e=>{try{const t=await fetch("https://api.tech.redventures.com.br/orders",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":"ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf"},body:JSON.stringify(e)});if(!t.ok)throw new Error("Network response was not ok");return await t.json()}catch(t){console.error("There was a problem with the fetch operation:",t)}},I=e=>{const{name:t,description:c,imageInactive:s,price:n}=e,r=document.createElement("article");return r.classList.add("cardProduct"),r.innerHTML=`
        <figure>
            <img id="imageProduct" src="${s}" alt="${t}">
        </figure>
        <section>
            <h2 class="nameProduct">${t}</h2>
            <p class="descriptionProduct">${c}</p>
            <p class="priceProduct">US$ ${n}</p>
        </section>
    `,r},X="data:image/webp;base64,UklGRiwCAABXRUJQVlA4TCACAAAvfMADENeAoG3bOOPP6cxeGvOPoG3bePvP4/xJxiDbSHcEX8T3l7hA3g94CGEROAZfjWMzSmIwCjHG1DjIPoEsSbbbtjq8hEBIpANkXt+h9r9TBL/4H9H/CdC/Or2O4yhJ/+W10vfbRP50OD+vwaPWWv5NF5Ox9KwydOu8A/s/KdH9DoCeOZNuzQ6Ul/vdHuHN+jiDqNfgdD9SDeolewRx2GC5n3Ae1nP3Y62BH9ZzIMoire/fm7oO8MyvdwBfJBVgA3CgcfpHj8mH0/rSMafraweIoPWluQFcms8AWZIywCYpA7embWJA+dG4NOZABBDLYFyaHXjqhxU41C1AHaTOkdfGSrK1AHUi9vfOszjgzQY8Fm1AmdiLA95UYB/Y0gkg9RIQkhKwNg/NmgXERJI+gC/JAJqzMcuAjy4pAfzoDrcGwHoGIMkAa9Ig1aA/CkkFKJJ8wPRIkkbvQO0FfDQBpF4CYqDGencmR/67fBBzG4B1gGdTgdJ7A56SlHOec/C0yH/bCZhmAZ9bAnCb2wCu5gK4mpRtDjgl47cVwJOl++tXqdB+lkcdLQ5wvHIFcEnKwC2ApefA5xG/b3GG269SbYYdmTPp1lTguHls6me6MQo4JWXgklTBG5kPrk7A2ZzgPZUJTx2Zj56mdgd2TecKcVmtWyd7rJK085Sk1ePWkXIN4nmpmz3WZvW4DWTvXxBfe9Jk/vyC78+k/vL+/VwA",N="/assets/illustration-29bADv1F.webp",j="data:image/webp;base64,UklGRu4CAABXRUJQVlA4TOECAAAvKYAzEM+AoG3bOOPP6cxeGvOPoG3bePvP4/xJxiDbSHcEV8T3l/hA3g94CGEROB6+GmMzSuJhNMaYGoPsEdCybStuGF0eCKHGjpoXrjz/oVo8QEn19RHR/wnAd0hdB1hndl4Ngd19aegXSvG35B+Es9cJo1vWrslZ/iSHbX/g9eX5zAnA+yH5t6QPOgCkh/wA4PQZCd9DbL8Zwk1PNbhekeUDnUUNVyd30ih93Enjiq5BaZUebqY5oX3YaFe0df6zZVaqVMknrZuyYRbU+szG6lG9s/EpqN/a5ISWS5ND0DTW5cWjsa/IR3Ro/y7lLQWHvnHf1hS9w7/xp0ySeXrAyGLqt5eOfvq/OueDUmnshyV/5YT/QLrPxz9kyCS5z/IA5X2WbpHlpdtuSL08jb4irLNUvAwK+4dkHk1C42XzvF2d4WURk+gdVQpC4wqz0jjevSzBFGheHYBI4wmz2KgCqOWyIdmYx4lGRe2YTZVXFURbHWjolkbSAhhzixWNRetUWsG9qy50TBVZeojamEM7UVaPrUTZcGrjlU3nFkNm41OqJrZXsbmNdt1MVG8JSrsKkol5KM2sVAGQTKS/CScrVfA9ZNMIwM2sPRzuRS0XAGXtAqNoSR0QWDvCLOedCurUo9JtNx7fu2lzqF9IRtxKLuURTUN0KI6FQ9B/+dIBT3RL/pkc/n3v5DGfTL2eEfmt1xP0htRJekUadZI+aiG5Sk1Y50HuBtbmyxb5rfNXrGK2nTfkDMBpFU3CYgYAWbTiMMUKQKKavGkv/bgDELW0wiosXwYg6p2YXgYxAVFJJpi1dKI6pgBzZHmpqxU1SK+Z5QOdhcark6hB0Xmj8eo006joO9N6dXE7rSt6BqVVpYObaQ9o7qZMe0Lr8MqsTGjqwpxZ/Ua9xHnPbLig0k1nZuOE2hdb54Bqtt4c6nMbDWh5ttALbd91x4DWY8XP5NE+GPLx8eibSOZjiR4PdOLwQAA=",y="data:image/webp;base64,UklGRo4AAABXRUJQVlA4TIIAAAAvE8ADEHdAIAgR/z95Zsf8G0jbptt/H/dvsgbZRjqD75sc0vtLfED2AQ4UgeLPjQ4iRSB6cFTbttNc+oyFhL+YYgErbd4FVGNIYNbLi4OoyL/RENH/CcCv6kAD8QjWL8vFJ9hjNi2WCvV39Aid/wG9ItIuJjli6FuxySeBXolLggIA",G="data:image/webp;base64,UklGRngAAABXRUJQVlA4TGsAAAAvE8ADEHcw//M//wbZRo7dEVxN/gM5ABwKGAoY4AHAKJJsJ0vm+CX84vwtYAEpFAaSgKgMCZxyeib4i4aI/k8AvroEVRIRrBlrxCc4UjbOnk7st3mETn9AL0OK2SV7CnshAVly2LXERLUAAAA=",q=async()=>{const e=document.createElement("div");sessionStorage.clear("orderResponse"),e.innerHTML=`
    <div>
      <header id="mainBackground">
        <figure id="mainLogo">
          <img id="ramengoLogo" src="${X}" alt="Ramengo Logo">
        </figure>

        <section id="container">
          <article id="main">
            <div class="mainTitle">
              <img id="asianLettersImage" src="${j}" alt="Asian Letters">
              <h1 id="title">GO!</h1>
            </div>

            <p id='subtitle'>
              Enjoy a good ramen in the comfort of your house. Create your own ramen and choose your favorite flavour combination!
            </p>
                    
            <button class='orderBtn'>
              <span id='textOrderBtn'>ORDER NOW</span>
              <img id="arrowImage" src="${y}" alt="Arrow">
            </button>
          </article>
        </section>
            
        <img id="illustrationImage" src="${N}" alt="Illustration">
        <h1 id="subtitleAsianMobile">ラーメン</h1>
        <h2 id="titleMobile">GO!</h2>
        <p id='subtitleMobile'>
          Enjoy a good ramen in the comfort of your house. Create your own ramen and choose your favorite flavour combination!
        </p>
      </header>

      <section id="mainOrder1">
        <h2 id="subtitleOrder">First things first: select your favorite broth.</h2>
        <p id="paragraphOrder">It will give the whole flavor on your ramen soup.</p>

        <div id="mainBroths"></div>
      </section>

      <div id="radios1">
        <input type="radio" id="broth1" checked=true class="radio_broth" name="broth">
        <input type="radio" id="broth2" class="radio_broth" name="broth">
        <input type="radio" id="broth3" class="radio_broth" name="broth">
      </div>

      <section id="mainOrder2">
        <h2 id="subtitleOrder">It’s time to choose (or not) your meat!</h2>
        <p id="paragraphOrder">Some people love, some don’t. We have options for all tastes.</p>

        <div id="mainProteins"></div>
      </section>

      <div id="radios2">
        <input type="radio" id="protein1" checked=true class="radio_protein" name="protein">
        <input type="radio" id="protein2" class="radio_protein" name="protein">
        <input type="radio" id="protein3" class="radio_protein" name="protein">
      </div>

      <footer id="mainPlaceOrdrBtn">
        <button class='placeOrderBtn'>
          <span id='textOrderBtn'>PLACE MY ORDER</span>
          <img id="arrowImage" src="${G}" alt="Arrow">
        </button>
      </footer>
    </div>
`,e.querySelector(".orderBtn").addEventListener("click",()=>{window.scrollBy({top:768,behavior:"smooth"})});const c=[];let s=null;const n=[];let r=null;const g=await k(),h=e.querySelector("#mainBroths");g==null||g.map(i=>{const o=I(i);o.addEventListener("click",()=>v(o,c,"broth")),o.id=i.id,c.push(o),h.appendChild(o)});const A=await D(),w=e.querySelector("#mainProteins");A==null||A.map(i=>{const o=I(i);o.addEventListener("click",()=>v(o,n,"protein")),o.id=i.id,n.push(o),w.appendChild(o)});const v=(i,o,p)=>{const f=(a,d)=>a==="broth"?g.find(l=>l.id===d):A.find(l=>l.id===d),m=(a,d)=>{const l=d?"add":"remove",b=d?"remove":"add";a.classList[b]("cardProduct"),a.classList[l]("cardProduct_selected");const u=a.children[1].children;u[0].classList[b]("nameProduct"),u[0].classList[l]("nameProduct_selected"),u[1].classList[b]("descriptionProduct"),u[1].classList[l]("descriptionProduct_selected"),u[2].classList[b]("priceProduct"),u[2].classList[l]("priceProduct_selected")},P=(a,d)=>{const l=f(d,a.id);a.querySelector("img").src=l.imageInactive},S=a=>{const d=e.querySelector(".placeOrderBtn")||e.querySelector(".placeOrderBtn_activated");d.classList.toggle("placeOrderBtn",!a),d.classList.toggle("placeOrderBtn_activated",a),d.querySelector("img").src=a?y:G},B=f(p,i.id);p==="broth"?s=B:r=B,i.classList.contains("cardProduct")?(o.forEach(a=>{m(a,!1),P(a,p)}),i.querySelector("img").src=B.imageActive,m(i,!0)):(p==="broth"?s=!1:r=!1,i.querySelector("img").src=B.imageInactive,m(i,!1)),S(r&&s)};e.querySelector(".placeOrderBtn").addEventListener("click",async()=>{if(r&&s){const i={brothId:s.id,proteinId:r.id},o=await R(i);sessionStorage.setItem("orderResponse",JSON.stringify(o)),window.location.href="/checkout"}});const O=(i,o)=>{i.forEach((p,f)=>{p.addEventListener("click",()=>{const m=f*288;o.scrollLeft=m})})},L=e.querySelectorAll(".radio_broth");O(L,h);const E=e.querySelectorAll(".radio_protein");O(E,w);const C=(i,o)=>{const p=i.scrollLeft;p<216?o[0].checked=!0:p<432?o[1].checked=!0:o[2].checked=!0};return h.addEventListener("scroll",()=>{C(h,L)}),w.addEventListener("scroll",()=>{C(w,E)}),e},x="data:image/webp;base64,UklGRngCAABXRUJQVlA4TGwCAAAvfMADEDehoG0byXvwjT+Zu9KYfwVt2zDuxmz8KR0EbdsmYzAGx3IEp3xIKYIGuFNYEEQCsCDSBsgDCWEgD4qgIZADW7rwk7VACGHxnlwsdQoiHxKsba8S53tjepEaOwhiKYY/ztDuf4/5w1wXENH/CdAXXcYtwJZW7S3rtOSipplZ+aJG2pfWegrUybxfQPqazuw1b2bn6DwDT2XNUllXz5YpW8vMisqyWJWnvMumJbfMrKgsS26NAOHn0EcIxRnZfa16YIhwnAOhmgP10TxguwCkMgcgLo3cAcS/HvBjDkBcHAOIJkm3tKo2gJhLuUUgFEkDMNGsaMbSam742Rlpjq1msGqqTPvPQDRJsggMkibg3vhedYRv3wCeXtVOlQEhnSKQX0OqnoEXvXIDHnKvQJS0ALmKWf4qaQHiju5+P1RD7oFYnYGrtAIvrXjPJyBUHTB4Zf7rAKyeAUjKgFUPNcsyTdMB2GFSDySpAFQHYBuGMxBaq1QAql/Ak3eCoWWvMaBU2Ssn2q0gaQAGSbHB7pYktXrg6AE/qgjcvQWIDVXmnYHQdYdd8U0OEJJ/bcR9GeDximfg6HVAkiQz23eAKCm+Wwdk7X2dIsC1SNbKABeTygUgSyrjcdwHBNPMu2WANPyP0d4qVxADLf0GCMctACRJugBDB7F4HUDgdddX6TfN6ysOLf1xfK/8Y+fPUnXAi/VplW8RID5DdDpIkjKQJXWwORq8YE4HP6oONk/WNcJQHGmIXrjK/QM8tNtuKfWm22CO9X2RpFt6SJL1vXmyW0ppLnKt762yvreGtM4ppTlr971PqZ+KmrdhEQ==",H="data:image/webp;base64,UklGRj4FAABXRUJQVlA4TDEFAAAvQcAREAfluLZtJ9nvfZBgmDmn/z7sxBYkm5tw20aSI/GUeT2X5Oe/wv9xEEmSIlU/w6F/H++KGaccRLIdJvsdfAeJg1YCOMEpgxOiIK8KUgcwfMf2MB1MJ3HS/tyay8mE0lwlD6hR9npBF3+PekNXX31u0N1KyV3mLsCBN4TI3KGAzJ0j/kLmAQVkHpAjyntX6q7UHSp5gAS8kTcqEHLeCFbKgSAI8UZBEBx44LzxQEIO9Aur8geBQCA1dkBg1RwouVp6YjSUSFDFbpUX/p2ajfLmaglGQEMHfyEapVEa5YnVKonRKBASDOSNCmwME28UFRIIScrBxoZ+8UdCwjeQaY17nA1iXA2Ncbc03mfe02i+WuNuaYyrQWiNu0VojKtBODDOhsa4WuffTqm7IXt93dwy+7xRL3mB2gBAqhrnXb0T4UUg5+5CJ427Gwfn7kZos5y74c1Rjrh7fitv3+zspv0e0X8HjiQ5TTdhzRH2Ahi+YGnaX1NTjb3WltqEBRvNE+qqH3TTWYBYtNX3GyJQg9jgZtDhrEwQEVuDJuhDx5C7HQrU0BnVhAzQLREgC1rpvkATq1CLQwdZkSEX0txnpqCdbDErQLRXoEC1PBsqDBJTiBoO1YW+NDgFGMlsYk3QMujZAKtjhkLW/9Bk7MvLZ08LPn/5Kb4lxJ5HBenTVwnTfH0qGJoNEs8F08/m+BQVbJ8mDPFZ6BiNGeGL0PSjqVgvjOsfIdxu2QGJaCqjPz3X5JmoKEnpT++1+CBEDrwuKqYIUqp9kjo8FULMgZzxN4BxF99g1l2FnCj4TucelJKrgLxDDgDyrnwB7IxEDux8RkQ1eC1ll7aljMdgzAZXoRegRGqIlA0AC7l/+USFexp3+J62YSHjMA0TNthZaVWyBAC//frLj9zfxDQlcpAXqTmw8wWyMC1mALxZqXtSucXfAeBnDu8FMXnBzsK8cxpbCkq8hWQWAez8aIXTpEnrh5+2cXgjKGcAwJYqMQNgL1RASjiBDWADzAr2LaV4GqVtgKycwZhNDYecswG8H/g3gsKxJeLGGp1cyAgqidmJ9/xxbNB3/wHYi+cm4W5OkItUNptx4GfyLMEiHqWyXAQAmBVCJ5NoXLPcLpnJjM7Bgl4mTzlrQTAlD8AJ50zpCWUmhHEtvK4qVniFGIOMIhMtrCjjSZgbk1BkovXD+iA4Shj8vwrejhhjRIjh64Oc16UaxKs3w2a4c+sqIvaoX/2r0fHqiAkiKNulYABd3jFA5BK6bA6RMRI+4PBPiuYaErZRRyDpIyVeL3wnuSXlqCwM1hTgh2OV9gx5dnImP1iaUOVdwTdyFVVUB+XvELWXIlwenkO1DQ41yPEWKwhfQ5YBec0Lwqrx/0COeKsmZHvp5oOwc9qRyOM711DDYAi33N4A4tHdHo+n3HfghElO7atycq06gtjai8ehqGr3bl8ZgGfnGTOcOVAM4HFyLYKDWN+N/tMo6T9cBWAiOLMDwHfIj5LH/FjTrchqu37g3wNF++nMJJSB56AOB4thl7Jm9X2M1vGBh73xVDn4TqLSxiAyPFwK+/7gHnUYGXZYf7I6aS94TjC2emCvn3k7dSPLlcmx1Ws019bGppeRZY1lhTirc/K9GLlFRPIN/uQ8h3XnM5zBMPEYUT7rwqxyxw1leEsQDl9EvDhMPluVtLsfr5sKwoKcEOlH1GPVEU6pOxhoqat1e/ne34Lwyg1B8Nf9C7WEdZ0B3e/st8+jEgn5ZSL64u3XpGXeRCwWS8pn0voiswAA",M=async()=>{const e=document.createElement("div"),t=JSON.parse(sessionStorage.getItem("orderResponse"));return t||(window.location.href="/"),e.innerHTML=`
    <div id="mainCheckout">
        <header id="ramengoLogo_red">
            <img id="ramengoLogo" src="${x}" alt="Ramengo Logo">
        </header>

        <main>
            <section id="sectionProductCheckout">
                <img id="imageOrder" src="${t.image}" alt="Ordered Item">
                <h2 id="titleOrder_text">Your Order:</h2>
                <p id="nameOrder_text">${t.description}</p>
            </section>

            <section id="sectionMessageCheckout">
                <img id="bowingImage" src="${H}" alt="Bowing Image">
                <p id="asianSubtitile_text">どもありがとうございます。</p>
                <p id="orderPrepared_text">Your order is being prepared</p>
                <p id="holdOn_text">Hold on, when you least expect you will be eating your rámen.</p>

                <button class='placeNewOrderBtn'>
                    <span id="textOrderBtn">PLACE NEW ORDER</span>
                    <img id="arrowImage" src="${y}" alt="Arrow Image">
                </button>
            </section>
        </main>
    </div>
  `,e.querySelector(".placeNewOrderBtn").addEventListener("click",()=>{window.location.href="/"}),e},T={"/":q,"/checkout":M},U=async()=>{const e=document.getElementById("app"),t=window.location.pathname,c=T[t];if(e.innerHTML="",c){const s=await c();e.appendChild(s)}else console.error("No route found for path:",t)},W=()=>(U(),document.createElement("div"));document.addEventListener("DOMContentLoaded",()=>{document.getElementById("app").appendChild(W())});
