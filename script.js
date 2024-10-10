const cursorDot = document.querySelector("[data-cursor-dot]")
const cursorOutline = document.querySelector("[data-cursor-outline]")

// Things which react to cursor
const scaleCursorElems = document.querySelectorAll(".scale-cursor")
const buttonCursorElems = document.querySelectorAll(".button-cursor")
const cardCursorElems = document.querySelectorAll(".card-cursor")
const linkCursorElems = document.querySelectorAll(".link-cursor")
const textCursorElems = document.querySelectorAll(".text-cursor")

// Cursor
window.addEventListener("keydown", e => {
  if (e.key === "Control") {
    document.body.style.cursor = "unset"
    document.querySelector(".link-cursor").style.cursor = "unset"
    document.querySelector(".cursor-outline").style.opacity = 0
  }
})

window.addEventListener("keyup", e => {
  if (e.key === "Control") {
    document.body.style.cursor = "none"
    document.querySelector(".cursor-outline").style.opacity = 1
  }
})

var posX = 0
var posY = 0

window.addEventListener("mousemove", e => {
  posX = e.clientX
  posY = e.clientY
})

gsap.to({}, 0.016, {
  repeat: -1,

  onRepeat: () => {
    gsap.set(cursorOutline, {
      css: {
        left: posX,
        top: posY,
      },
    })
    gsap.set(cursorDot, {
      css: {
        left: posX,
        top: posY,
      },
    })
  },
})

// Cursor Reactions
scaleCursorElems.forEach(scaled => {
  scaled.addEventListener("mouseleave", e => {
    cursorOutline.classList.remove("cursor-grow")
    cursorOutline.classList.remove("grow-small")
  })
  scaled.addEventListener("mouseenter", e => {
    cursorOutline.classList.add("cursor-grow")
    if (scaled.classList.contains("small")) {
      cursorOutline.classList.remove("cursor-grow")
      cursorOutline.classList.add("grow-small")
    }
  })
})

textCursorElems.forEach(text => {
  text.addEventListener("mouseleave", e => {
    cursorOutline.classList.remove("cursor-text")
    cursorOutline.classList.remove("cursor-text-small")
  })
  text.addEventListener("mouseenter", e => {
    cursorOutline.classList.add("cursor-text")
    if (text.classList.contains("small")) {
      cursorOutline.classList.remove("cursor-text")
      cursorOutline.classList.add("cursor-text-small")
    }
  })
})

linkCursorElems.forEach(link => {
  link.addEventListener("mouseleave", e => {
    cursorOutline.classList.remove("cursor-glow")
    link.classList.remove("text-glow")
    link.style.transform = `translate(0px, 0px)`
  })
  link.addEventListener("mousemove", e => {
    cursorOutline.classList.add("cursor-glow")
    link.classList.add("text-glow")

    const offsetX = e.clientX - link.getBoundingClientRect().x - link.getBoundingClientRect().height / 2
    const offsetY = e.clientY - link.getBoundingClientRect().y - link.getBoundingClientRect().width / 2

    link.style.transform = `scale(0.9) translate(${offsetX / 1.5}%, ${offsetY / 1.5}%)`
  })
})

buttonCursorElems.forEach(buttoned => {
  buttoned.addEventListener("mouseleave", e => {
    cursorOutline.classList.remove("cursor-wrap")
    buttoned.classList.remove("text-glow")
  })
  buttoned.addEventListener("mouseenter", e => {
    cursorOutline.classList.add("cursor-wrap")
    buttoned.classList.add("text-glow")
    // }
  })
})

cardCursorElems.forEach(card => {
  card.addEventListener("mouseleave", e => {
    cursorOutline.classList.remove("cursor-wrap")
  })
  card.addEventListener("mouseenter", e => {
    cursorOutline.classList.add("cursor-wrap")
    // }
  })
})
