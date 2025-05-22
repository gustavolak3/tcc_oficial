import React from "react";
 
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
 
import Login from "./screens/login"
import CriarConta from "./screens/cadastro/cadastro";

const Stack = createStackNavigator();
 
export default function Routes()
{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShow: false}} name="Login" component={Login}/>
                <Stack.Screen options={{headerShow: false}} name="CriarConta" component={CriarConta}/>
            </Stack.Navigator>
            </NavigationContainer>
    )
}