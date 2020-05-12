import { decorate, observable } from 'mobx';

export default class OrderDetail {
    id;

    orderId;

    itemId;

    itemQuantity;

    subtotal;

    constructor(detail) {
        this.id = detail.id;
        this.orderId = detail.order_id;
        this.itemId = detail.item_id;
        this.itemQuantity = detail.item_quantity;
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
