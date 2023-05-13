import React, { Component, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Button, ScrollView, FlatList, component } from 'react-native';
import { Video } from 'expo-av';
import { data } from './constant'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function Videothem({navigation}) {
    
  const [status, setStatus] = React.useState({})
  const videoRef = React.useRef(null)

  const userclick = () => {
    alert('tới trang user này')
  }
  const addclick = () =>{
    alert('them video')
  }

  const glassclick = () => {
    alert('muon tim gi ?');
  };
  const PickVideo = () => {
    alert('Tới trang video này')
  }
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={PickVideo}
        style={styles.bottom} >
        <Video
          ref={videoRef}
          source={item.src}
          style={styles.video}
          resizeMode='cover'
          isLooping
          shouldPlay={false}
          useNativeControls={false}
          onPlaybackStatusUpdate={setStatus}

        />

      </TouchableOpacity>
    )
  }
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity onPress={userclick}>
            <Image source={require('./assets/image/user.png')} style={styles.iconTopuser} />
          </TouchableOpacity>
          <TouchableOpacity onPress={addclick}>
            <Image source={require('./assets/image/add.png')} style={styles.iconTopadd} />
          </TouchableOpacity>
          <TouchableOpacity onPress={glassclick}>
            <Image source={require('./assets/image/glass.png')} style={styles.iconTopglass} />
          </TouchableOpacity>
        </View>

        <View style={styles.bottom}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  top: {
    flex: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 50
  },
  bottom: {
    flex: 90,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  iconTopadd: {
    height: 50,
    width: 50,
    marginLeft: 110
  },
  iconTopglass: {
    height: 50,
    width: 50,
    marginLeft: 110
  },
  iconTopuser: {
    height: 50,
    width
: 50,
    marginLeft: 20
  },
  video: {
    backgroundColor: 'white',
    flex: 90,
    alignItems: 'stretch',
    borderRadius: 40,
    borderWidth: 1,
    marginBottom:10,
    height: 200
  }
});
