import {Constants} from "../../constants";

export class TeacherService {
    static async getTeachers(categoryId, succeeded, failed) {
        let urlAPI = 'http://192.168.137.1:8080/api/nel-teachers/findByCategory/' + categoryId;
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

    static async getTeacherById(teacherId, succeeded, failed) {
        let urlAPI = 'http://192.168.137.1:8080/api/nel-teachers/' + teacherId;
        try {
            let response = await fetch(urlAPI, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + Constants.TOKEN,
                    Accept: 'application/json',
                }
            });

            let teacher = await response.json();
            let result = teacher;
            succeeded(result);
        } catch (error) {
            failed(error);
        }
    }
}
