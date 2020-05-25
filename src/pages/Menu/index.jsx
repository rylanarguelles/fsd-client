import React from 'react';
import { inject, observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddItemDialog from './components/AddItemDialog';
import MenuItem from './components/MenuItem';
import MenuController from '../../controllers/menu_controller';

class Menu extends React.Component {
    componentDidMount() {
        MenuController.getAllMenuItems();
    }

    constructor(props) {
        super(props);

        this.toggleAddItemDialog = this.toggleAddItemDialog.bind(this);
    }

    toggleAddItemDialog(item) {
        MenuController.setActiveItem(item);
        MenuController.toggleAddItemDialog(true);
    }

    render() {
        const { MenuStore } = this.props;
        const { menuItems } = MenuStore;
        const emptyMenuItems = menuItems === undefined;
        return (
            <React.Fragment>
                {!emptyMenuItems && (
                    <Grid container direction='row' spacing={2}>
                        {Array.from(menuItems).map((i) => (
                            <Grid item key={i.id}>
                                <MenuItem
                                    item={i}
                                    toggleAddDialog={() =>
                                        this.toggleAddItemDialog(i)
                                    }
                                />
                            </Grid>
                        ))}
                        <AddItemDialog />
                    </Grid>
                )}
                {emptyMenuItems && (
                    <Typography>
                        There are no available menu items. Please check again
                        another time!
                    </Typography>
                )}
            </React.Fragment>
        );
    }
}

export default inject('MenuStore')(observer(Menu));
