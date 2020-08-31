import div from './a.js';
import p from './b.js';

// 引入b.css
// 引入a.less
// import '../css/b.css'
import a from '../less/a.less'

// console.log(div())
// console.log(p())

let divEle = div()
divEle.className = a.con

// 引入图片
import img from '../img/iu.jpg'
let  pic = document.createElement('img')
pic.src = img

document.body.appendChild(pic)
document.body.appendChild(divEle)
document.body.appendChild(p())