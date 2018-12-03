import React, {Component} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import StarRating from 'react-native-star-rating';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AvatarBox from "./avatarBox";
import {ColorTheme} from "../../constants";
import {Utils} from "../../utils/utils";

export default class TeacherBox extends Component {

    render() {
        const {description, teacher_name, image, stars, onPress} = this.props;
        return (
            <View style={styles.container_fluid}>
                <TouchableWithoutFeedback onPress={onPress}>
                    <View style={styles.container}>
                        <View style={styles.image_teacher}>
                            <AvatarBox
                                image={image}
                                sizeAvatar={70}
                                sizeIsOnline={15}
                            />
                        </View>
                        <View style={styles.describe_teacher}>
                            <View style={styles.teacher_name}>
                                <Text style={styles.text_name}>{teacher_name}</Text>
                            </View>

                            <View style={styles.rating}>
                                <StarRating
                                    disabled={true}
                                    emptyStar={'ios-star-outline'}
                                    fullStar={'ios-star'}
                                    halfStar={'ios-star-half'}
                                    iconSet={'Ionicons'}
                                    maxStars={5}
                                    starSize={18}
                                    rating={stars}
                                    fullStarColor={'yellow'}
                                />
                            </View>
                            <View style={styles.describe}>
                                <Text style={styles.text_describe}>{Utils.truncate(description, 60)}</Text>
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
        backgroundColor: ColorTheme.BACKGROUND_COLOR,
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
