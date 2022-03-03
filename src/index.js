//This is script is based on generating an Hex Code and then converting it to RGB and taking the color name
//Also, on ntc.js we use the Name That Color "extention" by Chirag Mehta

let charSet = "ABCDEF1234567890"
let body = document.querySelector('body')
let display = document.getElementById('display')
let hexElement = document.getElementById('hex') //Element for the Hex Code
let rgbElement = document.getElementById('rgb') //Element for the RGB Code
let nameElement = document.getElementById('name') //Element for the Color Name
let hexColor = ""

//Generate a random HEX code for further use
function generateRandomHex() {
   for (let i = 0, n = charSet.length; i < 6; i++) {
      hexColor += charSet.charAt(Math.floor(Math.random() * n))
   }

   console.log(hexColor)
   body.style.backgroundColor = `#${hexColor}`
   display.style.backgroundColor = `#${hexColor}`
}

//Convert hex to rgb
function getRgbColor(hex) {
   let newHex = ""
   //To separate Red, Green and Blue in the Hex code
   for (let i = 0; i < hex.length; i++) {
      if (i == 2 || i == 4) {
         newHex += '.'
      }
      newHex += hex[i]
   }

   let hexArray = newHex.split('.')

   //These arrays serve to separate each digit in the color inside the Hex Code
   //So we divide them to make the calculations
   let redHexArray = hexArray[0].split("")
   let greenHexArray = hexArray[1].split("")
   let blueHexArray = hexArray[2].split("")


   //Here we make the calculations and return the RGB array to use it on showing the data on the screen
   let redInRGB = decimalCalculation(redHexArray)
   let greenInRGB = decimalCalculation(greenHexArray)
   let blueInRGB = decimalCalculation(blueHexArray)
   
   let rgbArray = [redInRGB, greenInRGB, blueInRGB]
   return rgbArray
}

//Calculate each color in Hex code and convert it to its corresponding RGB code 
//Example => FF => 15 15 => ((15 * 16) + (15 * 1)) => 255
//          Hex                                       rgb
function decimalCalculation(array) {
   let firstHexInDecimalCode = hexToDecimal(array[0])
   let secondHexInDecimalCode = hexToDecimal(array[1])

   let colorDecimal = ((firstHexInDecimalCode * 16) + (secondHexInDecimalCode * 1))
   return colorDecimal
}

//Get each hex character code
function hexToDecimal(char) {
   let stringChar = char.toString()
   switch (stringChar) {
      case 'A':
         return 10
      case 'B':
         return 11
      case 'C':
         return 12
      case 'D':
         return 13
      case 'E':
         return 14
      case 'F':
         return 15
      case '1':
         return 1
      case '2':
         return 2
      case '3':
         return 3
      case '4':
         return 4
      case '5':
         return 5
      case '6':
         return 6
      case '7':
         return 7
      case '8':
         return 8
      case '9':
         return 9
      case '0':
         return 0
   }
}

//Display data on screen
function generateMessages(hexCode, rgbCode){
   hexElement.innerHTML = `#${hexCode}`
   rgbElement.innerHTML = `rgb(${rgbCode[0]}, ${rgbCode[1]}, ${rgbCode[2]})`
   
   var n_match = ntc.name(hexCode)
   nameElement.innerHTML = n_match[1]
}

//Generate Button Function
function reloadPage(){
   document.location.reload()
}

//Function to copy both hex and rgb codes
function copyText(text){
   navigator.clipboard.writeText(text).then(() => {
      alert("Code copied to clipboard!")
   }).catch(() => {
      alert("Error")
   })
}

generateRandomHex()
generateMessages(hexColor ,getRgbColor(hexColor))