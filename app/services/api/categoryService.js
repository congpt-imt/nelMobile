import {Constants} from "../../constants";

export class CategoryService {
    static async getCategories(start, count) {
        try {
            let response = await fetch('http://localhost:8080/api/nel-categories', {
                method: 'GET',
                headers: {
                    Authentication: `Bearer ${Constants.TOKEN}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            let categories = await response.json();
            let fullData = categories.data;
            let result = fullData.slice(
                start,
                Math.min(fullData.length, start + count)
            );
            return result;
        } catch (error) {
            console.error(error);
        }
    }
}
