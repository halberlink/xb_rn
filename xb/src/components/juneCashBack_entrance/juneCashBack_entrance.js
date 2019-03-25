import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import pxToDp from '../../api/pxToDp';

export default class JuneActiveEntrance extends Component{
    constructor(props) {
        super(props);
    }
   
    render () {
        const navigate = this.props.navigate
        return (
            <View>
                <TouchableOpacity activeOpacity={1} onPress={() => navigate('active_juneCashback')}>
                    <Image 
                        source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/june_active_entrance.png'}}
                        style={styles.active_entrance}
                    ></Image>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    active_entrance: {
        width: pxToDp(102),
        height: pxToDp(100),
        // position:'absolute',
        // right:pxToDp(24),
        // bottom:pxToDp(182),
        // zIndex: 20000,
        backgroundColor: 'pink'
    }
})
