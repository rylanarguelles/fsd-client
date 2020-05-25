import MenuService from '../services/menu';
import MenuStore from '../store/menu_store';

// TODO: placeOrder static function

export default class MenuController {
    static getAllMenuItems() {
        MenuService.fetchAllMenuItems().then((mi) => {
            MenuStore.menuItems = mi;
        });
    }

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
