console.log("这是 周凤的大屁股 臀围100cm");
import string from "./css.js";

const demo = document.querySelector("#demo");
const demo2 = document.querySelector("#demo2");

let n = 1;
let time = 50;
let id; //先声明变量id

//----封装函数，将多次使用的函数封装，再调用这个函数，使代码简洁----↓
const player = {
  init: () => {
    demo.innerText = string.substr(0, n); //demo1展现文本
    demo2.innerHTML = string.substr(0, n); //demo2展现效果
    //在WebStorm里面是"demo.innerHTML = string.substr( from: 0, n);"
    player.play(); //给id赋值
  },
  run: () => {
    n += 1;
    if (n > string.length) {
      window.clearInterval(id); //当n大于string.length停止
      return; //return表示不执行下面的两句
    }
    // console.log(n + ":" + string.substr(0, n)); //打出每一行
    demo.innerText = string.substr(0, n); //demo1展现文本
    demo2.innerHTML = string.substr(0, n); //demo2展现效果
    //同时以文本innerText的形式和HTML的形式展现一个style标签。
    demo.scrollTop = demo.scrollHeight;
  },
  play: () => {
    id = setInterval(player.run, time);
  },
  pause: () => {
    window.clearInterval(id);
  },
  slow: () => {
    player.pause();
    time = 300;
    player.play();
  },
  normal: () => {
    player.pause();
    time = 50;
    player.play();
  },
  fast: () => {
    player.pause();
    time = 0;
    player.play();
  }
};
//----封装函数，将多次使用的函数封装，再调用这个函数，使代码简洁----↑

player.init();

document.querySelector("#btnPause").onclick = player.pause;
document.querySelector("#btnPlay").onclick = player.play;
document.querySelector("#btnSlow").onclick = player.slow;
document.querySelector("#btnNormal").onclick = player.normal;
document.querySelector("#btnFast").onclick = player.fast;

// 在WebStorm里面是"setInterval(handler:() => {
//     n += 1;
//     demo.innerHTML = string.substr(from:0, n);
//   }, timeout: 1000);"
//vscode和WebStorm还是有很大区别
