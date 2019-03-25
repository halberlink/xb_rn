'use strict'
const api = {
	equal:function(val,nameId){
		if(val !==$(nameId).val())
			return false;
		return true;
	},
	notempty:function(val){
		if(!val) return false;
		val.replace(' ','');
		if(val ==='')
			return false;
		return true;
	},
	len:function(val,minlen,maxlen){
		if(val.length<minlen || val.length>maxlen)
			return false;
		return true;
	},
	cha:function(val,reg){
		if(new RegExp(reg).test(val))
			return true;
		return false;
	},
	number:function(val){
		if(/^\d+$/.test(val))
			return true;
		return false;
	},
	user_name:function(val){

	},
	times:function(val,radix){
		return val%radix == 0;
	},
	cn_or_en:function(val){
		var reg = /^([\u4E00-\u9FA5]|[a-zA-Z])+$/;
		if(reg.test(val))
			return true;
		return false;
	},
	firstplace_cn_or_num:function(val) {
		var reg = /^[\u4e00-\u9fa5|a-z|A-z]/i;
		if(reg.test(val))
			return true;
		return false;
	},
	floatNumber : function(val){
		var reg = /^\d+((\.{1}\d+)|\d?)$/;
		if(reg.test(val))
			return true;
		return false;
	},
	// 是数字或小数,小数最多可写两位小数
	numberFixed2 : function(val){
		var reg = /^(([1-9]+)|([0-9]+\.[0-9]{1,2}))$/;
		if(reg.test(val))
			return true;
		return false;
	},
	cn : function(val){
		var reg = /^[\u4e00-\u9fa5]+$/;
		if(reg.test(val))
			return true;
		return false;
	},
	filter : function(val){
		var reg = /^[0-9a-zA-Z_]{1,}$/;
		if(reg.test(val))
			return true;
		return false;
	},
	// pwd : 密码校验规则，至少包含 数字/字母/符号 中的两种。
	pwd : function(val){
		var reg = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{1,}$/;
		if(reg.test(val))
			return true;
		return false;
	},
	reg_cn_letter_number : function(val){
		var reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
		if(reg.test(val))
			return true;
		return false;
	},
	reg_cn_len : function(val,minlen,maxlen){
		var len = val.replace(/[^\x00-\xFF]/g,'***').length;
		if(len<minlen || len>maxlen)
			return false;
		return true;
	},
	reg_cn_len2 : function(val,minlen,maxlen){
		var len = val.replace(/[^\x00-\xFF]/g,'**').length;
		if(len<minlen || len>maxlen)
			return false;
		return true;
	},
	email:function(val){
		if(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(val))
			return true;
		return false;
	},
	mobile:function(val){
		if(!val) return false;
	  	val = val.replace(/\s+/g,'');

		if(/^(13\d|18\d|15\d|17\d|14\d|19\d|16\d)\d{8}$/.test(val))
			return true;
		return false;
	},
    notmobile:function(val){
		if(/1\d{10}/.test(val))
			return false;
		return true;
	},
	ID_card : function(val){
		val = val;
		if(/(^\d{15}$)|(^\d{16}$)|(^\d{18}$)|(^\d{19}$)|(^\d{17}(\d|X|x)$)/.test(val))
			return true;
		return false;
	},
	numberRegion : function(val,min,max){
		if(/\d+/.test(val)){
			val = val - 0;
			min = min - 0;
			max = max - 0;
			if(val > max || val < min) return false;

			return true;

		}else{
			return false;
		}
	},
	// 最大值 开区间
	numberMaxOpen : function(val,max){
		if(/\d+/.test(val)){
			val = val - 0;
			max = max - 0;
			return val < max;
		}else{
			return false;
		}
	},
	// 最大值 闭区间
	numberMaxClosed : function(val,max){
		if(/\d+/.test(val)){
			val = val - 0;
			max = max - 0;
			return val <= max;

		}else{
			return false;
		}
	},
	// 最小值 开区间
	numberMinOpen : function(val,min){
		if(/\d+/.test(val)){
			val = val - 0;
			min = min - 0;
			return val > min;
		}else{
			return false;
		}
	},
	// 最小值 闭区间
	numberMinClosed : function(val,min){
		if(/\d+/.test(val)){
			val = val - 0;
			min = min - 0;
			return val >= min;
		}else{
			return false;
		}
	}
}

export default api