import { decorate, observable } from 'mobx';
import moment from 'moment';

export default class UpdateBookingForm {
    bookingHour = 8;

    bookingMinute = 0;

    bookingMonth = moment().get('month');

    bookingDay = `${parseInt(moment().format('DD'))}`;

    bookingYear = moment().year();

    quantity = 1;
}

decorate(UpdateBookingForm, {
    bookingHour: observable,
    bookingMinute: observable,
    bookingMonth: observable,
    bookingDay: observable,
    quantity: observable,
});
