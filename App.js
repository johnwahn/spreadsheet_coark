import { StatusBar } from 'expo-status-bar';
import {View } from 'react-native';
import Start from './components/Start';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Start />
    </View>
  );
}
