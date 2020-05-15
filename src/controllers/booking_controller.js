import BookingStore from '../store/booking_store';

export default class BookingController {
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
                    b.mobileNumber === bookingMobileNumber
                ) {
                    BookingStore.customerBookings.push(b);
                }
            });
        }
    }
}
