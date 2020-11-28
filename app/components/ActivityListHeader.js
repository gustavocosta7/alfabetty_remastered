import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../assets/svg/back-button';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ActivityListHeader = () => {
  return (
    <LinearGradient colors={['#de6262', '#ffb88c']} style={styles.root}>
      <View>
        <Pressable
          onPress={() => {
            console.log('olá');
          }}>
          <BackButton width={80} />
        </Pressable>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Atividades</Text>
      </View>
    </LinearGradient>
  );
};

export default ActivityListHeader;

const styles = StyleSheet.create({
  root: {
    height: 300,
    elevation: 5,
    backgroundColor: '#f57d00',
    marginBottom: 20,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 60,
    fontFamily: 'Kido',
    color: '#ffffff',
  },
});
