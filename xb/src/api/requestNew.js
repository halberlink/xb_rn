
var http = function (params) {
  let {
      url,
      data,
      method ,
      success,
      error,
      beforeFn
  } = params
  
  if (beforeFn) beforeFn()
  url = 'https://api.xiaobaijinfu.com' + url
  if (method == "POST" || method == "post") {
      return fetch(url, {
        method,
        body: JSON.stringify(data), // must match 'Content-Type' header
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            error(response.status,response.statusText)
        }
      })
      .catch(err => error(err))
      .then(res => success(res))
  } else {
      if (data) {  
          let paramsArray = [];  
          //拼接参数  
          Object.keys(data).forEach(key => paramsArray.push(key + '=' + data[key]))  
          if (url.search(/\?/) === -1) {  
              url += '?' + paramsArray.join('&')  
          } else {  
              url += '&' + paramsArray.join('&')  
          }  
      }
      
      return fetch(url, {
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json'
        },
        method: method
      })
      .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            error(response.status,response.statusText)
        }
      })
      .catch(err => error(err))
      .then(res => success(res))
  }
}

export default http
