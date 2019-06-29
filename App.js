import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, Text,StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import Colors from "./constants/Colors";
import {Audio} from "expo-av";
import {LinearGradient} from "expo-linear-gradient";


export default class App extends React.Component{

  constructor(props){
    super(props);
    const sound = new Audio.Sound();
    this.state = {
        fontLoaded : false,
        currentSong: [],
        songs: [],
        sound: sound,
        duration: 0,
        position: 0,
        isPaused: false,
        isSongLoading: false
    }
  }


  componentWillMount(){
    // await Font.loadAsync({
    //   'fira-regular': require("./assets/fonts/fira-sans/FiraSans-Regular.ttf"),
    //   'fira-semibold': require("./assets/fonts/fira-sans/FiraSans-SemiBold.ttf")
    // });

    this.setState({
      fontLoaded: true
    });
  }


  async componentDidMount(){
    await Audio.setAudioModeAsync({
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      staysActiveInBackground: true,
      playsInSilentModeIOS: true,
      playThroughEarpieceAndroid:true,
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      shouldDuckAndroid: true
    });
    this.state.sound.setOnPlaybackStatusUpdate(this.updatePosition.bind(this));
  }

  render() {
    if(this.state.fontLoaded) {
      return (
          <LinearGradient colors={[Colors.primaryGradientStart, Colors.primaryGradientEnd]}
                          start={[0,0]}
                          end={[1,1]}
                          styles={styles.container}>
            <Text style={{flex:1}}>Hello</Text>
            {Platform.OS === 'ios' && <StatusBar barStyle="light-content"/>}
            <AppNavigator screenProps = {{
                currentSong: this.state.currentSong,
                isSongActive: (item) => this.isSongActive(item),
                isSongSelected: () => this.isSongSelected(),
                playSong: async (song) => this.playSong(song),
                previousSong: () => this.previousSong(),
                nextSong: () => this.nextSong(),
                duration: this.state.duration,
                position: this.state.position,
                seek: (positionInPercentage) => this.seek(positionInPercentage),
                togglePause: async () => this.togglePause(),
                isPaused: this.state.isPaused,
            }}

            />
          </LinearGradient>
      );
    } else
      return null;
  }

  async playSong(song){

    let songLoaded = (Object.keys(this.state.currentSong).length !== 0);
    if( !this.state.isSongLoading &&
        (!songLoaded || this.state.currentSong.id !== song.id)){
      this.setState({
        isSongLoading: true
      });

      if(songLoaded){
        await this.state.sound.unloadAsync();
      }

      console.log("Loading song");
      await this.state.sound.loadAsync({uri: song.location},{},false);
      console.log("Playing song");
      await this.state.sound.playAsync();

      this.setState({
        currentSong: song,
        isSongLoading: false,
        isPaused: false
      });
    }

  }

  async togglePause(){
    console.log("Toggle Pause called");
    if(this.state.currentSong){
      console.log("Pausing song");
      let isPaused = !this.state.isPaused;
      if(isPaused){
        console.log("Pausing song");
        await this.state.sound.pauseAsync();
        console.log("Paused song");

      }else {
        console.log("Playing song");
        await this.state.sound.playAsync();
        console.log("Played song");
      }

      this.setState({
        isPaused: isPaused
      });
    }
  }

  isSongActive(item){
    return (this.isSongSelected() && this.state.currentSong.id === item.id);
  }

  isSongSelected(){
    return (Object.keys(this.state.currentSong).length !== 0);
  }

  nextSong(){
    if(this.isSongSelected()){
      let currentIndex = this.indexOfSong(this.state.currentSong);
      let nextSong = this.state.songs[(currentIndex + 1) % this.state.songs.length];
      this.playSong(nextSong);
    }
  }

  previousSong(){
    if(this.isSongSelected()) {
      let currentIndex = this.indexOfSong(this.state.currentSong);
      let previousSong = this.state.songs[(currentIndex - 1) % this.state.songs.length];
      this.playSong(previousSong);
    }
  }



  indexOfSong(song){
    for(let i=0;i<this.state.songs.length;i++){
      if(song.id === this.state.songs[i].id)
        return i;
    }
    return -1;
  }

  seek(positionInPercentage){
    let positionInMillis = (positionInPercentage * this.state.duration) / 100;
    this.state.sound.setPositionAsync(positionInMillis);
    this.setState({
      positionInMillis: positionInPercentage,
    });
  }


  updatePosition({durationMillis, positionMillis}){
    if((typeof durationMillis !== 'undefined') && (typeof positionMillis !== 'undefined')){
      let positionInPercentage = (positionMillis / durationMillis) * 100;
      this.setState({
        duration: durationMillis,
        position: positionInPercentage
      })
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor ,
    paddingTop: 40,
  },
});
