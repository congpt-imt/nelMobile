export class ChatService {
    static getChatHistory(start, count) {
        const chatHistory = require('../../json_tmp/teachers');
        const fullData = chatHistory.data;
        const result = fullData.slice(
            start,
            Math.min(fullData.length, start + count)
        );

        return result;
    }
}
