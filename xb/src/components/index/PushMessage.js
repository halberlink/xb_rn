import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import pxToDp from '../../api/pxToDp';
export default class PushMessage extends Component {
    static defaultProps = {
        NewsNum:0
    }

    render() {

        return (
            <View style={styles.container}>
                <Image style={styles.newsicon} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/xiaoxi_new.png'}}/>
                {
                    this.props.NewsNum!==0?
                        (
                            <View style={styles.newsnum}>
                                <Text style={styles.num}>{this.props.NewsNum}</Text>
                            </View>
                        ):(
                            <View style={{width:0,height:0}}></View>
                        )
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:pxToDp(90),
        height:pxToDp(70),
        justifyContent:'center',
        alignItems:'flex-start',
        position:'relative'
    },
    newsnum:{
        width:pxToDp(30),
        height:pxToDp(30),
        backgroundColor: 'red',
        borderRadius:pxToDp(15),
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:0,
        right:pxToDp(30),
    },
    num:{
        color:'#fff',
        fontSize:pxToDp(25),

    },
    newsicon:{
        width:pxToDp(46),
        height:pxToDp(46),

    }
});
