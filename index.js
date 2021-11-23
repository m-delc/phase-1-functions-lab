// const hq = 42
// const num1 = 8

// function distanceFromHqInBlocks(num1) {
//     let result
//     if (num1 > hq) {
//         result = num1 - hq;
//     }
//     else if (num1 < hq) {
//         result = hq - num1;
//     }
//     return result
// }

function distanceFromHqInBlocks(num1) {
    const hq = 42;
    const distanceToFortyTwo = Math.abs(num1 - hq);
    return distanceToFortyTwo;
}


function distanceFromHqInFeet(num1) {
    distanceFromHqInBlocks(num1);
    const blocks = distanceFromHqInBlocks(num1) * 264;
    return blocks;
}

function distanceTravelledInFeet(start, destination) {
    const travel = (destination - start) * 264;
    return Math.abs(travel);
}


// function distanceFromHqInFeet(feet){
//     let result = num1 * 264
//     return result
// }







// const distanceFromHqInFeet = function(distanceFromHqInBlocks) {
//     return distanceFromHqInBlocks * 264
// }

// function distanceFromHqInFeet(someNum) {
//     distanceFromHqInBlocks(num1) 
//         let result
//         if (num1 > hq) {
//             result = (num1 - hq)*264;
//         }
//         else if (hq > num1) {
//             result = (hq - num1)*264;
//         }
//         return result 
// }