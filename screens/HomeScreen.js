import { View,Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import tw from 'twrnc'
import { ColorImage } from "./ColorImage"


function Banner(){
    return(
        <View style={tw`p-4 h-25 flex-row justify-center content-center mt-10 bg-purple-500`}>
            <Text style={tw`text-lg text-white`}>My favorite places</Text>
        </View>
    )
}

export function HomeScreen(){
    return (
    <SafeAreaView>
        <Banner/>
        <ColorImage/>
    </SafeAreaView>
    )
}