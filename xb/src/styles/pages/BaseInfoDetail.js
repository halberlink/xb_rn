
import {
    StyleSheet

} from 'react-native';
import pxToDp from "../../api/pxToDp";





const styles = StyleSheet.create({
    container: {

        backgroundColor: '#F4F4F5',
    },
    formItemInputLocal:{
        width: pxToDp(500),
    },
    formItemInputBlue:{
        width: pxToDp(500),
        color: '#0c4d8e',
    },
    formItemInputDefault:{
        width: pxToDp(500),
        color: '#d0d0d0',
    },
    formItemCode :{
        width: pxToDp(320),
    },
    formItemInputSmall:{
        width: pxToDp(250),
    },
    formItemGraphcode:{
        width: pxToDp(197),
        height: pxToDp(80),
    },
    list:{
        color: '#0c4d8e',
    },
    cards:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    formItem:{
        backgroundColor:'#fff'
    },
    formMess:{
        fontSize: pxToDp(26),
        color: '#999',
        lineHeight: pxToDp(43),
        paddingBottom: pxToDp(18),
    },
    pb_no:{
        paddingBottom: 0,
    }
});



export default styles;


















