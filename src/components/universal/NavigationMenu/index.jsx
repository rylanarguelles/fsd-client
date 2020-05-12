import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default class NavigationMenu extends React.Component {
    render() {
        return (
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <Typography variant='h3'>Healthy Burger</Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction='row'
                    justify='space-between'
                    alignItems='center'
                >
                    <Grid item>
                        <Grid container direction='row' spacing={4}>
                            <Grid item>
                                <Link to=''>
                                    <Typography variant='overline'>
                                        Menu
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to='/booking'>
                                    <Typography variant='overline'>
                                        Booking
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Badge badgeContent={0} color='primary'>
                            <ShoppingCartIcon />
                        </Badge>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
