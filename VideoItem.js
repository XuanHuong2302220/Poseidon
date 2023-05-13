import { StyleSheet, Text, TouchableOpacity,Alert,FlatList, View } from 'react-native'
import React from 'react'
import {Video} from 'expo-av'
import { Image } from 'react-native';
import { windowHeight, windowWidth } from './constant';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { TouchableHighlight } from 'react-native';
import { useState,useContext } from 'react';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { dataa } from './constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

var v
export default function VideoItem({data,Active}) {
    
  const video=React.useRef(null);
    const playVideo = async () => {
        if (video.current) {
          await videoRef.current.playAsync();
        }
      };

      const {uri,id,name,like,comments,avt}=data;
      const storeData = async (value,method) => {
        try {
            if (method==false && active1==false && active2==false){
                
            value=value.slice(0, -2);
            setActive2(!active2);
            }
            else{
            if (method==false)
            setActive2(!active2);
            }
            if (method==true &&active2==false && active1==false){
                setActive1(!active1);
                }
                else{
                    if (method==true){
                    
                    setActive1(!active1);
                    }
                    }
            await AsyncStorage.setItem('key_moi', value)
        } catch (e) {
          // saving error
        }
      }
      const getDataM = async () => {
        try {
          const value = await AsyncStorage.getItem('key_moi')
          if(value !== null && active1==false) {
               // value previously store
            v=value+"+"
            alert("Số like hiện tại là "+v.length)
            setData(v)
        }
        } catch(e) {
          // error reading value
        }
      }
      const  removeData=async()=> {
        try {
          await AsyncStorage.removeItem('key_moi');
          console.log('Dữ liệu đã được xóa thành công từ AsyncStorage!');
        } catch (error) {
          console.error(error);
        }
      }
      const pauseVideo = async () => {
        if (video.current) {
          await videoRef.current.pauseAsync();
        }
      };
    const data2 = [{ id: 1, name: 'Item' },];
    
    const bottomTabHeight=useBottomTabBarHeight();
    const [mainData, setMainData] = useState([])
    const [active1, setActive1] = useState(0);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);
    const [active6, setActive6] = useState(false);
    const [active7, setActive7] = useState(false);
    const [show, setActive8] = useState(false);
    const [up, setActive9] = useState(false);
    const [bla, setName] = useState('');
    const renderItem = ({ item }) => (
        <View style={styles.item}>
         <Text style={{
            fontSize: 20,
            color: 'white',
            marginLeft: 20,
            marginRight: 20,
            marginTop:active7?340:20,
            textAlign: 'left',
         }}>
            {comments}
         </Text>
        </View>
      );
      const getlike = (ID) => {
        let temp
        dataa.forEach(item => {
            if (item.id == ID) {
                temp = item.like
            }
        })
        return temp;
    }

    _onPressButton1 =()=>{
        
        
    }
    _onPressButton2 =()=>{
        if(active1!=true)
        setActive2(!active2);
      
    }
    _onPressButton3 =()=>{
        setActive3(!active3);
    }
    _onPressButton4 =()=>{
        video.current.playFromPositionAsync(0);
        if (active3==true)
        setActive3(!active3);
    }
    _onPressButton5 =()=>{
    }
    _onPressButton6 =()=>{
        
        setActive6(!active6);
    }
    _onPressButton7 =()=>{
        if(up==true|| active7==true)
        setActive7(!active7);
        else {
            setActive9(!up); 
            setActive7(!active7);
        }
    }
    _onPressShow=()=>{
        if(active7==true){
            setActive7(!active7)
        }
        else
        setActive8(!show);
    }
    _onPressHeart=()=>{
    }
    _onPressCap=()=>{
        setActive9(!up)
        if (active7==true)
        setActive7(!active7);
    }
  return (
<TouchableHighlight onPress={this._onPressShow} underlayColor='grey' style={styles.touch} >
  <View style={[styles.container,{height:windowHeight-bottomTabHeight+100}]}>
    <Video ref={video} useNativeControls={false} volume={active6?0.0:1.0} playsInSilentLockedModeIOS ={ true }  shouldPlay={Active && !active3 } isLooping muted={false}  source={{uri}} 
     style={{  
        position:'absolute',
        width:'100%',
        height:'100%',
        zIndex:show ? 100:0,}}
        resizeMode="cover"/>
    <View >
    <FlatList
    vertical={true}
    data={data2}
    renderItem={renderItem}
    style={{
            marginTop:up? 200:760,
            marginLeft:37,
            height:'auto',
            width:320,
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            backgroundColor:'white',
            opacity:0.7
        }}
     /></View>

        <View style={styles.nameSection}>
            <Text style={{
                 color:up?'black':'white',
                 fontSize:25,
                 top:up?-335:120,
                 left:up?65:55,
            }}>
                {name}
            </Text>
        </View>
        <View style={styles.mid_botSection}>
            <Text style={{
                color: 'white',
                fontSize: 20,
                top:active7?100: -80,
                left: 10,
                opacity:up?0.7:1.0,}}>
            </Text>
        </View>

        <TouchableHighlight onPress={()=>{
        storeData(v,true)
        getDataM(true)
        
        }}  underlayColor='grey' style={styles.touch} >
        <Image source={require('./image/heart.png')}
        style={{ 
        tintColor: active1 ? "red" : "white",
        width:50,
        height:50,
        left:55,
        top:active7?0:-100,
        borderRadius:100,
        opacity:up?0.7:1.0,
        }}/>
        </TouchableHighlight>

       <TouchableHighlight onPress={()=>{
        storeData(v,false)
        getDataM()
        
        }} underlayColor='orange' style={styles.touch}>
        <Image source={require('./image/break.png')}  
        style={{ 
        tintColor: active2 ? "red" : "white",
        width:53,
        height:50,
        top:active7?0:-100,
        left:110,
        borderRadius:100,
        opacity:up?0.7:1.0,
        }}/>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._onPressButton3} underlayColor='purple' style={styles.touch}>
        <Image source={require('./image/play.png')} style={{ 
        width:50,
        height:50,
        tintColor:active3?'red':'white',
        top:active7?0:-100,
        left:170,
        borderRadius:100,
        opacity:up?0.7:1.0,
        }}/>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._onPressButton4} underlayColor='yellow' style={styles.touch} >
        <Image source={require('./image/replay.png')} 
        style={{ 
        tintColor: active4 ? "green" : "white",width:50,
        height:50,
        top:active7?0:-100,
        left:230,
        borderRadius:100,
        opacity:up?0.7:1.0,
        }}/>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._onPressCap} underlayColor='pink' style={styles.touch}>
        <Image source={require('./image/share.png')} 
        style={{width:50,
            height:50,
            tintColor:up?'green':'white',
            top:active7?0:-100,
            left:290,
            borderRadius:100,
            opacity:up?0.8:1.0,
        }}/>
        </TouchableHighlight>

        <View style={styles.topSection}>
       

        <TouchableHighlight onPress={this._onPressButton7} underlayColor='red' style={styles.touch}>
            <Image source={{uri:avt}}
             style={{
                width:active7? 345:50,
                height:active7? 330:50,
                top:active7?-345: -550,
                left:active7?15: 25,
                borderRadius:active7?30: 100,
                borderWidth:active7?0: 3,
                borderColor: 'white',}} />
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton6} underlayColor='blue' style={styles.touch}> 
            <Image source={require('./image/sound.png')}
             style={{
                width: 50,
                height: 50,
                tintColor:active6?'black':'white',
                top: -550,
                left: 245,
                borderRadius: 100,
                borderColor: active6?'red':'green',
                borderWidth: 5,
                }}/>
        </TouchableHighlight>
        </View>
    
