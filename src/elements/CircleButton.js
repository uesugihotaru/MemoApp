import React from 'react';
import { StyleSheet, View, style, TouchableHighlight } from 'react-native';
import { Font } from 'expo';
import { createIconSet } from "@expo/vector-icons";
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet(
  {
    pencil: "\uf303",
    plus: "\uf067",
    check: "\uf00c",
  },
  "FontAwsome"
);

class CircleButton extends React.Component {
    state = {
        fontLoaded: false,
    }

    async componentDidMount() {
        await Font.loadAsync({
            FontAwsome: fontAwsome,
        });

        this.setState({ fontLoaded: true });
    }

    render() {
        const { name, style, color, onPress } = this.props;

        let bgColor = '#E31676';
        let textColor = '#fff';

        if (color === 'white') {
            bgColor = '#fff';
            textColor = '#E31676';
        }

        return (
            <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
                <View style={[styles.CircleButton, style, { backgroundColor: bgColor }]}>
                    {
                        this.state.fontLoaded ? (
                            <CustomIcon name={name} style={[styles.CircleButtonTitle, { color: textColor }]} />
                        ) : null
                    }
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        position: 'absolute',
        bottom: 24,
        right: 24,
    },
    CircleButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    CircleButtonTitle: {
        fontFamily: 'FontAwsome',
        fontSize: 24,
        lineHeight: 32,
        color: '#fff',
    },
});

export default CircleButton;