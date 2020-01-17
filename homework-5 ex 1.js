

/* Given an array. Write a recursive function that removes the
first element and returns the given array. (without using
arr.unshift(),assign second element to first, third element to
second...)*/


var arr=[6, 78, "n", 0, 1]

function rem(arr){
    var res=[];
    if(!this.index)  
        this.index = 0; 
    if(arr.length>1){
        if (this.index<arr.length-1){
            arr[this.index]=arr[this.index+1];
            this.index++;
            return rem(arr);
        }
        else{
            arr.length--;
            return arr;
        }
     }
        return res;
     }
    
    console.log(rem(arr))