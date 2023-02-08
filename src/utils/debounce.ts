
 function debounce(func:Function,delay:number) {
    let timer:any = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func()
            timer =null
        },delay)
    }
}
export {
    debounce
}