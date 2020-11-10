const phoneNumber = '123-456-789';

function removeHyphens(str) {
  return str.replace(/-/g, '')
}

const newString = removeHyphens(phoneNumber);
console.log(newString);