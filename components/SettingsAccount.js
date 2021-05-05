import React from 'react'
import { View, Text,Image } from 'react-native'

const SettingsAccount = () => {
    return (
        <View>
            <Text style={{fontSize:20,fontWeight:"bold",paddingTop:10}}>Account</Text>
            <View style={{flexDirection:"column",paddingTop:30,}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",}}>
                    <Text style={{fontSize:17,fontWeight:"300",letterSpacing:0.5,marginBottom:30}}>Limits and features</Text>
                    <Image
                    source={require("../assets/icons/1x/arrow.jpg")}
                    style={{width:10,height:10}}
                    />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",}}>
                    <Text style={{fontSize:17,fontWeight:"300",letterSpacing:0.5,marginBottom:30}}>Native currency</Text>
                    <Image
                    source={require("../assets/icons/1x/arrow.jpg")}
                    style={{width:10,height:10}}
                    />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",}}>
                    <Text style={{fontSize:17,fontWeight:"300",letterSpacing:0.5,marginBottom:30}}>Country</Text>
                    <Image
                    source={require("../assets/icons/1x/arrow.jpg")}
                    style={{width:10,height:10}}
                    />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",}}>
                    <Text style={{fontSize:17,fontWeight:"300",letterSpacing:0.5,marginBottom:30}}>Privacy</Text>
                    <Image
                    source={require("../assets/icons/1x/arrow.jpg")}
                    style={{width:10,height:10}}
                    />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",}}>
                    <Text style={{fontSize:17,fontWeight:"300",letterSpacing:0.5,marginBottom:30}}>Phone Numbers</Text>
                    <Image
                    source={require("../assets/icons/1x/arrow.jpg")}
                    style={{width:10,height:10}}
                    />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",}}>
                    <Text style={{fontSize:17,fontWeight:"300",letterSpacing:0.5,marginBottom:30}}>Notification settings</Text>
                    <Image
                    source={require("../assets/icons/1x/arrow.jpg")}
                    style={{width:10,height:10}}
                    />
                </View>

            </View>
        </View>
    )
}

export default SettingsAccount
