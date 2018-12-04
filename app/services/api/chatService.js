export class ChatService {
    static getChatHistory() {
        const chatHistory = require('../../json_tmp/teachers');
        const result = chatHistory.data;

        return result;
    }
}
