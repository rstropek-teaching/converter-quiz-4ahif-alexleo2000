var kiloToGramm = 1000;
var metreToCm = 100;
var metreToMm = 1000;
var cmToMm = 10;
var weights = ["kg", "g"];
var lengths = ["m", "cm", "mm"];

check();

function failureHandler(){
  // Change the message to "Invalid parameters" as this was the specified error message.
  // The unit tests check for this message. If you change the message, many unit tests
  // will become green.
  console.log("Something went wrong, try again!");
  process.exit();
}

/* process.argv[2] sollte immer die Zahl sein
   process.argv[3] sollte immer die Ausgangseinheit sein
   process.argv[4] sollte immer das "to" sein damit man weiß dass umgewandelt wird
   process.argv[5] sollte immer die zweite Einheit sein in die Umgewandelt wird.
*/
function correctSyntax(){
  // Remember the rule: Don't repeat yourself. In this case, you have four identical calls
  // to `failureHandler`. Why not combining all `if` expressions in a single `if` statement
  // and combining them using logical OR (`||`)?
  if(isNaN(process.argv[2])){
    failureHandler();
  }
  if(!isIn(process.argv[3])){
    failureHandler();
  }
  if(process.argv[4] != "to"){
    failureHandler();
  }
  if(!isIn(process.argv[5])){
    failureHandler();
  }
}

function isIn(param){
  // Note that JavaScript offers a `find` method for arrays
  // (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
  // you could simplify your code using this method.
  for(var j = 0; j<lengths.length; j++){
    if(param == lengths[j]){
      return true;
      break;
    }
  }
  for(var i = 0; i<weights.length; i++){
    if(param == weights[i]){
      return true;
      break;
    }
  }

  return false;
}


function check(){
    correctSyntax();
    // General comment: Remember "don't repeat yourself". Your `case` blocks look extremely similiar.
    // You could try to create a solution where at least parts of the similar code pieces are only written once.
    switch(process.argv[3]){
      case "kg": 
                    switch(process.argv[5]){
                      // You should add a whitespace (blank) between the number and the unit. That will turn
                      // many tests green.
                      case "kg": console.log(process.argv[2]+process.argv[3]+" are "+process.argv[2]+process.argv[5]);break;

                      case "g": console.log(process.argv[2]+process.argv[3]+" are "+process.argv[2]*kiloToGramm+process.argv[5]); break;

                      failureHandler();
                    }
                  
      break;
      
      case "g": 
                  switch(process.argv[5]){
                    
                      case "kg": console.log(process.argv[2]+process.argv[3]+" are "+process.argv[2]/kiloToGramm+process.argv[5]); break;

                      case "g": console.log(process.argv[2]+process.argv[3]+" are "+process.argv[2]+process.argv[5]); break;

                      failureHandler();
                    }
      
      
      break;

      case "m":
                    switch(process.argv[5]){
                      case "m": console.log(process.argv[2]+process.argv[3]+" are "+process.argv[2]+process.argv[5]); break;

                      case "cm": console.log(process.argv[2]+process.argv[3]+" are "+process.argv[2]*metreToCm+process.argv[5]); break;

                      case "mm": console.log(process.argv[2]+process.argv[3]+" are "+process.argv[2]/metreToMm+process.argv[5]); break;
                    }
      break;

      case "cm":
                    switch(process.argv[5]){
                      case "m": console.log(process.argv[2]+process.argv[3]+" are "+process.argv[2]/metreToCm+process.argv[5]); break;

                      case "cm": console.log(process.argv[2]+process.argv[3]+" are "+process.argv[2]+process.argv[5]); break;

                      case "mm": console.log(process.argv[2]+process.argv[3]+" are "+process.argv[2]*cmToMm+process.argv[5]); break;
                    }
      break;

      case "mm":
                    switch(process.argv[5]){
                      case "m": console.log(process.argv[2]+process.argv[3]+" are "+process.argv[2]/metreToMm+process.argv[5]); break;

                      case "cm": console.log(process.argv[2]+process.argv[3]+" are "+process.argv[2]/cmToMm+process.argv[5]); break;

                      case "mm": console.log(process.argv[2]+process.argv[3]+" are "+process.argv[2]+process.argv[5]); break;
                    }
    }
    
    
    
}

process.exit();
