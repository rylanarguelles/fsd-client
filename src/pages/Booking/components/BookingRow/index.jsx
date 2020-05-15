import React from 'react';
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
                <TableCell>{booking.date}</TableCell>
                <TableCell>{booking.time}</TableCell>
                <TableCell>
                    <Grid
                        container
                        direction='row'
                        spacing={1}
                        alignItems='center'
                    >
                        <Grid item>
                            <Button color='primary' variant='contained'>
                                Change
                            </Button>
                            <Button color='secondary' variant='contained'>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </TableCell>
            </TableRow>
        );
    }
}
