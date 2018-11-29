import {Constants} from "../../constants";

export class CategoryService {
    static async getCategories(succeeded, failed) {
        try {
            let response = await fetch('http://192.168.137.1:8080/api/nel-categories', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + Constants.TOKEN,
                    Accept: 'application/json',
                }
            });

            let categories = await response.json();
            let result = categories.data;

            succeeded(result);
        } catch (error) {
            failed(error);
        }
    }
}
