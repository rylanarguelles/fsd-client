import { computed, decorate, observable } from 'mobx';
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

    get cartTotal() {
        let total = 0;
        if (this.cart.length > 0) {
            this.cart.forEach((item) => {
                total += item.item.price * item.quantity;
            });
        }
        return total;
    }
}

decorate(MenuStore, {
    menuItems: observable,
    activeItem: observable,
    cart: observable,
    addCartItemForm: observable,
    cartState: observable,
    checkoutState: observable,
    cartTotal: computed,
});

export default new MenuStore();
