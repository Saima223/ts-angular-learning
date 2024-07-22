import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricket = new CricketCoach ();
let myGolf = new GolfCoach ();

//Declare an array for coaches ... initially empty
let theCoach: Coach[] = [];

//Add two coaches to the array
theCoach.push(myCricket);
theCoach.push(myGolf);

for (let tempCoach of theCoach) {
    console.log(tempCoach.getDailyWorkout());
}
