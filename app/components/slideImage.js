import React, {Component} from 'react';
import {Animated, Image, Easing} from 'react-native';
import PropTypes from 'prop-types';
import '../constants';
import {Constants} from "../constants";

export default class SlideImage extends Component{
    constructor() {
        super();
        this.state = { slideImage: new Animated.Value(-300)};
    }

    render() {
        const marginLeft = this.state.slideImage;
        return (
            <Animated.View style={{ marginLeft }}>
                <Image
                    style={{width: Constants.SIZE_WINDOW.width*0.6, height: Constants.SIZE_WINDOW.height*0.11}}
                    source={this.props.img}
                />
            </Animated.View>
        );
    }

    componentDidMount() {
        Animated.timing(
            this.state.slideImage,
            {
                toValue: 0,
                duration: 1000,
                easing: Easing.bounce
            }
        ).start();
    }
}

SlideImage.propTypes = {
    img: PropTypes.string
}
