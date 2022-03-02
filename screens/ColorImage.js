import { View } from "react-native"
import tw from 'twrnc'

export function ColorImage(){
    return (
        <View style={tw`h-full bg-blue-800`} >
            <View style={{width: 50, height: 50, backgroundColor: "pink"}}></View>
            <View style={{width: 100, height: 50, backgroundColor: "orange"}}></View>
            <View style={{width: 200, height: 50, backgroundColor: "coral"}}></View>
            <View style={{width: 150, height: 50, backgroundColor: "bisque"}}></View>
            <View style={{width: 100, height: 50, backgroundColor: "lightsalmon"}}></View>
            <View style={{width: 50, height: 50, backgroundColor: "hotpink"}}></View>
            <View style={{width: "25%", height: 50, backgroundColor: "moccasin"}}></View>
            <View style={{width: "50%", height: 50, backgroundColor: "peachpuff"}}></View>
            <View style={{width: 150, height: 50, backgroundColor: "plum"}}></View>
            <View style={{width: 200, height: 50, backgroundColor: "tomato"}}></View>
            <View style={{width: "100%", height: 50, backgroundColor: "violet"}}></View>
        </View>
    )
}