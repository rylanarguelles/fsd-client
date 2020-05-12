import { decorate, observable } from 'mobx';

export default class MenuItem {
    id;

    name;

    price;

    caloricIntake;

    constructor(item) {
        this.id = item.id;
        this.name = item.name;
        this.price = item.price;
        this.caloricIntake = item.caloric_intake;
    }
}

decorate(MenuItem, {
    id: observable,
    name: observable,
    price: observable,
    caloricIntake: observable,
});
