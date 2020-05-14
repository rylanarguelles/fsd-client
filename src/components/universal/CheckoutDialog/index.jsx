import React from 'react';
import { inject, observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuController from '../../../controllers/menu_controller';

class CheckoutDialog extends React.Component {
    constructor(props) {
        super(props);

        this.closeCheckoutDialog = this.closeCheckoutDialog.bind(this);
    }

    closeCheckoutDialog() {
        MenuController.toggleCheckoutDialog(false);
    }

    render() {
        const { MenuStore } = this.props;
        const {
            checkoutState: {
                isShowing,
                form: {
                    paymentMethod,
                    amountPaid,
                    change,
                    cardNumber,
                    cardName,
                    expiryMonth,
                    expiryYear,
                    securityNumber,
                },
            },
        } = MenuStore;
        return (
            <Dialog
                open={isShowing}
                onClose={this.closeCheckoutDialog}
                fullWidth
                maxWidth='sm'
            >
                <DialogTitle>Checkout</DialogTitle>
                <DialogContent></DialogContent>
                <DialogActions>
                    <Button
                        color='secondary'
                        onClick={this.closeCheckoutDialog}
                    >
                        Cancel
                    </Button>
                    <Button color='primary'>Confirm</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default inject('MenuStore')(observer(CheckoutDialog));
