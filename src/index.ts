/**
 * Dice Game
 * The program is a game where the user
 * guesses the rolled number
 *
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-09-21
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

// Constants
const MIN = 1
const MAX = 6
const DICE_NUMBER = Math.floor(Math.random() * MAX + MIN)

// Variables
let userNumberInt = 0
let tries = 0

while (userNumberInt !== DICE_NUMBER) {
  // Tracks the amount of tries
  tries += 1

  // Input userNumber
  const userNumber = prompt('Guess a number between 1 to 6: ')
  userNumberInt = parseInt(userNumber)

  if (!(userNumberInt < MIN || userNumberInt > MAX)) {
    // Checks if the user's guess matches with the dice number
    if (userNumberInt === DICE_NUMBER) {
      console.log('You are correct!')
      console.log(`It took you ${tries} tries.`)
      break
    } else if (userNumberInt > DICE_NUMBER) {
      console.log('Too high!')
    } else if (userNumberInt < DICE_NUMBER) {
      console.log('Too low!')
    } else {
      console.log('Invalid Input.')
      break
    }
  } else {
    console.log('The guess must be a number 1 to 6.')
  }

  console.log('Guess again.\n')
}

console.log('\nDone.')
