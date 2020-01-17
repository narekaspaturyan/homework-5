/*Given an object. Invert it (keys become values and values
become keys). If there is more than key for that given value
create an array.*/



var invertKeyValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, key) => {
    var val = fn ? fn(obj[key]) : obj[key];
    acc[val] = acc[val] || [];
    acc[val].push(key);
    return acc;
  }, {});
console.log(invertKeyValues({ a: '1', b: '2', }));
console.log(invertKeyValues({ a: "1", b: '2', c: "2",d:"2" }, value =>  value));














