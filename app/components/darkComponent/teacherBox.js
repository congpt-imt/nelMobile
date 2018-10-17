import React, {Component} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View, Image, Text} from 'react-native';
import StarRating from 'react-native-star-rating';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class TeacherBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 3.7
        };
    }

    trunc(text) {
        return text.length > 60 ? `${text.substr(0, 60)}...` : text;
    }

    render() {
        const {onPress} = this.props;
        const text = 'Là một kỹ sư phần mềm tại công ty IMT Solutions từ năm 2017. Đã có hơn 1 năm kinh nghiệm trong lĩnh vực lập trình';

        return (
            <View style={styles.container_fluid}>
                <TouchableWithoutFeedback >
                    <View style={styles.container}>
                        <View style={styles.image_teacher}>
                            <Image source={{ uri:"https://images.pexels.com/photos/719609/pexels-photo-719609.jpeg" }} style={styles.profileImg}/>
                        </View>
                        <View style={styles.describe_teacher}>
                            <View style={styles.teacher_name}>
                                <Text style={styles.text_name}>Phạm Thành Công</Text>
                            </View>
                            <View style={styles.rating}>
                                <StarRating
                                    disabled={true}
                                    emptyStar={'ios-star-outline'}
                                    fullStar={'ios-star'}
                                    halfStar={'ios-star-half'}
                                    iconSet={'Ionicons'}
                                    maxStars={5}
                                    starSize={20}
                                    rating={this.state.starCount}
                                    fullStarColor={'yellow'}
                                />
                            </View>
                            <View style={styles.describe}>
                                <Text style={styles.text_describe}>{this.trunc(text)}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container_fluid: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#1B1A20',
    },
    image_teacher: {
        flex: 3 / 10,
        backgroundColor: 'transparent',
        height: '100%',
        justifyContent:'center',
        alignItems: 'center'
    },
    describe_teacher: {
        flex: 7 / 10,
        backgroundColor: 'transparent',
        height: '100%',
        justifyContent:'center',
        marginLeft: 6,
    },
    profileImg: {
        height: 90,
        width: 90,
        borderRadius: 50,
        overflow: 'hidden'
    },
    teacher_name: {
        flex: 1,
        fontSize: 20,
        color: '#fff',
        justifyContent:'center',
    },
    rating: {
        flex: 1/2,
        width: '40%'
    },
    describe: {
        flex: 3/2,
        fontSize: 20,
        color: '#fff',
        // marginTop: 4,
        marginRight: 4,
        justifyContent:'center',
    },
    text_name: {
        fontSize: 17,
        color: '#fff'
    },
    text_describe: {
        fontSize: 14,
        color: '#fff',
        fontStyle: 'italic',
    }
});
