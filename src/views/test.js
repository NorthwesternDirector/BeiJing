// #region promise.all 实现
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
