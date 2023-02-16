const present = new Date()

console.log(present.getDay());

console.log('getFullYear:', present.getFullYear());
console.log('getMonth:', present.getMonth() + 1); // zero based
console.log('getDate:', present.getDate()); // dia do mes
console.log('getDay:', present.getDay() + 1); // dia da semana é zero based (começa no zero)
console.log('getHours:', present.getHours());
console.log('getMinutes:', present.getMinutes());
console.log('getSeconds:', present.getSeconds());

console.log('timeStamp: ', present.getTime());

console.log('toDateString', present.toDateString());
console.log('toTimeString', present.toTimeString());
console.log('toLocaleString', present.toLocaleString());