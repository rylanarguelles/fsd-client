import { decorate, observable } from 'mobx';

export default class Booking {
    id;

    email;

    mobileNumber;

    quantity;

    date;

    time;

    constructor(booking) {
        this.id = booking.booking_id;
        this.email = booking.email;
        this.mobileNumber = booking.mobile_number;
        this.quantity = booking.quantity;
        this.date = booking.booking_date;
        this.time = booking.booking_time;
    }
}

decorate(Booking, {
    id: observable,
    email: observable,
    mobileNumber: observable,
    quantity: observable,
    date: observable,
    time: observable,
});
