import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Services from "./src/services/services";
import HomeScreen from './src/screens/HomeScreen';
import OpalCards from './src/screens/OpalCards';
import FriendsList from './src/screens/FriendsList';
import AddFriendScreen from './src/screens/AddFriendScreen';
import Login from './src/screens/Login'
import CreateTrip from './src/screens/CreateTrip';
import CreateTripScreen from './src/screens/CreateTripScreen'
import PaymentOption from './src/screens/PaymentOption';
import PayPalPayment from './src/screens/PayPalPayment';
import MasterCardPayment from './src/screens/MasterCardPayment';
import VisaPayment from './src/screens/VisaPayment';
import TramLocation from './src/screens/TramLocation';
import PaymentHistory from './src/screens/PaymentHistory';
import TramSearchResult from './src/screens/TramSearchResult';

const Stack = createStackNavigator();

function App() {
  console.disableYellowBox = true
  const services = new Services();
  
  const logIn             = props => <Login             services={services} {...props} />;
  const homeScreen        = props => <HomeScreen        services={services} {...props} />;
  const opalCards         = props => <OpalCards         services={services} {...props} />;
  const friendsList       = props => <FriendsList       services={services} {...props} />;
  const addFriendScreen   = props => <AddFriendScreen   services={services} {...props} />;
  const createTrip        = props => <CreateTrip        services={services} {...props} />;
  const createTripScreen  = props => <CreateTripScreen  services={services} {...props} />;
  const paymentOption     = props => <PaymentOption     services={services} {...props} />;
  const payPalPayment     = props => <PayPalPayment     services={services} {...props} />;
  const masterCardPayment = props => <MasterCardPayment services={services} {...props} />;
  const visaPayment       = props => <VisaPayment       services={services} {...props} />;
  const tramLocaton       = props => <TramLocation      services={services} {...props} />;
  const paymentHistory    = props => <PaymentHistory    services={services} {...props} />;
  const tramSearchResult  = props => <TramSearchResult  services={services} {...props} />;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login"             component={logIn}             initialParams={{ services: services }} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeScreen"        component={homeScreen}        initialParams={{ services: services }} options={{ headerShown: false }}/>
        <Stack.Screen name="OpalCards"         component={opalCards}         initialParams={{ services: services }} options={{ headerShown: false }}/>
        <Stack.Screen name="FriendsList"       component={friendsList}       initialParams={{ services: services }} options={{ headerShown: false }}/>
        <Stack.Screen name="CreateTrip"        component={createTrip}        initialParams={{ services: services }} options={{ headerShown: false }}/>
        <Stack.Screen name="CreateTripScreen"  component={createTripScreen}  initialParams={{ services: services }} options={{ headerShown: false }}/>
        <Stack.Screen name="AddFriendScreen"   component={addFriendScreen}   initialParams={{ services: services }} options={{ headerShown: false }}/>
        <Stack.Screen name="PaymentOption"     component={paymentOption}     initialParams={{ services: services }} options={{ headerShown: false }}/>
        <Stack.Screen name="PayPalPayment"     component={payPalPayment}     initialParams={{ services: services }} options={{ headerShown: false }}/>
        <Stack.Screen name="MasterCardPayment" component={masterCardPayment} initialParams={{ services: services }} options={{ headerShown: false }}/>
        <Stack.Screen name="VisaPayment"       component={visaPayment}       initialParams={{ services: services }} options={{ headerShown: false }}/>
        <Stack.Screen name="TramLocation"      component={tramLocaton}       initialParams={{ services: services }} options={{ headerShown: false }}/>
        <Stack.Screen name="PaymentHistory"    component={paymentHistory}    initialParams={{ services: services }} options={{ headerShown: false }}/>
        <Stack.Screen name="TramSearchResult"  component={tramSearchResult}  initialParams={{ services: services }} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
