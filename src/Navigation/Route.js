
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import classcomponent from '../component/classcomponent';
const stack = createNativeStackNavigator();
export default function Route() {


    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name='classcomponent'
                    component={classcomponent}>

                </stack.Screen>

            </stack.Navigator>

        </NavigationContainer>
    )
}
