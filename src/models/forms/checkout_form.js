import { decorate, observable } from 'mobx';
import moment from 'moment';

export default class CheckoutForm {
    paymentMethod = 'Cash';

    amountPaid = 0;

    change = 0;

    cardNumber = '';

    cardName = '';

    expiryMonth = 'January';

    expiryYear = moment().year();

    securityNumber = '';
}

decorate(CheckoutForm, {
    paymentMethod: observable,
    amountPaid: observable,
    change: observable,
    cardNumber: observable,
    cardName: observable,
    expiryMonth: observable,
    expiryYear: observable,
    securityNumber: observable,
});
