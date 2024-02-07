import { useNavigation } from "@react-navigation/native"
import {View, Text, SafeAreaView, Pressable} from "react-native"
import RoutineCard from "../components/RoutineCard"



export default function Home() {

    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <RoutineCard name="Back and Bi"/>
            <RoutineCard name="Chest"/>
        </SafeAreaView>
    )
}
