/*
  装饰器模式的功能是为对象添加新功能
  同时，不改变其原有的结构和功能
  类比一下，装饰器模式相当于手机壳

  常见场景：
  ES7装饰器
  core-decorators
*/

class Circle {
  draw () {
    console.log('画一个圆形')
  }
}

class Decorator {
  constructor (circle) {
    this.circle = circle
  }

  draw () {
    this.circle.draw()
    this.setRedBorder(circle)
  }

  setRedBorder (circle) {
    console.log('设置红色边框')
  }
}

// 测试代码
let circle = new Circle()
circle.draw()

console.log('---分割线---')

let dec = new Decorator()
dec.draw()