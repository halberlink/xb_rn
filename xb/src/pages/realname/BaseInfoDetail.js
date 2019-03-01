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
    Image,
    TextInput
} from 'react-native';
import RealNameItem from '../../components/RealName/RealNameItem'
import pxToDp from '../../api/pxToDp'
import form from '../../styles/modules/form'
import layout from '../../styles/modules/layout'
import BaseInfoDetailStyles from '../../styles/pages/BaseInfoDetail'
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
                style={BaseInfoDetailStyles.container}
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
                    <Text style={[form.formMessage,BaseInfoDetailStyles.pb_no]}class="form-message pb_no">为了您的资金安全，暂不支持更换收款卡，请保证您填写</Text>
                    <Text style={BaseInfoDetailStyles.formMess}>的信息的准确性。</Text>
                    <Text style={[BaseInfoDetailStyles.formMess,BaseInfoDetailStyles.list]}>查看推荐使用储蓄卡>></Text>
                </View>
                <View style={[layout.layout40,BaseInfoDetailStyles.formItem]}>
                    <View style={form.formItemWrap}>
                        <View style={form.formItemLeft}>
                            <Text style={form.formItemLabel}>真实姓名</Text>
                            <TextInput style={[form.formItemInput,BaseInfoDetailStyles.formItemInputLocal]}  type="Text" placeholder="持卡人真实姓名"  v-model="name"/>
                        </View>
                    </View>
                </View>
                <View style={[layout.layout40,BaseInfoDetailStyles.formItem]}>
                    <View style={[form.formItemWrap,form.formItemBorder]}>
                        <View style={form.formItemLeft}>
                            <Text style={form.formItemLabel}>真实姓名</Text>
                            <TextInput style={[form.formItemInput,BaseInfoDetailStyles.formItemInputLocal]}  type="Text" placeholder="持卡人真实姓名"  v-model="name"/>
                        </View>
                    </View>
                </View>
                <View style={[layout.layout40,BaseInfoDetailStyles.formItem]}>
                    <View style={[form.formItemWrap,form.formItemBorder]}>
                        <View style={form.formItemLeft}>
                            <Text style={form.formItemLabel}>真实姓名</Text>
                            <TextInput style={[form.formItemInput,BaseInfoDetailStyles.formItemInputLocal]}  type="Text" placeholder="持卡人真实姓名"  v-model="name"/>
                        </View>
                    </View>
                </View>
                <View style={[layout.layout40,BaseInfoDetailStyles.formItem]}>
                    <View style={[form.formItemWrap,form.formItemBorder]}>
                        <View style={form.formItemLeft}>
                            <Text style={form.formItemLabel}>真实姓名</Text>
                            <TextInput style={[form.formItemInput,BaseInfoDetailStyles.formItemInputLocal]}  type="Text" placeholder="持卡人真实姓名"  v-model="name"/>
                        </View>
                    </View>
                </View>
                <View style={[layout.layout40,BaseInfoDetailStyles.formItem]}>
                    <View style={[form.formItemWrap,form.formItemBorder]}>
                        <View style={form.formItemLeft}>
                            <Text style={form.formItemLabel}>真实姓名</Text>
                            <TextInput style={[form.formItemInput,BaseInfoDetailStyles.formItemInputLocal]}  type="Text" placeholder="持卡人真实姓名"  v-model="name"/>
                        </View>
                    </View>
                </View>
                <View style={[layout.layout40,BaseInfoDetailStyles.formItem]}>
                    <View style={[form.formItemWrap,form.formItemBorder]}>
                        <View style={form.formItemLeft}>
                            <Text style={form.formItemLabel}>真实姓名</Text>
                            <TextInput style={[form.formItemInput,BaseInfoDetailStyles.formItemInputLocal]}  type="Text" placeholder="持卡人真实姓名"  v-model="name"/>
                        </View>
                    </View>
                </View>
                <View style={[layout.layout40,BaseInfoDetailStyles.formItem]}>
                    <View style={[form.formItemWrap,form.formItemBorder]}>
                        <View style={form.formItemLeft}>
                            <Text style={form.formItemLabel}>真实姓名</Text>
                            <TextInput style={[form.formItemInput,BaseInfoDetailStyles.formItemInputLocal]}  type="Text" placeholder="持卡人真实姓名"  v-model="name"/>
                        </View>
                    </View>
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