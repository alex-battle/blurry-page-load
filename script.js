const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
// load will be going from 0 to 100


let int = setInterval(blurring, 30)
// 30 is 30 milliseconds


function blurring(){
    load++
    // take load value and increment it by 1


    if(load > 99){
        clearInterval(int)
        // if load value is greater than 99 then stop counting
        // makes millisecond count stop at 100
    }
    // console.log(load)
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
//   Link on read me