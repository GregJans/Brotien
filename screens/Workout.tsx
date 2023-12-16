import * as React from 'react';
import { Component, FunctionComponent } from 'react';
import { View, Text } from 'react-native';

interface WorkoutProps {
    
}
 
const Workout: FunctionComponent<WorkoutProps> = () => {
    return ( 
        <View>
            <Text>This is workout screen</Text>
        </View>
     );
}
 
export default Workout;