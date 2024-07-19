var sportOne = ["Cricket", "Swimming", "Tennis", "Badminton"];
for (var i = 0; i < sportOne.length; i++) {
    console.log(sportOne[i]);
}
//simplied for loop
for (var _i = 0, sportOne_1 = sportOne; _i < sportOne_1.length; _i++) {
    var sport = sportOne_1[_i];
    if (sport == "Badminton") {
        console.log(sport + " >> My Favorite!");
    }
    else {
        console.log(sport);
    }
}
