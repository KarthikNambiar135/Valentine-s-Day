const no = document.getElementById("no");
const yes = document.getElementById("yes");
const img = document.getElementById("test-img");

let noCount = -1;
let moveInterval;
let randomX, randomY;

const messages = ["NO", "Are you sure?", "Really??😢", "CMONNN Think again...", "Last CHANCE", "THE F?", "??????", "I'll be a good boy :)", "PLEASE!🥺", "Dont want icecream?", "you are one persistent girl!", "Okay let ME JUST change something hehe😋", "OOPS wrong button🤡", "NOW THATs the spirit!", "You still trying?-_-", "For God's Sake FR???!!!", "OK keep trying😒", "Error: No button doesn't want to be clicked anymore!"];
const images = ["./images/test2.gif", "./images/test3.gif", "./images/test4.gif", "./images/test5.gif", "./images/test6.gif", "./images/test7.gif", "./images/test20.gif","./images/test8.gif", "./images/test9.gif", "./images/test10.gif", "./images/test11.gif", "./images/test12.gif", "./images/test13.gif", "./images/test14.gif", "./images/test15.gif", "./images/test16.gif", "./images/test17.gif", "./images/test18.gif"];
const maxSize = 30;

no.addEventListener("click", function() {
    noCount++;

    let size = Math.min(16 + noCount * 5, maxSize);
    let padding = Math.min(10 + noCount, 25);

    no.style.fontSize = `${size}px`;
    no.style.padding = `${padding}px ${padding * 2}px`;

    if (noCount < messages.length) {
        no.textContent = messages[noCount];
    }

    img.src = images[Math.min(noCount, images.length - 1)];

    yes.style.transform = `scale(${Math.min(1 + noCount * 0.1, 1.5)})`;

    no.classList.add("vibrate");
    setTimeout(() => {
        no.classList.remove("vibrate");
    }, 600);

    if (noCount === 12) {
        yes.classList.add("dropButton");
        setTimeout(() => {
            yes.classList.remove("dropButton");
        }, 2000);
    }

    if (noCount === 13) {
        no.classList.remove("vibrate");
        startButtonEscape();  
    }

    if (noCount === 14) {
        yes.classList.remove("dropButton");
    }

    if (noCount === 17) {
        moveInterval = setInterval(function() {
            randomX = Math.random() * 800 - 200;
            randomY = Math.random() * 800 - 200;
            no.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 50);
    }
});

function startButtonEscape() {
    moveInterval = setInterval(function() {
        randomX = Math.random() * 400 - 200;
        randomY = Math.random() * 400 - 200;
        no.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }, 50);
}

yes.addEventListener("click", function() {
    console.log("Yes button clicked!");
    confetti({
        spread: 90,
        particleCount: 100,
        origin: { x: 0.5, y: 0.5 },
        angle: 60, 
        gravity: 1, 
        drift: 0.2 
    });
    setTimeout(function() {
        document.body.innerHTML = `<h1>YAY! ❤️ NOW That's like a good gurl ^3^ !</h1>`;
    }, 500); ;
});


