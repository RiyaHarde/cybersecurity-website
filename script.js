function checkURL(){
let url = urlInput.value.trim();

if(url === ""){
urlResult.innerHTML="⚠ Please enter a URL first";
urlResult.style.color="orange";
return;
}

if(url.startsWith("https://")){
urlResult.innerHTML="✔ Secure Website";
urlResult.style.color="green";
}else{
urlResult.innerHTML="✖ Not Secure Website";
urlResult.style.color="red";
}
}

function validateLogin(){alert("Login success");return false;}

function validateRegister(){
if(regPass.value!=regConfirm.value){
alert("Passwords mismatch");
return false;
}
alert("Registered");
return false;
}

function validateFeedback(){alert("Thank you");return false;}

// FIX NAV CLICK SCROLL PROPERLY
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        let targetId = this.getAttribute("href");
        let targetSection = document.querySelector(targetId);

        let offset = 100; // navbar height

        let position = targetSection.offsetTop - offset;

        
    });
});

window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav a");

    sections.forEach((sec, index) => {
        let top = sec.offsetTop - 120;
        let bottom = top + sec.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
            navLinks.forEach(link => link.classList.remove("active"));
            navLinks[index].classList.add("active");
        }
    });
});

/* MODAL */
function openModal(type){
let modal = document.getElementById("modal");
let title = document.getElementById("modalTitle");
let text = document.getElementById("modalText");

modal.style.display="flex";

if(type==="threat"){
title.innerHTML="Threat Awareness";
text.innerHTML="Understand phishing, malware, scams and how hackers attack.";
}

if(type==="security"){
title.innerHTML="Security Tips";
text.innerHTML="Use strong passwords, enable 2FA, and browse safely.";
}

if(type==="help"){
title.innerHTML="Emergency Help";
text.innerHTML="Steps to take immediately if your account is hacked.";
}
}

function closeModal(){
document.getElementById("modal").style.display="none";
}

function closeModal(){modal.style.display="none";}

/* COUNTER */
let count=0;
setInterval(()=>{
if(count<1000){
count+=10;
users.innerHTML=count;
sites.innerHTML=count*2;
rate.innerHTML=Math.floor(count/10)+"%";
}
},50);

/* SCROLL ANIMATION */
window.addEventListener("scroll",()=>{
document.querySelectorAll(".section").forEach(sec=>{
if(sec.getBoundingClientRect().top < window.innerHeight-100){
sec.classList.add("show");
}
});
});

// FORCE NAVIGATION CLICK TO WORK
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});