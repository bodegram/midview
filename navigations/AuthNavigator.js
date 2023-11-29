import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/auth/login";
import Register from "../screens/auth/register";
import ResetPassword from "../screens/auth/reset";
import Home from "../screens/auth/intro";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Reset Password"
        component={ResetPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
