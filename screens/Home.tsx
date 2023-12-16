import * as React from 'react';
import { Component, FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RoutineCard from '../components/RoutineCard';
import FAB from '../components/FAB';

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    return ( 
        <View style={styles.container}>
            <FAB></FAB>
            <RoutineCard name="Back & Bi"></RoutineCard>
            <RoutineCard name="Legs & Core"></RoutineCard>
            <RoutineCard name="Chest & Tri"></RoutineCard>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    }
})
 
export default Home;