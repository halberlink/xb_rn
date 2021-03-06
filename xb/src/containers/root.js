
import React, {Component} from 'react';
import { createStackNavigator, createBottomTabNavigator,createAppContainer } from 'react-navigation';
import {
    Image,
    View,
    Text
} from 'react-native';


import Index from '../pages/index/Index';
import TestDetail from '../pages/index/TestDetail';
import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import Invite from '../pages/invite/Invite';
import CreateBankCard from '../pages/createBankCard/CreateBankCard';
import pxToDp from '../api/pxToDp';
import RealName from "../pages/realname/RealName";
import BaseInfoDetail from "../pages/realname/BaseInfoDetail";
import Guide from '../pages/guide/guide';
import Repayment from '../pages/repayment/repayment';
import RepaymentHistory from '../pages/repaymentHistory/repaymentHistory';
import Setup from '../pages/setup/setup';
import ChangePhone from '../pages/changePhone/changePhone';






//每个tab 的 stack
const IndexStack = createStackNavigator(
    {
        Index,
        TestDetail,
        RealName,
        BaseInfoDetail,
        Repayment,
        RepaymentHistory,
        Guide,
        Setup,
        ChangePhone
    },
    {
        backBehavior:'none',
        tabBarOptions:{
            // activeTintColor:'#5599ff',
            // style:{
            //     backgroundColor:'#f8f8f8'
            // },
            indicatorStyle:{
                opacity:0
            },
            tabStyle:{
                padding:0
            },
            labelStyle:{
                fontSize:12
            },
        },
        navigationOptions: ({ navigation }) => ({
            tabBarLabel:({ focused, tintColor }) => {
                const { routeName } = navigation.state.routes[navigation.state.index];
                if(focused){
                    return <Text style={{color:'#4089ff',fontSize:12}}>首页</Text>;
                } else {
                    return <Text style={{color:'#7a7d84',fontSize:12}}>首页</Text>;
                }

            },
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state.routes[navigation.state.index];
                if(focused){
                    return <Image source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/shouye-1.png'}} style={{height:pxToDp(50),width:pxToDp(50)}}></Image>;
                } else {
                    return <Image source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/shouye-0.png'}} style={{height:pxToDp(50),width:pxToDp(50)}}></Image>;
                }
            }
        }),
    }
)
const Index_Stack = [IndexStack]
Index_Stack.forEach((item) => {
    item.navigationOptions = ({ navigation }) => {
        let tabBarVisible = true
        if (navigation.state.index > 0) {
            tabBarVisible = false
        }
        return {
            tabBarVisible,
            tabBarLabel:({ focused, tintColor }) => {
                const { routeName } = navigation.state.routes[navigation.state.index];
                if(focused){
                    return <Text style={{color:'#4089ff',fontSize:12}}>首页</Text>;
                } else {
                    return <Text style={{color:'#7a7d84',fontSize:12}}>首页</Text>;
                }

            },
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state.routes[navigation.state.index];
                if(focused){
                    return <Image source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/shouye-1.png'}} style={{height:pxToDp(50),width:pxToDp(50)}}></Image>;
                } else {
                    return <Image source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/shouye-0.png'}} style={{height:pxToDp(50),width:pxToDp(50)}}></Image>;
                }
            }
        }
    }
})
const InviteStack = createStackNavigator(
    {
        Invite,
        Guide
        
    },
    {
        backBehavior:'none',
        tabBarOptions:{
            // activeTintColor:'#5599ff',
            // style:{
            //     backgroundColor:'#f8f8f8'
            // },
            indicatorStyle:{
                opacity:0
            },
            tabStyle:{
                padding:0
            },
            labelStyle:{
                fontSize:12
            },
        },
        navigationOptions: ({ navigation }) => ({
            tabBarLabel:({ focused, tintColor }) => {
                const { routeName } = navigation.state.routes[navigation.state.index];
                switch (routeName){
                    case 'Invite':
                        if(focused){
                            return <Text style={{color:'#4089ff',fontSize:12}}>邀请</Text>;
                        } else {
                            return <Text style={{color:'#7a7d84',fontSize:12}}>邀请</Text>;
                        }
                        break;
                }
            },
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state.routes[navigation.state.index];
                switch (routeName){
                    case 'Invite':
                        if(focused){
                            return <Image source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/yaoqing-1.png'}} style={{height:pxToDp(50),width:pxToDp(50)}}></Image>;
                        } else {
                            return <Image source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/yaoqing-0.png'}} style={{height:pxToDp(50),width:pxToDp(50)}}></Image>;
                        }
                        break;
                }
            },
        }),
    }
)
const Invite_Stack = [InviteStack]
Invite_Stack.forEach((item) => {
    item.navigationOptions = ({ navigation }) => {
        let tabBarVisible = true
        if (navigation.state.index > 0) {
            tabBarVisible = false
        }
        return {
            tabBarVisible,
            tabBarLabel:({ focused, tintColor }) => {
                const { routeName } = navigation.state.routes[navigation.state.index];
                if(focused){
                    return <Text style={{color:'#4089ff',fontSize:12}}>邀请</Text>;
                } else {
                    return <Text style={{color:'#7a7d84',fontSize:12}}>邀请</Text>;
                }

            },
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state.routes[navigation.state.index];
                if(focused){
                    return <Image source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/yaoqing-1.png'}} style={{height:pxToDp(50),width:pxToDp(50)}}></Image>;
                } else {
                    return <Image source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/yaoqing-0.png'}} style={{height:pxToDp(50),width:pxToDp(50)}}></Image>;
                }
            }
        }
    }
})
const CreateBankCardStack = createStackNavigator(
    {
        CreateBankCard:{
            screen:CreateBankCard
        }
    },
    {
        backBehavior:'none',
        headerBackTitleVisible:true,
        tabBarOptions:{
            // activeTintColor:'#5599ff',
            // style:{
            //     backgroundColor:'#f8f8f8'
            // },
            indicatorStyle:{
                opacity:0
            },
            tabStyle:{
                padding:0
            },
            labelStyle:{
                fontSize:12
            },
        },
        navigationOptions: ({ navigation }) => ({
            tabBarLabel:({ focused, tintColor }) => {
                const { routeName } = navigation.state.routes[navigation.state.index];
                switch (routeName){
                    case 'CreateBankCard':
                        if(focused){
                            return <Text style={{color:'#4089ff',fontSize:12}}>办卡</Text>;
                        } else {
                            return <Text style={{color:'#7a7d84',fontSize:12}}>办卡</Text>;
                        }
                        break;
                }
            },
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state.routes[navigation.state.index];
                switch (routeName){
                    case 'CreateBankCard':
                        if(focused){
                            return <Image source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/shenqing-1.png'}} style={{height:pxToDp(50),width:pxToDp(50)}}></Image>;
                        } else {
                            return <Image source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/shenqing-0.png'}} style={{height:pxToDp(50),width:pxToDp(50)}}></Image>;
                        }
                        break;
                }
            },
        }),
    }
)
const HomeStack = createStackNavigator(
    {
        Home:{
            screen:Home
        }
    },
    {
        backBehavior:'none',
        tabBarOptions:{
            activeTintColor:'#5599ff',
            style:{
                backgroundColor:'#f8f8f8'
            },
            indicatorStyle:{
                opacity:0
            },
            tabStyle:{
                padding:0
            },
            labelStyle:{
                fontSize:12,
            },
        },
        navigationOptions: ({ navigation }) => ({
            tabBarLabel:({ focused, tintColor }) => {
                const { routeName } = navigation.state.routes[navigation.state.index];
                switch (routeName){
                    case 'Home':
                        if(focused){
                            return <Text style={{color:'#4089ff',fontSize:12}}>我的</Text>;;
                        } else {
                            return <Text style={{color:'#7a7d84',fontSize:12}}>我的</Text>;
                        }
                        break;
                }
            },
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state.routes[navigation.state.index];
                switch (routeName){
                    case 'Home':
                        if(focused){
                            return <Image source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/wode-1.png'}} style={{height:pxToDp(50),width:pxToDp(50)}}></Image>;
                        } else {
                            return <Image source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/wode-0.png'}} style={{height:pxToDp(50),width:pxToDp(50)}}></Image>;
                        }
                        break;
                }
            },
        }),
    }
)
//每个tab 的页面标题配置

