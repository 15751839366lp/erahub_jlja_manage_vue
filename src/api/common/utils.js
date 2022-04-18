function isEmpty(obj) {
    if (obj == null || obj == undefined || obj === '') {
        return true
    }
    return false
}

function isIneger(number) {
    if(isEmpty(number)){
        return false
    }
    const reg = /^[+]?(0|([1-9]\d*))?$/;
    return reg.test(number)
}

function isNumberTwoScale(number) {
    if(isEmpty(number)){
        return false
    }
    const reg = /^[+-]?(0|([1-9]\d*))(\.\d{1,2})?$/;
    return reg.test(number)
}

function isPercentageTwoScale(number) {
    if(isEmpty(number)){
        return false
    }
    const reg = /^(\d|[1-9]\d|100)(\.\d{1,2})?$/;
    return reg.test(number)
}

export default {
    isEmpty,
    isIneger,
    isNumberTwoScale,
    isPercentageTwoScale
}