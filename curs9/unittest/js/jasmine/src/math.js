function helloWorld(){
    return "Hello World";
}

function sum(a,b){
    a = a * 100;
    b = b * 100;
   let s = a + b;
   s = s / 100;
   return Number(s.toFixed(2));
}