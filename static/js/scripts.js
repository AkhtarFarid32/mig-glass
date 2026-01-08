// simple reveal on scroll
const io = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('animate');io.unobserve(e.target)}})},{threshold:.15});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// counter animation
function animateCounter(el){const to=+el.dataset.target;let start=0;const dur=2000;const stepTime=Math.max(10,Math.floor(dur/(to||1)));const t=setInterval(()=>{start+=Math.ceil(to/ (dur/stepTime));if(start>=to){el.textContent=to;clearInterval(t)}else el.textContent=start},stepTime)}
document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.counter').forEach(el=>{const obs=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){animateCounter(el);obs.disconnect()}})},{threshold:.5});obs.observe(el)})});
