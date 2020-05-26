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
        this.getAllBookings();
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
        const bookingTime = `${form.bookingHour}:${bookingMinute}`;
        const bookingDate = moment();
        bookingDate
            .set('year', form.bookingYear)
            .set('month', form.bookingMonth)
            .set('date', form.bookingDay);

        BookingService.addBooking({
            bookingDate,
            bookingTime,
            email,
            mobileNumber,
            quantity,
        }).then((b) => {
            BookingStore.bookings = b;
        });
    }

    static setActiveBooking(bookingId) {
        BookingStore.activeBooking = bookingId;
    }

    static toggleUpdateBookingDialog(shouldShow) {
        BookingStore.updateBookingForm.isShowing = shouldShow;

        if (!shouldShow) {
            BookingStore.updateBookingForm.resetForm();
        }
    }

    static fillUpdateBookingForm(booking) {
        BookingStore.updateBookingForm.form.bookingDay = moment(
            booking.date,
        ).get('date');
        BookingStore.updateBookingForm.form.bookingMonth = moment(
            booking.date,
        ).get('month');
        BookingStore.updateBookingForm.form.bookingYear = moment(
            booking.date,
        ).get('year');

        const bookingTime = booking.time.split(':');
        BookingStore.updateBookingForm.form.bookingHour = parseInt(
            bookingTime[0],
        );
        BookingStore.updateBookingForm.form.bookingMinute = parseInt(
            bookingTime[1],
        );
    }

    static updateBooking() {
        const bookingId = BookingStore.activeBooking;
        const form = BookingStore.updateBookingForm.form;
        const quantity = form.quantity;
        let bookingMinute = form.bookingMinute;
        if (bookingMinute === 0) {
            bookingMinute = '00';
        }
        const bookingTime = `${form.bookingHour}:${bookingMinute}`;
        const bookingDate = moment();
        bookingDate
            .set('year', form.bookingYear)
            .set('month', form.bookingMonth)
            .set('date', form.bookingDay);

        BookingService.updateBooking({
            bookingId,
            bookingDate,
            bookingTime,
            quantity,
        }).then((b) => {
            BookingStore.bookings = b;
        });
    }

    static deleteBooking(booking) {
        const bookingId = booking.id;
        BookingService.deleteBooking({ bookingId }).then((b) => {
            // nothing
        });
        let index = 0;
        BookingStore.customerBookings.forEach((b) => {
            if (b.id === bookingId) {
                index = BookingStore.customerBookings.indexOf(b);
            }
        });
        BookingStore.customerBookings.splice(index, 1);
        this.searchBookings();
    }
}
