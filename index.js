/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInput = document.getElementById("user-input")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function () {
    const userInputValue = Number(userInput.value)
    
    lengthEl.textContent = `${userInputValue} meters = ${ (userInputValue * 3.281).toFixed(3) } feet | ${userInputValue} feet = ${ (userInputValue / 3.281).toFixed(3) } meters`
    
    volumeEl.textContent = `${userInputValue} liters = ${ (userInputValue * 0.264).toFixed(3) } gallons | ${userInputValue} gallons = ${ (userInputValue / 0.264).toFixed(3) } liters`
    
    massEl.textContent = `${userInputValue} kilograms = ${ (userInputValue * 2.204).toFixed(3) } pounds | ${userInputValue} pounds = ${ (userInputValue / 2.204).toFixed(3) } kilograms`
})