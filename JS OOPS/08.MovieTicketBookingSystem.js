// Q8. Movie Ticket Booking System

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function() {
    console.log("Movie:", this.movieName);
    console.log("Seat:", this.seatNo);
    console.log("Ticket price: Rs.", this.price);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

let ticket1 = new OnlineTicket("Action Movie", "A1", 200, 30);
let ticket2 = new OnlineTicket("Comedy Movie", "B4", 180, 25);

ticket1.printTicket();
console.log("Convenience fee: Rs.", ticket1.convenienceFee);
console.log("Total amount: Rs.", ticket1.getTotalAmount());
console.log("--------------------");

ticket2.printTicket();
console.log("Convenience fee: Rs.", ticket2.convenienceFee);
console.log("Total amount: Rs.", ticket2.getTotalAmount());

// printTicket() is found through the prototype chain:
// ticket -> OnlineTicket.prototype -> MovieTicket.prototype.
