import React, { Component } from 'react';
import { connect ,dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as types from '../../constants/ActionTypes'
import * as homecreators from '../../actions/home'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
class Home extends Component {
    static navigationOptions = {
        headerTitle: '个人中心',//对页面的配置
    };
    constructor(props){
        super(props);
        this.state = {
            name:"哈哈"
        }
    }
    componentWillMount(){

    }
    componentDidMount() {
    }
    componentWillReceiveProps(){
        console.log(this.props)
    }
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <TouchableOpacity style={{height:60,backgroundColor:'orange',justifyContent: 'center',}}
                                  onPress={() => this.props.dispatch(homecreators.homeInit(this.state.name,this.state.index))} >
                    <Text>{this.props.name}</Text>
                    <Text>{this.props.loginState}</Text>
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
    const { Index , Login } = state;
    return {
        name:Index.name,
        loginState:Login.loginState
    };
};
const mapDispatchToProps = (dispatch) => {
    const homeActions = bindActionCreators(homecreators, dispatch);

    return {
        homeActions,
    };
};

export default connect(mapStateToProps)(Home);