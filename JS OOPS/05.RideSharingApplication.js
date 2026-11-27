// Q5. Ride-Sharing Application

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null || this.distance < 0) {
            throw new Error("Trip distance must be a valid non-negative number.");
        }

        let ratePerKm = 10;
        return this.distance * ratePerKm;
    }
}

let driver1 = new Driver("Rahul", 4.8, "Car", "UP 85 AB 1234");
console.log("Driver:", driver1.name);
console.log("Rating:", driver1.rating);
console.log("Vehicle:", driver1.vehicle);
console.log("Vehicle number:", driver1.vehicleNumber);

try {
    let trip1 = new Trip("Mathura", "Vrindavan", 15);
    console.log("Trip fare: Rs.", trip1.calculateFare());
} catch (error) {
    console.log("Trip error:", error.message);
}

try {
    let trip2 = new Trip("Mathura", "Agra", -20);
    console.log("Trip fare: Rs.", trip2.calculateFare());
} catch (error) {
    console.log("Trip error:", error.message);
}

// Assumption: fare rate is Rs. 10 per kilometre.
