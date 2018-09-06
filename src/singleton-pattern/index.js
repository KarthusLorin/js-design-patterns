/*
  单例模式要求产生一个类的唯一实例，使用getInstance创建实例
  getInstance中对是否有已有实例进行检测，有就复用，没有就new，保证最多只有一个实例
  常见场景有：
  1.jQuery 只有一个 $
  if (window.jQuery != null) {
    return window.jQuery
  } else {
    // 初始化...
  }

  2.模拟登录框

  3.购物车，vuex和redux中的store

  设计原则：
  1.符合单一职责原则，只实例化唯一的对象
  2.没有具体开放封闭原则，但是绝不违背开放封闭原则
 */

class SingleObject {
  login () {
    console.log('login...')
  }
}

SingleObject.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new SingleObject()
    }
    return instance
  }
})

// 测试
let obj1 = SingleObject.getInstance()
obj1.login()

let obj2 = SingleObject.getInstance()
obj2.login()

console.log('obj1 === obj2', obj1 === obj2)


// 模拟登录框
class LoginForm {
  constructor () {
    this.state = 'hide'
  }
  show () {
    if (this.state === 'show') {
      alert('已经显示')
      return
    }
    this.state = 'show'
    console.log('登录框显示成功')
  }
  hide () {
    if (this.state === 'hide') {
      alert('已经隐藏')
    }
    this.state = 'hide'
    console.log('登录框隐藏成功')
  }
}

LoginForm.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new LoginForm()
    }
    return instance
  }
})

// 测试
let login1 = LoginForm.getInstance()
login1.show()

let login2 = LoginForm.getInstance()
login2.hide()

console.log('login1 === login2', login1 === login2)