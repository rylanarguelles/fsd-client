import { decorate, observable } from 'mobx';
import addBookingFormState from './booking/add_booking_form';
import bookerDetailsFormState from './booking/booker_details_form';

export class BookingStore {
    bookings = undefined;

    customerBookings = undefined;

    addBookingForm = addBookingFormState;

    bookerDetailsForm = bookerDetailsFormState;
}

decorate(BookingStore, {
    bookings: observable,
    customerBookings: observable,
    addBookingForm: observable,
    bookerDetailsForm: observable,
});

export default new BookingStore();
