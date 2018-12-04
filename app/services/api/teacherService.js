import {Constants} from "../../constants";

export class TeacherService {
    static async getTeachers(succeeded, failed) {
        try {
            let response = await fetch('http://192.168.137.1:8080/api/nel-user-management/teacher-list?category_id=1', {
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
