import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native'; // Add any components to be used here. This pulls them from the directory and initializes them.

// Import built-out components 
import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>

    {/* Image  */}
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>

    {/* Button 1 */}
      <View style={styles.footerContainer}>
      <Button theme="primary" label="Choose a photo" />
      <Button label="Use this photo" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
