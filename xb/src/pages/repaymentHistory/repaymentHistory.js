import React,  { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    RefreshControl,
    Image
} from 'react-native';
import pxToDp from '../../api/pxToDp';
export default class RepaymentHistory extends Component {
    static navigationOptions = ({navigation})=>{
        return{
         headerTitle: '智能还款',
         headerStyle: {
             backgroundColor: '#fff',
         },
         headerTintColor: 'red',
         headerLeft:(
            <TouchableOpacity onPress={()=>{navigation.goBack()}} activeOpacity={1}>
                <Image style={{width:pxToDp(50),height:pxToDp(50),marginLeft:pxToDp(30)}} source={{uri:'http://m.xiaobaijinfu.com/static/images/weex/back.png'}}></Image>
            </TouchableOpacity>
        ),
        headerTintColor: '#000',
        headerTitleStyle: {  
            fontWeight: 'bold'
        }
        }
     };
    render () {
        return (
            <View>
                <Text>还款记录页面</Text>
            </View>
        )
    }
}