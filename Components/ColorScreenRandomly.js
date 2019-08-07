import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class ColorScreenRandomly extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: this.getRandomColor()
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ currentColor: this.getRandomColor() })
        }, parseInt(this.props.interval))
    }

    getRandomColor() {

        return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);

        // This is another solution for generating a random color.
        /*
        const characters = '0123456789abcdef'.split('');
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += characters[Math.floor(Math.random() * 16)];
        }
        return color;
        */
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.state.currentColor }]}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})