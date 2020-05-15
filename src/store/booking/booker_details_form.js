import { decorate, observable } from 'mobx';
import BookerDetailsForm from '../../models/forms/booker_details_form';

export class BookerDetailsFormState {
    form = new BookerDetailsForm();
}

decorate(BookerDetailsFormState, {
    form: observable,
});

export default new BookerDetailsFormState();
