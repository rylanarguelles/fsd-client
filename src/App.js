import React from 'react';
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import NavigationMenu from './components/universal/NavigationMenu';
import Menu from './pages/Menu';
import Cart from './components/universal/Cart';
import CheckoutDialog from './components/universal/CheckoutDialog';
import Booking from './pages/Booking';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    root: {
        height: '100%',
        padding: '64px',
    },
});

class App extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Router>
                <Grid
                    container
                    direction='column'
                    spacing={3}
                    className={classes.root}
                >
                    <Grid item>
                        <NavigationMenu />
                    </Grid>
                    <Grid item>
                        <Divider />
                    </Grid>
                    <Grid item>
                        <Route exact path=''>
                            <Redirect to='/menu' />
                        </Route>
                        <Route path='/menu' component={Menu} />
                        <Route path='/booking' component={Booking} />
                    </Grid>
                    <Cart />
                    <CheckoutDialog />
                </Grid>
            </Router>
        );
    }
}

export default withStyles(styles)(App);
