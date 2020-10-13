const range = function(start, end , step){
  let result = [];

  let i = start;
  let num;
  
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0 ) {
    return result;
  }
  else {
    result.push(i);
    while (i <= end ){

      i += step;
      if(i <= end ){
      result.push(i);
      }

    }
    return result;
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));