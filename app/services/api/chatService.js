import { Constants } from "../../constants";

export class ChatService {
    static getChatHistory() {
        const chatHistory = require('../../json_tmp/teachers');
        const result = chatHistory.data;
        return result;
    }

    static async getMessagesHistory(idFrom, idTo, page, succeeded, failed) {
        try {
            let response = await fetch('http://192.168.137.1:8080/api/nel-messages-histories/idfrom-and-idto?idFrom=' + idFrom + '&idTo=' + idTo + '&page=' + page + '&size=10', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + Constants.TOKEN,
                    Accept: 'application/json',
                }
            });
            let messages = await response.json();
            succeeded(messages);
        } catch (error) {
            failed(error);
        }
    }

    static async saveMessages(params, succeeded, failed) {
        try {
            let response = await fetch('http://192.168.137.1:8080/api/nel-messages-histories', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + Constants.TOKEN,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });
            let result = await response.json();
            succeeded(result.data);
        } catch (error) {
            failed(error);
        }
    }
}
