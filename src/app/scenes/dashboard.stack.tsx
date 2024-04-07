import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingDashboardScreen from './onboarding.dashboard.screen';
import {NavigationHeader} from '../../atomic/atoms/molecules/navigation.header.component';

export type DashboardRoutes = {
  DashboardOnboarding: undefined;
};

const Stack = createStackNavigator<DashboardRoutes>();
export const DashboardStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="DashboardOnboarding"
      screenOptions={{
        headerTitle: 'Empty Stack',
      }}>
      <Stack.Screen
        name="DashboardOnboarding"
        component={OnboardingDashboardScreen}
        options={{
          header: ({navigation, route, options}) => {
            const title = 'Onboarding'; // You can also use route.params to dynamically set the title
            return <NavigationHeader title={title} />;
          },
        }}
      />
    </Stack.Navigator>
  );
};
