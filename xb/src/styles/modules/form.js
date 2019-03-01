
import {
    StyleSheet

} from 'react-native';
import pxToDp from "../../api/pxToDp";





const styles = StyleSheet.create({
    formMessage:{
        fontSize: pxToDp(26),
        color: '#999',
        lineHeight: pxToDp(43),
        paddingTop: pxToDp(18),
        paddingBottom: pxToDp(18),
    },
    formItemWrap:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    formItemLeft:{
        flexDirection: 'row',
        alignItems:'center',
        height:pxToDp(105),
    },
    formItemLabel:{
        paddingTop: pxToDp(33),
        paddingBottom: pxToDp(33),
        width: pxToDp(156),
        fontSize: pxToDp(30),
    },
    formItemLabelSmall:{
        width: pxToDp(40),
        height: pxToDp(40),
        marginRight: pxToDp(36),
        alignSelf:'center',
    },
    formItemInput:{
        width: pxToDp(400),
        height: pxToDp(105),
        lineHeight:pxToDp(105),
        fontSize: pxToDp(30),
        color: '#555',
    }
    ,
    formItemBorder:{
        // borderTopStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: '#dedede',
    },
    formItemBorderBottom:{
        // borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#dedede',
    },
    formButton:{
        backgroundColor: '#4089ff',
        borderRadius: pxToDp(6),
        alignItems: 'center',
    },
    formButtonEnable:{
        backgroundColor: '#B4B4B4',
        color:'#fff',
    },
    formButtonText:{
        height: pxToDp(96),
        lineHeight: pxToDp(96),
        color: '#fff',
        fontSize: pxToDp(32),
    },
    formItemRight:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    formItemRightText:{
        fontSize: pxToDp(28),
        color: '#030303',
        alignItems: 'center',
    },
    formItemRightClose:{
        width: pxToDp(37),
        height: pxToDp(37),
        alignItems: 'center',
    },
    formItemVcode:{
        width: pxToDp(115),
        height: pxToDp(50),
    }

});



export default styles;
