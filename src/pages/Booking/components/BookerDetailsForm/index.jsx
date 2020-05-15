import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export default class BookerDetailsForm extends React.Component {
    render() {
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
                            />
                        </div>
                    </Grid>
                    <Grid item>
                        <div style={{ width: '300px' }}>
                            <TextField
                                required
                                fullWidth
                                label='Mobile Number'
                            />
                        </div>
                    </Grid>
                    <Grid item>
                        <div style={{ width: '300px' }}>
                            <Button
                                fullWidth
                                color='primary'
                                variant='contained'
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
