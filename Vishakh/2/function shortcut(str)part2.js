function shortcut(str){

  let vowels = 'aeiouAEIOU'; remov = '';
  for(let i = 0; i < str.length; i++){
    if(vowels.indexOf(str[i]) === -1){
      remov += str[i];
    }
  }
  return remov;


}
shortcut('Hello, This is Vishakh ');