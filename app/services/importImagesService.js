export default function getImage(key) {
  switch (key) {
    case 'airplane':
      return require('../assets/img/words/airplane.jpg');
    case 'pineapple':
      return require('../assets/img/words/pineapple-image.png');
    case 'bee':
      return require('../assets/img/words/bee.jpg');
  }
}
