import api from '../utils/api';
import MenuItem from '../models/entities/menu_item';

export default class MenuService {
    static async fetchAllMenuItems() {
        return api.get('/menu').then((response) => {
            return response.data.map((mi) => new MenuItem(mi));
        });
    }

    static async addOrder(form) {
        return api.post('/checkout/', form);
    }
}
