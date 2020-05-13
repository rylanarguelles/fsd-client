import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default class CartItemRow extends React.Component {
    render() {
        const { cartItem } = this.props;
        return (
            <TableRow>
                <TableCell align='right'>3</TableCell>
                <TableCell>Beef Burger</TableCell>
                <TableCell align='right'>9 USD</TableCell>
            </TableRow>
        );
    }
}
