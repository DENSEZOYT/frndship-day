/* ===========================
   INITIALIZE
=========================== */

AOS.init({
    duration:900,
    once:true
});

/* ===========================
   ELEMENTS
=========================== */

const loader=document.getElementById("loader");
const gift=document.getElementById("gift");
const website=document.getElementById("website");
const giftBox=document.getElementById("giftBox");

const music=document.getElementById("music");
const musicBtn=document.getElementById("musicBtn");
const playBtn=document.getElementById("playBtn");

const envelope=document.getElementById("envelope");
const typing=document.getElementById("typing");

const days=document.getElementById("days");

const celebrate=document.getElementById("celebrate");

const scrollBtn=document.getElementById("scrollBtn");

const cards=document.querySelectorAll(".card img");

const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");
const close=document.getElementById("close");

/* ===========================
   LOADER
=========================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},700);

},1200);

});

/* ===========================
   GIFT
=========================== */

giftBox.onclick=()=>{

gift.style.display="none";

website.classList.remove("hidden");

window.scrollTo({
top:0,
behavior:"smooth"
});

};

/* ===========================
   MUSIC
=========================== */

let playing=false;

function toggleMusic(){

if(!playing){

music.play().catch(()=>{});

playing=true;

musicBtn.textContent="⏸";

playBtn.textContent="Pause Music";

}else{

music.pause();

playing=false;

musicBtn.textContent="🎵";

playBtn.textContent="▶ Play Music";

}

}

musicBtn.onclick=toggleMusic;
playBtn.onclick=toggleMusic;

/* ===========================
   HERO BUTTON
=========================== */

scrollBtn.onclick=()=>{

document.getElementById("gallery")
.scrollIntoView({

behavior:"smooth"

});

};

/* ===========================
   LETTER
=========================== */

const text=`Dear Best Friend ❤️

Happy Friendship Day!

Thank you for every laugh,
every memory,
and every moment we've shared.

You're one of the most special people in my life.

I hope our friendship lasts forever.

💖`;

let started=false;

envelope.onclick=()=>{

envelope.classList.toggle("open");

if(started) return;

started=true;

let i=0;

function type(){

if(i<text.length){

typing.textContent+=text.charAt(i);

i++;

setTimeout(type,35);

}

}

type();

};

/* ===========================
   COUNTER
=========================== */

// Change this date later
const start=new Date(2024,0,5);

const today=new Date();

const diff=today-start;

const total=Math.floor(diff/86400000);

days.textContent=total;
/* ===========================
   GALLERY LIGHTBOX
=========================== */

cards.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImg.src=img.src;

});

});

close.onclick=()=>{

lightbox.classList.remove("active");

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

}

};

/* ===========================
   CONFETTI
=========================== */

celebrate.onclick=()=>{

confetti({

particleCount:500,

spread:120,

origin:{y:.6}

});

setTimeout(()=>{

confetti({

particleCount:480,

spread:180,

origin:{y:.5}

});

},400);

};

/* ===========================
   FALLING PETALS
=========================== */

const petals=document.getElementById("petals");

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.textContent="🌸";

petal.style.left=Math.random()*100+"%";

petal.style.animationDuration=
(6+Math.random()*5)+"s";

petal.style.fontSize=
(18+Math.random()*14)+"px";

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},11000);

}

setInterval(createPetal,700);

/* ===========================
   AUTO MUSIC
=========================== */

document.addEventListener("click",()=>{

if(!playing){

music.play().catch(()=>{});

playing=true;

musicBtn.textContent="⏸";

playBtn.textContent="Pause Music";

}

},{once:true});

/* ===========================
   IMAGE HOVER EFFECT
=========================== */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*10;

const rotateX=((y/rect.height)-0.5)*-10;

card.style.transform=
`perspective(800px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(800px) rotateX(0) rotateY(0) scale(1)";

});

});

/* ===========================
   READY
=========================== */

console.log("✅ Friendship Day website loaded!");