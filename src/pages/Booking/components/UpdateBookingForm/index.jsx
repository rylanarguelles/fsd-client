import React from 'react';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core//Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import BookingController from '../../../../controllers/booking_controller';

let days = [];
let hours = [];
let minutes = [];

for (var i = 1; i <= 31; i++) {
    days.push(i);
}

for (var j = 8; j <= 22; j++) {
    hours.push(j);
}

for (var k = 0; k <= 50; k += 10) {
    minutes.push(k);
}

class UpdateBookingForm extends React.Component {
    constructor(props) {
        super(props);

        this.closeUpdateBookingDialog = this.closeUpdateBookingDialog.bind(
            this,
        );
        this.onChange = this.onChange.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.updateBooking = this.updateBooking.bind(this);
    }

    closeUpdateBookingDialog() {
        BookingController.toggleUpdateBookingDialog(false);
    }

    onChange = (property) => (e) => {
        const { BookingStore } = this.props;
        const {
            updateBookingForm: { form },
        } = BookingStore;
        form[property] = e.target.value;
    };

    changeQuantity(action) {
        const { BookingStore } = this.props;
        const {
            updateBookingForm: { form },
        } = BookingStore;
        switch (action) {
            case 'reduce':
                form['quantity']--;
                break;
            case 'increase':
                form['quantity']++;
                break;
            default:
                form['quantity']++;
        }
    }

    updateBooking() {
        BookingController.updateBooking();
        BookingController.getAllBookings();
        BookingController.searchBookings();
        this.closeUpdateBookingDialog();
    }

    render() {
        const { BookingStore } = this.props;
        const {
            updateBookingForm: {
                isShowing,
                form: {
                    bookingMonth,
                    bookingDay,
                    bookingHour,
                    bookingMinute,
                    quantity,
                },
            },
        } = BookingStore;
        return (
            <Dialog
                open={isShowing}
                onClose={this.closeUpdateBookingDialog}
                fullWidth
                maxWidth='xs'
            >
                <DialogTitle>Update Booking</DialogTitle>
                <DialogContent>
                    <Grid container direction='column' spacing={3}>
                        <Grid item>
                            <Grid
                                container
                                direction='row'
                                spacing={2}
                                alignItems='center'
                            >
                                <Grid item>
                                    <Typography>Number of People</Typography>
                                </Grid>
                                <Grid item>
                                    <IconButton
                                        color='secondary'
                                        disabled={quantity === 1}
                                        onClick={() =>
                                            this.changeQuantity('reduce')
                                        }
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Typography>{quantity}</Typography>
                                </Grid>
                                <Grid item>
                                    <IconButton
                                        color='primary'
                                        onClick={() =>
                                            this.changeQuantity('increase')
                                        }
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <TextField
                                select
                                fullWidth
                                required
                                label='Month'
                                value={bookingMonth}
                                onChange={this.onChange('bookingMonth')}
                            >
                                {moment.months().map((month) => (
                                    <MenuItem
                                        key={month}
                                        value={moment.months().indexOf(month)}
                                    >
                                        {month}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item>
                            <TextField
                                select
                                fullWidth
                                required
                                label='Day'
                                value={bookingDay}
                                onChange={this.onChange('bookingDay')}
                            >
                                {days.map((day) => (
                                    <MenuItem key={day} value={day}>
                                        {day}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item>
                            <TextField
                                select
                                fullWidth
                                required
                                label='Hour'
                                value={bookingHour}
                                onChange={this.onChange('bookingHour')}
                            >
                                {hours.map((hour) => (
                                    <MenuItem key={hour} value={hour}>
                                        {hour}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item>
                            <TextField
                                select
                                fullWidth
                                required
                                label='Minute'
                                value={bookingMinute}
                                onChange={this.onChange('bookingMinute')}
                            >
                                {minutes.map((minute) => (
                                    <MenuItem key={minute} value={minute}>
                                        {minute}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        color='secondary'
                        onClick={this.closeUpdateBookingDialog}
                    >
                        Cancel
                    </Button>
                    <Button color='primary' onClick={this.updateBooking}>
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default inject('BookingStore')(observer(UpdateBookingForm));
