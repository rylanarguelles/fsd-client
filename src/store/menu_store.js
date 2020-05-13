import { decorate, observable } from 'mobx';
import addCartItemFormState from './menu/add_cart_item_form';
import cartState from './menu/cart';

export class MenuStore {
    menuItems = undefined;
    activeItem = undefined;
    cart = [];
    orders = undefined;
    addCartItemForm = addCartItemFormState;
    cartState = cartState;
}

decorate(MenuStore, {
    menuItems: observable,
    activeItem: observable,
    cart: observable,
    orders: observable,
    addCartItemForm: observable,
    cartState: observable,
});

export default new MenuStore();
