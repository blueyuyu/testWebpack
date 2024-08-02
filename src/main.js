import { checkLength } from '@/utils/index'
import './css/index.css' // 引入css
import './css/main.less'

// 初步测试
const isOk = checkLength('chen', 12345)
console.log('isOk', isOk);
// consoll.log(1122)

document.querySelector('.login-btn').addEventListener('click', () => {
    const name = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    console.log('name ,password', name, password);

    if (checkLength(name, password)) {
        alert("完全正确")
    } else {
        alert("用户名或者密码必须六位数以上")
    }
})

// 由于在html的img标签引入，图片资源没办法打包，只能通过这种格式给图片资源进行赋值
// 之后可以找一下，在html img内引入的图片资源怎么打包
// import bgc from '../asset/img/R.jpg'
// document.querySelector('.logo-img').src = bgc

// 测试webpack降级语法
const arr = ['app', 'banana', 'pear']
arr.forEach((item, index) => {
    arr[index] = arr[index] + 's'
})
console.log('arr', arr);




// consoll.log(255)

