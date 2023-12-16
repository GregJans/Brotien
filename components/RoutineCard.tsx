import * as React from 'react';
import { FunctionComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../constants/colors';


interface RoutineCardProps {
    name: string
}
 
const RoutineCard: FunctionComponent<RoutineCardProps> = (props: RoutineCardProps) => {
    return ( 
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.text}>{props.name}</Text>
                </View>
            </View> 
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        elevation: 3,
        backgroundColor: colors.black,
        shadowOffset: {width: 1, height: 1},
        shadowColor: colors.black,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        margin: 8,
        height: 'auto',
        width: '75%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cardContent: {
        margin: 16,
    },

    text: {
        color: colors.white,
        fontSize: 48,
        fontWeight: "400"
    }
})

const handlePress = () => {
    console.log('pressed');
}
 
export default RoutineCard;