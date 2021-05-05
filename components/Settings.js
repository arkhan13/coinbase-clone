import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import SettingsAccount from "./SettingsAccount";
import SettingsSecurity from "./SettingsSecurity";

const Settings = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1 }}>
      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
            <View>
                <Text style={{color:"#5d616f",fontSize:14,fontWeight:"500"}}>jdfed77@gmail.com</Text>
                <Text style={{color:"090c0d",fontSize:29,fontWeight:"bold",paddingTop:5}}>AR</Text>
            </View>
            <View style={{height:100,width:"auto",borderColor:"#ddd",borderWidth:0.5,borderRadius:10,marginTop:32,overflow:"hidden"}}>
                <View style={{paddingTop:15,paddingHorizontal:12,flexDirection:"row",alignItems:"center"}}>
                    <View style={{flex:0.7}}>
                        <Text style={{flexWrap:"wrap",fontSize:17,fontWeight:"300",letterSpacing:0.5,marginRight:10}}>Share your love for crypto and get $10 of free bitcoin</Text>
                    </View>
                    <View style={{flex:0.3}}>
                        <Image
                         source={require("../assets/icons/1x/box.jpeg")}
                         style={{height:70,width:70}}
                        />

                    </View>

                </View>

            </View>
            <View style={{paddingTop:30}}>
                <SettingsAccount/>
            </View>

            <View style={{paddingTop:30}}>
                <SettingsSecurity/>
            </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
