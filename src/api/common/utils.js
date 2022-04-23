function isEmpty(obj) {
    if (obj == null || obj == undefined || obj === '') {
        return true
    }
    return false
}

function isIneger(number) {
    if (isEmpty(number)) {
        return false
    }
    const reg = /^[+]?(0|([1-9]\d*))?$/;
    return reg.test(number)
}

function isNumberTwoScale(number) {
    if (isEmpty(number)) {
        return false
    }
    const reg = /^[+-]?(0|([1-9]\d*))(\.\d{1,2})?$/;
    return reg.test(number)
}

function isPercentageTwoScale(number) {
    if (isEmpty(number)) {
        return false
    }
    const reg = /^(\d|[1-9]\d|100)(\.\d{1,2})?$/;
    return reg.test(number)
}

function isNumberBetweenZeroToOne(number) {
    if (isEmpty(number)) {
        return false
    }
    const reg = /^(0(\.\d{1,2})?|1(\.0{1,2})?)$/;
    return reg.test(number)
}

function camelToSnakeCase(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

function cloneObj(obj,newObj) {
    if (obj instanceof Array) {
        newObj = [];
    }
    for (let key in obj) {
        let val = obj[key];
        newObj[key] = typeof val === 'object' ? cloneObj(val) : val;
    }
    return newObj;
}


export default {
    isEmpty,

    isIneger,
    isNumberTwoScale,
    isPercentageTwoScale,
    isNumberBetweenZeroToOne,

    camelToSnakeCase,

    cloneObj,
}