import React from "react";
 
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
 
import Login from "./screens/login"
import CriarConta from "./screens/cadastro/cadastro";
import Home from "./screens/home/home";
import Sobre from "./screens/sobre/sobre";

const Stack = createStackNavigator();
 
export default function Routes()
{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShow: false}} name="Login" component={Login}/>
                <Stack.Screen options={{headerShow: false}} name="CriarConta" component={CriarConta}/>
                <Stack.Screen options={{headerShow: false}} name="Home" component={Home}/>
                <Stack.Screen options={{headerShow: false}} name="Sobre" component={Sobre}/>
            </Stack.Navigator>
            </NavigationContainer>
    )
};
