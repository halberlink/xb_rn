import React, { Component } from 'react';
import { connect ,dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as types from '../../constants/ActionTypes'
import * as LoginActions from '../../actions/login'
import StorageConfig from '../../config/StorageConfig'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native';
import pxToDp from "../../api/pxToDp";
import http from '../../api/Request';
class Login extends Component {
    static navigationOptions = {
        // headerTitle: '登录',//对页面的配置
        tabBarIcon:<View style={{height:30,width:30,backgroundColor:'red'}}></View>
    };
    constructor (props){
        super(props);

        this.state = {
            loginState : 0,
        }
    }
    onPressSub = ()=>{

        let that = this;

        that.props.successLogin({name:1,age:2});

    }
    componentDidMount(){
    }
    componentDidUpdate(){
        //state 改变
        console.log(this.state.loginState)
        if(this.props.loginState == 2){
            this.props.navigation.navigate("Index")
        }

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <View style={styles.loginBanner}>
                    <Image style={styles.loginBannerImage} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/denglu-logo.png'}}></Image>
                </View>
                <View>
                    <View style={styles.layout40}>
                        <Text style={styles.loginType}>密码登录</Text>
                    </View>
                </View>
                <View style={[styles.warp,styles.formItem]}>
                    <View style={[styles.formItemWrap,styles.formItemBorderBottom]}>
                        <View style={styles.formItemInputDv}>
                            <TextInput
                                style={styles.formItemInput}
                                keyboardType="numeric"
                                placeholder="请输入手机号"
                                placeholderTextColor="#d0d0d0"
                            />
                        </View>
                    </View>
                </View>
                <View style={[styles.warp,styles.formItem,styles.mb20]}>
                    <View style={[styles.formItemWrap,styles.formItemBorderBottom]}>
                        <View style={styles.formItemLeft}>
                            <TextInput
                                style={styles.formItemInput}
                                placeholder="请输入登录密码"
                                placeholderTextColor="#d0d0d0"
                            />
                        </View>
                        <View style={styles.formItemRight}>
                            <Text style={styles.yline}>|</Text>
                            <Text>忘记密码?{this.props.loginState}</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.warp,styles.formItem]}>
                    <TouchableOpacity
                        style={styles.postData}
                        onPress={this.onPressSub}
                    >
                        <Text style={styles.loginText}>立即登录</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    yline:{
        color:'#d0d0d0',
        marginRight:pxToDp(25)
    },
    mb20:{
        marginBottom:pxToDp(20)
    },
    loginText:{
        color:'#fff',
        fontSize:pxToDp(32)
    },
    postData:{
        height:pxToDp(96),
        justifyContent:'center',
        backgroundColor: '#4089ff',
        borderTopLeftRadius: pxToDp(6),
        borderTopRightRadius: pxToDp(6),
        borderBottomLeftRadius: pxToDp(6),
        borderBottomRightRadius: pxToDp(6),
        alignItems: 'center',

    },
    warp:{
        paddingLeft:pxToDp(40),
        paddingRight:pxToDp(40)
    },
    loginBanner:{
        alignItems: 'center',
        paddingTop: pxToDp(114),
        paddingBottom: pxToDp(79)
    },
    loginBannerImage:{
        height: pxToDp(102),
        width: pxToDp(222)
    },
    formItemWrap:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    formItemBorderBottom:{
        borderBottomWidth: 1,
        borderBottomColor: '#dedede'
    },
    formItem:{
        backgroundColor: '#fff',
        paddingBottom: pxToDp(30)
    },
    formItemLeft:{
        flexDirection: 'row',
        alignItems:'center',
        height:pxToDp(105)
    },
    formItemRight:{
        flexDirection:'row',
        alignItems:'center'
    },
    formItemInputDv:{
        height: pxToDp(80),
        lineHeight: pxToDp(80)
    },
    formItemInput:{
        padding:0,
        fontSize: pxToDp(32),
        color: 'pink'
    },
    layout40:{
        paddingLeft: pxToDp(40),
        paddingRight: pxToDp(40)
    },
    loginType:{
        fontSize: pxToDp(40),
        color:'#333',
        lineHeight: pxToDp(56),
        marginBottom:pxToDp(47)
    }
});
const mapStateToProps = (state) => {
    const { Login } = state;
    console.log(Login)
    return {
        loginState:Login.loginState
    };
};
const mapDispatchToProps = (dispatch) => {
    // 可以直接将action包装成可以被调用的函数
    // const homeActions = bindActionCreators(homecreators, dispatch);

    return {
        successLogin:(...arg)=> dispatch(LoginActions.successLogin(...arg)),
        performLogin:(...arg)=> dispatch(LoginActions.performLogin(...arg)),
        errorLogin:(...arg)=>dispatch(LoginActions.errorLogin(...arg))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);