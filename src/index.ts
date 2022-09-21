/**
 * The program shows how to get input
 *   and deal with numbers
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-09-21
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

// Dice number
const DICE_NUMBER = Math.floor(Math.random() * 6 + 1)
let userNumberInt = 0

while (userNumberInt !== DICE_NUMBER) {
  // Input userNumber
  const userNumber = prompt('Guess a number between 1 to 6: ')
  userNumberInt = parseInt(userNumber)

  // Checks if the user's guess matches with the dice number
  if (userNumberInt === DICE_NUMBER) {
    console.log('You are correct!')
    break
  } else if (userNumberInt > DICE_NUMBER) {
    console.log('Too high!')
  } else if (userNumberInt < DICE_NUMBER) {
    console.log('Too low!')
  } else {
    console.log('Invalid Input.')
    break
  }

  console.log('Guess again.\n')
}

console.log('\nDone.')
