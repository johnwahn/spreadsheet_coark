import Start from './screens/Start';
import Spreadsheet from './screens/Spreadsheet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="Spreadsheet" component={Spreadsheet}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
