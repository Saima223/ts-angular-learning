let reviews: number[] = [1, 2.2, 3, 4, 5.4];

let total: number = 0

for (let i=0; i<reviews.length; i++){
    console.log (reviews[i]);
    total += reviews[i];
}

let average: number = total/reviews.length;
console.log("review average = " + average);