import api from '../utils/api';
import Booking from '../models/entities/booking';

export default class BookingService {
    // Fetches all exsiting bookings from the database
    static async fetchAllBookings() {
        return api.get('/booking').then((response) => {
            return response.data.map((b) => new Booking(b));
        });
    }

    // Adds a booking to the database
    static async addBooking(form) {
        return api.post('/add-booking/', form).then((response) => {
            return response.data.map((b) => new Booking(b));
        });
    }

    // Updates an existing booking from the database
    static async updateBooking(form) {
        return api.post('/update-booking/', form).then((response) => {
            return response.data.map((b) => new Booking(b));
        });
    }

    // Deletes an existing booking
    static async deleteBooking(form) {
        return api.post('/delete-booking/', form).then((response) => {
            return response.data.map((b) => new Booking(b));
        });
    }
}
