import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
export default class CreateBankCard extends Component {
    static navigationOptions = {
        headerTitle: '办卡',//对页面的配置
        tabBarLabel: '邀请',
        tabBarIcon:<View style={{height:30,width:30,backgroundColor:'red'}}></View>
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{height:60,backgroundColor:'orange',justifyContent: 'center',}}
                                  onPress={() => navigate('Home', { title: '详情',des:'我是返回点击我' })} >
                    <Text>办卡</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
