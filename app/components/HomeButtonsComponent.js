import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Play from '../assets/svg/play.svg'
import Config from '../assets/svg/config.svg'
import Stats from '../assets/svg/stats.svg'
import { Actions } from 'react-native-router-flux';

const HomeButtonsComponent = () => {
    return (
        <View style={styles.content}>
            <TouchableOpacity style={[styles.button, styles.buttonSecondary, styles.buttonStats]}>
                <Stats width={40} height={40}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonPrimary, styles.buttonPlay]} onPress={() => Actions.studyPlan()}>
                <Play width={60} height={60}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.buttonSecondary, styles.buttonConfig]}>
                <Config width={40} height={40}/>
            </TouchableOpacity>
        </View>
    )
}

export default HomeButtonsComponent;

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 100,
        elevation: 4
    },
    buttonPrimary: {
        width: 100,
        height: 100,
    },
    buttonSecondary: {
        width: 70,
        height: 70,
        marginTop: 20
    },
    buttonPlay: {
        backgroundColor: '#01FF70'
    },
    buttonStats: {
        backgroundColor: '#0074D9'
    },
    buttonConfig: {
        backgroundColor: '#FFDC00'
    }
})