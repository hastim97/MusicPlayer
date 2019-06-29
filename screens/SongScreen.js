import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';

// import { MonoText } from '../components/StyledText';
import {LinearGradient} from "expo-linear-gradient";
import Colors from "../constants/Colors";
import NowPlaying from "../components/NowPlaying";
import {getAllSongs} from "../services/SongService";
import RoundedButton from "../components/RoundedButton";
import SongItem from "../components/SongItem";
import {MaterialIcons} from "@expo/vector-icons";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
export default class SongScreen extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            songs: [],
            // isPaused: false,
            // sound: sound,
            // currentSong: undefined,
            // isSongLoading: false
        };
    }

    async componentWillMount(){
        let songs = await getAllSongs();
        console.log("Songs :" + JSON.stringify(songs) );

        this.setState({
            songs: songs
        });
    }


    render() {
        console.log("After return Song Screem");
        return (
            <View style={styles.container}>
                <LinearGradient colors={[Colors.primaryGradientStart, Colors.primaryGradientEnd]}
                                start={[0, 0]}
                                end={[1, 1]}
                                style={{flex: 1}}>

                    <View style={styles.buttonGroup}>
                        <RoundedButton icon={<MaterialIcons name={'play-arrow'} size={responsiveFontSize(3)} color={'#fff'}/>}
                                onPress={ () => console.log("Play songs clicked")}
                                title={'Play All'} />

                        <RoundedButton icon={<MaterialIcons name={'shuffle'} size={responsiveFontSize(3)} color={'#fff'}/>}
                                       onPress={ () => console.log("Shuffle songs clicked")}
                                       title={'Shuffle'} />
                    </View>
                     <FlatList data={this.state.songs}
                               style={{flex:1}}
                               keyExtractor={(data) => data.id + ""}
                               renderItem={({item}) => <SongItem song={item}
                                                                 isActive={this.props.screenProps.isSongActive(item)}
                                                                 songClicked={this.props.screenProps.playSong.bind(this)} /> } />
                </LinearGradient>
                { Object.keys(this.props.screenProps.currentSong).length !== 0 ?  <NowPlaying isPaused={this.props.screenProps.isPaused}
                                                                                              currentPosition={this.props.screenProps.position}
                                                                                              navigation={this.props.navigation}
                                                                                              song={this.props.screenProps.currentSong}
                                                                                              onToggle={this.props.screenProps.togglePause.bind(this)}/>
                                                                                : null
                }

            </View>
        );

    }


}

SongScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

   buttonGroup:{
       flexDirection: 'row',
       justifyContent: 'space-around',
       alignItems: 'center',
       paddingVertical: responsiveHeight(2)
   }
});
