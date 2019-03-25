import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    WebView,
    Platform,
    BackHandler,
    Image
} from 'react-native';
import pxToDp from "../../api/pxToDp";
export default class CreateBankCard extends Component {
    static navigationOptions = ({navigation})=>{
        return {
            headerTitle: '办理信用卡',//对页面的配置
            tabBarLabel: '邀请',
            tabBarIcon:<View style={{height:30,width:30,backgroundColor:'red'}}></View>,
            headerLeft:()=>{
                let back = <TouchableOpacity onPress={()=>{navigation.state.params.goBackPage();}} activeOpacity={1}>
                    <Image style={{width:pxToDp(50),height:pxToDp(50),marginLeft:pxToDp(30)}} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/back.png'}}></Image>
                </TouchableOpacity>
                return back;

            }
        }
    };
    constructor(props){
        super(props);

        this.nav = this.props.navigation;
        this.addBackAndroidListener(this.nav);

    }
    componentWillMount(){
       this.props.navigation.setParams({//给导航中增加监听事件
           goBackPage: this._goBackPage,
           canGoBack:this._canGoBack
       });

    }
    _canGoBack = ()=>{
        return this.state.backButtonEnabled;
    }
    //自定义返回事件
    _goBackPage = () => {
        //  官网中描述:backButtonEnabled: false,表示webView中没有返回事件，为true则表示该webView有回退事件
        if (this.state.backButtonEnabled) {
            this.refs['webView'].goBack();
        } else {//否则返回到上一个页面
            this.nav.goBack();
        }
    };
    //获取链接
    getSource() {//config.HelpProblemUrlTest是webView的地址(一个独立的H5页面)
        if (!config.Release) {
            return config.HelpProblemUrlTest;
        }
        return config.HelpProblemUrl;
    }

    onNavigationStateChange = navState => {
        console.log(navState.canGoBack)
        global.isBack = navState.canGoBack;
        this.setState({
            backButtonEnabled: navState.canGoBack
        });
    };

    // 监听原生返回键事件
    addBackAndroidListener(navigator) {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        if (this.state.backButtonEnabled) {
            this.refs['webView'].goBack();
            return true;
        } else {
            return false;
        }
    };
    render() {
        const { navigate } = this.props.navigation;
        return (

            <WebView
                source={{uri: 'https://m.rong360.com/credit/card/landing/10?code=3&fcode=1&utm_source=yinjia&utm_medium=0125'}}
                style={styles.webContainer}
                ref="webView"
                onNavigationStateChange={this.onNavigationStateChange}
            />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    webContainer :{
        width:pxToDp(750),
    }
});
