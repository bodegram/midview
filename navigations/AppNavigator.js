import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/app/Dashboard';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
     
    </Stack.Navigator>
  );
}