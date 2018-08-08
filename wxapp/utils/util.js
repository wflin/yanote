const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function request(params, success, fail) {
  wx.request({
    //上线接口地址要是https测试可以使用http接口方式
    url: 'https://api.yanyanbiji.top/' + params.url,
    data: params.data,
    method: params.type,
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      success(res.data);
    },
    fail: function (res) {
      fail(res);
    }
  })
}
module.exports = {
  formatTime: formatTime,
  request: request 
}
