import { decorate, observable } from 'mobx';

export default class Booking {
    id;

    quantity;

    date;

    time;

    constructor(booking) {
        this.id = booking.booking_id;
        this.quantity = booking.quantity;
        this.date = booking.booking_date;
        this.time = booking.booking_time;
    }
}

decorate(Booking, {
    id: observable,
    quantity: observable,
    date: observable,
    time: observable,
});
