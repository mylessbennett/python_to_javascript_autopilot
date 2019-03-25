function getNewCar() {
    return {
        city: 'Toronto',
        passengers: 0,
        gas: 100,
    };
}

function addCar(cars, newCar) {
    cars.push(newCar);
    return `Adding new car to fleet. Fleet size is now ${cars.length}.`
}

function pickUpPassenger(car) {
    car.passengers += 1;
    car.gas -= 10;
    return `Picked up passenger. Car now has ${car.passengers} passengers.`
}

function getDestination(car) {
    if (car.city == 'Toronto') {
        return 'Mississauga';
    } else if (car.city == 'Mississauga') {
        return 'London';
    } else if (car.city == 'London') {
        return 'Toronto';
    }
}

function fillUpGas(car) {
    oldGas = car.gas;
    car.gas = 100;
    return `Filled up to ${getGasDisplay(car.gas)} on gas from ${getGasDisplay(oldGas)}.`;

}

function getGasDisplay(gas_amount) {
    return `${gas_amount}%`;
}

function drive(car, city_distance) {
    if (car.gas < city_distance) {
        return fillUpGas(car);
    }

    car.city = getDestination(car);
    car.gas -= city.distance;
    return `Drove to ${car.city}. Remaining gas: ${getGasDisplay(car.gas)}`
}

function dropOffPassengers(car) {
    previousPassengers = car.passengers;
    car.passengers = 0;
    return `Dropped off ${previousPassengers} passengers`
}

function act(car) {
    distanceBetweenCities = 50;

    if (car.gas < 20) {
        return fillUpGas(car);
    } else if (car.passengers < 3) {
        return pickUpPassenger(car);
    } else if (car.gas < distanceBetweenCities) {
        return fillUpGas(car);
    }

    droveTo = drive(car, distanceBetweenCities);
    passengersDropped = dropOffPassengers(car);
    return `${droveTo} ${passengersDropped}`
}



