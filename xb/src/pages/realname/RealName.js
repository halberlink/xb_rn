import React, { Component } from 'react';
import { connect ,dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    RefreshControl,
    Image
} from 'react-native';
import RealNameItem from '../../components/RealName/RealNameItem'
import pxToDp from '../../api/pxToDp'
import form from '../../styles/modules/form'
import layout from '../../styles/modules/layout'
import inviteStyles from '../../styles/pages/invite'
class Invite extends Component {
    static navigationOptions = ({navigation})=>{
        return {
            headerTitle: '实名认证',//对页面的配置
            headerRight:<TouchableOpacity style={{marginRight:pxToDp(40)}} onPress={()=>{navigation.state.params.goBackPage();}} activeOpacity={1}><Text>邀请规则</Text></TouchableOpacity>
        }
    };
    constructor(props){
        super(props)
        this.state = {
            isRefreshing:false
        }
    }
    _onRedfresh = ()=>{

    }
    componentWillMount(){

    }
    render() {
        const { navigate } = this.props.navigation;

        return (
            <ScrollView
                style={inviteStyles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRedfresh}
                        titleColor="#ccc"
                        title="松开刷新"
                    />
                }
            >
                <View style={layout.layout40}>
                    <Text style={form.formMessage}>实名认证需要完成以下3个步骤</Text>
                </View>
                <View style={layout.qtMb20}>
                    <TouchableOpacity
                        onPress={() => navigate('BaseInfoDetail')}
                        activeOpacity={1}
                        >
                        <RealNameItem
                            src="https://m.xiaobaijinfu.com/static/Images/weex/shangchuan-jiben.png"
                            status="未填写"
                            inner="基本信息填写"
                            navigate={navigate}
                        />
                    </TouchableOpacity>
                </View>
                <View style={layout.qtMb20}>
                    <RealNameItem
                        src="https://m.xiaobaijinfu.com/static/images/weex/shangchuan-shenfen.png"
                        status="未拍照"
                        inner="身份证拍照"
                    />
                </View>
                <View>
                    <RealNameItem
                        src="https://m.xiaobaijinfu.com/static/images/weex/shangchuan-yinhangka.png"
                        status="未拍照"
                        inner="手持银行卡拍照"
                    />
                </View>
                <View style={[layout.layout40,layout.qtPt52]}>
                    <View style={form.formButton}>
                        <Text style={form.formButtonText}>提交认证</Text>
                    </View>
                </View>
            </ScrollView>
            // <View style={styles.container}>
            //     <TouchableOpacity style={{height:60,backgroundColor:'orange',justifyContent: 'center',}}
            //                       onPress={() => navigate('Home', { title: '详情',des:'我是返回点击我' })} >
            //         <Text>点击进详情页{this.props.loginState}</Text>
            //     </TouchableOpacity>
            // </View>
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