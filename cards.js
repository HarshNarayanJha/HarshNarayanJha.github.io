// Cards
const handleCardGlow = e => {
  const { currentTarget: target } = e

  const rect = e.target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top

  e.target.style.setProperty("--mouse-x", `${x}px`)
  e.target.style.setProperty("--mouse-y", `${y}px`)
}

const cards = document.querySelectorAll("article")

cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    handleCardGlow(e)
  })
})

// Project Card
const projectCards = document.querySelectorAll("article.project-card")
projectCards.forEach(card => {
  card.addEventListener('click', e => {
    const url = card.dataset.to;
    window.open(url, '_blank').focus()
  })
})
