import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { welcome } from "../assets";
import { useNavigation } from "@react-navigation/native";
import * as Animate from 'react-native-animatable';


const Welcome = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Main");
  };
  return (
    <SafeAreaView className="flex-1 relative bg-[#0e1920]">
      <View className="flex-col">
        <View className="w-full flex-row justify-center items-center mt-[35px]">
          <Animate.Text animation="fadeInLeft" duration={800} className="text-gray-100 text-4xl font-[OrbitronBold]">Converse</Animate.Text>
          <Animate.Text animation="fadeInRight" duration={800} className="text-[#00BCC9] text-4xl font-[OrbitronBold]">Ai</Animate.Text>
        </View>
        <View className="flex justify-center items-center mt-[100px] pl-5">
          <Image
            source={welcome}
            className="w-[350px] h-[350px] object-contain"
          />
        </View>
        <Animate.View animation="fadeInUp" duration={500} className="flex w-full justify-center items-center px-4 ">
          <Text className="text-gray-200 text-xl text-center font-[OrbitronMedium]">
            "Unlock the future of chat with AI at your fingertips."
          </Text>
        </Animate.View>

        <View className=" mt-6 w-full flex justify-center items-center">
          <Animate.View animation="pulse" iterationCount={Infinity} className=" flex justify-center items-center w-24 h-24 rounded-full border-l-2 border-r-2 border-t-4 border-[#00BCC9] ">
            <TouchableOpacity
              className="bg-[#00BCC9] flex justify-center items-center w-20 h-20 rounded-full"
              onPress={handlePress}
            >
              <Text className=" text-2xl text-center font-[OrbitronMedium]">
                Go
              </Text>
            </TouchableOpacity>
          </Animate.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
