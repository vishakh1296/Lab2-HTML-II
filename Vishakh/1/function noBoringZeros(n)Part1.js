
function noBoringZeros(n)
{
  var strnk = n.toString()
  var arr1 = strnk.split('')
  
              if (arr1[0] === '0')
              {
                return parseInt(arr1.join(''))
               }
              for (var i = arr1.length-1; i > 0; i--)
              {
              if (arr1[i] === '0' )
              {
                arr1.splice(i,1)
              } 
              else 
              {
              return parseInt(arr1.join(''))
              }
  }
}

noBoringZeros(502000)
noBoringZeros(0)
noBoringZeros(681056000)


function noBoringZerosAlso(n) {
  while(n%10==0 && n!=0){n/=10;}
  return n;
}



noBoringZerosAlso(6484002371200)