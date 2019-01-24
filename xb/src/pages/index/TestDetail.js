import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
export default class CreateBankCard extends Component {
    static navigationOptions = {
        headerTitle: '测试',//对页面的配置
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{height:60,backgroundColor:'orange',justifyContent: 'center',alignItems:'center',textAlign:'center'}}
                                   >
                    <Text>老板！进来办张卡！！！</Text>
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
