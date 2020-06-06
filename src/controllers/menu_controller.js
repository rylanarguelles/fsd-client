import moment from 'moment';
import MenuService from '../services/menu';
import MenuStore from '../store/menu_store';

export default class MenuController {
    // Fetches all existing menu items from the database
    static getAllMenuItems() {
        MenuService.fetchAllMenuItems().then((mi) => {
            MenuStore.menuItems = mi;
        });
    }

    // Opens or closes the dialog for adding a menu item to the cart
    static toggleAddItemDialog(shouldShow) {
        MenuStore.addCartItemForm.isShowing = shouldShow;

        if (!shouldShow) {
            MenuStore.addCartItemForm.resetForm();
        }
    }

    // Makes the selected menu item the active item for viewing and adding
    static setActiveItem(item) {
        MenuStore.activeItem = item;
    }

    // Adds the active menu item to the cart
    static addItemToCart() {
        MenuStore.cart.push({
            item: MenuStore.activeItem,
            quantity: MenuStore.addCartItemForm.form.quantity,
        });
    }

    // Opens or closes the side drawer to display the cart
    static toggleCartDrawer(shouldShow) {
        MenuStore.cartState.isShowing = shouldShow;
    }

    // Opens or closes the dialog to add payment details and checkout the cart items
    static toggleCheckoutDialog(shouldShow) {
        MenuStore.checkoutState.isShowing = shouldShow;

        if (!shouldShow) {
            MenuStore.checkoutState.resetForm();
        }
    }

    // Adds the order to the database
    static checkout() {
        const orderDate = moment();
        const orderTotal = MenuStore.cartTotal;

        MenuService.addOrder({ orderDate, orderTotal });
    }

    // Removes all items from the cart after the checkout
    static emptyCart() {
        MenuStore.cart = [];
    }
}