const MainScreenNavigator=createBottomTabNavigator(
    {
        Index:IndexStack,
        Invite:InviteStack,
        CreateBankCard:CreateBankCardStack,
        Home:HomeStack,
    }
);
MainScreenNavigator.navigationOptions = ({navigation})=>{
    const { routeName } = navigation.state.routes[navigation.state.index];
    const headerTitle = routeName;
    return {
        headerTitle,
    };
}
const EntranceNavigator = createStackNavigator(
    {
        Main:{
            screen:MainScreenNavigator,
            navigationOptions: () => ({
                // title: `A`,
                // headerBackTitle: 'A much too long text for back button from B to A',
                headerTruncatedBackTitle: `返回`,
                header:null
            }),
        },
        Login:{
            screen:Login,
            navigationOptions:()=>({
                // title: `A`,
                // headerBackTitle: 'A much too long text for back button from B to A',
                headerTruncatedBackTitle: `返回`,

            })
        }
    },
    {
        navigationOptions: {
            header:null
        },
    }
);

const needLoginRoute = [];

const defaultGetStateForAction = EntranceNavigator.router.getStateForAction;


// 路由调用dispatch 以及调用navigate 方法都会触发getSateForAction  (路由拦截)
EntranceNavigator.router.getStateForAction = (action,state)=>{

    let routeName = dealMsgDeal(action.routeName);
    storage.load({
        key: 'loginState',
        id:1000,
        autoSync: true,
        syncInBackground: true,
    }).then(ret=>{
        console.log(ret)
        user.loginState = ret.loginState;
    }).catch(err=>{
        console.log(2)
        user.loginState = false;
    })

    // GLOBAL.loginState
    //页面是MeScreen并且 global.user.loginState = false || ''（未登录）
    if (action.routeName === routeName && !user.loginState) {
        this.routes = [
            ...state.routes,
            {key: 'id-'+Date.now(), routeName: 'Login', params: action.params},
        ];
        return {
            ...state,
            routes,
            index: this.routes.length - 1,
        };
    }

    return defaultGetStateForAction(action,state)
}
// 需要拦截登录的页面
function dealMsgDeal(routeName){
    let theRouteName = '';
    if(routeName){
        for (var i in needLoginRoute) {
            if (needLoginRoute[i] == routeName) {
                theRouteName = routeName;
                break;
            }
        }
    }
    return theRouteName;
}


export default createAppContainer(EntranceNavigator);
