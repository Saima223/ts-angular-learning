import { Coach } from  "./Coach";

export class CricketCoach implements Coach{
    getDailyWorkout(): string {
        return "Practice batting for 30 minutes.";
    }
}