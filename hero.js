const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const digits = "1234567890"
const specials = "!#@$%^&*|-_+=,.?/:\";'~`"
const brackets = "(){}[]<>"

const sources = [letters, digits, specials, brackets]

let hackInterval = null

document.querySelector("[data-hack]").onmouseover = e => {
  let iterations = 0
  let source = sources[Math.floor(Math.random() * sources.length)]

  clearInterval(hackInterval)

  hackInterval = setInterval(() => {
    e.target.innerText = e.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return e.target.dataset.value[index]
        }

        return source[Math.floor(Math.random() * source.length)]
      })
      .join("")

    if (iterations >= e.target.dataset.value.length) {
      clearInterval(hackInterval)
    }

    iterations += 1 / 3
  }, 25)
}
