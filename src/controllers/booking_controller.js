import moment from 'moment';
import BookingService from '../services/booking';
import BookingStore from '../store/booking_store';

export default class BookingController {
    // Fetches all existing bookings from the database
    static getAllBookings() {
        BookingService.fetchAllBookings().then((b) => {
            BookingStore.bookings = b;
        });
    }

    // Pushes existing bookings into an array for display if the booking
    // has the same email and mobile number
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

    // Opens or closes the dialog for adding a booking to the database
    static toggleAddBookingDialog(shouldShow) {
        BookingStore.addBookingForm.isShowing = shouldShow;

        if (!shouldShow) {
            BookingStore.addBookingForm.resetForm();
        }
    }

    // Adds a booking to the database
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
            .set('date', parseInt(form.bookingDay) + 1);

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

    // Makes the selected booking the active booking for updating
    static setActiveBooking(bookingId) {
        BookingStore.activeBooking = bookingId;
    }

    // Opens or closes the dialog for updating an existing booking
    static toggleUpdateBookingDialog(shouldShow) {
        BookingStore.updateBookingForm.isShowing = shouldShow;

        if (!shouldShow) {
            BookingStore.updateBookingForm.resetForm();
        }
    }

    // If an existing booking is being updated, its current details are
    // automatically placed into the form's input fields
    static fillUpdateBookingForm(booking) {
        BookingStore.updateBookingForm.form.bookingDay = parseInt(
            moment(booking.date).get('date'),
        );
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

    // Updates an existing booking from the database and saves the new details
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
            .set('date', parseInt(form.bookingDay) + 1);

        BookingService.updateBooking({
            bookingId,
            bookingDate,
            bookingTime,
            quantity,
        }).then((b) => {
            BookingStore.bookings = b;
        });
    }

    // Deletes an existing booking
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
