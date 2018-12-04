import {Constants} from "../../constants";

export class TeacherService {
    static async getTeachers(categoryId, succeeded, failed) {
        let urlAPI = 'http://192.168.137.1:8080/api/nel-user-management/teacher-list?category_id=' + categoryId;
        alert(urlAPI)
        try {
            let response = await fetch(urlAPI, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + Constants.TOKEN,
                    Accept: 'application/json',
                }
            });

            let teachers = await response.json();
            let result = teachers.data;

            succeeded(result);
        } catch (error) {
            failed(error);
        }
    }

    static getTeacher() {
        const teacher = require('../../json_tmp/teacher_details');
        return teacher.data;
    }
}
