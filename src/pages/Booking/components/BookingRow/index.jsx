import React from 'react';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default class BookingRow extends React.Component {
    render() {
        const { booking } = this.props;
        return (
            <TableRow>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.quantity}</TableCell>
                <TableCell>{moment(booking.date).format('L')}</TableCell>
                <TableCell>{booking.time}</TableCell>
                <TableCell>
                    <Grid
                        container
                        direction='row'
                        spacing={1}
                        alignItems='center'
                    >
                        <Grid item container direction='row' spacing={2}>
                            <Grid item>
                                <Button color='primary' variant='contained'>
                                    Change
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button color='secondary' variant='contained'>
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </TableCell>
            </TableRow>
        );
    }
}
