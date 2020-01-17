function removeDuplicateWords (s) {
  // your perfect code...
   let arr1 = s.split(' ')
 arr1 = arr1.filter(function(elem,index){
     return arr1.indexOf(elem) == index
 })
return arr1.join(' ')

}

removeDuplicateWords('vishakh vishakh is is a student in confederation college ') 
