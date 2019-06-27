import React, {Component} from 'react';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import {LinearGradient} from "expo-linear-gradient";
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import Colors from "../constants/Colors";

export default class NowPlaying extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            progress: 0.3
        }
    }

    render(){
        return(

            <LinearGradient colors={[Colors.accentGradientStart, Colors.accentGradientEnd]}
                            start={[0,0]}
                            end={[1,1]}
                            style={styles.nowPlayingContainer}>

                <View style={[styles.progressBar, {width: responsiveWidth((this.state.progress) * 100)}]}></View>
                <View style={styles.controlContainer}>
                    <View style={styles.songContainer}>
                        <Image source={{uri: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.stereogum.com%2Fuploads%2F2018%2F01%2FScary-Hours-1516452280-640x640.jpg&f=1"}}
                                style={styles.albumArt}
                        />

                        <View style={styles.infoContainer}>
                            <Text style={styles.songTitle}>Song</Text>
                            <Text style={styles.albumText}>Album info</Text>
                        </View>
                    </View>
                    <MaterialIcons name={'play-arrow'} color={Colors.heading} size={responsiveFontSize(6)} />
                    
                </View>
            </LinearGradient>
        )
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

    songContainer:{
        flexDirection: 'row',

    },

    albumArt: {
        width: responsiveHeight(7),
        height: responsiveHeight(7),
        borderRadius: responsiveHeight(1),
        marginRight: responsiveWidth(5),

    },
    infoContainer:{
        justifyContent: 'center',

    },

    songTitle:{
        fontFamily: 'fira-regular',
        color: Colors.heading,
        fontSize: responsiveFontSize(2.3),
        marginBottom: responsiveHeight(0.3),
    },

    albumText:{
        fontFamily: 'fira-regular',
        color: Colors.greyColor,
        fontSize: responsiveFontSize(1.7),
    }

});