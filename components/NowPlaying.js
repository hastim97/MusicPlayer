import React, {Component} from 'react';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import {LinearGradient} from "expo-linear-gradient";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import * as GlobalStyles from "../styles";
// import {TouchableWithoutFeedback} from "react-native-web";

export default class NowPlaying extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(

            <LinearGradient colors={[Colors.accentGradientStart, Colors.accentGradientEnd]}
                            start={[0,0]}
                            end={[1,1]}>

                <TouchableWithoutFeedback onPress={this.nowPlayingClicked.bind(this)} >
                    <View style={styles.nowPlayingContainer}>

                        <View style={[styles.progressBar, {width: responsiveWidth(this.props.currentPosition)}]}></View>
                            <View style={styles.controlContainer}>
                                <View style={GlobalStyles.styles.songContainer}>
                                    <Image source={{uri: this.props.song.thumbnail}}
                                            style={GlobalStyles.styles.albumArt}
                                    />

                                    <View style={GlobalStyles.styles.infoContainer}>
                                        <Text style={[GlobalStyles.styles.songTitle, {color: Colors.heading}]}>{this.props.song.title}</Text>
                                        <Text style={GlobalStyles.styles.albumText}>{this.props.song.album} - {this.props.song.artist}</Text>
                                    </View>
                                </View>

                                <TouchableOpacity onPress={() => this.props.onToggle()}>
                                    {this.renderPlayButton()}
                                </TouchableOpacity>
                            </View>
                    </View>
                </TouchableWithoutFeedback>


            </LinearGradient>
        )
    }

    nowPlayingClicked(){
        console.log("Now playing clicked");
        this.props.navigation.navigate('NowPlaying');
    }

    renderPlayButton(){
        if(this.props.isPaused){
            return (
                <MaterialIcons name={'play-arrow'} color={Colors.heading} size={responsiveFontSize(6)} />
            )
        }else{
            return(
                <MaterialIcons name={'pause'} color={Colors.heading} size={responsiveFontSize(6)} />
            )
        }
    }
}

const styles = StyleSheet.create({
    nowPlayingContainer:{
        height: responsiveHeight(10)
    },

    progressBar:{
        height: responsiveHeight(0.7),
        backgroundColor: Colors.heading,
        borderRadius: responsiveWidth(1)
    },

    controlContainer:{
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(6),
        alignItems: 'center'
    },

});