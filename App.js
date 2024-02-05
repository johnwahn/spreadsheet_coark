import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Spreadsheet from './components/Spreadsheet';

export default function App() {
  return (
    <View style={styles.container}>
      <Spreadsheet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
