function average(scores) {
  //add all scores togheter
  var total = 0; 
  scores.forEach(function(scores){
    total +=scores;
  });
  //divide scores
  var avg= total/scores.length
  //round avarage
  return Math.round(avg);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));