import { decorate, observable } from 'mobx';

export default class Order {
    id;

    orderDate;

    orderTotal;

    constructor(order) {
        this.id = order.order_id;
        this.orderDate = order.order_date;
        this.orderTotal = order.order_total;
    }
}

decorate(Order, {
    id: observable,
    orderDate: observable,
    orderTotal: observable,
});
