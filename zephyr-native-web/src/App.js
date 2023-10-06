import logo from './logo.svg';
import './App.css';
import { StyleSheet, View, Text } from 'react-native-web';

function App() {
  return (
    <View style={styles.container}>
        <Text>Test, Test, this is a test of a my first Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the View the entire display
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;