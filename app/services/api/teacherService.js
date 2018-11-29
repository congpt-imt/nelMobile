import {Constants} from "../../constants";

export class TeacherService {
    static async getTeachers(succeeded, failed) {
        try {
            let response = await fetch('http://192.168.101.186:8080/api/nel-user-management/find-teacher?nelcategory_id=5', {
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
