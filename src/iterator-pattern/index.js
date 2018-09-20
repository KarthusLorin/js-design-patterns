/*
  迭代器模式主要特点是：
  1.顺序访问一个集合
  2.使用者无需知道集合的内部结构（封装）

  常见场景：
  1.jquery $.each函数
  2.es6 iterator

  设计原则验证：
  1.迭代器对象和目标对象分离
  2.迭代器将使用者与目标对象隔离开
  3.符合封闭开放原则
*/

// 迭代器
class Iterator {
  constructor (container) {
    this.list = container.list
    this.index = 0
  }
  next () {
    if (this.hasNext()) {
      return this.list[this.index++]
    }
    return null
  }
  hasNext () {
    if (this.index >= this.list.length) {
      return false
    }
    return true
  }
}

// 容器
class Container {
  // list 是需要遍历的数组
  constructor (list) {
    this.list = list
  }

  // 生成遍历器
  getIterator() {
    return new Iterator(this)
  }
}

let arr = [1,2,3,4,5,6]
let container = new Container(arr)
let iterator = container.getIterator()
while (iterator.hasNext()) {
  console.log(iterator.next())
}