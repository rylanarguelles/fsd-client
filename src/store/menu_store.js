import { decorate, observable } from 'mobx';

export class MenuStore {
    menuItems = undefined;
    activeItem = undefined;
    cart = [];
    orders = undefined;
}

decorate(MenuStore, {
    menuItems: observable,
    activeItem: observable,
    cart: observable,
    orders: observable,
});

export default new MenuStore();
