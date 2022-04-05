// #region 1 promise.all 实现
Promise.all2 = function (promises) {
  const results = []
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(
        function (res) {
          results.push(res)
          if (results.length === promises.length) {
            resolve(results)
          }
        },
        function (err) {
          return reject(err)
        },
      )
    }
  })
}
// function promise1() {
//   return new Promise((resolve, reject) => {
//     console.log('promise1 start')
//     setTimeout(() => {
//       console.log('promise1 over')
//       //   resolve('对了1')
//       reject(new Error('haha'))
//     }, 100)
//   })
// }
// function promise2() {
//   return new Promise(resolve => {
//     console.log('promise2 start')
//     setTimeout(() => {
//       console.log('promise2 over')
//       resolve('对了2')
//     }, 90)
//   })
// }
// Promise.all2([promise1(), promise2()]).then(
//   data => console.log(`对了--${data}`),
//   err => console.log(`错了--${err}`),
// )
// #endregion

// #region 2 promise.all 实现 Promise.allSettled
Promise.allSettled = promises => {
  return Promise.all(
    promises.map(promise => {
      return promise
        .then(value => ({ status: 'fulfilled', value }))
        .catch(reason => ({ status: 'rejected', reason }))
    }),
  )
}
// #endregion

// #region 3 debouce/throttle
// eslint-disable-next-line no-unused-vars
function debouce(fn, wait, immediate) {
  let timeout = null
  return function (args) {
    const context = this
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    if (immediate) {
      const callNow = !timeout
      if (callNow) {
        fn.apply(context, args)
      }
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
    } else {
      timeout = setTimeout(function () {
        fn.apply(context, args)
      }, wait)
    }
  }
}
// const hundle = function () {
//   console.log(Math.random())
// }
// window.addEventListener('click', debouce(hundle, 1000))

// eslint-disable-next-line no-unused-vars
function throttle(fn, delay) {
  let canrun = true
  return function (args) {
    const context = this
    if (!canrun) {
      return
    }
    canrun = false
    setTimeout(function () {
      fn.apply(context, args)
      canrun = true
    }, delay)
  }
}
// #endregion

// #region 4 currying
// function currying(fn, ...args) {
//   return fn.length > args.length ? (...args2) => currying(fn, ...args, ...args2) : fn(...args)
// }
// let fn = function (a, b, c, d) {
//   console.log(a + b + c + d)
// }
// fn = currying(fn)
// fn(1)(2)(3, 4)
// fn(1, 2)(3)(4)
// #endregion

// #region 5 add one
const a = {
  i: 0,
  valueOf() {
    return ++a.i
  },
}
// console.log(a == 1 && a == 2 && a == 3)

const addOne = (function () {
  let index = 0
  const fn = function () {
    return index++
  }
  return fn
})()
console.log(addOne())
console.log(addOne())
console.log(addOne())
// #endregion

// #region 6 new/create
/**
 * Object.create 创建的新函数并没有继承构造函数的属性和方法，只继承了原型方法和原型属性
 */
// const obj = new Base()
// const tmpObj = {}
// tmpObj.__proto__ = Base.prototype
// Base.call(tmpObj)
// return tmpObj

// function create(obj) {
//   function Fn() {}
//   Fn.prototype = obj
//   return new Fn()
// }
// #endregion

// #region 7 排序
// 在每一轮挑选一个基准元素，并让其他比它大的元素移动到数列一边，比它小的元素移动到数列的另一边
function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}
function partiton(arr, left) {
  const pivot = left
  let index = pivot + 1
  for (let i = index; i < arr.length; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, index - 1, pivot)
  return index - 1
}
// eslint-disable-next-line no-unused-vars
function quickSort(arr, left, right) {
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right : arr.length - 1
  let partitonIndex
  if (left < right) {
    partitonIndex = partiton(arr, left)
    quickSort(arr, left, partitonIndex - 1)
    quickSort(arr, partitonIndex + 1, right)
  }
  return arr
}

