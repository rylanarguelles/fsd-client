import React from 'react';
import { inject, observer } from 'mobx-react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CartItemRow from '../CartItemRow';

class CartItemList extends React.Component {
    render() {
        const { MenuStore } = this.props;
        const { cart, cartTotal } = MenuStore;
        return (
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
                        <CartItemRow key={item.item.id} cartItem={item} />
                    ))}
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell align='right'>{`${cartTotal} AUD`}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}

export default inject('MenuStore')(observer(CartItemList));
