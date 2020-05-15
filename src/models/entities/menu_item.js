import { decorate, observable } from 'mobx';

export default class MenuItem {
    id;

    name;

    price;

    caloricIntake;

    constructor(item) {
        this.id = item.item_id;
        this.name = item.item_name;
        this.price = item.item_price;
        this.caloricIntake = item.caloric_intake;
    }
}

decorate(MenuItem, {
    id: observable,
    name: observable,
    price: observable,
    caloricIntake: observable,
});
