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
import pxToDp from '../../api/pxToDp'
import form from '../../styles/modules/form'
import layout from '../../styles/modules/layout'
import inviteStyles from '../../styles/pages/invite'
class Invite extends Component {
    static navigationOptions = ({navigation})=>{
        return {
            headerTitle: '邀请好友',//对页面的配置
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
                <View style={inviteStyles.invite}>
                    <View style={inviteStyles.inviteHead}>
                        <Image style={inviteStyles.inviteHeadImage} source={{uri:'https://www.p2peye.com/uc_server/data/avatar/000/39/34/90_avatar_middle.jpg'}}></Image>
                        <Text style={inviteStyles.inviteHeadName}>我的等级：普通会员</Text>
                            {/*<!-- <Text class="invite-head-info">当前通道费率：{{userInfo.rate}}%</Text> -->*/}

                        <Text style={inviteStyles.inviteHeadName} v-if="check">查看等级费率>></Text>
                        {/*<Text style={inviteStyles.inviteHeadName} v-else>我要升等级>></Text>*/}
                    </View>

                </View>
                <View style={inviteStyles.inviteBody}>
                    <View style={inviteStyles.inviteBodyLeft}>
                        <Text style={inviteStyles.inviteBodyLabel}>共邀请(人)</Text>
                        <Text style={inviteStyles.inviteBodyValue}>0</Text>
                    </View>
                    <View style={inviteStyles.inviteBodyCenter}></View>
                    <View style={inviteStyles.inviteBodyRight}>
                        <Text style={inviteStyles.inviteBodyLabel}>返现奖励(元)</Text>
                        <Text style={inviteStyles.inviteBodyValue}>0.00</Text>
                    </View>
                </View>
                <View style={[layout.layout40,layout.qtPt48]}>
                    <View style={form.formButton}>
                        <Text style={form.formButtonText}>立即邀请</Text>
                    </View>
                </View>
                <View style={[layout.layout40,layout.qtPt34,layout.layoutCenter]}>
                    <Text style={inviteStyles.inviteTip}>邀请用户产生交易即可享受分润，多邀多得!</Text>
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