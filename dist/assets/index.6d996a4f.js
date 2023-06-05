(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}})();const S=[{id:1,question:"Which of the following is not a type of music notation?",options:["Standard notation","Tab notation","Morse code notation","Graphics notation"],answer:"Morse code notation",category:"music"},{id:2,question:"What is the most common time signature in classical music?",options:["3/4","4/4","5/4","6/8"],answer:"4/4",category:"music"},{id:3,question:"Which of the following is not a type of instrument in a symphony orchestra?",options:["Violin","Piano","Harp","Theremin"],answer:"Theremin",category:"music"},{id:4,question:"What is the most common key in pop music?",options:["C Major","G Major","D Major","A Major"],answer:"C Major",category:"music"},{id:5,question:"Which of the following is not a type of chord?",options:["Major","Minor","Diminished","Flat"],answer:"Flat",category:"music"},{id:6,question:"Which of the following is not a type of music genre?",options:["Jazz","Blues","Rock","Applesauce"],answer:"Applesauce",category:"music"},{id:7,question:"Which of the following is not a type of music theory?",options:["Harmony","Counterpoint","Form","Cooking"],answer:"Cooking",category:"music"},{id:8,question:"What is the most common tempo marking in classical music?",options:["Allegro","Andante","Adagio","Moderato"],answer:"Allegro",category:"music"},{id:9,question:"Which of the following is not a type of musical form?",options:["Sonata","Symphony","Concerto","Spaghetti"],answer:"Spaghetti",category:"music"},{id:10,question:"Which of the following is not a type of music notation software?",options:["Sibelius","Finale","MuseScore","Microsoft Word"],answer:"Microsoft Word",category:"music"}],I=[{id:21,question:"What is the correct syntax for an if statement in Python?",options:["if (condition):","if condition","if: condition","if condition:"],answer:"if condition:",category:"coding"},{id:22,question:"Which of the following is not a data type in JavaScript?",options:["String","Number","Boolean","ArrayList"],answer:"ArrayList",category:"coding"},{id:23,question:"Which of the following is used to declare a variable in Java?",options:["var","let","const","int"],answer:"int",category:"coding"},{id:24,question:"What is the correct syntax for a for loop in C#?",options:["for i = 0 to 10","for (i = 0; i <= 10; i++)","for (int i = 0; i <= 10)","for i in range(0, 10)"],answer:"for (i = 0; i <= 10; i++)",category:"coding"},{id:25,question:"Which of the following is not a looping structure in PHP?",options:["while","for","do-while","foreach"],answer:"foreach",category:"coding"},{id:26,question:"Which of the following is not a valid operator in C++?",options:["+","-","*","$"],answer:"$",category:"coding"},{id:27,question:"In which programming language is 'print' used for displaying output?",options:["Python","JavaScript","Java","C++"],answer:"Python",category:"coding"},{id:28,question:"What is the correct syntax for a function in Ruby?",options:["function name()","def name","function name","def name()"],answer:"def name()",category:"coding"},{id:29,question:"Which of the following is not a type of variable in Swift?",options:["Int","String","Double","Object"],answer:"Object",category:"coding"},{id:30,question:"In which programming language is '#' used for commenting?",options:["Python","JavaScript","Java","C++"],answer:"C++",category:"coding"}],s={music:S,"modern-art":[{id:11,question:"Which artist is known for coining the term 'Surrealism'?",options:["Pablo Picasso","Salvador Dali","Vincent van Gogh","Henri Matisse"],answer:"Salvador Dali",category:"modern-art"},{id:12,question:"Which movement is associated with the use of abstract forms and shapes in art?",options:["Impressionism","Expressionism","Futurism","Cubism"],answer:"Cubism",category:"modern-art"},{id:13,question:"Which artist is known for painting the work 'The Persistence of Memory'?",options:["Pablo Picasso","Salvador Dali","Vincent van Gogh","Henri Matisse"],answer:"Salvador Dali",category:"modern-art"},{id:14,question:"Which artist is known for creating the painting 'The Scream'?",options:["Vincent van Gogh","Salvador Dali","Edvard Munch","Claude Monet"],answer:"Edvard Munch",category:"modern-art"},{id:15,question:"What movement was associated with the use of bold, bright colors and thick brushstrokes?",options:["Impressionism","Expressionism","Fauvism","Cubism"],answer:"Fauvism",category:"modern-art"},{id:16,question:"What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed?",options:["Impressionism","Futurism","Surrealism","Abstract Expressionism"],answer:"Futurism",category:"modern-art"},{id:17,question:"Which artist is known for creating the painting 'Water Lilies'?",options:["Claude Monet","Paul Cezanne","Paul Gauguin","Paul Klee"],answer:"Claude Monet",category:"modern-art"},{id:18,question:"Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",options:["Henri Matisse","Vincent van Gogh","Salvador Dali","Pablo Picasso"],answer:"Pablo Picasso",category:"modern-art"},{id:19,question:"Which artist is known for creating the painting 'Guernica'?",options:["Claude Mone","Paul Cezanne","Pablo Picasso","Vincent van Gogh"],answer:"Pablo Picasso",category:"modern-art"},{id:20,question:"Which artist is known for creating the sculpture 'The Thinker'?",options:["Auguste Rodin","Alexander Calder","Jean Arp","Henry Moore"],answer:"Auguste Rodin",category:"modern-art"}],coding:I},y=document.getElementById("topics"),w=document.getElementById("topic"),g=document.getElementById("status"),r=document.getElementById("quiz"),l=document.getElementById("questions"),u=document.getElementById("scores"),p=document.getElementById("answers");for(const t in s){const e=document.createElement("div");e.id=t,e.className="option",Object.hasOwn(localStorage,t)?(c(e),q(e)):(v(t),e.innerText=t.toUpperCase(),f(e)),w.appendChild(e)}function d(t,e=0){localStorage.setItem("currentIndex",e),e===0?c(document.getElementById("prev")):f(document.getElementById("prev")),e===s[t].length-1?c(document.getElementById("next")):f(document.getElementById("next")),r.querySelector("h3").value=t,r.querySelector("h3").innerHTML=`<u>${t.toUpperCase()}</u>`,document.getElementById("num").innerText=`${e+1} of ${s[t].length}`,h(g);for(let n=1;n<=s[t].length;n++){const i=document.createElement("div");i.innerText=n,i.uniqueID=s[t][n-1].id,i.classList.add("small-circle"),Object.hasOwn(localStorage,i.uniqueID)&&i.classList.add("blue"),g.appendChild(i)}g.style.gridTemplateColumns=`repeat(${s[t].length}, 1fr)`,h(l);const o=document.createElement("div");o.innerText=s[t][e].question,o.id="question",o.uniqueID=s[t][e].id,l.appendChild(o);for(let n of s[t][e].options){const i=document.createElement("div");i.innerText=n,i.classList.add("option"),i.classList.add("selectable"),l.appendChild(i)}if(Object.hasOwn(localStorage,o.uniqueID))for(let n of l.querySelectorAll("div"))c(n),n.innerText==localStorage.getItem(o.uniqueID)&&(n.style.background="#393E46");y.classList.add("hidden"),r.classList.remove("hidden")}function h(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function c(t){t.style.pointerEvents="none"}function f(t){t.style.pointerEvents="auto"}function v(t){for(let e of s[t])Object.hasOwn(localStorage,e.id)&&localStorage.removeItem(e.id)}function b(t){let e=0;for(let o of s[t])Object.hasOwn(localStorage,o.id)&&localStorage.getItem(o.id)==o.answer&&(e+=1);localStorage.setItem(t,e)}function q(t){t.innerHTML=`<s>${t.id.toUpperCase()}</s> &ensp; : &ensp; ${localStorage.getItem(t.id)} / ${s[t.id].length}`}function C(t){u.querySelector("h3").id=t,u.querySelector("h3").innerHTML=`<u>${t.toUpperCase()}</u>`,document.getElementById("score").innerHTML=`${localStorage.getItem(t)} / ${s[t].length}`,h(p);for(let e=1;e<=s[t].length;e++){const o=document.createElement("div");o.innerText=e,o.uniqueID=s[t][e-1].id,localStorage.getItem(o.uniqueID)==s[t][e-1].answer?(o.classList.add("small-circle"),o.classList.add("green")):(o.classList.add("small-circle"),o.classList.add("red")),p.appendChild(o)}r.classList.add("hidden"),u.classList.remove("hidden")}document.addEventListener("click",t=>{let e=t.target;if(Object.hasOwn(s,e.id)&&e.tagName==="DIV"&&(localStorage.setItem("topic",e.id),d(e.id)),e.classList.contains("selectable"))if(e.selected===!0)e.selected=!1,e.style.background="",localStorage.removeItem(document.getElementById("question").uniqueID);else{for(let o of e.parentNode.querySelectorAll("div"))o.style.background="",o.selected=!1;e.style.background="#393E46",e.selected=!0,localStorage.setItem(document.getElementById("question").uniqueID,e.innerText)}if(e.id==="prev"){const o=localStorage.getItem("topic"),n=Number(localStorage.getItem("currentIndex"));n>0&&d(o,n-1)}if(e.id==="next"){const o=localStorage.getItem("topic"),n=Number(localStorage.getItem("currentIndex"));n<s[o].length-1&&d(o,n+1)}if(e.parentNode.id==="status"){const o=localStorage.getItem("topic");d(o,Number(e.innerText)-1)}if(e.id==="finish"){const o=localStorage.getItem("topic");b(o),C(o)}if(e.id==="exit"||e.id==="back"){for(let n of w.querySelectorAll("div"))Object.hasOwn(localStorage,n.id)&&(c(n),q(n));const o=localStorage.getItem("topic");v(o),y.classList.remove("hidden"),r.classList.add("hidden"),u.classList.add("hidden")}e.id==="reset"&&(localStorage.clear(),window.location.reload())});
