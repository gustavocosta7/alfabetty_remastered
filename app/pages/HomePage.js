import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Girl from '../assets/svg/girl.svg'
import Logo from '../assets/svg/logo.svg'
import HomeButtonsComponent from '../components/HomeButtonsComponent'
const Home = () => {
    return (
        <SafeAreaView style={styles.content}>
            <Girl width={150} height={150}/>
            <Logo/>
            <HomeButtonsComponent/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})

export default Home;    