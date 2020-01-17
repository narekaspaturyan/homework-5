/*4. Given an array and a number N. Write a recursive
function that rotates an array N places to the left. (Hint: to
add element to the beginning use arr.unshift())*/


var myArr=["a","b","c","d","e","f","g","h"];
var myNum = -2;

function rotate(array,rotateCount) {
   if (rotateCount === 0) {
     return array
   } else if(rotateCount>0){
     var firstItem = array.shift();
     array.push(firstItem)
     return rotate(array, rotateCount - 1)
   } 
    if(rotateCount<0){
      var lastItem=array.pop();
      array.unshift(lastItem)
       return rotate(array, rotateCount +1)
    }
}

console.log(rotate(myArr, myNum))