import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import pxToDp from '../../api/pxToDp';
import list from '../../styles/modules/list'
import layout from '../../styles/modules/layout'
export default class RealNameItem extends Component {
    static defaultProps = {
        NewsNum:0
    }

    render() {
        return (
            <View style={layout.layout20}>
                <View style={[layout.layoutCard,layout.layout40,list.listItem,list.listRadius6]}>
                    <View style={[list.listItemWrap,list.listItemWrapBig]}>
                        <View style={list.listItemLeft}>
                            <Image style={[list.listItemLabelSmall,list.listItemBiglabelSmall]}  source={{uri:this.props.src}}></Image>
                            <View style={list.listItemSummary}>
                                <Text style={list.listItemSummaryMaintext}>{this.props.inner}</Text>
                            </View>
                        </View>
                        <View style={list.listItemRight}>
                            {/*<Text style={list.listItemRightText} v-if="userInfo==1">已填写</Text>*/}
                            <Text style={list.listItemRightText}>{this.props.status}</Text>
                            <Image style={list.listItemRightGo} source={{url:'https://m.xiaobaijinfu.com/static/Images/weex/go_2.png'}}></Image>
                        </View>
                    </View>
                </View>
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
