(()=>{var e={710:e=>{class t{constructor(e,t,r,o,i,n,s){this.poster=e,this.title=t,this.director=r,this.year=o,this.duration=i,this.genre=n,this.rate=s}}e.exports={Movie:t,Repository:class{constructor(){this.movies=[]}createMovie(e){e.forEach((e=>{const r=new t(e.poster,e.title,e.director,e.year,e.duration,e.genre,e.rate);this.movies.push(r)}))}}}}},t={};const{Movie:r,Repository:o}=function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}(710),i=new o;$(document).ready((()=>{$.get("https://api.1rodemayo.com/movies/",((e,t)=>{i.createMovie(e),(()=>{const e=document.querySelector(".containercards");i.movies.forEach((t=>{const r=function(e){const t=document.createElement("div");return t.classList.add("card"),t.innerHTML=`\n        <img src="${e.poster}" alt="${e.title}" />\n        <h3>${e.title}</h3>\n        <p>Director: ${e.director}</p>\n        <p>Año: ${e.year}</p>\n        <p>Duración: ${e.duration}</p>\n        <p>Género: ${e.genre.join(", ")}</p>\n        <p>Rate: ${e.rate}</p>\n    `,t}(t);e.appendChild(r)}))})()})).fail((e=>{console.error("Error loading movies:",e)}))}))})();