import React, { Component } from 'react';
import { connect ,dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as types from '../../constants/ActionTypes'
import * as homecreators from '../../actions/home'
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
import list from '../../styles/modules/list'
import layout from '../../styles/modules/layout'
import home from '../../styles/pages/home'

class Home extends Component {
    static navigationOptions = ({navigation})=>{
        return {
            headerTitle: '我的',//对页面的配置
            headerRight:<TouchableOpacity style={{marginRight:pxToDp(40)}} onPress={()=>{navigation.navigate('Setup')}} activeOpacity={1}><Text>设置</Text></TouchableOpacity>
        }
    };
    constructor(props){
        super(props);
        this.state = {
            isRefreshing: false,
        }
    }
    _onRedfresh = ()=>{

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
            <ScrollView
                style={home.container}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRedfresh}
                        titleColor="#ccc"
                        title="松开刷新"
                    />
                }
            >
                <View style={[home.userMessage,layout.qtMb20]}>
                    <View style={[layout.layout40,home.ucenterListItem]}>
                        <View style={list.listItemWrap}>
                            <View style={list.listItemLeft}>
                                <Image style={list.listItemLabelImage} source={{uri:'https://www.p2peye.com/uc_server/data/avatar/000/39/34/90_avatar_middle.jpg'}}></Image>
                                <View style={[home.listItemSummary,layout.qtMl32]}>
                                    <Text style={[list.listItemSummaryMainText,home.ucenterName]}>郝博</Text>
                                    <Text style={list.listItemSummaryMainText}>15120020166</Text>
                                </View>
                            </View>
                            <View style={list.listItemRight}>
                                <Text style={home.norealName}>立即实名</Text>
                                <Image style={list.listItemRightGo} source={{uri:'https://m.xiaobaijinfu.com/static/Images/weex/go_1.png'}}></Image>
                                {/*<View style={home.small_erweima_big}>*/}
                                {/*<Image style={home.small_erweima} source={{uri:'https://m.xiaobaijinfu.com/static/Images/weex/small_erweima.png'}}></Image>*/}
                                {/*</View>*/}
                                {/*<Image style={list.listItemRightGo} source={{uri:'https://m.xiaobaijinfu.com/static/Images/weex/go_1.png'}}></Image>*/}
                            </View>
                        </View>
                    </View>
                </View>
                <View style={layout.layoutCard}>
                    <View style={layout.layout40}>
                        <View style={[list.listItemWrap,home.listItem]}>
                            <View style={list.listItemLeft}>
                                <Image style={home.listItemLabelSmall2} source={{uri:'https://m.xiaobaijinfu.com/static/Images/weex/wode-banlixinyongka-new2.png'}}></Image>
                                <Text style={list.listItemLabelText}>办理信用卡</Text>
                            </View>
                            <View style={list.listItemLeft}>
                                <Text style={list.listItemRightText} v-if="advershow">办卡返50</Text>
                                <Text style={list.listItemRightText} v-else>秒批办卡</Text>
                                <Image style={list.listItemRightGo} source={{uri:'https://m.xiaobaijinfu.com/static/Images/weex/go_1.png'}}></Image>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={layout.layoutCard}>
                    <View style={layout.layout40}>
                        <View style={[list.listItemWrap,home.listItem]}>
                            <View style={list.listItemLeft}>
                                <Image style={home.listItemLabelSmall2} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/ucenter_cardprogress.png'}}></Image>
                                <Text style={list.listItemLabelText}>办卡进度</Text>
                            </View>
                            <View style={list.listItemLeft}>
                                <Image style={list.listItemRightGo} source={{uri:'https://m.xiaobaijinfu.com/static/Images/weex/go_1.png'}}></Image>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={layout.layoutCard}>
                    <View style={layout.layout40}>
                        <View style={[list.listItemWrap,home.listItem]}>
                            <View style={list.listItemLeft}>
                                <Image style={home.listItemLabelSmall2} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/wode-dengji-new.png'}}></Image>
                                <Text style={list.listItemLabelText}>我的等级</Text>
                            </View>
                            <View style={list.listItemLeft}>
                                <Text style={list.listItemRightText} v-if="advershow">普通会员</Text>
                                <Image style={list.listItemRightGo} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/go_1.png'}}></Image>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={layout.layoutCard}>
                    <View style={layout.layout40}>
                        <View style={[list.listItemWrap,home.listItem]}>
                            <View style={list.listItemLeft}>
                                <Image style={home.listItemLabelSmall2} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/soukuan@1x.png'}}></Image>
                                <Text style={list.listItemLabelText}>快捷收款</Text>
                            </View>
                            <View style={list.listItemLeft}>
                                <Image style={list.listItemRightGo} source={{uri:'https://m.xiaobaijinfu.com/static/Images/weex/go_1.png'}}></Image>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={layout.layoutCard}>
                    <View style={layout.layout40}>
                        <View style={[list.listItemWrap,home.listItem]}>
                            <View style={list.listItemLeft}>
                                <Image style={home.listItemLabelSmall2} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/wode-shoukuanjilu-new.png'}}></Image>
                                <Text style={list.listItemLabelText}>收款记录</Text>
                            </View>
                            <View style={list.listItemLeft}>
                                <Text style={list.listItemRightText} v-if="advershow">0条</Text>
                                <Image style={list.listItemRightGo} source={{uri:'https://m.xiaobaijinfu.com/static/Images/weex/go_1.png'}}></Image>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={layout.layoutCard}>
                    <View style={layout.layout40}>
                        <View style={[list.listItemWrap,home.listItem]}>
                            <View style={list.listItemLeft}>
                                <Image style={home.listItemLabelSmall2} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/wode-huankuanjilu-new.png'}}></Image>
                                <Text style={list.listItemLabelText}>还款记录</Text>
                            </View>
                            <View style={list.listItemLeft}>
                                <Text style={list.listItemRightText} v-if="advershow">0条</Text>
                                {/*<Text style={list.listItemRightText} v-else>秒批办卡</Text>*/}
                                <Image style={list.listItemRightGo} source={{uri:'https://m.xiaobaijinfu.com/static/Images/weex/go_1.png'}}></Image>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[layout.layoutCard,layout.qtMb20]}>
                    <View style={layout.layout40}>
                        <View style={list.listItemWrap}>
                            <View style={list.listItemLeft}>
                                <Image style={home.listItemLabelSmall2} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/wode-kapianguanli-new.png'}}></Image>
                                <Text style={list.listItemLabelText}>卡片管理</Text>
                            </View>
                            <View style={list.listItemLeft}>
                                <Text style={list.listItemRightText} v-if="advershow">0张信用卡，0张储蓄卡</Text>
                                <Image style={list.listItemRightGo} source={{uri:'https://m.xiaobaijinfu.com/static/Images/weex/go_1.png'}}></Image>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={layout.layoutCard}>
                    <View style={layout.layout40}>
                        <View style={[list.listItemWrap,home.listItem]}>
                            <View style={list.listItemLeft}>
                                <Image style={home.listItemLabelSmall2} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/wode-zhanghufanxian-new.png'}}></Image>
                                <Text style={list.listItemLabelText}>返现账户</Text>
                            </View>
                            <View style={list.listItemLeft}>
                                <Text style={list.listItemRightText} v-if="advershow">0.00元</Text>
                                <Image style={list.listItemRightGo} source={{uri:'https://m.xiaobaijinfu.com/static/Images/weex/go_1.png'}}></Image>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={layout.layoutCard}>
                    <View style={layout.layout40}>
                        <View style={[list.listItemWrap,home.listItem]}>
                            <View style={list.listItemLeft}>
                                <Image style={home.listItemLabelSmall2} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/wode-yaoqing-new.png'}}></Image>
                                <Text style={list.listItemLabelText}>邀请好友</Text>
                            </View>
                            <View style={list.listItemLeft}>
                                <Text style={list.listItemRightText} v-if="advershow">邀请好友降费率、拿红包</Text>
                                <Image style={list.listItemRightGo} source={{uri:'https://m.xiaobaijinfu.com/static/Images/weex/go_1.png'}}></Image>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={layout.layoutCard}>
                    <View style={layout.layout40}>
                        <View style={[list.listItemWrap,home.listItem]}>
                            <View style={list.listItemLeft}>
                                <Image style={home.listItemLabelSmall2} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/ucenter_my_reward.png'}}></Image>
                                <Text style={list.listItemLabelText}>我的奖励</Text>
                            </View>
                            <View style={list.listItemLeft}>
                                <Image style={list.listItemRightGo} source={{uri:'https://m.xiaobaijinfu.com/static/Images/weex/go_1.png'}}></Image>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[layout.layoutCard,layout.qtMb20]}>
                    <View style={layout.layout40}>
                        <View style={list.listItemWrap}>
                            <View style={list.listItemLeft}>
                                <Image style={home.listItemLabelSmall2} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/bangzhuzhongxin.png'}}></Image>
                                <Text style={list.listItemLabelText}>帮助中心</Text>
                            </View>
                            <View style={list.listItemLeft}>
                                <Text style={list.listItemRightText} v-if="advershow">办卡返50</Text>
                                {/*<Text style={list.listItemRightText} v-else>秒批办卡</Text>*/}
                                <Image style={list.listItemRightGo} source={{uri:'https://m.xiaobaijinfu.com/static/Images/weex/go_1.png'}}></Image>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={layout.layoutCard}>
                    <View style={layout.layout40}>
                        <View style={[list.listItemWrap,home.listItem]}>
                            <View style={list.listItemLeft}>
                                <Image style={home.listItemLabelSmall2} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/yijianfankui.png'}}></Image>
                                <Text style={list.listItemLabelText}>意见反馈</Text>
                            </View>
                            <View style={list.listItemLeft}>
                                <Image style={list.listItemRightGo} source={{uri:'https://m.xiaobaijinfu.com/static/Images/weex/go_1.png'}}></Image>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={layout.layoutCard}>
                    <View style={layout.layout40}>
                        <View style={list.listItemWrap}>
                            <View style={list.listItemLeft}>
                                <Image style={home.listItemLabelSmall2} source={{uri:'https://m.xiaobaijinfu.com/static/images/weex/kefu-new.png'}}></Image>
                                <Text style={list.listItemLabelText}>客服电话</Text>
                            </View>
                            <View style={list.listItemLeft}>
                                <Text style={list.listItemRightText} v-if="advershow">400-0408-800</Text>
                                <Image style={list.listItemRightGo} source={{uri:'https://m.xiaobaijinfu.com/static/Images/weex/go_1.png'}}></Image>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={home.emptyBox}></View>
            </ScrollView>
        );
    }
}

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