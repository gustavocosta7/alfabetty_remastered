import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native'

import HomeButtonsComponent from '../components/HomeButtonsComponent'

const back = require('../assets/img/back.jpg')

import Girl from '../assets/svg/girl.svg'
import Logo from '../assets/svg/logo.svg'

const Home = () => {
    return (
        <ImageBackground
          source={back}
          style={styles.backgroundImage}
        >
            <SafeAreaView style={styles.content}>
                <Girl width={150} height={150}/>
                <Logo/>
                <HomeButtonsComponent/>
            </SafeAreaView>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    backgroundImage: {
        flex:  1
    }
})

export default Home;    