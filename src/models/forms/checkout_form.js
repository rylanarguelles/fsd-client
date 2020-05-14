import { decorate, observable } from 'mobx';

export default class CheckoutForm {
    paymentMethod;

    amountPaid;

    change;

    cardNumber;

    cardName;

    expiryMonth;

    expiryYear;

    securityNumber;
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
