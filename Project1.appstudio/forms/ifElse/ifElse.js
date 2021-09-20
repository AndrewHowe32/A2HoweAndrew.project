let state = prompt('Are you in NE or FL?')
let temp = Number(prompt('What is the temperature in the state you are in, degrees farenheit?'))
let message = ["Wear a warm coat, hat, scarf, and gloves.", "Wear a warm coat but you won't need a hat, scarf or gloves.", "Wear your warmest coat, a warm hat, a scarf, and warm gloves.", "Wear a warm coat, hat and gloves. Maybe a scarf too."]

if (state === 'NE' && temp < 32) {
  console.log(`${message[0]}`)
} else if (state === 'NE' && temp >= 32 && temp < 50) {
  console.log(`${message[1]}`)
} else if (state === 'FL' && temp >= 32 && temp < 50) {
  console.log(`${message[2]}`)
} else if (state === 'FL' && temp >= 50 && temp < 70) {
  console.log(`${message[3]}`)
}