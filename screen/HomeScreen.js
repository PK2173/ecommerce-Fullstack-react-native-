import { Dimensions, FlatList, Image, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = () => {

    // const {width,height}= Dimensions.get('window')
    const list = [
        {
          id: "0",
          image: "https://m.media-amazon.com/images/I/41EcYoIZhIL._AC_SY400_.jpg",
          name: "Home",
        },
        {
          id: "1",
          image:
            "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg",
          name: "Deals",
        },
        {
          id: "3",
          image:
            "https://images-eu.ssl-images-amazon.com/images/I/31dXEvtxidL._AC_SX368_.jpg",
          name: "Electronics",
        },
        {
          id: "4",
          image:
            "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg",
          name: "Mobiles",
        },
        {
          id: "5",
          image:
            "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/music.jpg",
          name: "Music",
        },
        {
          id: "6",
          image: "https://m.media-amazon.com/images/I/51dZ19miAbL._AC_SY350_.jpg",
          name: "Fashion",
        },
      ];
      const images = [
        "https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg",
      ];
  return (
   <SafeAreaView style={{paddingTop:Platform.OS === "android" ? 40 : 0,flex:1,backgroundColor:"white"}}>
   <ScrollView>
    <View style={{padding:10,backgroundColor:"#00CED1",flexDirection:"row",alignItems:"center"}}>
        <Pressable style={{flexDirection:"row",alignItems:"center",marginHorizontal:7,gap:10,backgroundColor:"white",borderRadius:3,height:38,flex:1}}>
        <AntDesign style={{padding:10}} name="search1" size={22} color="black" />
        <TextInput placeholder='Search Amazon.in'/>
        </Pressable>
        <Feather name="mic" size={22} color="black" />
    </View>

    <View style={{flexDirection:"row",alignItems:"center",gap:5,padding:10,backgroundColor:"#AFEEEE"}}>
        <EvilIcons name="location" size={24} color="black" />
        <Pressable>
            <Text style={{fontSize:13,fontWeight:"500"}}>Deliver To Praveen - Delhi 110065 </Text>
        </Pressable>
        <MaterialIcons name="keyboard-arrow-down" size={22} color="black" />
    </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {list.map((item,index)=>{
                return(
                <Pressable key={index} style={{margin:10,justifyContent:"space-evenly",alignItems:"center"}}>
                    <Image style={{width:50,height:50,resizeMode:"contain"}} source={{uri:item.image}}/>
                    <Text style={{textAlign:"center",fontSize:12,fontWeight:"500",marginTop:5}}>{item.name}</Text>
                </Pressable>
                )
            })}
        </ScrollView>

        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <View>
              <FlatList data={[1,1,1,1,1]} renderItem={({item,index})=>{
                return (
                  <View ><View/>
                    <TouchableOpacity>
                      
                    </TouchableOpacity>
                  </View>
                )
              }}/>
            </View>
        </View>

   </ScrollView>
   </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})