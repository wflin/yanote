//初始化数据
function tabbarinit() {
 return {
   index: 0
 }
}

/**
 * tabbar主入口
 * @param  {String} bindName 
 * @param  {[type]} id       [表示第几个tabbar，以0开始]
 * @param  {[type]} target   [当前对象]
 */
function tabbarmain(bindName = "tabdata", id, target) {
  console.log(id)
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar.index = id;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}


module.exports = {
  tabbar: tabbarmain
}