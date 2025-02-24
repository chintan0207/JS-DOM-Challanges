const nameInput = document.getElementById("nameInput")
const jobInput = document.getElementById("jobInput")
const ageInput = document.getElementById("ageInput")
const bioInput = document.getElementById("bioInput")
const nameDisplay = document.getElementById("nameDisplay")
const jobDisplay = document.getElementById("jobDisplay")
const ageDisplay = document.getElementById("ageDisplay")
const bioDisplay = document.getElementById("bioDisplay")

function updateElement(fieldInput,dispaly){
     dispaly.textContent = fieldInput.value.trim() || "Not Provided"
}

nameInput.addEventListener("input",() => updateElement(nameInput,nameDisplay))
jobInput.addEventListener("input",() => updateElement(jobInput,jobDisplay))
ageInput.addEventListener("input",() => updateElement(ageInput,ageDisplay))
bioInput.addEventListener("input",() => updateElement(bioInput,bioDisplay))
