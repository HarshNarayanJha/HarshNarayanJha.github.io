const mainTimeline = gsap.timeline({ duration: 1 })

mainTimeline.from("li i.bx", {
  scale: "0",
  opacity: 0,
  ease: "back",
  delay: "<0.5",
  stagger: 0.25,
})

const scrollTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "article.card-hello",
    start: "top 60%",
    end: "120% 50%",
    scrub: 2,
    pin: "#section-hero",
    anticipatePin: 1,
    // toggleActions: "restart none none none",
    markers: false,
  },
})

scrollTimeline.from("article.card-hello", {
  duration: 1,
  filter: "blur(10px)",
  autoAlpha: 0,
  x: "-100%",
})

////// Education Horizontal Scroll

const educations = document.querySelector("div.educations")

if (educations) {
  function getEducationScrollAmount() {
    let educationsWidth = educations.scrollWidth
    return -(educationsWidth - window.innerWidth / 1.5)
  }

  const educationsAnimation = gsap.to(educations, {
    x: getEducationScrollAmount,
    duration: 3,
    ease: "none",
  })

  ScrollTrigger.create({
    trigger: "section#section-education",
    start: "top 20%",
    end: () => `+=${getEducationScrollAmount() * -1}`,
    pin: true,
    animation: educationsAnimation,
    scrub: 2,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    markers: false,
  })
}

// Typer

const typer = new TypeIt(".text-typed", {
  speed: 45,
  startDelay: 3000,
  loop: true,
  lifeLike: true,
})
  .pause(2500)
  .type(" Rest Your decide!")
  .pause(3000)
  .move(-10)
  .pause(250)
  .move(-50)
  .pause(250)
  .options({ speed: 5 })
  .move(null, { to: "END" })
  .delete()
  .go()

const typedText = document.querySelector(".text-typed")
typedText.addEventListener("mouseenter", () => {
  typedText.classList.add("text-muted")
  typer.freeze()
})
typedText.addEventListener("mouseleave", () => {
  typedText.classList.remove("text-muted")
  typer.unfreeze()
})
