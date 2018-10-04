export class CategoryService {
    static getCategories(start, count) {
        const categories = require('../../json_tmp/categories');
        const fullData = categories.data;
        const result = fullData.slice(
            start,
            Math.min(fullData.length, start + count)
        );

        return result;
    }
}
