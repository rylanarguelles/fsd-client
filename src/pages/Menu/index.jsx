import React from 'react';
import Grid from '@material-ui/core/Grid';
import MenuItem from './components/MenuItem';

export default class Menu extends React.Component {
    render() {
        return (
            <Grid container direction='row' spacing={2}>
                <Grid item>
                    <MenuItem />
                </Grid>
                <Grid item>
                    <MenuItem />
                </Grid>
                <Grid item>
                    <MenuItem />
                </Grid>
                <Grid item>
                    <MenuItem />
                </Grid>
            </Grid>
        );
    }
}
