// Code your solutions in this file
function countDown(num){
  while(num > -1){
    console.log(num--);
  }
}

function writeCards(names, term) {
  let array = []
  for (let i=0; i<names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful ${term} gift!`);
  }
  return array;
}
