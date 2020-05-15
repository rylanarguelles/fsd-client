import { decorate, observable } from 'mobx';
import moment from 'moment';

export default class AddBookingForm {
    email = '';

    mobileNumber = '';

    bookingHour = '';

    bookingMinute = '';

    bookingDate = moment().format('L');

    quantity = 1;
}

decorate(AddBookingForm, {
    email: observable,
    mobileNumber: observable,
    bookingHour: observable,
    bookingMinute: observable,
    bookingDate: observable,
    quantity: observable,
});
