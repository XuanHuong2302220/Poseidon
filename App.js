import { StatusBar } from 'expo-status-bar';
import { StyleSheet,FlatList, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VideoItem from './VideoItem';
import { dataa, windowHeight, windowWidth } from './constant';
import { Image } from 'react-native';
import { useState } from 'react';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const BottomTab= createBottomTabNavigator();

const data2 = [
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
  </View>
);

const HomeScreen=() => {
  const [activeVideo,setActiveVideo]=useState(0);
  const bottomTabHeight=useBottomTabBarHeight();
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={dataa}
        pagingEnabled
        renderItem={({ item, index }) => (
          <VideoItem data={item} Active={activeVideo === index} />
        )}
        onScroll={(e) => {
          const index = Math.round(
            e.nativeEvent.contentOffset.x / windowWidth
          );
          setActiveVideo(index);
        }}
      />
    </View>
  );
};


export default function App() {
 
  return (
  <NavigationContainer>
   <BottomTab.Navigator screenOptions={{
    tabBarStyle:{display:'none', backgroundColor:'white',width:300,marginLeft:45,borderTopLeftRadius:25,borderTopRightRadius:25,marginTop:-50,opacity:0.5},
    headerShown:false,
    tabBarActiveTintColor:'black',
  }}>
    <BottomTab.Screen name=" " component={HomeScreen}
    options={{
    tabBarIcon:({focused})=>(
      <Image
       source={require('./image/down.png')}
       style={[
        styles.bottomTabIcon,
        focused && styles.bottomTabIconFocused,
       ]}
       />
    )
    }}
    />
    </BottomTab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container2: {
  backgroundColor: 'red',
  marginBottom: -600,
  },
  container: {
  flex: 1,
  },
  item: {
  width: 100,
  height: 100,
  margin: 8,
  backgroundColor: 'gray',
  },
  bottomTabIcon: {
  width: 40,
  height: 40,
  tintColor: 'white',
  marginTop: 20,
  marginLeft: 230,
  },
  bottomTabIconFocused: {
  tintColor: 'black',
  },
  topTabIcon: {
  width: 70,
  height: 70,
  marginTop: 50,
  borderTopLeftRadius: 30,
  },
  });