//Speed Governor
function speedDetector(speed){
    const speedlimt = 70;
    let points = 0;
    const maxPoint = 12;

if(speed <= speedlimt){console.log  ("OK");}
else { points =  Math.floor((speed - speedlimt) / 5);

if(points >= maxPoint) {console.log ("License suspended!")}
else { console.log(`Demerit ${points} points!`)} 
}

}

 speedDetector(75);
 speedDetector(95);
 speedDetector(180);
 speedDetector(65);

