import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as ROUTES from './routes';
import {Home, Detail} from '~/UI/views';

const Stack = createStackNavigator();
const options = {
  headerShown: false,
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name={ROUTES.HOME} component={Home} />
        <Stack.Screen name={ROUTES.DETAIL} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
