
var myList=[
  { book: "Catcher in the Rye", readStatus: true, percent: 40},
  { book: "Animal Farm", readStatus: true, percent: 20},
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 } ,
  { book: "After Dark", readStatus: true, percent: 70 },
  ];


function compare(a, b) {
if (a.percent > b.percent ) {
  return -1
}
if (a.percent < b.percent) {
  return 1;
}
return 0
}

var result=[];

var x= (myList.sort(compare))

for(var i=0;i<x.length;i++){
  if (x[i].readStatus===true){
   result.push(x[i].book)
  }

}

console.log(result)



