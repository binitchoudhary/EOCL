if(true){
  var a= 10;
  let b= 20;
  const c =30;
  console.log(a);
  console.log(b);
  console.log(c);
}
try {
  console.log(b);
} catch (e) {
  console.log("Handled error");
}try {
  console.log(c);
} catch (e) {
  console.log("Handled error");
}

console.log("Still runs ✅");
console.log(a);
