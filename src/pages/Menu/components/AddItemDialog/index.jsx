import React from 'react';
import { inject, observer } from 'mobx-react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';
import MenuController from '../../../../controllers/menu_controller';

class AddItemDialog extends React.Component {
    constructor(props) {
        super(props);

        this.closeAddItemDialog = this.closeAddItemDialog.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
    }

    closeAddItemDialog() {
        MenuController.toggleAddItemDialog(false);
    }

    changeQuantity(action) {
        const { MenuStore } = this.props;
        const {
            addCartItemForm: { form },
        } = MenuStore;
        switch (action) {
            case 'reduce':
                form['quantity']--;
                break;
            case 'increase':
                form['quantity']++;
                break;
            default:
                form['quantity']++;
        }
    }

    render() {
        const { MenuStore } = this.props;
        const {
            activeItem,
            addCartItemForm: {
                isShowing,
                form: { quantity },
            },
        } = MenuStore;
        return (
            <Dialog
                open={isShowing}
                onClose={this.closeAddItemDialog}
                fullWidth
                maxWidth='sm'
            >
                <DialogTitle>Add Beef Burger to Cart</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>Select the quantity: </Typography>
                    </DialogContentText>
                    <Grid
                        container
                        direction='row'
                        spacing={2}
                        alignItems='center'
                    >
                        <Grid item>
                            <IconButton
                                color='secondary'
                                disabled={quantity === 1}
                                onClick={() => this.changeQuantity('reduce')}
                            >
                                <RemoveIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography>{quantity}</Typography>
                        </Grid>
                        <Grid item>
                            <IconButton
                                color='primary'
                                onClick={() => this.changeQuantity('increase')}
                            >
                                <AddIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button color='secondary' onClick={this.closeAddItemDialog}>
                        Cancel
                    </Button>
                    <Button color='primary'>Add</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default inject('MenuStore')(observer(AddItemDialog));