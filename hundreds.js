const howManyHundreds = function (num){
  if ( num < 100 ){
    return 0;
  }
  else {
    return (Math.floor( num / 100))
  }
}