import {Constants} from "../../constants";
import {Alert} from 'react-native';

export class UserService {
    static async getUsers(params, succeeded, failed) {
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

            let users = await response.json();
            let result = users.success;
            //Alert.alert(result);
            succeeded(result);
        } catch (error) {
            failed(error);
        }
    }
}
