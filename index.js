// Code your solution in this file!
function distanceFromHqInBlocks(street) {
//   if (street > 42) {
//     return street - 42;
//   } else {
//     return 42 - street;
//   }
// }
  return Math.abs(street - 42)
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const totalDistance = distanceTravelledInFeet(start, destination);

  if (totalDistance < 400) {
    return 0;
  } else if (totalDistance > 400 && totalDistance <= 2000) {
    return (totalDistance - 400) * 0.02;
  } else if (totalDistance > 2000 && totalDistance <= 2500) {
    return 25;
  } else if (totalDistance > 2500) {
    return "cannot travel that far";
  }
}
