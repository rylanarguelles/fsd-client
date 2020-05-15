import React from 'react';
import Grid from '@material-ui/core/Grid';
import BookerDetailsForm from './components/BookerDetailsForm';

export default class Booking extends React.Component {
    render() {
        return (
            <Grid container direction='row' spacing={4}>
                <Grid item>
                    <BookerDetailsForm />
                </Grid>
                <Grid item>{/* BOOKING DETAILS */}</Grid>
                {/* ADD BOOKING FORM */}
            </Grid>
        );
    }
}
