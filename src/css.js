const string = `
/*我是熊仲轲，现在纯手工制作一只皮卡丘。以下是CSS代码。可以用右上角的按钮来控制速度。*/
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .skin *::before,
  .skin *::after {
    box-sizing: border-box;
  }
  
  .skin {
    background: #ffe600;
    min-height: 55vh;
    position: relative;
  }
  .nose {
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 110px;
    margin-left: -10px;
    z-index: 10;
    /*层叠上下文原理，防止鼻子被嘴唇覆盖*/
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: center bottom; /*左右方向以正中心为基准，上下方向以正下方为基准，进行晃动*/
    animation: wave 300ms infinite linear;
  }
  
  .yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    /*border: 1px solid green;*/
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: black;
  }
  
  .eye {
    border: 3px solid rgb(0, 0, 0);
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 65px;
    margin-left: -32px; /*用来定位*/
    background: #2e2e2e;
    border-radius: 50%;
  }
  
  .eye::before {
    content: "";
    display: block; /*内联元素*/
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 6px; /*相对于左边移动px*/
    top: -1px;
  }
  
  .eye.left {
    transform: translateX(-115px); /*相对于中间移动px*/
  }
  .eye.right {
    transform: translateX(115px);
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 135px;
    margin-left: -100px; /*mouth的左边距相对于中线px*/
  }
  .mouth .up {
    position: relative;
    top: -20px;
  }
  
  .mouth .up .lip {
    /*优化代码*/
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative; /* 相对定位 */
    position: absolute;
    left: 50%;
    margin-left: -50px;
    z-index: 1; /*让lip压在下嘴唇的上面*/
    background: #ffe600; /*在没给颜色之前，lip是透明色*/
  }
  
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-52px);
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(52px);
  }
  
  .mouth .up .lip::before {
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
  }
  .mouth .up .lip.left::before {
    right: -6px;
  }
  .mouth .up .lip.right::before {
    left: -6px;
  }
  .mouth .down {
    height: 180px;
    position: relative;
    top: 5px;
    width: 100%;
    overflow: hidden; /*把yuan1中超出down的部分隐藏掉*/
  }
  
  .mouth .down .yuan1 {
    border: 3px solid black;
    width: 180px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -90px;
    border-radius: 100px/350px;
    background: #9b000a;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    background: #ff485f;
    position: absolute;
    bottom: -156px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
  }
  .face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 80px;
    height: 80px;
    top: 165px;
    margin-left: -40px;
    z-index: 3;
  }
  .face > img {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .face.left {
    transform: translateX(-180px);
    background: #ff0000;
    border-radius: 50%;
  }
  .face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
  }
  .face.right {
    transform: translateX(180px);
    background: #ff0000;
    border-radius: 50%;
  }
  /*画完了，这只可爱的皮卡丘送给你。*/    
`;
export default string;
