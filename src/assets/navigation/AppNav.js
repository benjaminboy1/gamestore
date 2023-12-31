import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './AuthStak'
import AppStack from './AppStack';

import { AuthContext } from '../components/context/AuthContext';

const AppNav = () => {
    const {isLoading, userToken} = useContext(AuthContext);

    if (isLoading) {
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
    }

  return (
    <NavigationContainer>
       { userToken !== null ? <AppStack/> : <AuthStack/> }
   </NavigationContainer>
  )
}

export default AppNav;

const styles = StyleSheet.create({})