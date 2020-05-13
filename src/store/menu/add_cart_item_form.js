import { decorate, observable } from 'mobx';
import AddCartItemForm from '../../models/forms/add_cart_item_form';

export class AddCartItemFormState {
    isShowing = false;

    form = new AddCartItemForm();

    resetForm() {
        this.form = new AddCartItemForm();
    }

    resetAndClose() {
        this.isShowing = false;
        this.resetForm();
    }
}

decorate(AddCartItemFormState, {
    isShowing: observable,
    form: observable,
});

export default new AddCartItemFormState();
