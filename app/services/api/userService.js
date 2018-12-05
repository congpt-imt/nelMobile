import {Constants} from "../../constants";

export class UserService {
    static async login(params, succeeded, failed) {
        try {
            let response = await fetch('http://192.168.137.1:8080/api/nel-user-management/login', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + Constants.TOKEN,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            let result = await response.json();
            succeeded(result);
        } catch (error) {
            failed(error);
        }
    }

    //Register
    static async register(params, succeeded, failed) {
        try {
            let response = await fetch('http://192.168.137.1:8080/api/nel-user-management/register', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + Constants.TOKEN,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            let result = await response.json();
            succeeded(result);
        } catch (error) {
            failed(error);
        }
    }
}
