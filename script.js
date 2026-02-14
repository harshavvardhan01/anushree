const envelope=document.getElementById("envelope");
const letter=document.getElementById("letter");
const card=document.querySelector(".card");
const yes=document.getElementById("yes");
const no=document.getElementById("no");
const msg=document.getElementById("message");
const music=document.getElementById("music");

const text=`Anushree,

Some people enter our lives quietly… and somehow become one of the most beautiful parts of it. That is exactly who you are to me.

In a world where everything changes so fast, having you in my life is something that always feels constant and safe.

I admire your love for exploring the world — chasing sunsets, discovering new places, and living stories most people only dream about. Wherever life takes you, just know there will always be someone right here, silently cheering for you.

What we share is rare. Effortless. Real. A bond without pressure, without labels — just pure understanding.

You have brought more happiness into my life than you probably realize, and I will forever be grateful for that.

Some connections aren't meant to be complicated…

They are simply meant to be treasured.

And ours is one of them ❤️

Happy Valentine's Day.`;


/* OPEN ENVELOPE */

envelope.onclick=()=>{

envelope.style.display="none";
letter.style.display="flex";

setTimeout(()=>{
card.classList.add("open");
},100);

music.volume=.4;
music.play();

};


/* RUNAWAY NO BUTTON 😄 */

no.onmouseover=()=>{

const x=Math.random()*400-200;
const y=Math.random()*400-200;

no.style.transform=`translate(${x}px,${y}px)`;
};


/* TYPEWRITER + CONFETTI */

yes.onclick=()=>{

document.querySelector(".buttons").style.display="none";

let i=0;

function type(){
if(i<text.length){
msg.innerHTML+=text.charAt(i);
i++;
setTimeout(type,18);
}
}

type();
confetti();
};


/* FLOATING HEARTS */

function heart(){

const h=document.createElement("div");
h.className="heart";
h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";
h.style.animationDuration=(Math.random()*3+3)+"s";

document.body.appendChild(h);

setTimeout(()=>h.remove(),6000);
}

setInterval(heart,250);


/* CONFETTI BLAST */

function confetti(){

for(let i=0;i<120;i++){

const c=document.createElement("div");
c.className="confetti";

c.style.left=Math.random()*100+"vw";
c.style.background=`hsl(${Math.random()*360},100%,60%)`;
c.style.animationDuration=(Math.random()*3+2)+"s";

document.body.appendChild(c);

setTimeout(()=>c.remove(),5000);
}
}
