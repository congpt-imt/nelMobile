export class CategoryService {
    static async getCategories(start, count) {
        try {
            let categories = await fetch ('http://localhost:8080/api/nel-categories');
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
