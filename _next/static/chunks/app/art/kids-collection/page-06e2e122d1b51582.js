(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[595],{6816:(e,s,t)=>{Promise.resolve().then(t.bind(t,9622))},9622:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var a=t(5155),i=t(2115),l=t(6874),r=t.n(l),d=t(1783);function c(e){let{currentProduct:s,allProducts:t,onProductSelect:l}=e,[r,d]=(0,i.useState)([]),[c,n]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{if(!s||!t)return;let e=[];if("T-shirt"===s.type){e=t.filter(e=>("Tote Bag"===e.type||"Stickers"===e.type)&&e.id!==s.id).slice(0,2);let a=t.find(e=>"Bundle"===e.type);a&&e.push(a)}else if("Bundle"===s.type)e=t.filter(e=>"Bundle"!==e.type&&!["Tote Bag","Stationery","Stickers"].includes(e.type)).slice(0,3);else{let a=t.find(e=>"T-shirt"===e.type),i=t.find(e=>"Bundle"===e.type);a&&e.push(a),i&&e.push(i);let l=t.find(e=>"Bundle"!==e.type&&"T-shirt"!==e.type&&e.id!==s.id);l&&e.push(l)}d(e.slice(0,3));let a=setTimeout(()=>{n(!0)},3e3);return()=>clearTimeout(a)},[s,t]),s&&0!==r.length)?(0,a.jsxs)("div",{className:"mt-8 pt-6 border-t border-white border-opacity-30",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,a.jsx)("h3",{className:"font-bold text-lg",children:"Complete the Look"}),c&&(0,a.jsxs)("div",{className:"bg-kids-orange text-white text-xs py-1 px-3 rounded-full pulse-animation",children:[(0,a.jsx)("span",{className:"mr-1",children:"\uD83D\uDD25"})," Limited time offer - Buy 2, Get 10% Off!"]})]}),(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4",children:r.map(e=>(0,a.jsxs)("div",{className:"bg-white bg-opacity-20 rounded-lg p-3 cursor-pointer hover:bg-opacity-30 transition-all flex flex-col",onClick:()=>l(e),children:[(0,a.jsxs)("div",{className:"flex items-center mb-2",children:[(0,a.jsx)("div",{className:"w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-2",children:(0,a.jsx)("span",{className:"text-lg",children:"T-shirt"===e.type?"\uD83D\uDC55":"Tote Bag"===e.type?"\uD83D\uDC5C":"Stationery"===e.type?"\uD83D\uDCD3":"Stickers"===e.type?"\uD83C\uDFF7️":"Accessories"===e.type?"\uD83C\uDFAD":"\uD83C\uDF81"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-semibold text-sm",children:e.name}),(0,a.jsxs)("p",{className:"text-xs",children:["₹",e.price]})]})]}),(0,a.jsxs)("div",{className:"mt-auto",children:["T-shirt"===e.type&&(0,a.jsxs)("div",{className:"text-xs flex items-center",children:[(0,a.jsx)("span",{className:"mr-1",children:"\uD83D\uDC67\uD83D\uDC66"})," Popular with kids ages 5-8"]}),"Bundle"===e.type&&(0,a.jsxs)("div",{className:"text-xs flex items-center",children:[(0,a.jsx)("span",{className:"mr-1",children:"\uD83D\uDCB0"})," Best value - Save ₹150"]}),"Tote Bag"===e.type&&(0,a.jsxs)("div",{className:"text-xs flex items-center",children:[(0,a.jsx)("span",{className:"mr-1",children:"\uD83D\uDC69‍\uD83D\uDC66"})," Parent favorite"]}),("Stickers"===e.type||"Accessories"===e.type)&&(0,a.jsxs)("div",{className:"text-xs flex items-center",children:[(0,a.jsx)("span",{className:"mr-1",children:"\uD83C\uDF81"})," Perfect add-on gift"]})]}),(0,a.jsx)("button",{className:"mt-2 w-full bg-kids-purple bg-opacity-70 hover:bg-opacity-100 text-white py-1 rounded text-xs transition-all",children:"Add to Cart"})]},e.id))}),(0,a.jsxs)("div",{className:"bg-white bg-opacity-10 p-3 rounded-lg flex items-start text-sm",children:[(0,a.jsx)("div",{className:"flex-shrink-0 w-8 h-8 bg-kids-blue rounded-full flex items-center justify-center mr-3 mt-1",children:(0,a.jsx)("span",{children:"\uD83D\uDCA1"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-semibold mb-1",children:"Stylist Recommendation"}),(0,a.jsxs)("p",{children:["Items that match the ",s.name," are perfect for school, creative play and everyday adventures. Plus, get a ",(0,a.jsx)("span",{className:"font-semibold",children:"free coloring sheet"})," when you purchase any two items!"]})]})]})]}):null}function n(e){let{productId:s,marketplaceInfo:t}=e,[l,r]=(0,i.useState)(!1);if(!t||!t[s])return null;let{amazonId:d,flipkartId:c}=t[s],n=e=>{console.log("Marketplace click: ".concat(e," for product ").concat(s)),window.dataLayer&&window.dataLayer.push({event:"marketplace_click",marketplace:e,product_id:s})};return(0,a.jsxs)("div",{className:"mt-6",children:[(0,a.jsxs)("button",{onClick:()=>r(!l),className:"flex items-center justify-between w-full bg-white bg-opacity-10 p-3 rounded-lg text-sm hover:bg-opacity-20 transition-all",children:[(0,a.jsxs)("span",{className:"flex items-center",children:[(0,a.jsx)("span",{className:"mr-2",children:"\uD83D\uDECD️"}),"Also available on marketplaces"]}),(0,a.jsx)("span",{children:l?"−":"+"})]}),l&&(0,a.jsxs)("div",{className:"mt-3 grid grid-cols-2 gap-3",children:[(0,a.jsxs)("a",{href:"https://www.amazon.in/dp/".concat(d),target:"_blank",rel:"noopener noreferrer",onClick:()=>n("amazon"),className:"flex items-center justify-center bg-[#232F3E] text-white p-3 rounded-lg hover:opacity-90 transition-all",children:[(0,a.jsx)("span",{className:"mr-2",children:(0,a.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:[(0,a.jsx)("path",{d:"M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.886-1.301 1.429-2.186 1.429-1.214 0-1.922-.927-1.922-2.321 0-2.726 2.442-3.223 4.699-3.223v.764zm3.186 7.705c-.26.238-.634.403-1.058.403-.441 0-.861-.166-1.226-.591-1.121-1.265-1.301-3.708-1.301-5.649v-.957c0-3.56.591-5.649 3.707-5.649 1.504 0 2.649.927 2.649 3.223v2.729h-2.649v-.403c0-1.18.148-2.255-1.429-2.255-1.504 0-1.504 1.798-1.504 2.858v2.107c0 1.121-.148 2.017.475 2.858.261.339.634.593 1.058.593.441 0 .841-.166 1.121-.441l.157-.166z"}),(0,a.jsx)("path",{d:"M21.678 21.614c-8.148 3.783-15.511.976-19.543-2.799-.383-.37-.043-.889.408-.622 5.036 2.914 11.355 3.554 17.711.89.792-.328 1.468.517.663 1.104-.74.536-1.572.987-2.224 1.427h-.005z"}),(0,a.jsx)("path",{d:"M22.789 19.894c-.236-.295-.909-.267-1.394-.134-.483.134-1.188.392-1.295.826-.129.516.39.546.736.396.346-.152 1.02-.5 1.339-.671.319-.172.85-.053.614.241-.236.295-.909.267-1.339.098-.43-.17-.736-.223-.898-.152-.162.071-.218.241-.56.384 0 0 .005-.005.005-.005.547.241 1.027.152 1.339-.044.313-.197.683-.558.451-.938z"})]})}),"Buy on Amazon"]}),(0,a.jsxs)("a",{href:"https://www.flipkart.com/p/".concat(c),target:"_blank",rel:"noopener noreferrer",onClick:()=>n("flipkart"),className:"flex items-center justify-center bg-[#2874F0] text-white p-3 rounded-lg hover:opacity-90 transition-all",children:[(0,a.jsx)("span",{className:"mr-2",children:(0,a.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:[(0,a.jsx)("path",{d:"M9.82 2.24v9.88c0 .45-.37.82-.82.82s-.82-.37-.82-.82V2.24c0-.45.37-.82.82-.82s.82.37.82.82z"}),(0,a.jsx)("path",{d:"M6.82 7.22H4c-.45 0-.82-.37-.82-.82s.37-.82.82-.82h2.82c.45 0 .82.37.82.82s-.37.82-.82.82z"}),(0,a.jsx)("path",{d:"M15 22c-1.3 0-3.63-.68-3.63-3.38V2.24c0-.45.37-.82.82-.82s.82.37.82.82v16.38c0 1.26.72 1.74 2 1.74 1.61 0 1.9-1.74 1.9-1.74v-8c0-.45.37-.82.82-.82s.82.37.82.82v8C18.55 20.77 16.73 22 15 22z"}),(0,a.jsx)("path",{d:"M19.18 9.41h-3.25c-.45 0-.82-.37-.82-.82s.37-.82.82-.82h3.25c.45 0 .82.37.82.82s-.37.82-.82.82z"})]})}),"Buy on Flipkart"]})]})]})}function o(){var e,s;let[t,l]=(0,i.useState)("6-7y"),[o,m]=(0,i.useState)(null),[h,x]=(0,i.useState)(!1),[p,g]=(0,i.useState)(!1),u=[{id:"tshirt-red-watch",name:"Red Watch T-shirt",description:"Bright red t-shirt featuring Adyant's colorful red watch design",price:499,type:"T-shirt",image:"/images/adyant-watches-drawing.jpg",colors:["Red","White","Blue"]},{id:"tshirt-blue-watch",name:"Blue Watch T-shirt",description:"Cool blue t-shirt with Adyant's blue and green watch design",price:499,type:"T-shirt",image:"/images/adyant-watches-drawing.jpg",colors:["Blue","White","Grey"]},{id:"tshirt-all-watches",name:"All Watches T-shirt",description:"Fun t-shirt featuring all of Adyant's colorful watch designs",price:599,type:"T-shirt",image:"/images/adyant-watches-drawing.jpg",colors:["White","Yellow","Light Blue"]},{id:"tote-watches",name:"Watches Tote Bag",description:"Sturdy canvas tote bag with Adyant's watch designs, perfect for school or activities",price:399,type:"Tote Bag",image:"/images/adyant-watches-drawing.jpg",colors:["Natural","Black"]},{id:"notebook-watches",name:"Watches Sketchbook",description:"A5 sketchbook with high-quality paper, featuring watch designs on the cover",price:249,type:"Stationery",image:"/images/adyant-watches-drawing.jpg",colors:["Multi"]},{id:"sticker-pack",name:"Watch Sticker Pack",description:"Set of 5 vinyl stickers featuring each individual watch design",price:149,type:"Stickers",image:"/images/adyant-watches-drawing.jpg",colors:["Multi"]},{id:"temp-tattoos",name:"Watch Temporary Tattoos",description:"Fun temporary tattoos of Adyant's watch designs, safe for kids",price:99,type:"Accessories",image:"/images/adyant-watches-drawing.jpg",colors:["Multi"]},{id:"bundle-creative",name:"Creative Kit Bundle",description:"Special bundle with t-shirt, sketchbook and colored pencils",price:899,type:"Bundle",image:"/images/adyant-watches-drawing.jpg",colors:["Multi"],savings:"Save ₹150!"},{id:"bundle-school",name:"School Pack Bundle",description:"Perfect for school: t-shirt, tote bag and stickers",price:899,type:"Bundle",colors:["Multi"],image:"/images/adyant-watches-drawing.jpg",savings:"Save ₹150!"}],y=()=>{x(!0),setTimeout(()=>{x(!1),m(null)},3e3)},[j,f]=(0,i.useState)("all"),b="all"===j?u:"tshirt"===j?u.filter(e=>"T-shirt"===e.type):"accessories"===j?u.filter(e=>["Tote Bag","Stationery","Stickers","Accessories"].includes(e.type)):u.filter(e=>"Bundle"===e.type),v={"tshirt-red-watch":{amazonId:"B0XXXX1234",flipkartId:"FLPKRT1234",keywords:"kids t-shirt, red shirt, watch design, colorful tshirt for kids"},"tshirt-blue-watch":{amazonId:"B0XXXX2345",flipkartId:"FLPKRT2345",keywords:"kids t-shirt, blue shirt, watch design, colorful tshirt for kids"},"bundle-creative":{amazonId:"B0XXXX8765",flipkartId:"FLPKRT8765",keywords:"kids art bundle, creative kit, tshirt and sketchbook, art supplies for kids"}},w=e=>{if(console.log("Product viewed: ".concat(e)),window.dataLayer){var s,t;window.dataLayer.push({event:"product_view",product_id:e,marketplace_amazon_id:(null===(s=v[e])||void 0===s?void 0:s.amazonId)||"",marketplace_flipkart_id:(null===(t=v[e])||void 0===t?void 0:t.flipkartId)||""})}};return(0,i.useEffect)(()=>{o&&w(o.id)},[o]),(0,a.jsxs)("div",{className:"min-h-screen",children:[(0,a.jsx)(d.A,{}),(0,a.jsxs)("div",{className:"container py-6 md:py-8 px-4",children:[(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsx)(r(),{href:"/art",className:"text-sm bg-white py-1 px-3 rounded-md hover:bg-gray-50 inline-flex items-center",children:(0,a.jsx)("span",{children:"← Back to Art Gallery"})})}),(0,a.jsxs)("div",{className:"section bg-highlight mb-8",children:[(0,a.jsx)("div",{className:"text-2xl md:text-3xl font-bold mb-2 text-gray-900",children:"Adyant's Kids Collection"}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-2 mb-4",children:[(0,a.jsxs)("span",{className:"bg-gray-800 text-white py-1 px-3 rounded-md text-sm flex items-center",children:[(0,a.jsx)("span",{className:"text-yellow-400",children:"★★★★★"}),(0,a.jsx)("span",{className:"ml-1",children:"4.9/5 from 24 reviews"})]}),(0,a.jsxs)("span",{className:"bg-green-700 text-white py-1 px-3 rounded-md text-sm flex items-center",children:[(0,a.jsx)("span",{children:"✓"}),(0,a.jsx)("span",{className:"ml-1",children:"Free shipping over ₹999"})]})]}),(0,a.jsx)("p",{className:"text-gray-700 mb-6 max-w-2xl",children:"Adyant's watch-inspired designs on premium quality products. From t-shirts to stationery, each item features authentic children's art that sparks joy and creativity."})]}),(0,a.jsx)("div",{className:"bg-white p-4 rounded-md shadow-sm mb-6 overflow-x-auto",children:(0,a.jsx)("div",{className:"flex space-x-2",children:[{id:"all",name:"All Products"},{id:"tshirt",name:"T-shirts"},{id:"accessories",name:"Accessories"},{id:"bundles",name:"Bundles"}].map(e=>(0,a.jsx)("button",{className:"whitespace-nowrap px-4 py-2 rounded-md transition-colors ".concat(j===e.id?"bg-kids-purple text-white":"bg-gray-100 hover:bg-gray-200 text-gray-700"),onClick:()=>f(e.id),children:e.name},e.id))})}),(0,a.jsxs)("section",{className:"bg-white p-4 md:p-6 rounded-lg shadow-sm mb-8",children:[(0,a.jsx)("h2",{className:"text-xl md:text-2xl font-bold mb-6 text-gray-900",children:"Adyant's Kids Collection"}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",children:b.map((e,s)=>(0,a.jsxs)("div",{className:"bg-gray-50 rounded-lg p-4 hover:shadow-md transition-all duration-300 flex flex-col",onClick:()=>m(e),children:[(0,a.jsx)("div",{className:"relative h-40 mb-3 overflow-hidden rounded-md bg-white flex items-center justify-center",children:(0,a.jsx)("div",{className:"text-5xl",children:e.emoji||"\uD83D\uDC55"})}),(0,a.jsx)("h3",{className:"text-lg font-bold mb-1 text-gray-900",children:e.name}),(0,a.jsx)("p",{className:"text-sm text-gray-600 mb-3 flex-grow line-clamp-2",children:e.description}),(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("span",{className:"text-lg font-bold text-gray-900",children:["₹",e.price]}),(0,a.jsx)("button",{className:"cta-primary px-3 py-1.5 rounded-md text-sm",onClick:s=>{s.stopPropagation(),y(e)},children:"Add to Cart"})]})]},s))})]}),(0,a.jsxs)("section",{className:"bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm mb-8",children:[(0,a.jsx)("h2",{className:"text-lg md:text-xl font-bold mb-4 text-gray-900 text-center",children:"Why Parents & Kids Trust Us"}),(0,a.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4",children:[(0,a.jsxs)("div",{className:"bg-white p-3 rounded-md text-center",children:[(0,a.jsx)("div",{className:"text-3xl mb-2 text-kids-purple",children:"\uD83E\uDDF8"}),(0,a.jsx)("h3",{className:"font-bold text-sm mb-1 text-gray-900",children:"Kid-Approved"}),(0,a.jsx)("p",{className:"text-xs text-gray-700",children:"Designed with input from kids"})]}),(0,a.jsxs)("div",{className:"bg-white p-3 rounded-md text-center",children:[(0,a.jsx)("div",{className:"text-3xl mb-2 text-kids-green",children:"♻️"}),(0,a.jsx)("h3",{className:"font-bold text-sm mb-1 text-gray-900",children:"Eco-Friendly"}),(0,a.jsx)("p",{className:"text-xs text-gray-700",children:"Sustainable materials"})]}),(0,a.jsxs)("div",{className:"bg-white p-3 rounded-md text-center",children:[(0,a.jsx)("div",{className:"text-3xl mb-2 text-kids-blue",children:"\uD83D\uDEE1️"}),(0,a.jsx)("h3",{className:"font-bold text-sm mb-1 text-gray-900",children:"Safe Materials"}),(0,a.jsx)("p",{className:"text-xs text-gray-700",children:"Tested for safety"})]}),(0,a.jsxs)("div",{className:"bg-white p-3 rounded-md text-center",children:[(0,a.jsx)("div",{className:"text-3xl mb-2 text-kids-red",children:"❤️"}),(0,a.jsx)("h3",{className:"font-bold text-sm mb-1 text-gray-900",children:"Charitable"}),(0,a.jsx)("p",{className:"text-xs text-gray-700",children:"50% supports education"})]})]})]}),(0,a.jsxs)("section",{className:"bg-gray-800 text-white p-5 md:p-6 rounded-lg shadow-sm mb-8",children:[(0,a.jsx)("h2",{className:"text-lg md:text-xl font-bold mb-4 text-center",children:"What Families Say"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{className:"bg-gray-700 p-4 rounded-md",children:[(0,a.jsx)("div",{className:"flex text-yellow-400 mb-2",children:(0,a.jsx)("span",{children:"★★★★★"})}),(0,a.jsx)("p",{className:"italic mb-2 text-sm",children:'"My daughter loves her watch with colorful stick figures. She\'s proud it was designed by another kid!"'}),(0,a.jsx)("p",{className:"text-xs font-bold",children:"- Priya M., mother of two"})]}),(0,a.jsxs)("div",{className:"bg-gray-700 p-4 rounded-md",children:[(0,a.jsx)("div",{className:"flex text-yellow-400 mb-2",children:(0,a.jsx)("span",{children:"★★★★★"})}),(0,a.jsx)("p",{className:"italic mb-2 text-sm",children:'"These watches are perfect for teaching time. The designs are fun and the quality is impressive!"'}),(0,a.jsx)("p",{className:"text-xs font-bold",children:"- Rahul S., father"})]})]})]})]}),(0,a.jsx)("footer",{className:"bg-gray-100 py-6 mt-8",children:(0,a.jsx)("div",{className:"container mx-auto text-center text-gray-600 text-sm",children:(0,a.jsx)("p",{children:"\xa9 2025 Adyant's Creative World"})})}),o&&(0,a.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4",children:(0,a.jsx)("div",{className:"bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto",children:(0,a.jsxs)("div",{className:"p-5 md:p-6",children:[(0,a.jsxs)("div",{className:"flex justify-between items-start mb-4",children:[(0,a.jsx)("h2",{className:"text-xl font-bold text-gray-900",children:o.name}),(0,a.jsx)("button",{onClick:()=>m(null),className:"text-gray-500 hover:text-gray-900",children:(0,a.jsx)("span",{className:"text-2xl",children:"\xd7"})})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"bg-gray-100 aspect-square rounded-lg flex items-center justify-center mb-3",children:(0,a.jsx)("div",{className:"text-7xl",children:o.emoji||"\uD83D\uDC55"})})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-gray-700 mb-4 text-sm",children:o.description}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("h3",{className:"font-bold text-gray-900 mb-2 text-sm",children:"Select Size"}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:[{id:"3-4y",label:"3-4 Years"},{id:"4-5y",label:"4-5 Years"},{id:"6-7y",label:"6-7 Years"},{id:"8-9y",label:"8-9 Years"},{id:"10-12y",label:"10-12 Years"}].map(e=>(0,a.jsx)("button",{className:"py-1.5 px-3 rounded text-sm border ".concat(t===e?"bg-kids-purple text-white border-kids-purple":"bg-white text-gray-700 border-gray-300 hover:border-gray-400"),onClick:()=>l(e),children:e},e))})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("h3",{className:"font-bold text-gray-900 mb-2 text-sm",children:"Key Features"}),(0,a.jsxs)("ul",{className:"list-disc list-inside text-gray-700 text-sm",children:[(0,a.jsx)("li",{children:"Hand-drawn by Adyant (Age 8)"}),(0,a.jsx)("li",{children:"Comfortable for daily wear"}),(0,a.jsx)("li",{children:"Educational time-telling design"}),(0,a.jsx)("li",{children:"Water-resistant construction"})]})]}),(0,a.jsxs)("div",{className:"flex items-center mb-4",children:[(0,a.jsxs)("div",{className:"text-xl font-bold text-gray-900 mr-4",children:["₹",o.price]}),(0,a.jsx)("div",{className:"text-xs bg-green-100 text-green-800 px-2 py-1 rounded",children:"In Stock"})]}),(0,a.jsxs)("div",{className:"flex items-center mb-4",children:[(0,a.jsx)("div",{className:"flex text-yellow-500 mr-2",children:(0,a.jsx)("span",{children:"★★★★★"})}),(0,a.jsx)("span",{className:"text-gray-700 text-xs",children:"(45 reviews)"})]}),(0,a.jsx)(n,{amazonId:null===(e=o.marketplaceIds)||void 0===e?void 0:e.amazon,flipkartId:null===(s=o.marketplaceIds)||void 0===s?void 0:s.flipkart,productName:o.name}),(0,a.jsxs)("div",{className:"flex space-x-3 mt-4",children:[(0,a.jsx)("button",{className:"cta-primary py-2 px-4 rounded-md flex-grow text-sm",onClick:()=>{y(o),m(null)},children:"Add to Cart"}),(0,a.jsx)("button",{className:"cta-secondary py-2 px-4 rounded-md text-sm",children:"Save"})]})]})]}),(0,a.jsx)(c,{currentProduct:o,products:u})]})})}),h&&(0,a.jsx)("div",{className:"fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-fade-in",children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("span",{className:"mr-2",children:"✓"}),(0,a.jsx)("span",{children:"Added to cart!"})]})})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[874,766,783,441,684,358],()=>s(6816)),_N_E=e.O()}]);