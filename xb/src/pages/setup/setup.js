import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import pxToDp from '../../api/pxToDp';
import styles from '../../styles/pages/setup';
import http from '../../api/requestNew';
import {storage} from '../../api/StorageNew';

export default class setup extends Component {
    static navigationOptions = ({navigation})=>{
        return{
         headerTitle: '设置',
         headerStyle: {
             backgroundColor: '#fff',
         },
         headerLeft:(
            <TouchableOpacity onPress={()=>{navigation.goBack()}} activeOpacity={1}>
                <Image style={{width:pxToDp(50),height:pxToDp(50),marginLeft:pxToDp(30)}} source={{uri:'http://m.xiaobaijinfu.com/static/images/weex/back.png'}}></Image>
            </TouchableOpacity>
         ),
         headerTintColor: '#000',
         headerTitleStyle: {  
             fontWeight: 'bold'
         }, 
        }
    }
    constructor (props) {
        super(props);
        this.navigate = this.props.navigation.navigate;
    }
    loginOut () {
        var self = this;
        http({
            url : '/auth/signout',
            data : {},
            success : function(ret){

            },
            error : function(ret){

            }
        })
        storage.remove('phone',function(){});
        storage.remove('real_userInfo',function(){});
        storage.remove('real_idcardInfo',function(){});
        storage.remove('real_bankcardInfo',function(){});
        storage.remove('userProfileDate',function(){});
        storage.remove('token',function(){
        storage.setItem('cleanView', "1",function(){});
            // api.link({'index':'0','router':'/pages/index','reload' : '1'},function(ret){
            //     eventModule.cleanView({},function(res) {});
            // });
        });
        // try {
        //     eventModule.removeUnlock({}, function (ret) {});
        //     eventModule.loginStatus({"isLogin":"false"},function(res){});
        // }catch(e){

        // }
    }
    render () {
        return (
            <View>
                <TouchableOpacity activeOpacity={1} onPress={()=>{this.navigate('ChangePhone')}}>
                <View style={styles.listItem}>
                    <Text style={[styles.listItemLeft, styles.listItemLeftText]}>手机号码</Text>
                    <View style={styles.listItemRight}>
                        <Text style={styles.listItemRightText}>131****4648</Text>
                        <Image source={{uri: 'http://m.xiaobaijinfu.com/static/images/weex/go_1.png'}} style={styles.goImg}></Image>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={()=>{this.loginOut()}}>
                <View style={styles.listItem}>
                    <Text style={styles.listItemLeftText}>退出登录</Text>
                    <Image source={{uri: 'http://m.xiaobaijinfu.com/static/images/weex/go_1.png'}} style={[styles.listItemRight, styles.goImg]}></Image>
                </View>
                </TouchableOpacity>
            </View>
        )
    }
}