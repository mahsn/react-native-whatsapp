import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Image, View } from 'react-native';
import Colors from '../constants/Colors';
import {MaterialCommunityIcons, Octicons, Fontisto} from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ChatRoomScreen from '../screens/ChatRoom';
import styles from '../components/ChatListItem/styles';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ 
      headerStyle: {
        backgroundColor:  Colors.light.tint,
        shadowOpacity: 0,
        elevation: 0 
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
      
      }}>
      <Stack.Screen 
        name="Root" 
        component={MainTabNavigator} 
        options ={{
          title: "WhatsApp",
          headerRight: () =>  (
            <View style={{
                flexDirection:'row', 
                width: 60, 
                justifyContent: 'space-between' , 
                marginRight: 10, 
                backgroundColor: Colors.light.tint,
                shadowOpacity: 0
              }}>
              <Octicons 
                name="search" 
                size={22} 
                color={'white'}  />
              <MaterialCommunityIcons 
                name="dots-vertical" 
                color={'white'} 
                size={22}  />
            </View>
          )
        }}
      />
      <Stack.Screen 
      name="ChatRoom" 
      component={ChatRoomScreen} 
      options={({route}) => ({ 
        headerTitle: () => (
          <View
            style={{
              flexDirection:'row', 
              width: 60,
              right: 15,
              justifyContent: 'space-between' , 
              backgroundColor: Colors.light.tint,
            }}
          >
            <Image style={styles.avatar} source={route.params.image}/>
            <p style={{ color: 'white', fontWeight: 'bold'}}>{route.params.name}</p>
          </View>
        )
      })} 
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
