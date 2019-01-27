// Code your solution in this file!


function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42);
};


function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
};


function distanceTravelledInFeet(start, destination) {
    return (Math.abs(start - destination) *264);
};


function calculatesFarePrice(start, destination) {
    switch (true) {
        case distanceTravelledInFeet(start, destination) > 2500:
            return 'cannot travel that far';
            break;
        case distanceTravelledInFeet(start, destination) > 2000:
            return 25;
            break;
        case distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000:
            return ((distanceTravelledInFeet(start, destination) - 400) * 0.02);
            break;
        case distanceTravelledInFeet(start, destination) < 400:
            return 0;
            break;
    }
};