// 比较相邻的元素，将最大值冒泡到最右
// eslint-disable-next-line no-unused-vars
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        const tmp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = tmp
      }
    }
  }
  return arr
}

// 选择排序是将每一个元素和它后面的最小元素进行交换
// eslint-disable-next-line no-unused-vars
function selectSort(arr) {
  let minIndex
  for (let i = 0; i < arr.length; i++) {
    minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    const tmp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = tmp
  }
  return arr
}

// 类似玩牌，维护一个有序数组，将每个元素插入到合适的排序位置
// eslint-disable-next-line no-unused-vars
function insertSort(arr) {
  let preIndex
  let cur
  for (let i = 1; i < arr.length; i++) {
    preIndex = i - 1
    cur = arr[i]
    while (preIndex >= 0 && arr[preIndex] > cur) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = cur
  }
  return arr
}
// #endregion

// #region 8 reduce 实现 map
// eslint-disable-next-line no-extend-native
Array.prototype.map = function (fn) {
  const that = this
  return that.reduce((acc, cur, i, that) => {
    acc.push(fn(cur, i, that))
    return acc
  }, [])
}
// console.log([1, 2, 3].map(item => item ** 2))
// #endregion

// #region 9 call/apply/bind
// eslint-disable-next-line no-extend-native
Function.prototype.call = function (context, ...args) {
  context.fn = this
  const res = context.fn(...args)
  delete context.fn
  return res
}
// eslint-disable-next-line no-extend-native
Function.prototype.apply = function (context, arr) {
  context.fn = this
  const res = context.fn(...arr)
  delete context.fn
  return res
}
// eslint-disable-next-line no-extend-native
Function.prototype.bind = function (context) {
  const self = this
  // eslint-disable-next-line prefer-rest-params
  const args = Array.prototype.slice.call(arguments, 1)
  const fn = function () {
    // eslint-disable-next-line prefer-rest-params
    const fnArgs = Array.prototype.slice.call(arguments)
    return self.call(this instanceof fn ? this : context, ...args.concat(fnArgs))
  }
  return fn
}

// eslint-disable-next-line no-extend-native
Function.prototype.bind = function (context, ...args) {
  const self = this
  const fn = function (...arg2) {
    return self.call(this instanceof fn ? this : context, ...args, ...arg2)
  }
  return fn
}
// #endregion

// #region 10 flat
// eslint-disable-next-line no-unused-vars
function flat(arr) {
  return arr.reduce((acc, cur) => {
    return Array.isArray(cur) ? [...acc, ...flat(cur)] : [...acc, cur]
  }, [])
}
// console.log(flat([[[1, 2, 3], 4, 5], 6]))
// #endregion

// #region 11 deepCopy
// eslint-disable-next-line no-unused-vars
function deepCopy(obj, map = new Map()) {
  if (map.has(obj)) return map.get(obj)
  const tmpObj = Array.isArray(obj) ? [] : {}
  map.set(obj, tmpObj)
  // eslint-disable-next-line
  for (const key in obj) {
    tmpObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key], map) : obj[key]
  }
  return tmpObj
}

// const aa = {
//   b: 1,
//   c: 3,
//   f: { h: 2, l: 5 },
// }
// aa.z = aa
// console.log(deepCopy(aa), 980)
// #endregion

// #region 12 继承
/**
 * 原型链实现继承
 * 存在问题：
 * 1 引用类型值的原型属性会被所有实例共享
 * 2 没有办法在不影响所有对象实例的情况下，给超类型的构造函数传递参数
 * */
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.eat = function () {
  console.log('eat')
}
function Student(score) {
  this.score = score
}
Student.prototype = new Person('Tom', 10)

const stu = new Student(100)
stu.eat()
console.log(stu)

/**
 * 借用构造函数实现继承
 * 存在问题：
 * 1 在超类型的原型中定义的方法，子类型无法继承
 *  */
