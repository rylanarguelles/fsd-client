import { decorate, observable } from 'mobx';

export default class AddCartItemForm {
    menuItemId = 0;

    quantity = 1;
}

decorate(AddCartItemForm, {
    menuItemId: observable,
    quantity: observable,
});
