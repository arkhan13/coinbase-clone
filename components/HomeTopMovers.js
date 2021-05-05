import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const HomeTopMovers = () => {
  const [coins, setCoins] = useState([
    {
      id: 1,
      name: "Ethereum",
      icon:
        "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/eth.png",
      nick: "Eth",
      price: 123,
      drop: -12,
    },
    {
      id: 2,
      name: "Ripple",
      icon:
        "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/xrp.png",
      nick: "xrp",
      price: 123,
      drop: -12,
    },
    {
      id: 3,
      name: "Bitcoin Cash",
      icon:
        "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/bch.png",
      nick: "Bch",
      price: 123,
      drop: -12,
    },
    {
      id: 4,
      name: "Litecoin",
      icon:
        "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/ltc.png",
      nick: "Ltc",
      price: 123,
      drop: -12,
    },
    {
      id: 5,
      name: "Stellar Lumens",
      icon:
        "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/xlm.png",
      nick: "Xlm",
      price: 123,
      drop: -12,
    },
    {
      id: 6,
      name: "Bitcoin",
      icon:
        "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9ab8d6934b83a4aa8ae5e8711609a70ca0ab1b2b/128/color/btc.png",
      nick: "Btc",
      price: 123,
      drop: -12,
    },
  ]);
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "black",
          paddingTop: 10,
        }}
      >
        Top Movers
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 20 }}
      >
        {coins.map((coin) => (
          <View key={coin.id}>
            <View
              style={{
                width: 150,
                height: 150,
                borderWidth: 0.5,
                borderColor: "#ddd",
                borderRadius: 10,
                marginRight: 15,
                paddingHorizontal: 15,
              }}
            > 
            <View>
                <Image
                source={{uri:coin.icon}}
                style={{width:35,height:35,marginTop:15}}/>
            </View>

            <View style={{marginTop:15,flexDirection:'row',alignItems:'center'}}>
                  <Text style={{
                              fontSize: 16,
                              fontWeight: "500",
                            }}>{coin.nick}</Text>
                  <Text style={{
                              fontSize: 12,
                              fontWeight: "400",
                              paddingLeft:5,
                              color: "#5D616D",
                            }}>${coin.price}</Text>
              </View>
              
              <View style={{paddingTop:15}}>
              <Text style={{
                              fontSize: 30,
                              fontWeight: "400",
                              paddingLeft:5,
                              color: "red",
                            }}>${coin.drop}%</Text>
              </View>

              
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeTopMovers;
