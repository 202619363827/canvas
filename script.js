// let a=23;
// console.log("print",a);   



// function exampleVar() {
//     if (true) {
//       var x = 10;
//     }
    
//     console.log(x); // Outputs 10
//   }
  
//   exampleVar();






//   In this example, the variable x is declared using var within an if block, but it is still accessible outside of that block. This is because var is function-scoped, so it's available throughout the entire exampleVar function.  



//using let
function exampleLet() {
    if (true) {
      let y = 20;
    }
    
    console.log(y); // Error: y is not defined
  }
  
  exampleLet();
  





//   In this example, the variable y is declared using let within an if block, and it is not accessible outside of that block due to block-scoping. Attempting to access it outside of the block results in an error.

// The key takeaway is that var is function-scoped, while let is block-scoped. This means let variables are limited to the specific block they are declared in, making your code more predictable and less prone to unintended side effects.