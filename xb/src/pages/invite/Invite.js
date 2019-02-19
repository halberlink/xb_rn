import React, { Component } from 'react';
import { connect ,dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
class Invite extends Component {
    static navigationOptions = {
        headerTitle: '邀请',//对页面的配置
        tabBarLabel: '邀请',
        tabBarIcon:<View style={{height:30,width:30,backgroundColor:'red'}}></View>
    };
    componentWillMount(){

    }
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <TouchableOpacity style={{height:60,backgroundColor:'orange',justifyContent: 'center',}}
                                  onPress={() => navigate('Home', { title: '详情',des:'我是返回点击我' })} >
                    <Text>点击进详情页{this.props.loginState}</Text>
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
const mapStateToProps = (state) => {
    const { Login } = state;
    return {
        loginState:Login.loginState
    };
};
const mapDispatchToProps = (dispatch) => {
    const homeActions = bindActionCreators(homecreators, dispatch);

    return {
        homeActions,
    };
};

export default connect(mapStateToProps)(Invite);