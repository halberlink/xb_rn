import {
    StyleSheet

} from 'react-native';
import pxToDp from "../../api/pxToDp";
const styles = StyleSheet.create({
    uiNoCard: {
        width: pxToDp(750),
        alignItems: 'center',
        marginTop: pxToDp(152)
    },
    uiNoCardImg:{
        width: pxToDp(200),
        height: pxToDp(200)
    },
    uiNoCardText: {
        color: '#b0b0b0',
        height: pxToDp(40),
        lineHeight: pxToDp(40),
        fontSize: pxToDp(28),
        marginTop: pxToDp(80)
    },
    uiAddCardBtnbox: {
        width: pxToDp(488),
        height: pxToDp(96),
        lineHeight: pxToDp(96),
        backgroundColor: '#3f89ff',
        borderRadius: pxToDp(5),
        justifyContent: 'center',
        alignItems: 'center', 
        color: '#fff',
        fontSize: pxToDp(32),
        textAlign: 'center',
        marginTop: pxToDp(30)
    },
    uiRequsetCard: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: pxToDp(10),
        marginTop: pxToDp(80)
    },
    uiRequsetImgL: {
        width: pxToDp(32),
        height: pxToDp(22)
    },
    uiRequsetTxt: {
        fontSize: pxToDp(26),
        color: '#333',
        paddingLeft: pxToDp(16),
        paddingRight: pxToDp(16),
    },
    uiRequsetImgR: {
        width: pxToDp(12),
        height: pxToDp(24)
    },
    uiCardlinkText: {
        color: '#ccc',
        fontSize: pxToDp(22)
    },
    uiHasCard: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    uiSupport: {
        width: pxToDp(670),
        color: '#0C4D8E',
        fontSize: pxToDp(26),
        lineHeight: pxToDp(40),
        marginBottom: pxToDp(25),
        marginTop: pxToDp(15),
    },
    uiCardInfo: {
        width: pxToDp(670),
        height: pxToDp(264),
        borderRadius: pxToDp(16),
        // backgroundColor: 'rgb(185,27,33)',
        backgroundColor: '#c57f7f',
        marginBottom: pxToDp(20),
        overflow: 'hidden',
        color: '#fff'
    },
    uiCardTop: {
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: pxToDp(60),
        marginTop: pxToDp(20)
    },
    uiCardLogo: {
        width: pxToDp(68),
        height: pxToDp(68),
        marginRight: pxToDp(20),
        backgroundColor: '#cccc'
    },
    uiCardTxt: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    uiCardCname: {
        fontSize: pxToDp(36),
        color: '#fff',
        lineHeight: pxToDp(68),
        marginRight: pxToDp(15),
    },
    uiCardUname: {
        fontSize: pxToDp(24),
        color: '#fff',
        lineHeight: pxToDp(68)
    },
    uiCardBtnBox: {
        width: pxToDp(144),
        height: pxToDp(56),
        backgroundColor: '#fff',
        borderRadius: pxToDp(5),
    },
    uiCardBtnRed: {
        lineHeight: pxToDp(56),
        fontSize: pxToDp(24),
        textAlign: 'center',
        color: 'rgb(185,27,33)'
    },
    uiCardBtnGrey: {
        lineHeight: pxToDp(56),
        fontSize: pxToDp(24),
        textAlign: 'center',
        color: '#dddddd'
    },
    uiAddCard: {
        alignItems: 'center'
    },
    uiCardBottom: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    uiCardBottomVal: {
        color: '#fff',
        height: pxToDp(44),
        lineHeight: pxToDp(44),
        fontSize: pxToDp(32),
        marginBottom: pxToDp(12),
        textAlign: 'center'
    },
    uiCardBottomInst: {
        color: '#fff',
        height: pxToDp(40),
        lineHeight: pxToDp(40),
        fontSize: pxToDp(22),
        textAlign: 'center'
    },



    // container: {
    //     flex: 1,
    //     alignItems: 'flex-end',
    //     backgroundColor: '#F5FCFF',
    //     width: '100%'
    // },
    delTextContainer: {
        width: 100,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    deleteTextStyle: {
        color: '#fff',
    },
    content: {
        width: '100%',
        height: pxToDp(264),
        backgroundColor: '#c57f7f',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default styles;
