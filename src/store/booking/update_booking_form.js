import { decorate, observable } from 'mobx';
import UpdateBookingForm from '../../models/forms/update_booking_form';

export class UpdateBookingFormState {
    isShowing = false;

    form = new UpdateBookingForm();

    resetForm() {
        this.form = new UpdateBookingForm();
    }

    resetAndClose() {
        this.isShowing = false;
        this.resetForm();
    }
}

decorate(UpdateBookingFormState, {
    isShowing: observable,
    form: observable,
});

export default new UpdateBookingFormState();
