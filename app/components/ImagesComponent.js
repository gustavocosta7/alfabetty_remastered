import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import getSvg from '../services/importSvgService';
import getImage from '../services/importImagesService';

const ImagesComponent = (props) => {
  const {letter} = props;
  return (
    <View style={styles.images}>
      {getSvg(letter.alias)}
      <Image
        style={{width: 150, height: 150, marginLeft: 50}}
        source={getImage(letter.alias)}
      />
    </View>
  );
};

export default ImagesComponent;

const styles = StyleSheet.create({
  images: {
    flexDirection: 'row',
    paddingTop: 50,
  },
});
