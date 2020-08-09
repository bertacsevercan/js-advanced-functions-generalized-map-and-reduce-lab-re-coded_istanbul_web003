// Add your functions here
function map(src, func) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(func(src[i]));
    }
    return r
  }

function reduce(src, func, point){
    if(point === undefined){
      point = src[0];
      for (let i = 1; i < src.length; i++){
        
          
          point = func(src[i], point);
        }
        
        
      }
      
      else if (point !== undefined){
        for (let i = 0; i < src.length; i++){
        
          
          point = func(src[i], point)
        
      }
    }
    return point
    }
sourceArray = [1, 2, true, "razmatazz"]
console.log(reduce(sourceArray, function(a, memo){ return !!a && !!memo}))
// prints false
// "reduce returns true when all values are true" => This is the test I can't pass.,

console.log(reduce([1,2,3], function(e, memo){return e + memo},100))