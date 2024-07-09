let globalVar = "I'm global";

function demos_cope(params) {
 let localVar = "I'm local"
console.log(globalVar);
console.log(localVar);
}

demo_scope();
console.log(globalVar);
// console.log(localVar);
