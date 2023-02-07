// PROBLEM 2
// Problem 2 : Given a character in lower case print the upper case character
let a=["a","b","c","d","e","f","G","h","I","j","K","l","M","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let b=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
for(i=0;i<=a.length;i++){
  if(a[i]!=b[i]){
    a[i]=b[i];
  }
}
  console.log(a)

