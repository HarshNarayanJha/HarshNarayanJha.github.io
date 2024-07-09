const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

const cursorScale = document.querySelectorAll(".cursor-scale");
const cursorButton = document.querySelectorAll(".cursor-button");
const cursorLink = document.querySelectorAll(".cursor-link");

// const svgCircuit = document.querySelector("#circuit");

var posX = 0;
var posY = 0;

window.addEventListener("mousemove", (e) => {
    posX = e.clientX;
    posY = e.clientY;

    // cursorDot.style.left = `${posX}px`;
    // cursorDot.style.top = `${posY}px`;

    // // cursorOutline.style.left = `${posX}px`;
    // // cursorOutline.style.top = `${posY}px`;

    // cursorOutline.animate({
    //     left: `${posX}px`,
    //     top: `${posY}px`,
    // }, { duration: 50, fill: 'forwards' });
});

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: () => {
        gsap.set(cursorOutline, {
            css: {
                left: posX,
                top: posY,
            }
        })
    }
});

cursorScale.forEach(scaled => {
    scaled.addEventListener("mouseleave", (e) => {
        cursorOutline.classList.remove("cursor-grow");
        cursorOutline.classList.remove('grow-small');
    })
    scaled.addEventListener("mousemove", (e) => {
        cursorOutline.classList.add("cursor-grow");
        if (scaled.classList.contains("small")) {
            cursorOutline.classList.remove("cursor-grow");
            cursorOutline.classList.add('grow-small');
        }
    })
})

cursorLink.forEach(link => {
    link.addEventListener("mouseleave", (e) => {
        cursorOutline.classList.remove("cursor-glow");
        link.classList.remove("cursor-glow");
        link.style.transform = `translate(0px, 0px)`;
        // cursorOutline.classList.remove('shrink-small');
    })
    link.addEventListener("mousemove", (e) => {
        cursorOutline.classList.add("cursor-glow");
        link.classList.add("cursor-glow");
        // if (scaled.classList.contains("small")) {
        // cursorOutline.classList.remove("cursor-grow");
        // cursorOutline.classList.add('grow-small');
        // }

        // console.log(e.clientX, e.clientY, posX, posY);
        const offsetX = e.clientX - link.getBoundingClientRect().x - link.getBoundingClientRect().height / 2;
        const offsetY = e.clientY - link.getBoundingClientRect().y - link.getBoundingClientRect().width / 2;

        link.style.transform = `scale(0.9) translate(${offsetX}%, ${offsetY}%)`;
    })
})

cursorButton.forEach(buttoned => {
    buttoned.addEventListener("mouseleave", (e) => {
        cursorOutline.classList.remove("cursor-wrap");
        buttoned.classList.remove("cursor-glow");
        // cursorOutline.classList.remove('shrink-small');
    })
    buttoned.addEventListener("mousemove", (e) => {
        cursorOutline.classList.add("cursor-wrap");
        buttoned.classList.add("cursor-glow");
        // if (scaled.classList.contains("small")) {
        // cursorOutline.classList.remove("cursor-grow");
        // cursorOutline.classList.add('grow-small');
        // }
    })
})

// svgCircuit.addEventListener("mouseleave", (e) => {
//     svgCircuit.style.setProperty("--svg-color", "#00000000");
// })

// svgCircuit.addEventListener("mouseenter", (e) => {
//     svgCircuit.style.setProperty("--svg-color", "#ffffff60");
// })

