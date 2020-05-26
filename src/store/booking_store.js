import { decorate, observable } from 'mobx';
import addBookingFormState from './booking/add_booking_form';
import bookerDetailsFormState from './booking/booker_details_form';
import updateBookingFormState from './booking/update_booking_form';

export class BookingStore {
    bookings = undefined;

    customerBookings = [];

    addBookingForm = addBookingFormState;

    bookerDetailsForm = bookerDetailsFormState;

    activeBooking = undefined;

    updateBookingForm = updateBookingFormState;
}

decorate(BookingStore, {
    bookings: observable,
    customerBookings: observable,
    addBookingForm: observable,
    bookerDetailsForm: observable,
    activeBooking: observable,
    updateBookingForm: observable,
});

export default new BookingStore();
