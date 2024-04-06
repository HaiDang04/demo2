/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Asm/LoginScreen';
import RegisterScreen from './Asm/SingupScreen';
import Main from './Asm/Main';
import ChiTietSP from './Asm/ChiTietSP';
import SPYeuThich from './Asm/SPYeuThich';
import PersonalInfoScreen from './Asm/PersonalInfoScreen';
import PhoneInfoScreen from './Asm/PhoneInfoScreen';
import ChangePasswordScreen from './Asm/ChangePasswordScreen ';
import Welcome from './Asm/Welcome';
import { MyThemes } from './component/MyThemes';
const Stack = createNativeStackNavigator();
function myStack() {
    return (
        <MyThemes>
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                    options={{ headerShown: false }}
                    name="Welcome"
                    component={Welcome}>
                </Stack.Screen>

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="LoginScreen"
                    component={LoginScreen}>
                </Stack.Screen>

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="RegisterScreen"
                    component={RegisterScreen}>
                </Stack.Screen>

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Main"
                    component={Main}>
                </Stack.Screen>

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="ChiTietSP"
                    component={ChiTietSP}>
                </Stack.Screen>

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="SPYeuThich"
                    component={SPYeuThich}>
                </Stack.Screen>

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="ThongTinChiTiet"
                    component={PersonalInfoScreen}>
                </Stack.Screen>

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="PhoneInfoScreen"
                    component={PhoneInfoScreen}>
                </Stack.Screen>

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="ChangePasswordScreen"
                    component={ChangePasswordScreen}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
        </MyThemes>
    );
};

AppRegistry.registerComponent(appName, () => myStack);
