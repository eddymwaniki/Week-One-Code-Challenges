//Speed Governor
function speedDetector(speed){
    const speedlimt = 70;
    let points = 0;
    const maxPoint = 12;

if(speed <= speedlimt){console.log  ("OK");} //Prints OK if speed is 70 and below 
else { points =  Math.floor((speed - speedlimt) / 5); // Calculates points if speed is above 70

if(points >= maxPoint) {console.log ("License suspended!")} // Suspends license for points 12 and above
else { console.log(`Demerit ${points} points!`)} // Demerits for points below  12
}

}
//Examples
 speedDetector(75); //Will return  Demerit 1 points!
 speedDetector(95); //Will return Demerit 5 points!
 speedDetector(180); //Will return License suspended!
 speedDetector(65); //Will return OK

