
import {
    StyleSheet

} from 'react-native';
import pxToDp from "../../api/pxToDp";

const styles = StyleSheet.create({
    listMessage:{
        fontSize: pxToDp(26),
        color: '#999',
        lineHeight: pxToDp(43),
        paddingTop: pxToDp(43),
        paddingBottom: pxToDp(18)
    },
    listItemRemovecard:{
        flexDirection:'row',
            width:pxToDp(910),
            height:pxToDp(157),
    },
    listItemRemove:{
        width:pxToDp(160),
        backgroundColor:'#FF3E3E',
        alignItems:'center',
        justifyContent:'center',
        fontWeight:'bold',
        height:pxToDp(158),

    },
    listItemRemoveText:{
        color:'#fff',
        fontSize:pxToDp(30),
    },
    listItemScroller:{
        flexDirection:'row',
            width:750,
            height:pxToDp(158),
    },
    listItemWrap:{
        paddingTop: pxToDp(33),
        paddingBottom: pxToDp(33),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    listRadius6:{
        borderRadius: pxToDp(6),
    },
    listItemWrapBig:{
        paddingTop:pxToDp(61),
        paddingBottom: pxToDp(61),
    },
    listItemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemLabel:{
        width: pxToDp(156),
        fontSize: pxToDp(30),
    },
    listItemLabelSmall:{
        width: pxToDp(48),
        height: pxToDp(48),
        marginRight: pxToDp(36),
    },
    listItemLabelText:{
        fontSize: pxToDp(30),
        color: '#333',
    },
    listItemBorder:{
        borderTopWidth: 1,
        borderTopColor: '#dedede',
    },
    listItemBorderBottom:{
        borderBottomWidth: 1,
        borderBottomColor: '#dedede',
    }
    ,
    listButton:{
        backgroundColor: '#030303',
        borderRadius: pxToDp(6),
        alignItems: 'center',
    },
    listButtonText:{
        height: pxToDp(96),
        lineHeight: pxToDp(96),
        color: '#fff',
        fontSize: pxToDp(32),
    },
    listItemRight:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemRightText:{
        fontSize: pxToDp(28),
        color: '#999',
    },
    listItemRightValuetext:{
        fontSize: pxToDp(32),
    },
    listItemRightValuetextNote:{
        fontSize: pxToDp(24),
        height: pxToDp(34),
        width: pxToDp(120),
        textAlign: 'right',
    },
    listItemRightClose:{
        width: pxToDp(37),
        height: pxToDp(37),
    },
    listItemRightGo:{
        width: pxToDp(40),
        height: pxToDp(40),
        marginLeft: pxToDp(10),
    },
    listItemUserdefault:{
        width: pxToDp(100),
        height: pxToDp(100),
        borderRadius:pxToDp(50)

    },
    listItemLabelBankcard:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemLabelBankcardImage:{
        width: pxToDp(60),
        height: pxToDp(60),
        borderRadius:pxToDp(22)
    },
    listItemLabelImage:{
        width: pxToDp(100),
        height: pxToDp(100),
        borderRadius:pxToDp(50)
    },
    listItemSummary:{
        flexDirection: 'row',
    },
    listItemSummaryMaintext:{
        fontSize: pxToDp(30),
        lineHeight: pxToDp(42),
    },
    listItemSummarySubtext:{
        fontSize: pxToDp(26),
        color: '#666',
        lineHeight: pxToDp(36),
    },
    listItemRightIcon:{
        width: pxToDp(28),
        height: pxToDp(28),
        marginRight: pxToDp(12),
    },
    listItemBiglabelSmall:{
        width: pxToDp(64),
        height: pxToDp(56),
    }
});



export default styles;
