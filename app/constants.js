import {Dimensions} from "react-native";

export const Constants = {
    SIZE_WINDOW: Dimensions.get('window'),
    VIEW_TYPE_FULL: 1, 
    VIEW_TYPE_HALF: 0,
    HEIGHT_BAR: 50,
    GOOGLE_API_KEY: 'AIzaSyARzBhXPhu4mvV-gM_2i6JWQvdGMuRkd1s',
    TOKEN: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU0ODQ2ODQyMH0.GuG16C6K8CCHsr-Zrv9WK_KOlmNuz-_Mwut98i2YatOJ3Rgnk-rUQYNlMIdgn3IhoQVYK2PLgFb3t6twHBs4ZA',
}

export const ColorTheme = {
    BACKGROUND_COLOR: '#19191B',
    TEXT_COLOR: '#FFFFFF',
    IS_ONLINE_COLOR: 'green',
    BAR_COLOR: '#2B2C33',
    ICON_COLOR: '#FFFFFF',
    MESSAGE_BOX_COLOR: '#1986D8',
}

export const Error = {
    PASSWORD_NULL: 'Please enter password',
    PASSWORD_CONFIRM_NULL: 'Please enter confirm password',
    PASSWORD_NOT_MATCH: 'Confirm password is not match',
    USERNAME_NULL: 'Please enter username',
    EMAIL_PASSWORD_NULL: 'Please enter email and password',
    EMAIL_PASSWORD_WRONG: 'Email or password is incorrect',
    EMAIL_NULL: 'Please enter email',
    INVALID_EMAIL: 'Invalid email',
    EMAIL_EXISTS: 'Email already exists'
}
