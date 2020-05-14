import React from 'react';
import { inject, observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import CartItemRow from './components/CartItemRow';
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
            cartTotal,
        } = MenuStore;
        const emptyCart = cart.length === 0;
        return (
            <Drawer
                anchor='right'
                open={isShowing}
                onClose={this.closeCartDrawer}
            >
                {!emptyCart && (
                    <Grid
                        container
                        direction='column'
                        spacing={2}
                        alignItems='center'
                    >
                        <Grid item>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell>Qty.</TableCell>
                                        <TableCell>Item</TableCell>
                                        <TableCell>Subtotal</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cart.map((item) => (
                                        <CartItemRow
                                            key={item.item.id}
                                            cartItem={item}
                                        />
                                    ))}
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell>Total</TableCell>
                                        <TableCell align='right'>{`${cartTotal} AUD`}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
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
                    <Typography>
                        Items you add to your cart will appear here.
                    </Typography>
                )}
            </Drawer>
        );
    }
}

export default inject('MenuStore')(observer(Cart));
