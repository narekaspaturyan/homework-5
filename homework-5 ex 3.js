

 /*  Given a number. Write a function that calculates its sum of
the digits and if that sum has more than 1 digit find the sum of
digits of that number. Repeat that process if needed and return
the result.  */



function sumDigit(value){
    var sum=0
    while (value>0) {
      sum += value % 10;  
      value = Math.floor(value / 10);  
      
    }
    return sum
  }
  
  function act1(value){
    var value1 = value
    while(value1>9){
    value1=sumDigit(value1);
      
    }
    return value1
  }
  console.log(act1(14))
  console.log(act1(29))
  console.log(act1(999999999999))
  