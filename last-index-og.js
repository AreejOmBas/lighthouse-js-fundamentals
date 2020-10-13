let lastIndexOf = function (arr,i){
  let result = -1;
  if ( arr.length === 0 ){
    return result;
  }
  else {
    for(let y = 0 ; y < arr.length ; y++){
      if (arr[y] === i)
        result = y;
    }
    return result;
  }

}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);