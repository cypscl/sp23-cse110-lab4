let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};


for(object in statistics){
    if(object[0] == 'r' || statistics[object] % 2 == 1){
        console.log(statistics[object]);
    }
}