/*
  工厂函数相当于对真正的功能函数进行了一次封装
  在本例中，使用Creator对Product进行了一次封装
  常见场景有：
  Jquery $('div') 相当于封装了 new jQuery('div')
  React.createElement，传入参数创建一个Vnode实例（return new Vnode(tag,attrs,children)）
  Vue异步组件

  设计原则：
  1.构造函数和创建者分离
  2.符合开放封闭原则
 */

class Product {
  constructor (name) {
    this.name = name
  }

  init () {
    alert('init')
  }

  fun1 () {
    alert('fun1')
  }

  fun2 () {
    alert('fun2')
  }
}

class Creator {
  create (name) {
    return new Product(name)
  }
}

// 测试
let creator = new Creator()
let p = creator.create('p1')

p.init()
p.fun1()
