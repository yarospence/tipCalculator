/* BUILD A TIP CALCULATOR APP
 These are the functions you must use
 ======================================
 calculateBill()
 increasePeople()
 decreasePeople()
(these functions are from the HTML onclick="") */

//bill input, tip input, number of people div, 
//calculate the total bill per person div, and get per person total
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billInput.value)
  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercent = Number(tipInput.value) / 100
  const tipAmount = bill * tipPercent
  const total = tipAmount + bill
  const perPersonTotal = total / numberOfPeople
  // update the perPersonTotal on DOM & show it to user
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2).toLocaleString(`en-US`)}`
}
// splits the bill between more people
const increasePeople = () => {
  // increment the amount
  numberOfPeople += 1
  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople
  calculateBill()
}
// splits the bill between fewer people
const decreasePeople = () => {
//now we need to limit a negative number of People from being an option
  if (numberOfPeople <= 1) {
    return
  }
  //now we need to decrease numberOfPeople
  numberOfPeople -= 1
  //update the DOM with new information
  numberOfPeopleDiv.innerText = numberOfPeople
  calculateBill()
}