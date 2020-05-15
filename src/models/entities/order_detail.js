import { decorate, observable } from 'mobx';

export default class OrderDetail {
    id;

    orderId;

    itemId;

    itemQuantity;

    subtotal;

    constructor(detail) {
        this.id = detail.details_id;
        this.orderId = detail.order_id;
        this.itemId = detail.menu_item;
        this.itemQuantity = detail.quantity;
        this.subtotal = detail.subtotal;
    }
}

decorate(OrderDetail, {
    id: observable,
    orderId: observable,
    itemId: observable,
    itemQuantity: observable,
    subtotal: observable,
});
