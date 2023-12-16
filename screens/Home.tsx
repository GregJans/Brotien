import * as React from 'react';
import { Component, FunctionComponent } from 'react';
import { View, Text } from 'react-native';

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    return ( 
        <View>
            <Text>This is home screen</Text>
        </View>
     );
}
 
export default Home;