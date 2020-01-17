



/*ex   2.  Given an array of nested arrays. Write a recursive function
that flattens it. (Hint create function that concats arrays).*/

function flatten(array) {
    return array.reduce(function(acc, b) {
             return acc.concat( Array.isArray(b) ? flatten(b) : b);
    }, []);
  }
  var arr =[1, [3, 4, [1, 2]], 10];
  var arr1=[14, [1, [[[3, []]], 1], 0]];
  console.log(flatten(arr1))
  console.log(flatten(arr))