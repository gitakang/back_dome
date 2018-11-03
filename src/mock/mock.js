const Mock = require('mockjs')
const Random = Mock.Random
const getNum = function () {
  let newarr = []
  for (let i = 0; i < 10; i++) {
    let obj = {
      nav: Random.cword(2, 4),
      id: Random.guid(),
      url: Random.url()
    }
    newarr.push(obj)
  }
  return newarr
}
Mock.mock('/randomnum', /get|post/, getNum)
