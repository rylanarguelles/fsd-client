import { decorate, observable } from 'mobx';
import AddBookingForm from '../../models/forms/add_booking_form';

export class AddBookingFormState {
    isShowing = false;

    form = new AddBookingForm();

    resetForm() {
        this.form = new AddBookingForm();
    }

    resetAndClose() {
        this.isShowing = false;
        this.resetForm();
    }
}

decorate(AddBookingFormState, {
    isShowing: observable,
    form: observable,
});

export default new AddBookingFormState();
