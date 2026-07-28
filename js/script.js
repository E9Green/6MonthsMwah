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
    text:"Yknow I was mad shy going to you that day, first time I ever did something like that. I'm not really a train type of person or a let's go to this long distance spot but I said fuck it we ball and went and I LOVED THAT I WENT. I already loved you so much from the calls/texting but in person? That's my baby girl. It was nice meeting you, I loved how relaxing it was maybe it was shy at first but duhhh right away we just relaxed and talked like we usually do but way better since I can just go poke poke. I remember you stared at me, kissed me, held me. I loved all that, I love you"
},

{
    image:"assets/memories/pic2.jpg",
    text:"I was shy at first from pictures and now look at us :p I love taking pictures with you baby. You look good in that green shirt btw and those glasses? MWAHH, go fix them soon smhh I love your hair so much btw you do so good cutting it, still waiting on someone to cut my hair :) I love this picture, look at us smiling. Two cuties mwahh."
},

{
    image:"assets/memories/pic3.jpg",
    text:"I like this picture a lot, We got us hugging like EWWWWWW you're weird :)) Then we got my pops watching tv. You've helped a lot with him btw, thank you. He likes you a lot, means a lot to me. I love holding you and it's cute that you check the camera after to see us."
},

{
    image:"assets/memories/pic4.jpg",
    text:"We're adorable. I love your smile and you make me smile. That's me happy because of us and you, you're an amazing person whom I love lots lots mwah."
},

{
    image:"assets/memories/pic5.jpg",
    text:"I really like youre forehead :) you can tell from the smile. Such a cute picture my babygirl blocking her face because I went FOREHEAD!!!, look at that smile from me mwah. You're so beautiful baby."
},

{
    image:"assets/memories/pic6.jpg",
    text:"Issa Coco!! I love my baby, our baby honestly :)) You make coco go peepee weirdo smh mwah, I liked that day a lot. Showing you my outfit and you hyping me up goshh and then coco taking picture with her I love the memories lots and I had a blast with my friends too mwah. Thank you for calling me handsome :))"
},

{
    image:"assets/memories/pic7.jpg",
    text:"Issa beautiful baby :)) I love her, I want to get her as a tattoo on my arm along with my papa one day :p I would like you to be there rooting for me. She's so adorable I love her, I love you"
},

{
    image:"assets/memories/pic8.jpg",
    text:"Someone took my ice cream that day :p I enjoyed yours a lot ngl even tho it was just straight choclate but it was good can't lie. You look good taking a bitw btw, sexy. That mouth is overall sexy along with that face and again I love that green shirt on you or is it a green sweatshirt? it's a green gabby mwah."
},

{
    image:"assets/memories/pic9.jpg",
    text:"My little baby in a cone :)) Can't wait when I get the money to get her all her shots/vet visit and haircut. I love her lots, she's a coco!! issa coco!!. I love you baby :)) I'm glad that you like that picture mwah."
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