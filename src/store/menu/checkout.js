import { decorate, observable } from 'mobx';
import CheckoutForm from '../../models/forms/checkout_form';

export class CheckoutState {
    isShowing;

    form = new CheckoutForm();

    resetForm() {
        this.form = new CheckoutForm();
    }

    resetAndClose() {
        this.isShowing = false;
        this.resetForm();
    }
}

decorate(CheckoutState, {
    isShowing: observable,
    form: observable,
});

export default new CheckoutState();
