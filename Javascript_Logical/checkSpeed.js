/*
speedLimit= 70
<70 = 'OK'
70-74 = 'OK'
75 = 'point: 1'
76 = 'point: 1'
77 = 'point: 1'
78 = 'point: 1'
79 = 'point: 1'
80 = 'point: 2'
80-84 = 'point: 2'
85 = 'point: 3'
....
125 = 'point: 11'
130 = 'License Suspended'


*/
function checkSpeed(speed){
  const speedLimit = 70;
  const kmPerPoint = 5;
if(speed < speedLimit + kmPerPoint) 
  return 'OK';
  
  const points = Math.floor((speed-speedLimit) / kmPerPoint);
  if(points >= 12)
    return 'License Suspended';
  else
    return 'point: '+points;


}
console.log(checkSpeed(125));
