import * as React from 'react';
import { Component, FunctionComponent } from 'react';
import { View, Text } from 'react-native';

interface ProfileProps {
    
}
 
const Profile: FunctionComponent<ProfileProps> = () => {
    return ( 
        <View>
            <Text>This is profile screen</Text>
        </View>
     );
}
 
export default Profile;