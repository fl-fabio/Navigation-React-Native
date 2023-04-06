import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ScreenFC, { ScreenFCTab } from './src/models/screenFc'


// per i tipi di icone installo npm i --save-dev @types/react-native-vector-icons
// su babel plugins: ['react-native-reanimated/plugin']
// sulle dependencies "react-native-reanimated": "~2.14.4"
const HomeScreen:  ScreenFCTab<'Home'>= ({navigation}) =>  {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  )
}

const SettingsScreen: ScreenFCTab<'Settings'> =  ({navigation})  => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}
const Tab = createBottomTabNavigator();
const HomeStack: React.FC = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: "Home",
            tabBarIcon: ({focused}) => (
              <Ionicons
                name='ios-information-circle'
                size={25}
                color={focused ? 'tomato' : 'gray'}
              />
            ),
            tabBarBadge: 'fabio'
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options = {{
            title: "Settings",
            tabBarIcon: ({focused}) => (
              <Ionicons 
                name='ios-list-outline'
                size={25}
                color={focused ? 'tomato' : 'gray'}
              />
            ),
          }}
        />
    </Tab.Navigator>

    
  )
}
//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen 
          name="Home"
          component={HomeScreen}
          options={{headerShown: true}}
        />
        <Drawer.Screen 
          name="Settings"
          component={SettingsScreen}
          options={{headerShown: true}}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
