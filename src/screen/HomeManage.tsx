import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
// import DateReportManage from './DateReportManage';
import DateReport from './DateReport';
import PhotoDateReport from './PhotoDateReport';
import UploadDate from './UploadDate';
import DateInput from './DateInput';
// import DateReportManage from './DateReportManage';


const Stack = createStackNavigator();

function HomeManage(): React.JSX.Element {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home"
          component={Home} />

        <Stack.Screen name="DateReport" component={DateReport} />
        <Stack.Screen name="PhotoDateReport" component={PhotoDateReport} />
        <Stack.Screen name="UploadDate" component={UploadDate} />
        <Stack.Screen name="DateInput" component={DateInput} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeManage;
