var reviews = [1, 2.2, 3, 4, 5.4];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("review average = " + average);
