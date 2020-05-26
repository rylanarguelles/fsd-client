import api from '../utils/api';
import Booking from '../models/entities/booking';

export default class BookingService {
    static async fetchAllBookings() {
        return api.get('/booking').then((response) => {
            return response.data.map((b) => new Booking(b));
        });
    }

    static async addBooking(form) {
        return api.post('/add-booking', form);
    }
}
