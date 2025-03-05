function updateDigitalClock(){
const digitalClockElement = document.querySelector(".digital-clock")
const dateElement = document.querySelector(".date")

const now = new Date()

const hours = now.getHours() % 12 || 12
const minutes = now.getMinutes().toString().padStart(2,"0")
const seconds = now.getSeconds().toString().padStart(2,"0")
const ampm = now.getHours() > 12 ? "PM":"AM"
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
digitalClockElement.textContent =  `${hours}:${minutes}:${seconds} ${ampm}`
dateElement.textContent = now.toLocaleDateString(undefined,options)  

}

setInterval(updateDigitalClock,1000)
updateDigitalClock()

function updateAnalogClock() {
    const hourHand = document.querySelector(".hand.hour");
    const minuteHand = document.querySelector(".hand.minute");
    const secondHand = document.querySelector(".hand.second");
  
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourRotation = (hours % 12) * 30 + (minutes / 60) * 30; // 30° per hour
    const minuteRotation = minutes * 6 + (seconds / 60) * 6;      // 6° per minute
    const secondRotation = seconds * 6;                           // 6° per second
  
    hourHand.style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondRotation}deg)`;
  }
  
  updateAnalogClock();
  setInterval(updateAnalogClock, 1000);
  