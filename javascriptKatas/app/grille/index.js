const grille = (message, code) => {
  if (message.length === 0) {
    return ''
  }

  let binary = code.toString(2)

  binary = binary.length < message.length 
    // Pad binary out with 0's if required
    ? `${'0'.repeat(message.length - binary.length)}${binary}`
    // Otherwise make sure binary is not too long
    : binary.slice(binary.length-message.length)

  return message.split('').filter( (character, idx) => binary[idx] === '1').join('')
}

module.exports = {
  grille
}