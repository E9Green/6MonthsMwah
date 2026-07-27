const loader = document.getElementById("loader");
const envelopeScreen = document.getElementById("envelope-screen");
const envelope = document.getElementById("envelope");

const letterPage = document.getElementById("letter-page");

const continueBtn = document.getElementById("continue-btn");
const storyPage = document.getElementById("story-page");
const music = document.getElementById("bg-music");

// Loading Screen
setTimeout(() => {

    loader.style.display = "none";
    envelopeScreen.style.display = "flex";

}, 6000);


// Envelope Click
envelope.addEventListener("click", () => {

    envelopeScreen.style.opacity = "0";

    setTimeout(() => {

        envelopeScreen.style.display = "none";
        letterPage.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 800);

});


// Continue Button
continueBtn.addEventListener("click", () => {

    letterPage.style.display = "none";

    storyPage.style.display = "block";
    music.volume = 0;
    music.play().catch(()=>{});
    fadeMusic();
    startPetals();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ----------------------
// Love Counter
// ----------------------

const startDate = new Date("2026-01-28T00:00:00");

const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCounter(){

    const now = new Date();

    let months =
        (now.getFullYear() - startDate.getFullYear()) * 12 +
        (now.getMonth() - startDate.getMonth());

    if(now.getDate() < startDate.getDate()){
        months--;
    }

    const monthDate = new Date(startDate);
    monthDate.setMonth(startDate.getMonth() + months);

    let remaining = now - monthDate;

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    remaining %= (1000 * 60 * 60 * 24);

    const hours = Math.floor(remaining / (1000 * 60 * 60));
    remaining %= (1000 * 60 * 60);

    const minutes = Math.floor(remaining / (1000 * 60));

    remaining %= (1000 * 60);

    const seconds = Math.floor(remaining / 1000);

    monthsEl.textContent = months + " Months";
    daysEl.textContent = days + " Days";
    hoursEl.textContent = hours + " Hours";
    minutesEl.textContent = minutes + " Minutes";
    secondsEl.textContent = seconds + " Seconds";

}

updateCounter();

setInterval(updateCounter,1000);



// ----------------------
// Memories
// ----------------------

const memories = [

{
    image:"assets/memories/pic1.jpg",
    text:"Write your first memory here."
},

{
    image:"assets/memories/pic2.jpg",
    text:"Write your second memory here."
},

{
    image:"assets/memories/pic3.jpg",
    text:"Write your third memory here."
},

{
    image:"assets/memories/pic4.jpg",
    text:"Write your fourth memory here."
},

{
    image:"assets/memories/pic5.jpg",
    text:"Write your fifth memory here."
},

{
    image:"assets/memories/pic6.jpg",
    text:"Write your sixth memory here."
},

{
    image:"assets/memories/pic7.jpg",
    text:"Write your seventh memory here."
},

{
    image:"assets/memories/pic8.jpg",
    text:"Write your eighth memory here."
},

{
    image:"assets/memories/pic9.jpg",
    text:"Write your ninth memory here."
}

];

let currentMemory = 0;

const memoryImage = document.getElementById("memory-image");
const memoryText = document.getElementById("memory-text");

const dots = document.querySelectorAll(".dot");

function showMemory(index){

    memoryImage.style.opacity = 0;
    memoryText.style.opacity = 0;

    setTimeout(()=>{

        memoryImage.src = memories[index].image;
        memoryText.textContent = memories[index].text;

        dots.forEach(dot=>dot.classList.remove("active"));
        dots[index].classList.add("active");

        memoryImage.style.opacity = 1;
        memoryText.style.opacity = 1;

    },200);

}

document.getElementById("next-memory").addEventListener("click",()=>{

    currentMemory++;

    if(currentMemory >= memories.length){

        currentMemory = 0;

    }

    showMemory(currentMemory);

});

document.getElementById("prev-memory").addEventListener("click",()=>{

    currentMemory--;

    if(currentMemory < 0){

        currentMemory = memories.length - 1;

    }

    showMemory(currentMemory);

});

showMemory(0);

// ----------------------
// Rose Petals
// ----------------------

const petals = document.getElementById("petals");

let petalsStarted = false;

function startPetals(){

    if(petalsStarted) return;

    petalsStarted = true;

    setInterval(()=>{

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.style.left = Math.random()*100 + "%";

        const size = 20 + Math.random()*18;

        petal.style.width = size + "px";
        petal.style.height = size + "px";

        petal.style.animationDuration =
            7 + Math.random()*5 + "s";

        petals.appendChild(petal);

        petal.addEventListener("animationend",()=>{

            petal.remove();

        });

    },500);

}

function fadeMusic(){

    const target = 0.35;

    const step = 0.02;

    const fade = setInterval(()=>{

        if(music.volume < target){

            music.volume = Math.min(
                music.volume + step,
                target
            );

        }else{

            clearInterval(fade);

        }

    },80);

}