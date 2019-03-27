import React, {Component} from 'react';
import {
    Text, View, StyleSheet, Dimensions, Animated, Easing, AppRegistry
} from 'react-native';
import pxToDp from '../pxToDp';

viewRoot = null;

class Toast extends Component{

    _OFF = false

    constructor(props) {
        super(props);
        viewRoot = this
        this.state = {
            opacityValue: new Animated.Value(0),
            isShow: false
        };
    }

    static show = (message = '我是toast弹窗', duration = 300) => {
        if(viewRoot._OFF){
            viewRoot.state.isShow = false;
            return
        }
        viewRoot._OFF = true
        viewRoot.setState({
            isShow:true,
            message: message
        });
        // 开启动画
        Animated.sequence([
            Animated.timing(viewRoot.state.opacityValue, {
                toValue: 1,
                duration: 300,
            }),
            Animated.delay(duration),
            Animated.timing(viewRoot.state.opacityValue, {
                toValue: 0,
                duration: 300,
            }),
        ]).start(() => {
            // 动画结束后，初始化状态
            viewRoot.setState({
                isShow: false,
            });
            viewRoot._OFF = false;
        });
    }

    componentDidMount () {
        // alert(9)
    }

    render(){
        return this.state.isShow ? (
            <View style={styles.container}>
                <Animated.View 
                    style={[styles.textContainer, 
                            {opacity: this.state.opacityValue}
                ]}>
                    <Text style={styles.defaultText}>{this.state.message}</Text>
                </Animated.View>
            </View>
        ) : null
    }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: width,
        height: height,
        zIndex: 99999,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center'
    },
    defaultText: {
        lineHeight: pxToDp(45),
        fontSize: pxToDp(24),
        color: '#fff',
    },
    textContainer: {
        borderBottomLeftRadius: pxToDp(10),
        borderBottomRightRadius: pxToDp(10),
        borderTopLeftRadius: pxToDp(10),
        borderTopRightRadius: pxToDp(10),
        backgroundColor: 'rgba(0,0,0,.7)',
        alignItems: 'center',
        paddingVertical: pxToDp(10),
        paddingHorizontal: pxToDp(10)
    }
})

//将已被注册过的赋予变量名，防止重复注册报错
const originRegister = AppRegistry.registerComponent;

AppRegistry.registerComponent = (appKey, component) => {

    return originRegister(appKey, function () {
        const OriginAppComponent = component(); //之前被注册过的根组件

        return class extends Component {

            render() {
                return ( //返回一个全新的根组件
                    <View style={styles.container}>
                        <OriginAppComponent/>
                        <Toast/>
                    </View>
                );
            };
        };
    });
};


export default Toast;