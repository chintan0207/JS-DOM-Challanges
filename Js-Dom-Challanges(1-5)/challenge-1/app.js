const bulb = document.getElementById("bulb")
const toggleButton = document.getElementById("toggleButton")
const status = document.getElementById("status")
const body = document.getElementById("body")

toggleButton.addEventListener("click",()=>{
    body.classList.toggle("dark-mode")
    bulb.classList.toggle("off")
    toggleButton.textContent =
    toggleButton.textContent === "Turn On" ? "Turn Off":"Turn On"
    status.textContent = 
    status.textContent === "Status: Off" ? "Status: On":"Status: Off"
})