import React, {Component} from 'react';
import {
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import pxToDp from '../../api/pxToDp'
class Guide extends Component{
    static navigationOptions = ({navigation})=>{
       return{
        headerTitle: '新手指引',
        headerStyle: {
            backgroundColor: '#4089ff',
        },
        headerTintColor: 'red',
        headerLeft:()=>{
            let back = <TouchableOpacity onPress={()=>{navigation.goBack()}} activeOpacity={1}>
                <Image style={{width:pxToDp(50),height:pxToDp(50),marginLeft:pxToDp(30)}} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/back.png'}}></Image>
            </TouchableOpacity>
            return back;

        },
        headerTintColor: '#fff',
        headerTitleStyle: {  
            fontWeight: 'bold'
        }, 
       }
    };
    render () {
        const {navigate, goBack} = this.props.navigation
        return (
            <View>
                <Text 
                // onPress={() => navigate('Index')}
                onPress={()=>{goBack()}}
                >哈哈哈 我来到自己的第一个路由！！新手引导页！开心！！</Text>
            </View>
        )
    }
}
export default Guide