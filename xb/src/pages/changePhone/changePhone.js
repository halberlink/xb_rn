import React, {Component} from 'react';
import {
    View, Text, Image, TouchableOpacity, TextInput
} from 'react-native';
import api from '../../api/api';
import pxToDp from '../../api/pxToDp';
import styles from '../../styles/pages/changePhone';
import form from '../../styles/modules/form';
import layout from '../../styles/modules/layout';
export default class changePhone extends Component {
    static navigationOptions = ({navigation})=>{
        return{
         headerTitle: '更换手机号',
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

    constructor (porps) {
        super(porps);
        this.imgCode = '';
        this.uuid = new Date().getTime() + parseInt(Math.random(100) * 100);
    }

    componentWillMount () {
        console.log(this.uuid+'ddd')
        this.imgCode = api.getGraphCode(this.uuid)
        console.log(api.getGraphCode(this.uuid))
    }

    render () {
        return (
            <View style={{backgroundColor: '#F4F4F5', width: '100%', height: '100%'}}>
                <View style={styles.formItemWrap}>
                    <View style={[form.formItemWrap,form.formItemBorder,layout.qtMl40,layout.qtMR40]}>
                        <View style={[form.formItemLeft]}>
                            <Text style={form.formItemLabel}>新手机号码</Text>
                            <TextInput
                                style={form.formItemInputShort}
                                placeholder='请输入新手机号码'
                            />
                        </View>
                    </View>
                    <View style={[form.formItemWrap,form.formItemBorder,layout.qtMl40,layout.qtMR40]}>
                        <View style={[form.formItemLeft]}>
                            <Text style={form.formItemLabel}>图形验证码</Text>
                            <TextInput
                                style={form.formItemInputShort}
                                placeholder='请输入图形验证码'
                            />
                        </View>
                        <View style={form.formItemRight}>
                            <Image source={{uri: this.imgCode}} style={form.formImgCode}></Image>
                        </View>
                    </View>
                    <View style={[form.formItemWrap,form.formItemBorder,layout.qtMl40,layout.qtMR40]}>
                        <View style={[form.formItemLeft]}>
                            <Text style={form.formItemLabel}>短信验证码</Text>
                            <TextInput
                                style={form.formItemInputShort}
                                placeholder='请填写短信验证码'
                            />
                        </View>
                        <View style={form.formItemRight}><Text>获取验证码</Text></View>
                    </View>
                    <View style={[form.formItemWrap,form.formItemBorder,layout.qtMl40,layout.qtMR40]}>
                        <View style={[form.formItemLeft]}>
                            <Text style={form.formItemLabel}>登录密码</Text>
                            <TextInput
                                style={form.formItemInputShort}
                                placeholder='请输入登录密码'
                            />
                        </View>
                    </View>
                </View>
                <View style={[layout.layout40,layout.qtPt48]}>
                    <View style={form.formButton}>
                        <Text style={form.formButtonText}>提交认证</Text>
                    </View>
                </View>
            </View>
        )
    }
}