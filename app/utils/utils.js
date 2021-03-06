export class Utils {
    static truncate(text, length) {
        let newLength = text ? text.length : 0;
        let newText = newLength > length ? `${text.substr(0, length)}...` : text;
        return newText;
    }

    static validateEmail(str) {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(str) ? true : false;
    }

    static regexUrl(str) {
        const url = str.match(/((http(s)?(\:\/\/))+(www\.)?([\w\-\.\/])*(\.[a-zA-Z]{2,3}\/?))[^\s\b\n|]*[^.,;:\?\!\@\^\$ -]/g);
        return url;
    }

    static regexImageUrl(str) {
        const url = str.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/g);
        return url;
    }

    static regexYoutubeUrl(str) {
        const url = str.match(/^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.?be)\/.+$/g);
        return url;
    }

    static regexVideoUrl(str) {
        const url = str.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:mp4|m3u8)/g);
        return url;
    }

    static getVideoIdYoutube(url) {
        var video_id = url.split('v=')[1];
        var ampersandPosition = video_id.indexOf('&');
        if(ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }
        return video_id;
    }
}
