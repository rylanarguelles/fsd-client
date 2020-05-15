import { decorate, observable } from 'mobx';

export default class Order {
    id;

    customerId;

    orderDate;

    orderTotal;

    constructor(order) {
        this.id = order.order_id;
        this.customerId = order.customer_id;
        this.orderDate = order.order_date;
        this.orderTotal = order.order_total;
    }
}

decorate(Order, {
    id: observable,
    customerId: observable,
    orderDate: observable,
    orderTotal: observable,
});
