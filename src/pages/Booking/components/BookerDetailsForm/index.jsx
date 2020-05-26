import React from 'react';
import { inject, observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import BookingController from '../../../../controllers/booking_controller';

class BookerDetailsForm extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.searchBooking = this.searchBooking.bind(this);
        this.openAddBookingDialog = this.openAddBookingDialog.bind(this);
    }

    onChange = (property) => (e) => {
        const { BookingStore } = this.props;
        const {
            bookerDetailsForm: { form },
        } = BookingStore;
        form[property] = e.target.value;
    };

    searchBooking() {
        BookingController.searchBookings();
    }

    openAddBookingDialog() {
        BookingController.toggleAddBookingDialog(true);
    }

    render() {
        const { BookingStore } = this.props;
        const {
            bookerDetailsForm: {
                form: { email, mobileNumber },
            },
        } = BookingStore;
        const emptyEmail = email === '';
        const emptyMobileNumber = mobileNumber === '';
        const emptySearch = emptyEmail || emptyMobileNumber;
        return (
            <Grid
                container
                direction='column'
                spacing={3}
                alignItems='flex-start'
            >
                <Grid item container direction='column' spacing={1}>
                    <Grid item>
                        <Typography variant='h6'>
                            Search for your booking
                        </Typography>
                    </Grid>
                    <Grid item>
                        <div style={{ width: '300px' }}>
                            <TextField
                                required
                                fullWidth
                                label='Booking E-mail'
                                value={email}
                                onChange={this.onChange('email')}
                            />
                        </div>
                    </Grid>
                    <Grid item>
                        <div style={{ width: '300px' }}>
                            <TextField
                                required
                                fullWidth
                                label='Mobile Number'
                                value={mobileNumber}
                                onChange={this.onChange('mobileNumber')}
                            />
                            <Typography variant='overline'>
                                Do not include the first 0
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item>
                        <div style={{ width: '300px' }}>
                            <Button
                                fullWidth
                                color='primary'
                                variant='contained'
                                onClick={this.searchBooking}
                                disabled={emptySearch}
                            >
                                Search
                            </Button>
                        </div>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    direction='column'
                    spacing={1}
                    alignItems='flex-start'
                >
                    <Grid item>
                        <Typography variant='h6'>
                            Don't have a booking?
                        </Typography>
                    </Grid>
                    <Grid item>
                        <div style={{ width: '300px' }}>
                            <Button
                                fullWidth
                                color='primary'
                                variant='contained'
                                onClick={this.openAddBookingDialog}
                            >
                                Add Booking
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default inject('BookingStore')(observer(BookerDetailsForm));
