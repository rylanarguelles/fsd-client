import { decorate, observable } from 'mobx';

export default class Order {
    id;

    customerId;

    bookingId;

    orderDate;

    orderTotal;

    constructor(order) {
        this.id = order.id;
        this.customerId = order.customer_id;
        this.bookingId = order.booking_id;
        this.orderDate = order.order_date;
        this.orderTotal = order.order_total;
    }
}

decorate(Order, {
    id: observable,
    customerId: observable,
    bookingId: observable,
    orderDate: observable,
    orderTotal: observable,
});
