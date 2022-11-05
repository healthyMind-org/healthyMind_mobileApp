/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {LogBox, TouchableOpacity} from 'react-native';
import SleepModal from '../screens/modal/SleepModal';
import NotFoundScreen from '../screens/NotFoundScreen';
import OverviewScreen from '../screens/OverviewScreen';
import {RootStackParamList, RootTabParamList} from '../types';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faChevronLeft, faHouse} from "@fortawesome/free-solid-svg-icons";
import EmotionsModal from "../screens/modal/EmotionsModal";
import ExposureModal from "../screens/modal/ExposureModal";

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{title: 'Oops!'}}
            />

            <Stack.Group
                screenOptions={({navigation}) => ({
                    presentation: 'modal',
                    headerLeft: (_props) => {
                        return (
                            <TouchableOpacity style={{marginRight: 10}} onPress={() => navigation.goBack()}>
                                <FontAwesomeIcon {..._props} icon={faChevronLeft}/>
                            </TouchableOpacity>
                        )
                    },
                    headerStyle: {
                        backgroundColor: '#b2c7eb',
                    },
                })}
            >
                <Stack.Screen
                    name="SleepModal"
                    component={SleepModal}
                    options={{title: "Sleep"}}
                />
                <Stack.Screen
                    name="EmotionsModal"
                    component={EmotionsModal}
                    options={{title: "Emotions"}}
                />
                <Stack.Screen
                    name="ExposureModal"
                    component={ExposureModal}
                    options={{title: "Exposure"}}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const Tab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {

    return (
        <Tab.Navigator
            initialRouteName="OverviewScreen"
            screenOptions={() => ({
                tabBarActiveTintColor: '#3a7075',
                tabBarInactiveTintColor: 'grey',
                tabBarActiveBackgroundColor: '#b2c7eb',
                tabBarInactiveBackgroundColor: '#b2c7eb',
                tabBarLabelStyle: {
                    marginBottom: 3
                },
                tabBarButton: (props) => <TouchableOpacity {...props}/>
            })}
        >
            <Tab.Group
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#b2c7eb',
                    },
                }}
            >
                <Tab.Screen
                    name="OverviewScreen"
                    component={OverviewScreen}
                    options={{
                        title: 'Overview',
                        tabBarIcon: ({color}) => <FontAwesomeIcon icon={faHouse} color={color}/>
                    }}
                />
            </Tab.Group>

        </Tab.Navigator>
    );
}

/**
 * We can ignore this warning (see below -> ignoreLogs) because we are not using the deep linking functionality
 * https://reactnavigation.org/docs/troubleshooting/#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state
 */

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);
