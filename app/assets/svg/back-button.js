import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BackButton(props) {
  return (
    <Svg
      height={props.width}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M32 58C17.641 58 6 46.359 6 32S17.641 6 32 6s26 11.641 26 26-11.641 26-26 26z"
        fill="#3cc8b4"
      />
      <Path
        d="M10 32C10 18.314 20.576 7.106 34 6.084A26.457 26.457 0 0032 6C17.641 6 6 17.641 6 32s11.641 26 26 26c.674 0 1.339-.034 2-.084C20.576 56.894 10 45.686 10 32z"
        fill="#1eaa96"
      />
      <Path d="M30 28v-8L14 32l16 12v-8h20v-8z" fill="#f0f0f0" />
    </Svg>
  );
}

export default BackButton;
