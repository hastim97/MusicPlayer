import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import * as GlobalStyles from "../styles";
import Colors from "../constants/Colors";
import React from 'react';
export default class SongItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <TouchableOpacity style={styles.mainContainer} onPress={() => this.props.songClicked(this.props.song)}>
                <View style={GlobalStyles.styles.songContainer}>
                    <Image
                        source={{uri: this.props.song.thumbnail}}
                        style={GlobalStyles.styles.albumArt}
                    />
                    <View style={GlobalStyles.styles.infoContainer}>
                        <Text style={(this.props.isActive) ? [GlobalStyles.styles.songTitle, {color: Colors.accentColor}]
                                        : [GlobalStyles.styles.songTitle, {color: Colors.heading}]}>{this.props.song.title}</Text>
                        <Text style={GlobalStyles.styles.albumText}>{this.props.song.album} - {this.props.song.artist}</Text>
                    </View>
                </View>
                <Text style={styles.durationText}>{this.props.song.duration}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(1.3),
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(76, 82, 128, 0.4)'
    },

    durationText: {
        color: Colors.heading,
        // fontFamily: 'fira-regular',
        fontSize: responsiveFontSize(1.8),
        alignSelf: 'center'
    }
})