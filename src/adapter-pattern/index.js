/*
  适配器模式是作为两个不兼容的接口之间的桥梁
  即将一个类的接口转换成客户希望的另外一个接口
  通过适配器模式可以让不兼容的类可以一起工作
  本质上是对原有接口进行一层封装，输出修改后的接口

  常见场景：
  1.封装旧接口
  2.Vue computed

  封装旧接口
  比如自己心封装了一个ajax，但是老代码里全部都是使用$.ajax({})
  全部修改为自己的ajax不现实，因为代码太多了，此时可以使用适配器模式，做一层适配器
  let $ = {
    ajax (options) {
      return ajax(options)
    }
  }

  设计原则：
  1.将旧接口和使用者进行分离
  2.符合封闭开放原则

 */

// 需要被转换的类
class Adaptee {
  specificRequest() {
    return '德国标准插头'
  }
}

// 转换类
class Target {
  constructor () {
    this.adaptee = new Adaptee()
  }
  request() {
    let info = this.adaptee.specificRequest()
    return `${info} - 转换器 - 中国标准插头`
  }
}

// 测试
let target = new Target()
let res = target.request()
console.log(res)
