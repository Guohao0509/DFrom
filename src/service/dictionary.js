/**
 * 常量与常量映射
 * 获取常量通过 $dictionary[常量所属范畴][常量类别]
 * 获取常量对应映射通过 方法: $dictionary.get('常量所属范畴', 常量)
 */
var dictionary = {
  // 请求状态码
  ajax_code: {
    SUCCESS: 0,
    FAILED: 1,
  },

  // 男女性别 
  sex_code: {
    MALE: 0,
    FEMALE: 1
  },
  sex_code_map: {
    0: '男',
    1: '女'
  },
  
  /**
   * 获取对应的标识， 如果不存在则返回空字符串 ''
   * @param {String} type 
   * @param {Any} tag 
   */
  get(type, tag) {
    return this[type + '_map'][tag] || ''
  }

};

dictionary.install = function (Vue, options) {
  Vue.prototype.$dictionary = dictionary
}

export default dictionary;   