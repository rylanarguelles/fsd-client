import React from 'react';
import { inject, observer } from 'mobx-react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

class BookingDetails extends React.Component {
    render() {
        const { BookingStore } = this.props;
        const {
            customerBookings,
            bookerDetailsForm: {
                form: { email, mobileNumber },
            },
        } = BookingStore;
        const emptyEmail = email === '';
        const emptyMobileNumber = mobileNumber === '';
        return (
            <React.Fragment>
                {emptyEmail && emptyMobileNumber && (
                    <Typography variant='h6'>
                        Enter your details and click Search for your bookings to
                        appear.
                    </Typography>
                )}
                {!emptyEmail && !emptyMobileNumber && (
                    <div>
                        {customerBookings && customerBookings.length === 0 && (
                            <Typography variant='h6'>
                                You do not have any bookings.
                            </Typography>
                        )}
                        {customerBookings && customerBookings.length > 0 && (
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Booking No.</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Time</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody></TableBody>
                            </Table>
                        )}
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default inject('BookingStore')(observer(BookingDetails));
