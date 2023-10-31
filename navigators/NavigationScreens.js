import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens here
import Login from '../screens/login';
import SignUp from '../screens/signup';
import Home from '../screens/home';


const Stack = createStackNavigator();


function AuthStack () {
  return (
    <Stack.Navigator
      initialRouteName="Login" 
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login}  />
    </Stack.Navigator>
  );
}






export default function NavigationScreens () {
    return (
     <Stack.Navigator 
     screenOptions={{
      headerTitle: "",
      headerTransparent: true,
      headerTintColor: "white",
      headerLeftContainerStyle: { paddingLeft: 20 },
      headerStyle: { backgroundColor: "transparent" },
    }}
    initialRouteName="AuthStack"
     
     >

      <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false, headerTitle: '' }}  />
      {/* <Stack.Screen name="MainContent" component={TabNavigator} options={{ headerShown: false }} /> */}
      


     </Stack.Navigator>
        

    )
}