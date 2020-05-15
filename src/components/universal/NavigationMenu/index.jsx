import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuController from '../../../controllers/menu_controller';

class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);

        this.toggleCartDrawer = this.toggleCartDrawer.bind(this);
    }

    toggleCartDrawer() {
        const { MenuStore } = this.props;
        const {
            cartState: { isShowing },
        } = MenuStore;
        MenuController.toggleCartDrawer(!isShowing);
    }

    render() {
        const { MenuStore } = this.props;
        const { cart } = MenuStore;
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
                                <Link to='/menu'>
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
                        <IconButton onClick={this.toggleCartDrawer}>
                            <Badge badgeContent={cart.length} color='primary'>
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default inject('MenuStore')(observer(NavigationMenu));
