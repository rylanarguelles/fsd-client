import { decorate, observable } from 'mobx';

export class CartState {
    isShowing = false;
}

decorate(CartState, {
    isShowing: observable,
});

export default new CartState();
