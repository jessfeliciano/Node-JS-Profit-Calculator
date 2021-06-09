///// Main BGS Subgrades Calculator \\\\\\\\

function calculator(){

    var centering = Number(document.getElementById("centering").value);
    var corners = Number(document.getElementById("corners").value);
    var edges = Number(document.getElementById("edges").value);
    var surfaces = Number(document.getElementById("surfaces").value);
  
    console.log(centering, corners, edges, surfaces)
  
    var subgradesArray = [centering, corners, edges, surfaces];
    subgradesArray.sort(function(a,b){return b-a;});
  
    var fourth = subgradesArray[3];
    var third = subgradesArray[2];
    var first = subgradesArray[0];
    var diff = third - fourth;
    var finalGrade = 0;
  
    console.log(finalGrade)
  
    if(diff==0){
      finalGrade = fourth;
      console.log(finalGrade)
  
    }
    else{
      // if fourth is edges or fourth is surface:
      if(fourth == edges || fourth == surfaces){
        // if diff <1:
        if(diff <1){
          finalGrade= fourth + 0.5;
        } else{
        if(diff == 1 && fourth + 1 >= 9.5){
          finalGrade = fourth + 0.5;
        } else if(first - fourth == 1.5 && first != 10){
          finalGrade= fourth + 0.5;
        }else{
          finalGrade= fourth +1.0;
          }
        }
      } else if(fourth == centering){
        if(diff < 2){
          finalGrade = fourth + 0.5;
        } else if(diff < 4){
          finalGrade = fourth + 1.0;
        } else{
          finalGrade = fourth + 1.5;
        }
      } else if(fourth == corners){
        if(diff <3){
          finalGrade = fourth + 0.5
        }
      } else{
        finalGrade = fourth + 1;
      }
    }
  
    console.log(finalGrade);
  
    document.getElementById("final-grade").innerHTML = finalGrade;
  
  }
  
  function resetCalculator(){
    document.getElementById("centering").value = "";
    document.getElementById("corners").value = "";
    document.getElementById("edges").value = "";
    document.getElementById("surfaces").value = "";
    document.getElementById("final-grade").innerHTML = "";
  
  }
  
  
  
  //Uglify the code using https://closure-compiler.appspot.com
  