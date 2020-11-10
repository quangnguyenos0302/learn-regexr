const phoneNumber = [
  '123-456-789',
  '123 456 789',
  '123.456.789'
]

const sanitize = str => {
  return str.map(item => {
    return item.replace(/[-. ]/g, '');
  })
}

console.log(sanitize(phoneNumber));