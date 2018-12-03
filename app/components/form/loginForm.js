import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TextInput, Alert} from 'react-native';
import DarkTextInput from '../sharedComponent/darkTextInput';
import ButtonCustom from '../sharedComponent/buttonCustom';
import {Constants} from "../../constants";
import {UserService} from "../../services/api/userService";

export default class LoginForm extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            borderBotWidth: 0.3,
            typedUsername:'',
            typedPassword:''
            
        };
        this.inProgressNetworkReq = false;
    }
    // componentDidMount() {
    //     this.fetchMoreData();
    // }

    // fetchMoreData() {
    //     if (!this.inProgressNetworkReq) {

    //         this.inProgressNetworkReq = true;
    //         UserService.getUsers((data) => {
    //             this.setState({
    //                 dataProvider: this.state.dataProvider.cloneWithRows(data),
    //             });

    //             this.inProgressNetworkReq = false;
    //         }, (data) => {
    //             Alert.alert(data.toString());
    //         });
    //     }
    // }

    _onFocus = () => {
        this.setState({borderBotWidth: 1.5})
    }

    _onBlur = () => {
        this.setState({borderBotWidth: 0.3})
    }

    render() {
        const {onPressSignIn, onPressRegister} = this.props;
        return (
            <View style={{flex: 1}}>
                
                <View style={styles.input_form}>
                    <TextInput style={{
                                borderBottomWidth: this.state.borderBotWidth,
                                borderBottomColor: '#FFFFFF',
                                color: '#FFFFFF',
                                fontSize: 15,
                                }}
                                placeholder='Username'
                                placeholderTextColor='gray'
                                onFocus={this._onFocus.bind(this)}
                                onBlur={this._onBlur.bind(this)}
                                onChangeText={(text)=>{this.setState(()=>{
                                    return{
                                      typedUsername: text
                                    };
                                })}}
                    />
                </View>
                <View style={styles.input_form}>
                    <TextInput style={{
                                borderBottomWidth: this.state.borderBotWidth,
                                borderBottomColor: '#FFFFFF',
                                color: '#FFFFFF',
                                fontSize: 15,
                                }}
                                placeholder='Password'
                                placeholderTextColor='gray'
                                onFocus={this._onFocus.bind(this)}
                                onBlur={this._onBlur.bind(this)}
                                secureTextEntry={true} 
                                onChangeText={(text)=>{this.setState(()=>{
                                    return{
                                      typedPassword: text
                                    };
                                })}}                                
                    />
                </View>
                <Text style={{color: 'white'}}> {this.state.typedPassword}</Text>

                <View style={styles.btn_Sign_In}>
                    <ButtonCustom onPress={()=>{
                        if (this.state.typedUsername.length == 0 || this.state.typedPassword.length == 0){
                            Alert.alert("Error","Please enter your username and password")
                        }
                        
                        const params = {
                            "email": this.state.typedUsername,
                            "password": this.state.typedPassword
                        }
                        //alert(JSON.stringify(params));
                        UserService.getUsers(params).then((result) =>{
                            if (result != null){
                                Alert.alert("Success","Login successfully");
                            }
                        }).catch((error) => {
                            Alert.alert("Error","error at loginForm");
                        });
                    }} 
                                title={'SIGN IN'}/>
                </View>
                <View style={styles.social_container}>
                    <Image style={styles.btn_Social} source={require('../../resources/icon/facebook.png')}/>
                    <Image style={styles.btn_Social} source={require('../../resources/icon/twitter.png')}/>
                    <Image style={styles.btn_Social} source={require('../../resources/icon/google-plus.png')}/>
                    <Image style={styles.btn_Social} source={require('../../resources/icon/line.png')}/>
                </View>
                <View style={styles.btn_Register}>
                    <Text style={{fontSize: 14, fontFamily: 'System', color: 'white'}}
                          onPress={onPressRegister}>Create Account</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input_form: {
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
    },
    btn_Sign_In: {
        height: 40,
        margin: 10,
        marginTop: 20
    },
    social_container: {
        margin: Constants.SIZE_WINDOW.height / 36,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_Social: {
        width: 40,
        height: 40,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_Register: {
        marginBottom: 5,
        alignItems: 'center'
    },
});
