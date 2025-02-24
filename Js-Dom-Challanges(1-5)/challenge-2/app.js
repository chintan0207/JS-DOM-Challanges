const mainHeading = document.getElementById("mainHeading")
const buttons = document.querySelectorAll("button")

function changeColor(color){
    mainHeading.style.color = color
}

buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        const color = button.textContent.toLowerCase()
        if(color==="reset"){
            changeColor("black")
        }
        changeColor(color)
    })
})
