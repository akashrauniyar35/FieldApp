
import React, { useRef, useEffect } from 'react';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';

import Crm from '../screens/Crm';
import Home from '../screens/Home';
import AMC from '../screens/AMC';
import Task from '../screens/TaskScreens/TaskStack';


const colorOne = '#01151A';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, Animated, Text } from 'react-native';
import AddButton from '../screens/AddButton';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const Tab = createBottomTabNavigator();

function MyTabs() {

    const bounceValue = new Animated.Value(1);
    const bouncer = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(bounceValue, { toValue: 15, duration: 100, useNativeDriver: true }),
                Animated.timing(bounceValue, { toValue: -15, duration: 100, useNativeDriver: true }),
                Animated.timing(bounceValue, { toValue: 15, duration: 100, useNativeDriver: true }),
                Animated.timing(bounceValue, { toValue: 0, duration: 100, useNativeDriver: true }),
            ]), { iterations: 1 }
        ).start();
    }

    useEffect(() => {
        bouncer()
    }, [])


    const customAdd = (focused) => {
        return (
            <View style={{ transform: [focused ? { scale: 1.3 } : { scale: .8 }], borderWidth: focused ? 0 : 1.8, borderColor: 'gray', borderRadius: 100, }}>
                <View style={{ backgroundColor: focused ? colorOne : 'transparent', borderRadius: 100, position: 'relative', alignItems: 'center', width: 28, height: 28, justifyContent: 'center', }}>
                    <Text style={{ color: focused ? 'white' : 'gray', fontWeight: '800', fontSize: 9 }}>AMC</Text>
                </View>
            </View>
        )
    }

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: '#ECECEC', },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Task') {
                        iconName = focused ? 'document' : 'document-outline';
                    } else if (route.name === 'Crm') {
                        iconName = focused ? 'podium' : 'podium-outline';
                    } else if (route.name === 'AMC') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === 'Add') {
                        iconName = focused ? 'add-circle' : 'add-circle';
                    }
                    return (<Icon style={{ transform: [focused ? { scale: 1.3 } : { scale: .8 }] }} name={iconName} size={size} color={color} />);
                },
                tabBarActiveTintColor: colorOne,
                tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Home" component={Home} />



            <Tab.Screen name="Task" component={Task} />

            <Tab.Screen name="Add" component={AddButton} options={{
                tabBarIcon: ({ focused }) => (
                    <TouchableWithoutFeedback onPress={bouncer} >
                        <Animated.View style={{ transform: [{ translateY: bounceValue }] }}>
                            <Icon name='add-circle' size={50} color={colorOne} style={{}} />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                ),
            }} />
            <Tab.Screen name="Crm" component={Crm} />
            <Tab.Screen name="AMC" component={AMC} options={{
                tabBarIcon: ({ focused }) => (
                    customAdd(focused,)
                )
            }} />

        </Tab.Navigator>
    );
}

export default MyTabs;