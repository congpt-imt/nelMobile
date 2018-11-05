export class TeacherService {
    static getTeachers(start, count) {
        const teachers = require('../../json_tmp/teachers');
        const fullData = teachers.data;
        const result = fullData.slice(
            start,
            Math.min(fullData.length, start + count)
        );

        return result;
    }

    static getTeacher() {
        const teacher = require('../../json_tmp/teacher_details');
        return teacher.data;
    }
}
