setTimeout(() => {
  Hello();
}, 5000);



function Hello() {

console.log('timeout');

setTimeout(() => {
  Hello();
}, 5000);
 }

