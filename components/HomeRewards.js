import React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HomeRewards = () => {
  return (
    <View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
            paddingTop: 10,
          }}
        >
          Rewards
        </Text>
        <View style={{ paddingTop: 15 }}>
          <LinearGradient
            colors={["#6c13d7", "#6c13d7"]}
            style={{ borderRadius: 15 }}
          >
            <View
              style={{
                height: 190,
                width: "auto",
                borderRadius: 10,
                paddingTop: 15,
                paddingLeft: 15,
              }}
            >
              <Text style={{ fontSize: 14, color: "white", fontWeight: "500" }}>
                Discover ways to earn crypto
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  color: "white",
                  fontWeight: "600",
                  paddingTop: 10,
                }}
              >
                Start earning
              </Text>
              <Image
                source={require("../assets/icons/1x/medal.jpeg")}
                resizeMode="contain"
                style={{
                  width: 300,
                  height: 150,
                }}
              />
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default HomeRewards;
