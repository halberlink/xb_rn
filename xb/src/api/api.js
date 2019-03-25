const crypto = require('crypto-js');
import {Platform, Share} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import http from './Request';
import validate from './validate';
import error_code from './error_code';

const api = {
    domain : 'https://m.xiaobaijinfu.com',  //weex 文件主域名

    domainParams : 'https://m.xiaobaijinfu.com/static/weex/xiaobai/dist/pages', //weex 带参数跳转

	dir : '/static/weex/xiaobai/dist',   // 编译文件目录

	interfaceHost : 'api.xiaobaijinfu.com',  //接口域名

    interfaceHttp : 'https://', //接口协议
    
    interface : function(){
		return api.interfaceHttp + api.interfaceHost
    },

    fileFullPath : function(path){
        return api.domain + api.dir + path + '.js';
    },
    
    validate : validate,//正则格式

    errCode : error_code,

    base64 : function(str){
		str = crypto.enc.Utf8.parse(str);
		str = crypto.enc.Base64.stringify(str);

		return str;
	},

    envType : function(){ //手机类型
        
        if(Platform.OS == 'ios'){
            return 'ios'
        }else if(Platform.OS == 'android'){
            return 'android'
        }
		
    },
    
    getAppVersion: DeviceInfo.getVersion(), //获取应用程序版本号
    getDeviceName: DeviceInfo.getDeviceName(), //获取当前设备的名称‘iponeX’

    isNewVersion : function (controlVersion) {
		var curVersion = DeviceInfo.getVersion();
        if(controlVersion && controlVersion.indexOf(".")==1 && controlVersion.lastIndexOf(".")==3){
            var curVersionArr =  curVersion.split(".");
            var controlVersionArr = controlVersion.split(".");
            if(curVersionArr[0] > controlVersionArr[0]){
                return true;
            }
            if(curVersionArr[0] == controlVersionArr[0]){
                if(curVersionArr[1] > controlVersionArr[1]){
                    return true;
                }
                if(curVersionArr[1] == controlVersionArr[1]){
                    if(curVersionArr[2] >= controlVersionArr[2]){
                        return true;
                    }
                }

            }
            return false;
        }
        return false;
	},

    toParams(obj) {//对象转json字符串
        var param = ""
        for(const name in obj) {
            if(typeof obj[name] != 'function') {
                param += "&" + name + "=" + encodeURI(obj[name])
            }
        }
        return param.substring(1)
    },

    sendVcode : function(phonenumber,type,callback){

		http.post({
          url : '/auth/sendcode',
          data : {
          	phone:phonenumber,
          	type:type
          },
          success : function(ret){
          	callback && callback(ret);
          },
          error : function(ret){

          }
        })

    },
    
    getGraphCode : function(uuid){
		return this.interface()+"/auth/getCaptchaPic?uuid="+uuid;
    },
    //
    sharePopup : function(){
		http.post({
          url : '/share/inviteTheme',
          data : {},
          success : function(ret){
			if(ret.code != 200) return;

          },
          error : function(ret){
          }
        })
    },
    //
    BDP : function(data){

		if(data.event){
            var click_event = data.event;
            data["click_event"] = click_event;
			delete data["event"];
            eventModule.BDP(data,function() {

            });
		}

    },
    
    resolutionUrl : function(url){
        url = decodeURI(url);
        var paramsStrJson = url.substring(url.indexOf("?")+1);
        var paramsJson = {};
        var tmpArr = paramsStrJson.split("&");
        for(var i = 0;i<tmpArr.length;i++){
            var tmpArr2 = tmpArr[i].split("=");
            paramsJson[tmpArr2[0]] = tmpArr2[1];
        }
        return paramsJson;
    },
    
    getUserProfile : function(successFn,errorFn){
        http.post({
            url : '/profile/userProfile',
            data : {},
            success : function(ret){
                successFn && successFn(ret);
            },
            error : function(ret){
                // modal.toast({
                //     "message" : "实名信息获取失败",
                //     "duration" : 2
                // })
                
                // this.refs.toast.show('hello world!');
                errorFn && errorFn(ret);
            }
        })
    },
    
//     getUserLocaltionInfo: function(callback){
// 		eventModule.locationEnabled({}, function (ret) {
//         	if(ret.code==200){//开启定位
// 				eventModule.getLocaltionInfo({},function (ret) {
// 					callback(ret);
// 				})
// 			}else{
// 				eventModule.showLocationAlert({},function(){});	//调用开启定位的提醒框
// 			}
// 		})
	
// 	}
}
export default api;
