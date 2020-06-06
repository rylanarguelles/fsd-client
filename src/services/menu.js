import api from '../utils/api';
import MenuItem from '../models/entities/menu_item';

export default class MenuService {
    // Fetches all existing menu items from the database
    static async fetchAllMenuItems() {
        return api.get('/menu').then((response) => {
            return response.data.map((mi) => new MenuItem(mi));
        });
    }

    // Adds an order to the database
    static async addOrder(form) {
        return api.post('/checkout/', form);
    }
}
