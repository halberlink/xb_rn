
import {
    StyleSheet

} from 'react-native';
import pxToDp from "../../api/pxToDp";





const styles = StyleSheet.create({
    container: {

        backgroundColor: '#F4F4F5',
    },
    userMessage:{
        width:pxToDp(750),
        backgroundColor:'#fff'
    },
    close:{
        width: pxToDp(24),
        height: pxToDp(24),
        marginTop: pxToDp(18),
        marginLeft: pxToDp(18)
    },
    // close_change:{
    //     width: pxToDp(60),
    //     height: 60px,
    //     position: absolute,
    //     top: 22px,
    //     right: 22px
    // }
    maskTitle:{
        fontSize: pxToDp(36),
        color: '#030303',
        textAlign: 'center'
    },
    maskText:{
        fontSize: pxToDp(30),
        color: '#737382',
        textAlign: 'center',
        marginTop: pxToDp(6)
    },
    maskContent:{
        width: pxToDp(520),
        height: pxToDp(644),
        paddingLeft: pxToDp(80),
        paddingRight: pxToDp(80),
        paddingTop: pxToDp(65),
        paddingBottom: pxToDp(80),
        backgroundColor: '#fff'
    },
    erweima:{
        width: pxToDp(360),
        height: pxToDp(360),
        marginTop: pxToDp(20)
    },
    small_erweima_big:{
        width: pxToDp(80),
        height: pxToDp(80)
    },
    small_erweima:{
        marginTop: pxToDp(21),
        marginLeft: pxToDp(21),
        width: pxToDp(38),
        height: pxToDp(38)
    },
    // .transform{
    //     transform: 'rotate(960deg)';
    //     animation: 'rotation 3s linear infinite';
    // }
    ucenterImage:{
        width: pxToDp(120),
        height: pxToDp(120),
        borderRadius:pxToDp(60)
    },
    ucenterListItem:{
        paddingTop: pxToDp(37),
        paddingBottom: pxToDp(37)
    },
    ucenterName:{
        fontSize: pxToDp(36),
        lineHeight: pxToDp(50),
        color: '#333'
    },
    norealName:{
        fontSize: pxToDp(28),
        color: '#4089ff'
    },
    emptyBox:{
        width: pxToDp(750),
        height: pxToDp(200)
    },
    listItem:{
        borderBottomWidth:1,
        borderBottomColor:'#dedede'
    },
    listItemLabelSmall2:{
        width: pxToDp(42),
        height: pxToDp(42),
        marginRight: pxToDp(36)
    }
});



export default styles;


















