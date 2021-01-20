function getAttr(key, obj, defaults = null) {
    // 获取对象属性 不存在返回defaults
    if (obj.hasOwnProperty) {
        return collection[key]
    }
    else {
        return defaults
    }
}


function quickCheck(arr, elem) {
    if (arr.indexOf(elem) > 0) {
        return true;
    }
    else {
        return false;
    }
}

// console tools
let console = {
    isDev: true,
    log(...args){
        if(!this.isDev) return;
        window.console.log(...args);
    }
}