import React from 'react';
import Grid from '@material-ui/core/Grid';
import AddItemDialog from './components/AddItemDialog';
import MenuItem from './components/MenuItem';
import MenuController from '../../controllers/menu_controller';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.toggleAddItemDialog = this.toggleAddItemDialog.bind(this);
    }

    toggleAddItemDialog(item) {
        MenuController.setActiveItem(item);
        MenuController.toggleAddItemDialog(true);
    }

    render() {
        return (
            <Grid container direction='row' spacing={2}>
                <Grid item>
                    <MenuItem
                        toggleAddDialog={() =>
                            this.toggleAddItemDialog(undefined)
                        }
                    />
                </Grid>
                <Grid item>
                    <MenuItem
                        toggleAddDialog={() =>
                            this.toggleAddItemDialog(undefined)
                        }
                    />
                </Grid>
                <Grid item>
                    <MenuItem
                        toggleAddDialog={() =>
                            this.toggleAddItemDialog(undefined)
                        }
                    />
                </Grid>
                <Grid item>
                    <MenuItem
                        toggleAddDialog={() =>
                            this.toggleAddItemDialog(undefined)
                        }
                    />
                </Grid>
                <AddItemDialog />
            </Grid>
        );
    }
}
