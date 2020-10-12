const ageCalculator = function (name,dob,currYear){
  return `${name} is ${currYear - dob} years old.`;
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));