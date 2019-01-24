import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import pxToDp from '../../api/pxToDp';
import PushMessage from '../../components/index/PushMessage'
export default class Main extends Component {
    static navigationOptions = {
        headerTitle: '小白信用卡管家',
        headerStyle: {
            backgroundColor: '#4089ff',
        },
        headerRight:<PushMessage NewsNum="1"/>,
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    constructor(){
        super();
        this.state = {
            name:0
        }
    }
    componentDidMount(){
        console.log(this.props.navigation)
    }
    render() {
        console.log(this.state.name)
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.uiFn}>
                    <View style={styles.uiFnBox}>
                        <Image style={styles.uiFnImg} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/card_main.png'}}></Image>
                        <Text style={styles.uiFnTxt}>立即办卡</Text>
                    </View>
                    <View style={styles.uiFnLine}></View>
                    <View style={styles.uiFnBox}>
                        <Image style={styles.uiFnImg} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/xb_znhk.png'}}></Image>
                        <Text style={styles.uiFnTxt}>智能还款</Text>
                    </View>
                </View>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View>
                        <View>
                            <View style={styles.uiBank}>
                                <View style={styles.uiBankTitle}>
                                    <Text style={styles.uiBankTitleText}>热门卡片</Text>
                                </View>
                            </View>
                        </View>
                        <View class="ui-index-bank-item qt-mb37">
                        <View class="ui-index-bank-info qt-mb20">
                            <Image class="ui-index-bank-face qt-mb20" source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/casgback_index_back_gs.png'}}></Image>
                        </View>
                        <Text class="ui-index-bank-name">工商银行</Text>
                            <Image class="ui-hot-tag" source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/cashback_index_hotbank.png'}}></Image>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.block2}></View>
                <TouchableOpacity style={{height:20,backgroundColor:'orange',justifyContent: 'flex-start',alignItem:"flex-start"}}
                                  onPress={() => navigate('Home', { title: '详情',des:'我是返回点击我' })} >
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent:'flex-start',
        alignItems:'flex-start'

    },
    uiFn:{
        width: pxToDp(750),
        height: pxToDp(300),
        paddingTop: pxToDp(66),
        paddingBottom: pxToDp(68),
        backgroundColor: '#4089FF',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
    },
    uiFnBox:{
        width:pxToDp(120),
        height:pxToDp(148),
    },
    uiFnImg:{
        width: pxToDp(100),
        height: pxToDp(100),
        marginLeft: pxToDp(10),
        marginRight: pxToDp(10),
        marginBottom: pxToDp(8)
    },
    uiFnLine:{
        width: 1,
        height: pxToDp(114),
        backgroundColor: '#fff',
        marginLeft: pxToDp(140),
        marginRight: pxToDp(140),
        marginTop: pxToDp(16),
        opacity: 0.4,
    },
    uiFnTxt:{
        width:pxToDp(120),
        height: pxToDp(40),
        lineHeight: pxToDp(40),
        fontSize: pxToDp(28),
        color: '#fff',
        textAlign: 'center'
    },
    contentContainer:{
        width: pxToDp(750),
        height: pxToDp(400),
        paddingLeft:pxToDp(40),
        paddingRight:pxToDp(40)
    },
    uiBank:{
        width: pxToDp(670),
        height: pxToDp(235)
    },
    uiBankTitle:{
        height: pxToDp(80),
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dedede'
    },
    uiBankTitleText:{
        fontSize: pxToDp(28),
        color: '#666',
        lineHeight: pxToDp(40)
    },
    block2:{
        width:pxToDp(720),
        height:pxToDp(300)
    }
});
