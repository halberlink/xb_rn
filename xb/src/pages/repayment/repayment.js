import React, {Component} from 'react';
import {
    Text, View, Image, TouchableOpacity,
    Platform,
} from 'react-native'
import pxToDp from '../../api/pxToDp';
import http from '../../api/requestNew';
import api from '../../api/api';
import styles from '../../styles/pages/repayment';
import {storage} from '../../api/StorageNew';
import SwipeRow from '../../components/swipeRow/SwipeRow';

export default class Repayment extends Component {
    static navigationOptions = ({navigation})=>{
        return{
         headerTitle: '智能还款',
         headerStyle: {
             backgroundColor: '#fff',
         },
         headerLeft:(
            <TouchableOpacity onPress={()=>{navigation.goBack()}} activeOpacity={1}>
                <Image style={{width:pxToDp(50),height:pxToDp(50),marginLeft:pxToDp(30)}} source={{uri:'http://m.xiaobaijinfu.com/static/images/weex/back.png'}}></Image>
            </TouchableOpacity>
         ),
         headerRight:(
            <TouchableOpacity onPress={()=>{navigation.navigate('Guide')}} activeOpacity={1}>
                <Image style={{width:pxToDp(50),height:pxToDp(50),marginRight:pxToDp(30)}} source={{uri:'http://m.xiaobaijinfu.com/static/images/weex/yiwen.png'}}></Image>
            </TouchableOpacity>),
         headerTintColor: '#000',
         headerTitleStyle: {  
             fontWeight: 'bold'
         }, 
        }
    };
    constructor (props) {
        super(props);
        this.state ={
            hasCard: true,
            navigate: this.props.navigation.navigate,
            delCard : {},
            popup : false,
            bankCreditCard: [
                {
                    cardBank: '北京银行',
                    cardNumber: '1234567890123456',
                    realname: '秀丽啊',
                    accountLimit: '2891.00',
                    statementDate: '09',
                    paymentDate: '01',
                    is_support: false,
                    cid: 4,
                    logo: 'https://m.xiaobaijinfu.com/static/images/weex/reqcard_icon.png',
                },
                {
                    cardBank: '招商银行',
                    cardNumber: '0987654312987657',
                    realname: '伟停啊',
                    accountLimit: '45678.00',
                    statementDate: '04',
                    paymentDate: '06',
                    is_support: true,
                    cid: 3,
                    logo: 'https://m.xiaobaijinfu.com/static/images/weex/reqcard_icon.png'
                },
            ]
        }
        
    }
    jump (url) {
        if(!url){
            this.$router.back();
        }else{
            this.$router.push(url);
        }
    }
    jumpbdp(data){
        if(data.url.indexOf('guide')!=-1){
            api.navigator({
                url:'/guide/',
                params:{
                    src:"repayment"
                }
            })
            return;
        }
        this.jump(data.url);
    }
    detail (cid) {
        storage.setItem('cid', cid,{
            success: () => {
                console.log('dfhdjfsj')
                this.state.navigate('RepaymentHistory')
            }
        })
    }
    deleteCard (index, cid){
        this.state.popup = true;
        this.state.delCard.index = index;
        this.state.delCard.cid = cid;
    }
    render () {
        let {bankCreditCard} = this.state
        return (
            <View>
                { !this.state.hasCard ?
                <View style={styles.uiNoCard}>
                    <Image source={{uri:'http://m.xiaobaijinfu.com/static/images/weex/quesheng-wushuju.png'}} style={styles.uiNoCardImg}></Image>
                    <Text style={styles.uiNoCardText}>无现金一键还款</Text>
                    
                </View>
                :
                <View style={styles.uiHasCard}>
                    <Text style={styles.uiSupport} onPress={()=>this.state.navigate('support_bank')}>查看支持信用卡>></Text>
                    {
                        bankCreditCard.map((val, index) => {
                            return (
                                <View style={styles.uiCardInfo} key={index} >
                                    <SwipeRow>
                                        <TouchableOpacity
                                            style={styles.delTextContainer}
                                            onPress={() => this.deleteCard(index,item.cid)}
                                        >
                                            <Text
                                                style={styles.deleteTextStyle}
                                            >删除</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>{val.is_support && this.detail(val.cid)}} activeOpacity={1} style={styles.content}>
                                            <View style={styles.uiCardTop}>
                                                <View style={styles.uiCardTxt}>
                                                    <Image style={styles.uiCardLogo} source={{uri: val.logo}}></Image>
                                                    <Text style={styles.uiCardCname}>{val.cardBank}</Text>
                                                    <Text style={styles.uiCardUname}>({val.cardNumber.substr(0,4)})*{val.realname}</Text>
                                                </View>
                                                <View style={styles.uiCardBtnBox}>
                                                    { 
                                                        val.is_support ? 
                                                        <Text style={styles.uiCardBtnRed}>立即还款</Text> :
                                                        <Text style={styles.uiCardBtnGrey}>暂不支持</Text>
                                                    }
                                                </View>
                                            </View>
                                            <View style={styles.uiCardBottom}>
                                                <View style={styles.uiCardBottomItem}>
                                                    <Text style={styles.uiCardBottomVal}>{val.accountLimit}</Text>
                                                    <Text style={styles.uiCardBottomInst}>卡片额度</Text>
                                                </View>
                                                <View style={styles.uiCardBottomItem}>
                                                    <Text style={styles.uiCardBottomVal}>{val.statementDate}</Text>
                                                    <Text style={styles.uiCardBottomInst}>账单日</Text>
                                                </View>
                                                <View style={styles.uiCardBottomItem}>
                                                    <Text style={styles.uiCardBottomVal}>{val.paymentDate}</Text>
                                                    <Text style={styles.uiCardBottomInst}>还款日</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </SwipeRow>
                                </View>
                            )
                        })
                    }
                </View>
                }
                <View style={styles.uiAddCard}>
                { 
                    !this.state.hasCard ?
                    <Text style={styles.uiAddCardBtnbox} onPress = {()=> this.state.navigate('add_creditDetail')}>立即添加信用卡</Text> :
                    <Text style={styles.uiAddCardBtnbox} onPress = {()=> this.state.navigate('add_creditDetail')}>添加信用卡</Text>
                }
                    <TouchableOpacity onPress = {()=> this.state.navigate('webview_idcard')} activeOpacity={1}>
                        <View style={styles.uiRequsetCard}>
                            <Image style={styles.uiRequsetImgL} source={{uri: 'https://m.xiaobaijinfu.com/static/images/weex/reqcard_icon.png'}}></Image>
                            <Text style={styles.uiRequsetTxt}>申请信用卡</Text>
                            <Image style={styles.uiRequsetImgR} source={{uri: 'https://m.xiaobaijinfu.com/static/images/weex/reqcard_arrow.png'}}></Image>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.uiCardlinkText}>大额度 快至当天下卡</Text>
                </View>
                

                {/* <View style={styles.container}>
                    <SwipeRow style={styles.styleSwiper}> */}
                        {/*绝对在底部的view*/}
                        {/* <TouchableOpacity
                            style={styles.delTextContainer}
                            // onPress={() => {
                            //     alert('ss');
                            // }}
                        >
                            <Text
                                style={styles.deleteTextStyle}
                            >删除</Text>
                        </TouchableOpacity> */}
                        {/*内容content*/}
                        {/* <View style={styles.content}>
                            <Text>我是item的内e容</Text>
                        </View>
                    </SwipeRow>
                </View> */}


            </View>
        )
    }
    componentDidMount () {
        http({
            url: '/repayment/getRepaymentCard',
            method: 'POST',
            data: {},
            success: res => {
                if(res.code == 200){
                    let data = res.data.cardInfo;
                    if(data.length){
                      this.state.hasCard = true;
                      this.state.bankCreditCard = data;
                    }else{
                      this.state.hasCard = false;
                    }
                }else{
                    api.toastAlert(api.errCode[res.code])
                }
            },
            error: err => {
                api.toastAlert(api.errCode[5107])
            }
        })
    }
}


