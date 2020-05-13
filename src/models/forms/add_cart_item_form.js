import { decorate, observable } from 'mobx';

export default class AddCartItemForm {
    quantity = 1;
}

decorate(AddCartItemForm, {
    quantity: observable,
});
