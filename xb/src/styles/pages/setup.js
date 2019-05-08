import {
    StyleSheet

} from 'react-native';
import pxToDp from "../../api/pxToDp";
const styles = StyleSheet.create ({
    listItem: {
        marginRight: pxToDp(40),
        marginLeft: pxToDp(40),
        paddingTop: pxToDp(33),
        paddingBottom: pxToDp(33),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dedede'
    },
    listItemLeft: {
    },
    listItemRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemLeftText: {
        fontSize: pxToDp(30),
        color: '#333'
    },
    listItemRightText: {
        fontSize: pxToDp(28),
        color: '#999'
    },
    goImg: {
        width: pxToDp(40),
        height: pxToDp(40),
        marginLeft: pxToDp(10)
    }
})
export default styles;