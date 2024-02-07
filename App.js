import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";
import StudentList from "./components/StudentList";
import Profile from "./components/Profile";
import Summary from "./components/Summary";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#023E8A' },
            }}
            initialRouteName="home">
          <Stack.Screen options={{title: 'Home'}}  name="home" component={Home}/>
          <Stack.Screen options={{title: 'Student List'}} name="list" component={StudentList}/>
          <Stack.Screen options={{title: 'Student Profile'}} name="profile" component={Profile}/>
          <Stack.Screen options={{title: 'Summary Info'}} name="summary" component={Summary}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
}

