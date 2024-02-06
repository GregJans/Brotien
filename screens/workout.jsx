import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaView, Text } from "react-native";

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
        </SafeAreaView>
    )
}