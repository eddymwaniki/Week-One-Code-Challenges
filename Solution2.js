//Speed Detecrtor check
function speedDetector(speed){
    const speedlimt = 70;//max speed
    let points = 0//How many points u have left
    const maxPoint = 12//max points
if(speed < speedlimt){// if the speed it lower that the speed limt okay
    return "OK"
}
if (speed > speedlimt){//for every 5 above the limt add 1 point
    points = Math.floor(speed - speedlimt) / 5 //speed - speedlimt = answer / by 5 = points // Math.floor we want whole numbers
}
if (points > maxPoint){
    return console.log('license is suspended,')// if more than maxpoints
}else{
    return console.log('Demeritpoints' +" "+ points)//if less than maxpoints
}

}
speedDetector(80);
speedDetector(90);
speedDetector(135);
speedDetector(150);