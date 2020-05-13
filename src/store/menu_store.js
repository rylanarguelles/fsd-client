import { decorate, observable } from 'mobx';
import addCartItemFormState from './menu/add_cart_item_form';

export class MenuStore {
    menuItems = undefined;
    activeItem = undefined;
    cart = [];
    orders = undefined;
    addCartItemForm = addCartItemFormState;
}

decorate(MenuStore, {
    menuItems: observable,
    activeItem: observable,
    cart: observable,
    orders: observable,
    addCartItemForm: observable,
});

export default new MenuStore();
