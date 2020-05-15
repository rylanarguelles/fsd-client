import { decorate, observable } from 'mobx';

export default class BookerDetailsForm {
    email = '';

    mobileNumber = '';
}

decorate(BookerDetailsForm, {
    email: observable,
    mobileNumber: observable,
});
