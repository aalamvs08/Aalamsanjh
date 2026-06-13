
function go(n){document.querySelector(".active").classList.remove("active");document.getElementById("p"+n).classList.add("active");}
const reasons=["Your smile.","Your kindness.","Your laugh.","You make life brighter.","You are my favorite person."];
let r=0; reasonCard.textContent=reasons[0];
function nextReason(){r=(r+1)%reasons.length;reasonCard.textContent=reasons[r];}

const start=new Date("2025-11-03");
function tick(){
let diff=Date.now()-start;
let d=Math.floor(diff/86400000);
counter.textContent=d+" Days Together ❤️";
}
setInterval(tick,1000);tick();

for(let i=0;i<120;i++){
let s=document.createElement("div");s.className="star";s.innerHTML="✦";
s.style.left=Math.random()*100+"vw";s.style.top=Math.random()*100+"vh";
document.getElementById("stars").appendChild(s);
}
for(let i=0;i<30;i++){
let p=document.createElement("div");p.className="petal";p.innerHTML="🌹";
p.style.left=Math.random()*100+"vw";p.style.top=Math.random()*100+"vh";
document.getElementById("petals").appendChild(p);
}
let taps=0;
document.addEventListener("click",()=>{taps++; if(taps===5) alert("Secret: I choose you in every universe ❤️");});
function explode(){
for(let i=0;i<50;i++){let b=document.createElement("div");b.className="boom";b.innerHTML="❤️";
b.style.left=(50+Math.random()*20-10)+"vw";b.style.top=(50+Math.random()*20-10)+"vh";document.body.appendChild(b);}
}
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");

    if (music.paused) {
        music.play();
        btn.innerHTML = "🎶 Playing Our Song";
        btn.classList.add("playing");
    } else {
        music.pause();
        btn.innerHTML = "🎵 Our Song";
        btn.classList.remove("playing");
    }
}
