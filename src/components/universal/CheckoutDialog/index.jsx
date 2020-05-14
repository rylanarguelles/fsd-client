import React from 'react';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import MenuController from '../../../controllers/menu_controller';

class CheckoutDialog extends React.Component {
    constructor(props) {
        super(props);

        this.closeCheckoutDialog = this.closeCheckoutDialog.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    closeCheckoutDialog() {
        MenuController.toggleCheckoutDialog(false);
    }

    onChange = (property) => (e) => {
        const { MenuStore } = this.props;
        const {
            checkoutState: { form },
        } = MenuStore;
        form[property] = e.target.value;
    };

    render() {
        const { MenuStore } = this.props;
        const {
            checkoutState: {
                isShowing,
                form: {
                    paymentMethod,
                    amountPaid,
                    cardNumber,
                    cardName,
                    expiryMonth,
                    expiryYear,
                    securityNumber,
                },
            },
        } = MenuStore;
        const cash = paymentMethod === 'Cash';
        const card = paymentMethod === 'Card';
        return (
            <Dialog
                open={isShowing}
                onClose={this.closeCheckoutDialog}
                fullWidth
                maxWidth='xs'
            >
                <DialogTitle>Checkout</DialogTitle>
                <DialogContent>
                    <Grid container direction='column' spacing={3}>
                        <Grid item>
                            <RadioGroup
                                value={paymentMethod}
                                onChange={this.onChange('paymentMethod')}
                            >
                                <FormControlLabel
                                    value='Cash'
                                    control={<Radio />}
                                    label='Cash'
                                />
                                <FormControlLabel
                                    value='Card'
                                    control={<Radio />}
                                    label='Credit Card'
                                />
                            </RadioGroup>
                        </Grid>
                        {cash && (
                            <Grid item>
                                <TextField
                                    required
                                    fullWidth
                                    label='Amount Paid'
                                    value={amountPaid}
                                    onChange={this.onChange('amountPaid')}
                                />
                            </Grid>
                        )}
                        {card && (
                            <Grid item>
                                <TextField
                                    required
                                    fullWidth
                                    label='Card Number'
                                    value={cardNumber}
                                    onChange={this.onChange('cardNumber')}
                                />
                            </Grid>
                        )}
                        {card && (
                            <Grid item>
                                <TextField
                                    required
                                    fullWidth
                                    label='Card Name'
                                    value={cardName}
                                    onChange={this.onChange('cardName')}
                                />
                            </Grid>
                        )}
                        {card && (
                            <Grid item>
                                <TextField
                                    label='Exp. Month'
                                    required
                                    fullWidth
                                    select
                                    value={expiryMonth}
                                    onChange={this.onChange('expiryMonth')}
                                >
                                    {moment.months().map((month) => (
                                        <MenuItem key={month} value={month}>
                                            {month}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        )}
                        {card && (
                            <Grid item>
                                <TextField
                                    required
                                    fullWidth
                                    label='Exp. Year'
                                    value={expiryYear}
                                    onChange={this.onChange('expiryYear')}
                                />
                            </Grid>
                        )}
                        {card && (
                            <Grid item>
                                <TextField
                                    required
                                    fullWidth
                                    label='Security Number'
                                    value={securityNumber}
                                    onChange={this.onChange('securityNumber')}
                                />
                            </Grid>
                        )}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        color='secondary'
                        onClick={this.closeCheckoutDialog}
                    >
                        Cancel
                    </Button>
                    <Button color='primary'>Pay</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default inject('MenuStore')(observer(CheckoutDialog));
