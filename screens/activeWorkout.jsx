import { useNavigation } from "@react-navigation/native"
import { Pressable, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import pageNames from "../constants/pageNames"


export default function ActiveWorkout() {

    const navigation = useNavigation() 

    return (
        <SafeAreaView>
            <Text>This is an active workout</Text>
            <Pressable onPress={() => navigation.navigate(pageNames.exercise)}>Press Here</Pressable>
        </SafeAreaView>
    )
}