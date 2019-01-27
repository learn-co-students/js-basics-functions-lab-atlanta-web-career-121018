// Code your solution in this file!
function distanceFromHqInBlocks(st) {
    return Math.abs(st-42)
} 

function distanceFromHqInFeet(st) {
    return distanceFromHqInBlocks(st) * 264
} 

function distanceTravelledInFeet(st1, st2) {
    return Math.abs(st1 - st2) * 264;
}

function calculatesFarePrice(st1, st2) {
    const dist = distanceTravelledInFeet(st1, st2);

    if (dist < 400) {
      return 0;
    } else if (dist > 400 && dist <= 2000) {
      return (dist - 400) * 0.02;
    } else if (dist > 2000 && dist <= 2500) {
      return 25;
    } else if (dist > 2500) {
      return "cannot travel that far";
    }
}

