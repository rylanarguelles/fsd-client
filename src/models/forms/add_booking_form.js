import { decorate, observable } from 'mobx';
import moment from 'moment';

export default class AddBookingForm {
    email = '';

    mobileNumber = '';

    bookingHour = 8;

    bookingMinute = 0;

    bookingMonth = moment().format('MMMM');

    bookingDay = moment().format('DD');

    bookingYear = moment().year();

    quantity = 1;
}

decorate(AddBookingForm, {
    email: observable,
    mobileNumber: observable,
    bookingHour: observable,
    bookingMinute: observable,
    bookingMonth: observable,
    bookingDay: observable,
    quantity: observable,
});
