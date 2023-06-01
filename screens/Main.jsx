import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Configuration, OpenAIApi } from "openai";
import { FontAwesome5 } from "@expo/vector-icons";
import { SkypeIndicator } from "react-native-indicators";
import * as Animate from "react-native-animatable";
import axios from "axios";

const Main = () => {
  const configuration = new Configuration({
    apiKey: "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",
  });

  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  const openai = new OpenAIApi(configuration);

  const handleTextSubmit = async () => {
    // console.log(text);
    try {
      setLoading(true);
      const response = await axios.post(
        "https://api.openai.com/v1/engines/text-davinci-002/completions",
        {
          prompt: prompt,
          max_tokens: 1024,
          temperature: 0.5,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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",
          },
        }
      );
      //   console.log(response);
      const result = response.data.choices[0].text;
      console.log(response.data.choices[0].text);
      setData([
        ...data,
        { type: "user", input: prompt },
        { type: "bot", output: result },
      ]);
      setPrompt("");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <SafeAreaView className="flex-1 relative bg-[#0e1920]">
      <Animate.View
        animation="fadeInUp"
        className="w-full  flex-col px-3  mt-6"
      >
        <Text className="text-gray-100 text-2xl text-center font-[OrbitronMedium]">
          "Get started and experience the
        </Text>
        <Text className="text-[#00BCC9] text-2xl text-center font-[OrbitronMedium]">
          future of AI-powered conversations."
        </Text>
      </Animate.View>

      <ScrollView className="mb-20 mt-4">
        {data?.map((item, i) => (
          <View key={i}>
            <Animate.View
              animation={item.type === "user" ? "fadeInRight" : "fadeInLeft"}
              duration={800}
              className={`${
                item.type === "user" ? "items-end" : "items-start"
              }  mx-4 mb-3`}
            >
              <Text
                className={`text-base w-[250px] ${
                  item?.type === "user"
                    ? "bg-[#00BCC9] py-3 px-2 "
                    : " bg-[#3C4443] text-gray-100 border-l-2 border-r-2 border-[#00BCC9] border-t-2 border-b-2 px-4"
                }    rounded-xl `}
              >
                {item?.type === "user" ? item?.input : item?.output}
              </Text>
            </Animate.View>
          </View>
        ))}
      </ScrollView>

      <View className="w-full flex-row justify-between items-center px-4 absolute bottom-3 ">
        <Animate.View
          duration={800}
          animation="fadeInLeft"
          className="w-14 h-14 bg-[#00BCC9] rounded-full flex justify-center items-center"
        >
          {loading ? (
            <SkypeIndicator color="#2f2f2f" size={38} />
          ) : (
            <TouchableOpacity
              onPress={() => {
                setData([]);
              }}
            >
              <FontAwesome5 name="trash-restore-alt" size={24} color="black" />
            </TouchableOpacity>
          )}
        </Animate.View>
        <Animate.View duration={800} animation="fadeInRight">
          <TextInput
            className="bg-gray-200 w-[295px] rounded-xl px-2 text-base text-gray-950 py-2"
            placeholder="Ask me anything..."
            returnKeyType="done"
            onSubmitEditing={handleTextSubmit}
            onChangeText={(text) => setPrompt(text)}
            defaultValue={prompt}
          />
        </Animate.View>
      </View>
    </SafeAreaView>
  );
};

export default Main;