</View>
</TouchableHighlight>
   )
}
const styles = StyleSheet.create({
item: {
width: '100%',
height: 1000,
backgroundColor: 'black',
marginTop: 60,
borderRadius: 30,
},
item_text: {
fontSize: 20,
color: 'white',
marginLeft: 20,
marginRight: 20,
marginTop: 20,
textAlign: 'left',
},
flat: {
marginLeft: 45,
backgroundColor: 'white',
width: 300,
height: 1000,
borderTopLeftRadius: 30,
borderTopRightRadius: 30,
opacity: 1,
},
touch: {
height: 0,
},
container: {
width: windowWidth,
},
video: {
position: 'absolute',
width: '100%',
height: '100%',
},
topSection: {
flexDirection: 'row',
height: 100,
width: 370,
top: -200,
left: 10,
borderRadius: 50,
},
botSection: {
height: 100,
position: 'absolute',
flexDirection: 'row',
bottom: 100,
width: 1000,
backgroundColor: 'black',
},
nameSection: {
height: 40,
position: 'absolute',
flexDirection: 'row',
top: 550,
width: 1000,
zIndex: 10,
zIndex: 11,
},
text_name: {
color: 'white',
fontSize: 25,
top: 90,
left: 60,
},
mid_botSection: {
height: 50,
position: 'absolute',
flexDirection: 'row',
bottom: 0,
width: 300,
marginLeft: 45,
borderTopLeftRadius: 25,
borderTopRightRadius: 25,
},
text_like: {
color: 'white',
fontSize: 20,
top: -80,
left: 10,
},
play: {
width: 50,
height: 50,
tintColor: 'white',
top: 700,
left: 165,
borderRadius: 100,
},
share: {
width: 50,
height: 50,
tintColor: 'white',
top: 700,
left: 285,
borderRadius: 100,
},
avt: {
width: 50,
height: 50,
top: -550,
left: 25,
borderRadius: 100,
borderWidth: 3,
borderColor: 'white',
},
});