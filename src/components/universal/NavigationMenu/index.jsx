import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    menuLink: {
        color: '#000000',
        textDecoration: 'none',
    },
});

class NavigationMenu extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <Typography variant='h3'>Healthy Burger</Typography>
                </Grid>
                <Grid item container direction='row' spacing={4}>
                    <Grid item>
                        <Link to='/menu' className={classes.menuLink}>
                            <Typography variant='overline'>Menu</Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to='/booking' className={classes.menuLink}>
                            <Typography variant='overline'>Booking</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(NavigationMenu);
