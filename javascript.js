// Sleep function for javascript

function sleep(miliseconds){
  var startTime = new Date().getTime();
  while (new Date().getTime() < startTime + miliseconds);
}

// sleep(1000);
