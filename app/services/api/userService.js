import {Constants} from "../../constants";
import {Alert} from 'react-native';

export class UserService {
    static async getUsers(params, succeeded, failed) {
        try {
            //Alert.alert(JSON.stringify(params));
            let response = await fetch('http://192.168.137.1:8080/api/nel-user-management/login', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + Constants.TOKEN,
                    Accept: 'application/json',
                },
                body: JSON.stringify(params),
            });

            let users = await response.json();
            alert(JSON.stringify(response));
            let result = users.token;

            succeeded(result);
        } catch (error) {
            failed(error);
        }
    }
}
