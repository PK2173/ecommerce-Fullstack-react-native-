import {
  StyleSheet,
  Text,
  View,
  SafeArexaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          navigation.replace("Main");
        }
      } catch (error) {
        console.log("Error message", error);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    const user = { email, password };
    axios
      .post("http://localhost:8000/login", user)
      .then((result) => {
        console.log(result);
        const token = result.data.token;
        AsyncStorage.setItem("authToken", token);
        navigation.replace("Main");
      })
      .catch((err) => {
        Alert.alert("Login Error", "invalid Email");
        console.log(err);
      });
  };

  return (
    <View>
      <View>
        <Image
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
          style={{ width: 150, height: 100 }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Login In your Account
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              borderRadius: 5,
              paddingVertical: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              value={email}
              onChange={(text) => setemail(text.target.value)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="Enter your email"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              borderRadius: 5,
              paddingVertical: 5,
              marginTop: 30,
            }}
          >
            <AntDesign
              style={{ marginLeft: 8 }}
              name="lock1"
              size={24}
              color="gray"
            />
            <TextInput
              secureTextEntry={true}
              value={password}
              onChange={(text) => setpassword(text.target.value)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: password ? 16 : 16,
              }}
              placeholder="Enter your Password"
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
            alignItems: "center",
          }}
        >
          <Text>Keep me logged in</Text>
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            Forgot Password
          </Text>
        </View>

        <View style={{ marginTop: 50 }} />

        <Pressable
          style={{
            padding: 10,
            marginRight: "auto",
            marginLeft: "auto",
            backgroundColor: "#FEBE10",
            borderRadius: 6,
            width: 200,
            alignItems: "center",
          }}
          onPress={handleLogin}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Login
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text
            style={{
              textAlign: "center",
              marginTop: 50,
              color: "gray",
              fontSize: 16,
            }}
          >
            Don't have an account? Sing Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
