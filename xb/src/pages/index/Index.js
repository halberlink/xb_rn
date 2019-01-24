import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    TouchableHighlight,

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
            name:0,
            BankItemList:[
                {
                    BankName:"工商银行",
                    BankIcon:'https://m.xiaobaijinfu.com/static/images/weex/casgback_index_back_gs.png',
                    BankHotIcon:'https://m.xiaobaijinfu.com/static/images/weex/cashback_index_hotbank.png'
                },
                {
                    BankName:"交通银行",
                    BankIcon:'https://m.xiaobaijinfu.com/static/images/weex/casgback_index_back_jt_s.png',
                    BankHotIcon:'https://m.xiaobaijinfu.com/static/images/weex/cashback_index_hotbank.png'
                },
                {
                    BankName:"中信银行",
                    BankIcon:'https://m.xiaobaijinfu.com/static/images/weex/casgback_index_back_zx.png',
                    BankHotIcon:'https://m.xiaobaijinfu.com/static/images/weex/cashback_index_hotbank.png'
                },
                {
                    BankName:"光大银行",
                    BankIcon:'https://m.xiaobaijinfu.com/static/images/weex/casgback_index_back_gd.png',
                    BankHotIcon:'https://m.xiaobaijinfu.com/static/images/weex/cashback_index_hotbank.png'
                }
            ]
        }
    }
    componentDidMount(){
        console.log(this.props.navigation)
    }
    render() {
        console.log(this.state.name)
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.scrollViewStyle}>
                <View style={styles.container}>
                    <View style={styles.uiFn}>
                        <TouchableOpacity
                            onPress={() => navigate('TestDetail')}
                            activeOpacity={1}
                        >
                            <View style={styles.uiFnBox}>
                                <Image style={styles.uiFnImg} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/card_main.png'}}></Image>
                                <Text style={styles.uiFnTxt}>立即办卡</Text>
                            </View>
                        </TouchableOpacity>


                        <View style={styles.uiFnLine}></View>
                        <View style={styles.uiFnBox}>
                            <Image style={styles.uiFnImg} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/xb_znhk.png'}}></Image>
                            <Text style={styles.uiFnTxt}>智能还款</Text>
                        </View>
                    </View>
                    <View style={styles.listBox}>
                        <View style={[styles.uiList,styles.qtMB20]}>
                            <View style={styles.uiListTitle}>
                                <Text style={styles.uiListTitleText}>热门卡片</Text>
                            </View>
                            <View style={styles.uiIndexBankList}>

                                {
                                    this.state.BankItemList.map(function(item,index) {
                                        return (
                                            <View key={index} style={styles.uiIndexBankItem}>
                                                <View style={styles.uiIndexBankInfo}>
                                                    <Image style={styles.uiIndexBankFace} source={{uri:item.BankIcon}}></Image>
                                                </View>
                                                <Text style={styles.uiIndexBankName}>{item.BankName}</Text>
                                                <Image style={styles.uiHotTag} source={{uri:item.BankHotIcon}}></Image>
                                            </View>
                                        );
                                    })

                                }

                            </View>
                        </View>
                        <View style={[styles.uiList,styles.qtMB20]}>
                            <View style={styles.uiListTitle}>
                                <Text style={styles.uiListTitleText}>申请信用卡</Text>
                            </View>
                        </View>
                        <View style={[styles.uiList,styles.qtMB20]}>
                            <View style={styles.uiListTitle}>
                                <Text style={styles.uiListTitleText}>新手指引</Text>
                            </View>
                        </View>
                        <View style={[styles.uiList,styles.qtMB20]}>
                            <View style={styles.uiListTitle}>
                                <Text style={styles.uiListTitleText}>邀请拿奖励</Text>
                            </View>
                        </View>
                        <View style={[styles.uiList,styles.qtMB20]}>
                            <View style={styles.uiListTitle}>
                                <Text style={styles.uiListTitleText}>等级购买</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }
}
const styles = StyleSheet.create({
    scrollViewStyle:{
        backgroundColor: '#F4F4F5',
    },
    container: {
        justifyContent:'flex-start',
        alignItems:'flex-start',
        backgroundColor: '#F4F4F5',
    },
    listBox:{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        position: 'relative',

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
        height:pxToDp(148)
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
        width: pxToDp(750)
    },
    uiList:{
        width: pxToDp(750),
        height: pxToDp(260),
        paddingLeft:pxToDp(40),
        paddingRight:pxToDp(40),
        backgroundColor:'#fff',
    },
    uiListTitle:{
        width:pxToDp(670),
        height: pxToDp(80),
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dedede'
    },
    uiIndexBankList:{
        width: pxToDp(670),
        height: pxToDp(235),
        flexDirection: 'row',
        paddingTop: pxToDp(10)
    },
    uiIndexBankItem:{
        position: 'relative',
        width: pxToDp(167.5),
        height: pxToDp(145),
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom:pxToDp(37),

    },
    uiIndexBankInfo:{
        width: pxToDp(80),
        height: pxToDp(80),
        position: 'relative',
        marginBottom:pxToDp(20)
    },
    uiIndexBankFace:{
        width: pxToDp(80),
        height: pxToDp(80)
    },
    uiIndexBankName:{
        fontSize: pxToDp(24),
        color: '#4e4568'
    },
    uiHotTag:{
        width: pxToDp(56),
        height: pxToDp(36),
        position: 'absolute',
        top:0,
        right:0
    },
    uiListTitleText:{
        fontSize: pxToDp(28),
        color: '#666',
        lineHeight: pxToDp(40)
    },
    qtMB20:{
        marginBottom:pxToDp(20)
    },
    block2:{
        width:pxToDp(720),
        height:pxToDp(300)
    }
});