// function Person(name, age) {
//   this.name = name
//   this.age = age
// }
// Person.prototype.eat = function () {
//   console.log('eat')
// }

// function Student(name, age, score) {
//   Person.call(this, name, age)
//   this.score = score
// }

// const stu = new Student('TOM', 10, 100)
// console.log(stu)
// stu.eat() // stu.eat is not a function

/* 组合继承 */
// function Person(name, age) {
//   this.name = name
//   this.age = age
// }
// Person.prototype.eat = function () {
//   console.log(`${this.name}---eat`)
// }
// function Student(name, age, score) {
//   Person.call(this, name, age)
//   this.score = score
// }
// Student.prototype = new Person()
// Student.prototype.constructor = Person

// const stu = new Student('TOM', 10, 100)
// console.log(stu)
// stu.eat()

/**
 * 寄生组合式继承
 * 1 解决了组合继承多次调用超类型构造函数的问题
 */
// function inherit(student, person) {
//   const prototype = Object.create(person.prototype)
//   prototype.constructor = student
//   student.prototype = prototype
// }
// function Person(name, age) {
//   this.name = name
//   this.age = age
// }
// Person.prototype.eat = function () {
//   console.log(`${this.name}---eat`)
// }
// function Student(name, age, score) {
//   Person.call(this, name, age)
//   this.score = score
// }
// inherit(Student, Person)
// const stu = new Student('Sam', 10, 1000)
// stu.eat()
// #endregion

// #region 树的遍历
// eslint-disable-next-line no-unused-vars
const TreeNode = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 5,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
    },
    right: {
      val: 7,
    },
  },
}
// eslint-disable-next-line no-unused-vars
const preOrder = function (root) {
  const list = []
  const fn = function (root) {
    if (!root) return
    list.push(root.val)
    fn(root.left)
    fn(root.right)
  }
  fn(root)
  return list
}
// eslint-disable-next-line no-unused-vars
const preOrder2 = function (root) {
  const list = []
  const stack = [root]
  while (stack.length !== 0) {
    const cur = stack.pop()
    const { right, left } = cur
    list.push(cur.val)
    if (right) {
      stack.push(right)
    }
    if (left) {
      stack.push(left)
    }
  }
  return list
}
// eslint-disable-next-line no-unused-vars
const inOrder = function (root) {
  const list = []
  const fn = function (root) {
    if (!root) return
    fn(root.left)
    list.push(root.val)
    fn(root.right)
  }
  fn(root)
  return list
}
// eslint-disable-next-line no-unused-vars
const postOrder = function (root) {
  const list = []
  const fn = function (root) {
    if (!root) return
    fn(root.left)
    fn(root.right)
    list.push(root.val)
  }
  fn(root)
  return list
}

// console.log(preOrder(TreeNode), preOrder2(TreeNode))
// console.log(preOrder(TreeNode), inOrder(TreeNode), postOrder(TreeNode))
// #endregion

// #region 链表反转
// eslint-disable-next-line no-unused-vars
function reverse(list) {
  const { head } = list
  if (head == null || head.next == null) return

  let one = head
  let two = head.next
  head.next = null
  while (two) {
    const three = two.next
    two.next = one
    one = two
    two = three
  }
  list.head = one
}
// #endregion

// #region 最长无重复子串
const lengthOfLongestSubstring = function (s) {
  const map = new Map()
  let length = 0
  for (let start = 0, end = 0; end < s.length; end++) {
    if (map.get(s[end])) {
      start = Math.max(start, map.get(s[end]))
    }
    map.set(s[end], end + 1)
    length = Math.max(length, end - start + 1)
  }
  return length
}
lengthOfLongestSubstring('qrwertrwrs')
// #endregion

// #region 二分查找
// eslint-disable-next-line
function find(arr, item) {
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (item === arr[mid]) {
      return mid
    }
    if (item > arr[mid]) {
      low = mid + 1
    } else if (item < arr[mid]) {
      high = mid - 1
    }
  }
}
// #endregion
