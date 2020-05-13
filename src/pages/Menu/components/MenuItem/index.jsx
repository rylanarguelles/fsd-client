import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    item: {
        width: 316,
    },
});

class MenuItem extends React.Component {
    render() {
        const { item, toggleAddDialog, classes } = this.props;
        return (
            <Card className={classes.item}>
                <CardContent>
                    <Typography variant='h6'>Beef Burger</Typography>
                    <Typography>9 USD</Typography>
                    <Typography variant='overline' color='textSecondary'>
                        506 kJ
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color='primary' onClick={toggleAddDialog}>
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(MenuItem);
