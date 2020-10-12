const finalPosition = function (moves) {
  // Your code in here ...
  let x = 0;
  let y = 0;
  for( let move of moves){
    if (move === 'north'){
      y += 1;
    }
    else if (move === 'south'){
      y -= 1;
    }
    else if (move === 'west'){
      x -= 1;
    }
    else if(move === 'east'){
      x += 1;
    }
    else{
      return 'Wrong move';
    }
  }

  let finalPos = [x,y];
  return finalPos;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));