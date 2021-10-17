let statistics = { 
  redCars: 21,
  blueCars: 45, 
  greenCars: 12,
  raceCars: 5, 
  blackCars: 40,
  rareCars: 2
}

// return property if its name starts with 'r' or if its value is odd 
for (property in statistics){
  if(property[0] == 'r' || statistics[property] % 2 == 1){
    console.log(statistics[property]);
  }
}