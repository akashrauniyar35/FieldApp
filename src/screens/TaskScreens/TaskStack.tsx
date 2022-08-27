import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Task from './Task';
import EditTaskStack from '../../components/EditTask';
import LocationSearch from '../../components/LocationSearch';
import OpenTask from './OpenTask';


const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, presentation: 'modal', animationEnabled: false }}>
            <Stack.Screen name="task" component={Task} />
            <Stack.Screen name="locationSearch" component={LocationSearch} />
            <Stack.Screen name="editTaskStack" component={EditTaskStack} options={{ animationEnabled: true }} />
            <Stack.Screen name="openTask" component={OpenTask} />
        </Stack.Navigator>
    );
}

export default MyStack;