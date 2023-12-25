import { StyleSheet, Text, View, SafeAreaView, Image,  KeyboardAvoidingView, TextInput, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { MaterialIcons,AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const RagisterScreen = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  const hendleRegister = (()=>{
    const user = {name,email,password}

    // send a post request to the beckend API
    axios.post("http://localhost:8000/register",user).then((result) => {
      Alert.alert("Registration Successfull" , "Your have Register successfully");
      console.log(result);
      setemail("");
      setpassword("");
      setname("");
    }).catch((err) => {
      Alert.alert("Registration Error" , "Your have Register Error");
      console.log("registration failed",err);
    });
  })

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View>
        <Image
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
          style={{ width: 150, height: 100, }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:17,fontWeight:"bold",marginTop:12,color:'#041E42'}}>Register your Account</Text>
        </View>

      <View style={{marginTop:70}} >

        <View style={{flexDirection:'row',alignItems:'center',gap:5,backgroundColor:'#D0D0D0',borderRadius:5,paddingVertical:5,marginTop:30}}>
        <AntDesign style={{marginLeft:8}} name="user" size={24} color="gray" />
        <TextInput value={name} onChange={(text)=> setname(text.target.value)} style={{color:'gray', marginVertical:10,width:300,fontSize:name ? 16:16}} placeholder="Enter your Name"/>
        </View>

      
        <View style={{flexDirection:'row',alignItems:'center',gap:5,backgroundColor:'#D0D0D0',borderRadius:5,paddingVertical:5,marginTop:30}}>
        <MaterialIcons style={{marginLeft:8}} name="email" size={24} color="gray" />
        <TextInput value={email} onChange={(text)=> setemail(text.target.value)} style={{color:'gray', marginVertical:10,width:300,fontSize:email ? 16:16}} placeholder="Enter your email"/>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',gap:5,backgroundColor:'#D0D0D0',borderRadius:5,paddingVertical:5,marginTop:30}}>
        <AntDesign style={{marginLeft:8}} name="lock1" size={24} color="gray" />
        <TextInput secureTextEntry={true} value={password} onChange={(text)=> setpassword(text.target.value)} style={{color:'gray', marginVertical:10,width:300,fontSize:password ? 16:16}} placeholder="Enter your Password"/>
        </View>
      </View>

      <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:12,alignItems:'center'}}>
        <Text>Keep me logged in</Text>
        <Text style={{color:'#007FFF',fontWeight:"500"}}>Forgot Password</Text>
      </View>

      <View style={{marginTop:50,}}/>

      <Pressable style={{padding:10,marginRight:'auto',marginLeft:"auto",backgroundColor:"#FEBE10",borderRadius:6,width:200,alignItems:'center'}} onPress={hendleRegister}>
        <Text style={{color:"white",fontSize:16,fontWeight:'bold'}}>Register</Text>
      </Pressable>

      <Pressable onPress={()=>{navigation.goBack()}}>
        <Text style={{textAlign:"center",marginTop:50,color:'gray',fontSize:16}}>Already have an account? Sing In</Text>
      </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RagisterScreen

const styles = StyleSheet.create({})