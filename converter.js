var kiloToGramm = 1000;
var metreToCm = 100;
var metreToMm = 1000;
var cmToMm = 10;
var weights = ["kg", "g"];
var lengths = ["m", "cm", "mm"];

check();

function failureHandler(){
  console.log("Something went wrong, try again!");
  process.exit();
}

/* process.argv[2] sollte immer die Zahl sein
   process.argv[3] sollte immer die Ausgangseinheit sein
   process.argv[4] sollte immer das "to" sein damit man weiß dass umgewandelt wird
   process.argv[5] sollte immer die zweite Einheit sein in die Umgewandelt wird.
*/
function correctSyntax(){
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
    switch(process.argv[3]){
      case "kg": 
                    switch(process.argv[5]){
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