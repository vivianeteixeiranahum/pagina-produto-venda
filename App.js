import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EditProductScreen from './src/screens/EditProductScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="EditProduct">
                <Stack.Screen
                    name="EditProduct"
                    component={EditProductScreen}
                    options={{ title: 'Editar Produto' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
