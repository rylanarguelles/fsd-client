import { decorate, observable } from 'mobx';
import addCartItemFormState from './menu/add_cart_item_form';
import cartState from './menu/cart';
import checkoutState from './menu/checkout';

export class MenuStore {
    menuItems = undefined;
    activeItem = undefined;
    cart = [];
    addCartItemForm = addCartItemFormState;
    cartState = cartState;
    checkoutState = checkoutState;
}

decorate(MenuStore, {
    menuItems: observable,
    activeItem: observable,
    cart: observable,
    addCartItemForm: observable,
    cartState: observable,
    checkoutState: observable,
});

export default new MenuStore();
