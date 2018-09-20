/*
  状态模式是指：
  一个对象有状态变化
  每次状态变化都会触发一个逻辑，不能总是用if...else来控制

  设计原则验证：
  1.将状态对象和主题对象分离，状态的变化逻辑单独处理
  2.符合开放封闭原则

 */

// 状态（红灯、绿灯、黄灯）
class State {
  constructor (color) {
    this.color = color
  }
  handle(context) {
    console.log(`turn to ${this.color} light`)
    context.setState(this)
  }
}

// 主体
class Context {
  constructor () {
    this.state = null
  }
  // 获取状态
  getState() {
    return this.state
  }
  // 设置状态
  setState (state) {
    this.state = state
  }
}

let context = new Context()

let green = new State('green')
let yellow = new State('yellow')
let red = new State('red')

// 绿灯亮了
green.handle(context)
console.log(context.getState())

// 黄灯亮了
yellow.handle(context)
console.log(context.getState())

// 红灯亮了
red.handle(context)
console.log(context.getState())