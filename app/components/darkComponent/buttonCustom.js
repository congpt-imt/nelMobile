import React, { Component } from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import RF from 'react-native-responsive-fontsize';

export default class ButtonCustom extends Component {

    // constructor() {
    //     super()
    //
    // }

    render() {
        const { onPress, title } = this.props;

        return (
            <TouchableHighlight onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        {title}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        backgroundColor: 'transparent',
        borderRadius: 1000,
        borderWidth: 0.3,
        borderColor: '#FFFFFF'
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: RF(3.2),
    },
})

ButtonCustom.ProTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}













// export const Button = ({ children }) => (
//     <TouchableCustom>
//         {active => (
//             <ButtonContainer active={active}>
//                 <ButtonText>{children}</ButtonText>
//             </ButtonContainer>
//         )}
//     </TouchableCustom>
// );
//
// const ButtonContainer = cssta(Animated.View)`
//   --primary: #008CDD;
//   --foreground: var(--primary);
//   --background: transparent;
//   margin: 10px 50px;
//   padding: 10px 15px;
//   border-radius: 5px;
//   border: 1px solid var(--primary);
//   background-color: var(--background);
//   transition: background-color 0.2s;
//   &[@active] {
//     --foreground: white;
//     --background: var(--primary);
//   }
// `;
//
// const ButtonText = cssta(Animated.Text)`
//   color: var(--foreground);
//   text-align: center;
//   transition: color 0.3s;
// `;
