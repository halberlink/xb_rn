
import {
    StyleSheet

} from 'react-native';
import pxToDp from "../../api/pxToDp";

//
// var str = {
//     ui-refresh{
//     height:100px;
// },
// ui-refresh-wrap{
//     align-items:center;
//     justify-content:center;
//     text-align:center;
//     width:750px;
// },
// ui-loading{
//     height:100px;
// },
// ui-loading-wrap{
//     align-items:center;
//     justify-content:center;
//     text-align:center;
//     width:750px;
// },
// ui-indicator{
//     font-size:20px;
//     color: #B0B0B0;
//     line-height:100px;
//     align-items:center;
//     justify-content:center;
// },
// ui-indicator-image{
//     width:32px;
//     height:32px;
// },
// ui-loginout{
//     align-items: center;
//     height:98px;
// },
// ui-forget-password{
//     align-items: center;
// },
// ui-loginout-text{
//     color: #FF3523;
//     font-size: 30px;
//     height: 98px;
//     line-height: 98px;
// },
// ui-forget-password-text{
//     color: #333;
//     font-size: 28px;
//     height: 144px;
//     line-height: 144px;
// },
// ui-tabbar{
//     background-color: #fff;
//     align-items: top;
// },
// ui-tabbar-box{
//     flex-direction: row;
//     justify-content: space-around;
//     background-color: #fff;
//     align-items: top;
// },
// ui-tabbar-item{
//     padding-top:10px;
//     align-items: center;
//     width: 250px;
//     height: 98px;
// },
// ui-tabbar-icon{
//     width: 50px;
//     height: 50px;
// },
// ui-tabbar-text{
//     font-size: 20px;
//     padding-top: 0px;
//     color: #7A7D84;
// },
// ui-tabbar-text-current{
//     color: #4089ff;
// },
// ui-mask{
//     background-color: rgba(0,0,0,0.6);
//     position: fixed;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     justify-content: center;
//     align-items: center;
// }
// ,
// ui-messagetip-head{
//     line-height: 82px;
//     height: 82px;
//     align-items: center;
//     text-align: center;
//     font-size: 26px;
//     color: #999;
// },
// ui-messagetip-title{
//     padding-top: 41px;
//     background-color: #fff;
//     margin-left: 20px;
//     margin-right: 20px;
//     border-radius: 6px 6px 0 0;
//     padding-left: 40px;
//     padding-right: 40px;
//     padding-bottom: 16px;
//     font-size: 32px;
//     font-weight: bold;
// },
// ui-messagetip-body{
//     background-color: #fff;
//     margin-left: 20px;
//     margin-right: 20px;
//     border-radius: 6px 6px 0 0;
//     padding-left: 40px;
//     padding-right: 40px;
//     font-size: 26px;
//     line-height: 44px;
//     color: #666;
//     border-bottom-style: solid;
//     border-bottom-width: 1px;
//     border-bottom-color: #dedede;
//     padding-bottom: 39px;
// },
// ui-messagetip-foot{
//     background-color: #fff;
//     margin-left: 20px;
//     margin-right: 20px;
//     border-radius:0 0 6px 6px;
//     padding-left: 40px;
//     padding-right: 40px;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     padding-top: 24px;
//     padding-bottom: 24px;
// },
// ui-messagetip-foot-text{
//     font-size: 28px;
// },
// ui-share{
//     background-color: #EFEFF4;
//     height: 608px;
//     align-content: space-between;
// },
// ui-share-head{
//     flex-direction: row;
//     justify-content: space-between;
//     padding-top: 48.8px;
//     margin-left: 38px;
//     margin-right: 38px;
//     padding-bottom: 42px;
//     border-bottom-width: 1px;
//     border-bottom-color: #CDCDCD;
//     border-bottom-style: solid;
// },
// ui-share-body{
//     flex-direction: row;
//     justify-content: flex-start;
//     padding-top: 48.8px;
//     margin-left: 38px;
//     margin-right: 38px;
//     padding-bottom: 42px;
// },
// ui-share-image{
//     width: 112px;
//     height: 112px;
//     border-radius: 56px;
// },
// ui-share-item{
//     align-items: center;
// },
// ui-share-body-item{
//     margin-right: 65px;
// },
// ui-share-text{
//     font-size: 24px;
//     line-height: 34px;
//     color: #333;
//     padding-top: 19px;
// },
// ui-share-foot{
//     font-size: 32px;
//     color: #333;
//     font-weight: 400;
//     height: 96px;
//     line-height: 96px;
//     background-color: #fcfcfc;
//     align-items: center;
//     text-align: center;
//
// },
// ui-toast{
//     position: fixed;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     justify-content: center;
//     align-items: center;
// },
// ui-toast-success{
//     width: 200px;
//     height: 200px;
//     border-radius: 12px;
//     justify-content: center;
//     align-items: center;
//     background-color: rgba(0,0,0,0.6);
// },
// ui-toast-success-image{
//     width: 68px;
//     height: 68px;
// },
// ui-toast-success-text{
//     padding-top: 10px;
//     line-height: 40px;
//     font-size: 28px;
//     color: #fff;
// },
// ui-toast-warning{
//     width: 240px;
//     height: 240px;
//     border-radius: 12px;
//     justify-content: center;
//     align-items: center;
//     background-color: rgba(0,0,0,0.6);
// },
// ui-toast-warning-image{
//     width: 68px;
//     height: 68px;
// },
// ui-toast-warning-text{
//     padding-top: 36px;
//     line-height: 36px;
//     font-size: 26px;
//     color: #fff;
// },
// ui-confirm-hide{
//     display: none;
// },
// ui-confirm{
//     width: 560px;
//     border-radius: 6px;
//     background-color: #fff;
// },
// ui-confirm-content{
//     padding: 68px 0 62px;
//     border-bottom-width: 1px;
//     border-bottom-style: solid;
//     border-bottom-color: #c6c6c6;
//     justify-content: center;
//     align-items: center;
// },
// ui-confirm-content-alert{
//     padding: 35px 0 62px;
//     border-bottom-width: 1px;
//     border-bottom-style: solid;
//     border-bottom-color: #c6c6c6;
//     justify-content: center;
//     align-items: center;
// },
// ui-confirm-content-title{
//     font-size: 28px;
//     color: #030303;
//     line-height: 40px;
//     margin-bottom:20px;
// },
// ui-confirm-content-text{
//     font-size: 28px;
//     color: #030303;
//     line-height: 40px;
// },
// ui-confirm-content-textf60{
//     padding-top: 16px;
//     font-size: 30px;
//     color: #f60;
// },
// ui-confirm-tool{
//     flex-direction: row;
// },
// ui-confirm-tool-alert{
//     justify-content: center;
// },
// ui-confirm-tool-think{
//     width: 280px;
//     height: 84px;
//     justify-content: center;
//     align-items: center;
//     border-right-width: 1px;
//     border-right-style: solid;
//     border-right-color: #c6c6c6;
// },
// ui-confirm-tool-think-text{
//     font-size: 32px;
//     color: #666;
// },
// ui-confirm-tool-confirm{
//     width: 280px;
//     height: 84px;
//     justify-content: center;
//     align-items: center;
// },
// ui-confirm-tool-confirm-text{
//     font-size: 32px;
//     color: #1e6cba;
// },
// ui-confirm-tool-delete{
//     width: 280px;
// height: 84px;
// justify-content: center;
// align-items: center;
// },
// ui-confirm-tool-delete-text{
//     font-size: 32px;
//     color: #ff3523;;
// },
// ui-alert{
//     width: 480px;
//     border-radius: 6px;
//     background-color: #fff;
// },
// ui-alert-content{
//     padding: 72px 0 52px;
//     justify-content: center;
//     align-items: center;
//     border-bottom-width: 1px;
//     border-bottom-style: solid;
//     border-bottom-color: #c6c6c6;
// },
// ui-alert-content-image{
//     width: 98px;
//     height: 98px;
// },
// ui-alert-content-text{
//     margin-top: 20px;
//     font-size: 32px;
//     color: #333;
//     line-height: 44px;
// },
// ui-alert-tool{
//     width: 480px;
//     height: 84px;
//     justify-content: center;
//     align-items: center;
// },
// ui-alert-tool-know-text{
//     font-size: 32px;
//     color: #1e6cba;
// },
// ui-animation-circle{
//     animation:circle 0.4s infinite;
// },
// ui-empty{
//     justify-content: center;
//     align-items: center;
// },
// ui-empty-image{
//     margin-bottom: 34px;
//     width: 200px;
//     height: 200px;
// },
// ui-empty-text{
//     font-size: 28px;
//     color: #b0b0b0;
//     line-height: 40px;
// },
// ui-img-loading{
//     position: fixed;
//     top: 500px;
//     left: 325px;
//     width: 100px;
//     height: 100px;
//     background-color: rgba(0,0,0,0.4);
//     justify-content: center;
//     align-items: center;
//     border-radius: 10px;
// },
// ui-img-loading-pic{
//     width: 32px;
//     height: 32px;
// }
// @keyframes circle
// {
//     from {transform:rotate(0deg);}
//     to {transform:rotate(360deg);}
// }
//
// @-webkit-keyframes circle
// {
//     from {transform:rotate(0deg);}
//     to {transform:rotate(360deg);}
// }
// }


const styles = StyleSheet.create({
    container: {
        width:750,
        height:200,
        backgroundColor: '#F5FCFF',
    },
});



export default styles;
