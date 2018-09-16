/*
  代理模式是：
  使用者无权访问目标对象
  中间加代理，通过代理做授权和控制

  常见场景：
  网页事件代理
  jQuery $.proxy
  ES6 Proxy

  设计原则：
  代理类和目标类分离，隔离开目标类和使用者
  符合开放封闭原则

  代理&适配器&装饰器区别

  1.适配器模式：提供一个不同的接口
  2.代理模式：提供一个一模一样的接口

  1.装饰器模式：扩展功能，原有功能不变且可直接使用
  2.代理模式：显示原有功能，但是经过限制或者阉割
*/

class ReadImg {
  constructor (fileName) {
    this.fileName = fileName
    this.loadFromDisk()   // 初始化，即从硬盘中加载
  }

  display () {
    console.log('display...' + this.fileName)
  }

  loadFromDisk () {
    console.log('loading...' + this.fileName)
  }
}

class ProxyImg {
  constructor (fileName) {
    this.realImg = new ReadImg(fileName)
  }

  display () {
    this.realImg.display()
  }
}

let proxyImg = new ProxyImg('1.png')
proxyImg.display()