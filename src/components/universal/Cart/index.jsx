import React from 'react';
import { inject, observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CartItemList from './components/CartItemList';
import MenuController from '../../../controllers/menu_controller';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.closeCartDrawer = this.closeCartDrawer.bind(this);
        this.openCheckoutDialog = this.openCheckoutDialog.bind(this);
    }

    closeCartDrawer() {
        MenuController.toggleCartDrawer(false);
    }

    openCheckoutDialog() {
        MenuController.toggleCheckoutDialog(true);
    }

    render() {
        const { MenuStore } = this.props;
        const {
            cart,
            cartState: { isShowing },
        } = MenuStore;
        const emptyCart = cart.length === 0;
        return (
            <Drawer
                anchor='right'
                open={isShowing}
                onClose={this.closeCartDrawer}
            >
                <div style={{ padding: '64px' }}>
                    {!emptyCart && (
                        <Grid
                            container
                            direction='column'
                            spacing={2}
                            alignItems='center'
                        >
                            <Grid item>
                                <CartItemList />
                            </Grid>
                            <Grid item>
                                <Button
                                    color='primary'
                                    onClick={this.openCheckoutDialog}
                                >
                                    Proceed to Checkout
                                </Button>
                            </Grid>
                        </Grid>
                    )}
                    {emptyCart && (
                        <Grid
                            container
                            direction='column'
                            spacing={2}
                            alignItems='center'
                        >
                            <Grid item>
                                <Typography>
                                    Items you add to your cart will appear here.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    color='primary'
                                    onClick={this.closeCartDrawer}
                                >
                                    Back to Menu
                                </Button>
                            </Grid>
                        </Grid>
                    )}
                </div>
            </Drawer>
        );
    }
}

export default inject('MenuStore')(observer(Cart));
