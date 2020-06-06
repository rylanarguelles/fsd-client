import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import MenuStore from './store/menu_store';
import BookingStore from './store/booking_store';

const Root = (
    <Provider MenuStore={MenuStore} BookingStore={BookingStore}>
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
serviceWorker.unregister();
