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
