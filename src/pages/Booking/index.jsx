import React from 'react';
import Grid from '@material-ui/core/Grid';
import BookerDetailsForm from './components/BookerDetailsForm';
import BookingDetails from './components/BookingDetails';

export default class Booking extends React.Component {
    render() {
        return (
            <Grid container direction='row' spacing={4}>
                <Grid item>
                    <BookerDetailsForm />
                </Grid>
                <Grid item>
                    <BookingDetails />
                </Grid>
                {/* ADD BOOKING FORM */}
            </Grid>
        );
    }
}
