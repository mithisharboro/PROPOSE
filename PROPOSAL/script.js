const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const music = document.getElementById("bgMusic");
const celebration = document.getElementById("celebration");
const mainCard = document.getElementById("mainCard");
const replayBtn = document.getElementById("replayBtn");


// =================================
// YES BUTTON ❤️
// =================================

yesBtn.addEventListener("click", async function () {

    // Start music after YES is clicked
    try {
        await music.play();
    } catch (error) {
        console.log("Music error:", error);
    }

    // Hide main card
    mainCard.style.display = "none";

    // Show celebration
    celebration.classList.add("show");

    // Big celebration 🎉
    createHearts(60);
    createConfetti(100);
});


// =================================
// NO BUTTON 😭
// =================================

noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("touchstart", function (event) {

    event.preventDefault();

    moveNoButton();
});


function moveNoButton() {

    const maxX =
        window.innerWidth -
        noBtn.offsetWidth -
        20;

    const maxY =
        window.innerHeight -
        noBtn.offsetHeight -
        20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}


// =================================
// CREATE HEART ❤️
// =================================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const heartList = [
        "💗",
        "💕",
        "💖",
        "💘",
        "💓",
        "❤️"
    ];

    heart.innerHTML =
        heartList[
        Math.floor(
            Math.random() * heartList.length
        )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.animationDuration =
        3 + Math.random() * 4 + "s";

    document.body.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 7000);
}


// =================================
// MANY HEARTS 💕
// =================================

function createHearts(number) {

    for (let i = 0; i < number; i++) {

        setTimeout(
            createHeart,
            i * 70
        );
    }
}


// =================================
// BACKGROUND HEARTS 💗
// =================================

setInterval(
    createHeart,
    800
);


// =================================
// CONFETTI 🎉
// =================================

function createConfetti(number) {

    for (let i = 0; i < number; i++) {

        setTimeout(function () {

            const piece =
                document.createElement("div");

            piece.classList.add("confetti");

            const shapes = [
                "💖",
                "💕",
                "🎀",
                "✨",
                "🌸",
                "💗"
            ];

            piece.innerHTML =
                shapes[
                Math.floor(
                    Math.random() *
                    shapes.length
                )
                ];

            piece.style.left =
                Math.random() * 100 + "vw";

            piece.style.fontSize =
                12 +
                Math.random() * 15 +
                "px";

            piece.style.animationDuration =
                2 +
                Math.random() * 4 +
                "s";

            document.body.appendChild(piece);

            setTimeout(function () {

                piece.remove();

            }, 6000);

        }, i * 30);
    }
}


// =================================
// REPLAY ❤️
// =================================

replayBtn.addEventListener(
    "click",
    function () {

        celebration.classList.remove("show");

        mainCard.style.display = "block";

        noBtn.style.position = "static";
        noBtn.style.left = "";
        noBtn.style.top = "";

        yesBtn.style.display = "inline-block";
        noBtn.style.display = "inline-block";

        // Stop music
        music.pause();
        music.currentTime = 0;
    }
);