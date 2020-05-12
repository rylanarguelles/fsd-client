import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationMenu from './components/universal/NavigationMenu';
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
            <Grid container direction='column' className={classes.root}>
                <Grid item>
                    <NavigationMenu />
                </Grid>
                <Grid item>{/* page */}</Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(App);
