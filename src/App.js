import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import NavigationMenu from './components/universal/NavigationMenu';
import Menu from './pages/Menu';
import Cart from './components/universal/Cart';
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
                        <Route path=''>
                            <Menu />
                        </Route>
                    </Grid>
                    <Cart />
                </Grid>
            </Router>
        );
    }
}

export default withStyles(styles)(App);
