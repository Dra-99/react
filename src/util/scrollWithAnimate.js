    let timer1 = null;
    let timer2 = null;
export default function scrollWithAnimate() {
    const html = document.documentElement;
    clearInterval(timer1);
    clearInterval(timer2);
    timer1 = animate(html.scrollTop, 0, (position) => {
        html.scrollTop = position;
    })
    timer2 = animate(html.scrollLeft, 0, (position) => {
        html.scrollLeft = position;
    })
}

/**
 * 
 * @param {*} start 
 * @param {*} end 
 * 动画切换时间为1s
 * 每次移动时间16ms
 */
function animate(start, end, cb) {
    const tick = 500;
    const duration = 16;
    const num = Math.ceil(tick / duration); //移动次数
    let currentNum = 0; //当前移动次数
    const dis = (end - start) / num; //每次移动的距离
    let timer = null;

    timer = setInterval(() => {
        currentNum++;
        start += dis;
        if(currentNum === num) {
            start = end;
            clearInterval(timer);
        }
        cb(start);
    }, duration);
    return timer;
}