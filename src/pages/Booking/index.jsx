import React from 'react';
import Grid from '@material-ui/core/Grid';
import AddBookingForm from './components/AddBookingForm';
import BookerDetailsForm from './components/BookerDetailsForm';
import BookingDetails from './components/BookingDetails';
import BookingController from '../../controllers/booking_controller';

export default class Booking extends React.Component {
    componentDidMount() {
        BookingController.getAllBookings();
    }

    render() {
        return (
            <Grid container direction='row' spacing={4}>
                <Grid item>
                    <BookerDetailsForm />
                </Grid>
                <Grid item>
                    <BookingDetails />
                </Grid>
                <AddBookingForm />
            </Grid>
        );
    }
}
