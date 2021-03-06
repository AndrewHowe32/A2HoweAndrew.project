/*
// This pops up a prompt asking the user to input their first name
let user = prompt('What is your first name')

// This pops up a prompt asking the user to input the state they are in
let state = prompt('Are you in NE or FL?')

// This pops up a prompt asking the user to input the temperature where they are
let temp = Number(prompt('What is the temperature in the state you are in, degrees farenheit?'))

// This creates an array that holds the appropriate messages dependant on the location and temperature the user inputs
let message = ["Wear a warm coat, hat, scarf, and gloves.", "Wear a warm coat but you won't need a hat, scarf or gloves.", "Wear your warmest coat, a warm hat, a scarf, and warm gloves.", "Wear a warm coat, hat and gloves. Maybe a scarf too."]

// The following code determines what message should be displayed depending on the state and the weather the user inputted
// This displays the users name and the first message in the array if the user is in NE and the temperature is less than 32 degrees farenheit
if (state === 'NE' && temp < 32) {
  console.log(`${user}, ${message[0]}`)
} 

// This displays the users name and the second message in the array if the user is in NE and the temperature is above 32 degrees farenheit, but less than 50
else if (state === 'NE' && temp >= 32 && temp < 50) {
  console.log(`${user}, ${message[1]}`)
} 

// This displays the users name and the third message in the array if the user is in FL and the temperature is above 32 degrees farenheit, but less than 50
else if (state === 'FL' && temp >= 32 && temp < 50) {
  console.log(`${user}, ${message[2]}`)
} 

// This displays the users name and the fourth message in the array if the user is in FL and the temperature is above 50 degrees farenheit, but less than 70
else if (state === 'FL' && temp >= 50 && temp < 70) {
  console.log(`${user}, ${message[3]}`)
}
*/