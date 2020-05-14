import React from 'react';
import { inject, observer } from 'mobx-react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class CartItemRow extends React.Component {
    constructor(props) {
        super(props);

        this.removeItem = this.removeItem.bind(this);
    }

    removeItem() {
        const { cartItem, MenuStore } = this.props;
        const { cart } = MenuStore;
        cart.splice(cart.indexOf(cartItem), 1);
    }

    render() {
        const { cartItem } = this.props;
        return (
            <TableRow>
                <TableCell>
                    <IconButton color='secondary' onClick={this.removeItem}>
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
                <TableCell align='right'>{cartItem.quantity}</TableCell>
                <TableCell>{cartItem.item.name}</TableCell>
                <TableCell align='right'>{`${
                    cartItem.item.price * cartItem.quantity
                } AUD`}</TableCell>
            </TableRow>
        );
    }
}

export default inject('MenuStore')(observer(CartItemRow));
