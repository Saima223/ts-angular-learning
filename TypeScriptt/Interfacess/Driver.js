"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCricket = new CricketCoach_1.CricketCoach();
let myGolf = new GolfCoach_1.GolfCoach();
//Declare an array for coaches ... initially empty
let theCoach = [];
//Add two coaches to the array
theCoach.push(myCricket);
theCoach.push(myGolf);
for (let tempCoach of theCoach) {
    console.log(tempCoach.getDailyWorkout());
}
