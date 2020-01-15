//https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/solutions/javascript

function spEng(sentence){

 let english = "english"

 let first = 0

 let second = 0

  let lower = sentence.toLowerCase()

    for(let i = 0; i < sentence.length; i++){

        if(lower[i] == "e"){

          first = i

          console.log("first: ", lower[i], first, sentence.length)

          }

          if(lower[i] == "h"){

          second = i + 1

          console.log("second: ", sentence[i], second)

          }

          if(lower.substring(first, second) == english){

            return true;

            }



    }

    return false;


}

function spEng(sentence){

 let english = "english"

 let first = 0

 let second = 0

  let lower = sentence.toLowerCase()

    for(let i = 0; i < sentence.length; i++){

        if(lower[i] == "e"){

          first = i

          console.log("first: ", lower[i], first, sentence.length)

          }

          if(lower[i] == "h"){

          second = i + 1

          console.log("second: ", sentence[i], second)

          }

          if(lower.substring(first, second) == english){

            return true;

            }



    }

    return false;


}

