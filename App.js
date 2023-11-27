import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import GeneralScreen from "./src/screens/GeneralScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import LabsScreen from "./src/screens/LabsScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import UploadScreen from "./src/screens/UploadScreen";
import VisitsScreen from "./src/screens/VisitsScreen";
import VitalsScreen from "./src/screens/VitalsScreen";

// First import the component you would like to use as a screen
// Then add that component below
// The name you want to refer it as on the left
// The actual exported name of the component on the right
// The initialRouteName is the default page of your application

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Upload">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="General" component={GeneralScreen} />
        <Drawer.Screen name="History" component={HistoryScreen} />
        <Drawer.Screen name="Labs" component={LabsScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Upload" component={UploadScreen} />
        <Drawer.Screen name="Visits" component={VisitsScreen} />
        <Drawer.Screen name="Vitals" component={VitalsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
