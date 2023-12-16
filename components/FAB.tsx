import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Component, FunctionComponent } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import colors from '../constants/colors';


interface FABProps {
    
}
 
const FAB: FunctionComponent<FABProps> = () => {
    return ( 
        <Pressable style={styles.container}
            onPress={handlePress}>
            <Ionicons name='add'></Ionicons>
        </Pressable>
     );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: 10, 
        position: "absolute", 
        bottom: 20, 
        right: 20, 
        backgroundColor: colors.red, 
        paddingHorizontal: 20, 
        paddingVertical: 10
    }
});

const handlePress = () => {
    console.log("+");
}
 
export default FAB;