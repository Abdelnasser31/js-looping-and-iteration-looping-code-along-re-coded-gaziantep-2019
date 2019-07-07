// Code your solutions in this file

function writeCards (names, event){
  const messages = [];
  for (let i = 0 ; i < names.length ; i++){
    messages[i] = `Thanks ${names[i]} for your swift gift on this ${event} `;
  }
  return messages;
}