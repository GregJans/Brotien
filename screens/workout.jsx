import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Pressable, SafeAreaView, Text } from "react-native";
import pageNames from "../constants/pageNames";

export default function Workout() {
    const navigation = useNavigation()
    const router = useRoute()
    const {params} = router

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: params.name
        })
    }, [])

    return (
        <SafeAreaView>
            <Text>Workout for {params.name}</Text>
            <Pressable onPress={() => navigation.navigate(pageNames.activeWorkout)}>Press here</Pressable>
        </SafeAreaView>
    )
}