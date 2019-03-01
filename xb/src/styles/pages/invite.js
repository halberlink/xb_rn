
import {
    StyleSheet

} from 'react-native';
import pxToDp from "../../api/pxToDp";





const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F4F5',
    },
    inviteHead:{
        backgroundColor: '#3c7de6',
        height: pxToDp(414),
        alignItems: 'center',
        justifyContent: 'center',
    },
    inviteHeadImage:{
        width: pxToDp(128),
        height: pxToDp(128),
        borderRadius: pxToDp(64),
    },
    inviteHeadName:{
        paddingTop: pxToDp(29),
        fontSize: pxToDp(34),
        lineHeight: pxToDp(48),
        color: '#fff',
    },
    inviteHeadInfo:{
        paddingTop: pxToDp(10),
        fontSize: pxToDp(24),
        lineHeight: pxToDp(34),
        color: '#fff',
    },
    inviteBody:{
        flexDirection: 'row',
        height: pxToDp(180),
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
    },
    inviteBodyCenter:{
        width: 2,
        height: pxToDp(84),
        backgroundColor:'#dedede',
    },
    inviteBodyLeft:{
        alignItems: 'center',
        width: pxToDp(374),
    },
    inviteBodyRight:{
        alignItems: 'center',
        width: pxToDp(374),
    },
    inviteBodyLabel:{
        fontSize: pxToDp(24),
        lineHeight: pxToDp(34),
        color: '#999',
    },
    inviteBodyValue:{
        fontSize:pxToDp(40),
        lineHeight: pxToDp(58),
        color: '#333',
        fontWeight: '400',
    },
    inviteTip:{
        fontSize: pxToDp(24),
        color: '#666',
        lineHeight: pxToDp(34),
    }
});



export default styles;


















