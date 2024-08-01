const settingsButton = document.querySelector("#settings-icon")
const settingsDropdown = document.querySelector(".settings-dropdown")

const darkModeSwitch = settingsDropdown.querySelector("input[name='dark-mode']")

// Header
settingsButton.addEventListener("click", () => {
  settingsDropdown.classList.toggle("show")
})

const setDarkMode = on => {
  if (on) {
    document.querySelector("html").dataset.theme = "dark"
    darkModeSwitch.checked = true
  } else {
    document.querySelector("html").dataset.theme = "light"
    darkModeSwitch.checked = false
  }
}

const toggleDarkMode = () => {
  if (document.querySelector("html").dataset.theme == "dark") {
    setDarkMode(false)
  } else {
    setDarkMode(true)
  }
}

// Dark Light Mode Shortcut
window.addEventListener("keydown", e => {
  if (e.shiftKey && e.key === "D") {
    if (e.defaultPrevented) {
      return // Do nothing if the event was already processed
    }

    toggleDarkMode()
  }
})

darkModeSwitch.addEventListener("change", e => {
  const darkModeOn = e.target.checked
  setDarkMode(darkModeOn)
})
