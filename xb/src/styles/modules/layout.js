
import {
    StyleSheet

} from 'react-native';
import pxToDp from "../../api/pxToDp";





const styles = StyleSheet.create({
    template:{
        backgroundColor: '#F4F4F5',
        position: 'relative',
    },
    templatefff:{
        backgroundColor: '#fff',
    },
    layout20:{
        paddingLeft: pxToDp(20),
        paddingRight: pxToDp(20),
    },
    layout40:{
        paddingLeft: pxToDp(40),
        paddingRight: pxToDp(40),
    },
    layoutCard:{
        backgroundColor: '#fff',
    },
    // layoutFixed:{
    //     position: 'fixed',
    //         bottom: 0,
    //         left: 0,
    //         width: pxToDp(750),
    // },
    layoutCenter:{
        alignItems: 'center',
    },
    layoutVcenter:{
        justifyContent: 'center',
    },
    qtMb20:{
        marginBottom:pxToDp(20)
    },
    qtMt40:{
        marginTop: pxToDp(40),
    },
    qtMt52:{
        marginTop: pxToDp(52),
    }
    ,
    qtMt20:{
        marginTop: pxToDp(20),
    },
    qtMl18:{
        marginLeft: pxToDp(18),
    },
    qtMl32:{
        marginLeft: pxToDp(32),
    },
    qtMl38:{
        marginLeft: pxToDp(18),
    },
    qtMl55:{
        marginLeft: pxToDp(55),
    },
    qtPt75:{
        paddingTop: pxToDp(75),
    },
    qtPb75:{
        paddingBottom: pxToDp(75),
    },
    qtPt48:{
        paddingTop: pxToDp(48),
    },
    qtPt34:{
        paddingTop: pxToDp(34),
    },
    qtPt20:{
        paddingTop: pxToDp(20),
    },
    qtPt52:{
        paddingTop:pxToDp(52),
    },
    color000:{
        color: '#000',
    },
    colorgreen:{
        color: '#1FAA14',
    },
    colorred:{
        color: '#FF3523',
    },
    color999:{
        color: '#999',
    },
    colorf60:{
        color: '#ff6600',
    },
    colorblue:{
        color: '#1E6CBA',
    }

});



export default styles;
