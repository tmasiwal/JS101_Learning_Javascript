// PROBLEM 3
// Problem 3 : Given an array of numbers find the average of all the even numbers.
  let a=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
let con=0;
for(i=0;i<=a.length-1;i++){
  if(a[i]%2==0){
    sum=sum+a[i];
    con++
  }
}
console.log(sum/con)