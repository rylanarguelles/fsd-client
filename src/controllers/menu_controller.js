import MenuStore from '../store/menu_store';

export default class MenuController {
    static toggleAddItemDialog(shouldShow) {
        MenuStore.addCartItemForm.isShowing = shouldShow;

        if (!shouldShow) {
            MenuStore.addCartItemForm.resetForm();
        }
    }

    static setActiveItem(item) {
        MenuStore.activeItem = item;
    }

    static addItemToCart() {
        MenuStore.cart.push({
            item: MenuStore.activeItem,
            quantity: MenuStore.addCartItemForm.form.quantity,
        });
    }

    static toggleCartDrawer(shouldShow) {
        MenuStore.cartState.isShowing = shouldShow;
    }

    static toggleCheckoutDialog(shouldShow) {
        MenuStore.checkoutState.isShowing = shouldShow;

        if (!shouldShow) {
            MenuStore.checkoutState.resetForm();
        }
    }
}
