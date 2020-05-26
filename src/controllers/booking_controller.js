import moment from 'moment';
import BookingService from '../services/booking';
import BookingStore from '../store/booking_store';

export default class BookingController {
    static getAllBookings() {
        BookingService.fetchAllBookings().then((b) => {
            BookingStore.bookings = b;
        });
    }

    static searchBookings() {
        BookingStore.customerBookings = [];
        const bookings = BookingStore.bookings;
        const bookingEmail = BookingStore.bookerDetailsForm.form.email;
        const bookingMobileNumber =
            BookingStore.bookerDetailsForm.form.mobileNumber;

        if (bookings) {
            Array.from(bookings).forEach((b) => {
                if (
                    b.email === bookingEmail &&
                    `${b.mobileNumber}` === bookingMobileNumber
                ) {
                    BookingStore.customerBookings.push(b);
                }
            });
        }
    }

    static toggleAddBookingDialog(shouldShow) {
        BookingStore.addBookingForm.isShowing = shouldShow;

        if (!shouldShow) {
            BookingStore.addBookingForm.resetForm();
        }
    }

    static addBooking() {
        const form = BookingStore.addBookingForm.form;
        const email = form.email;
        const mobileNumber = form.mobileNumber;
        const quantity = form.quantity;
        let bookingMinute = form.bookingMinute;
        if (bookingMinute === 0) {
            bookingMinute = '00';
        }
        const bookingTime = `${form.bookingHour}: ${bookingMinute}`;
        const bookingDate = moment();
        bookingDate
            .set('year', form.bookingYear)
            .set('month', form.bookingMonth)
            .set('day', form.bookingDay);

        BookingService.addBooking({
            bookingDate,
            bookingTime,
            email,
            mobileNumber,
            quantity,
        });
        this.getAllBookings();
    }
}
