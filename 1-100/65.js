/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    const isDecimal = (num) => {
        if (!num || !num.includes('.') || num.indexOf('.') !== num.lastIndexOf('.') || /[a-zA-Z]/.test(num) || !/[0-9]/.test(num)) return false;

        let arr = num.split('.');

        if (arr[0].length || arr[1].length) {
            let isValidFont = true;
            let isValidLast = true;

            if (arr[0].length) {
                const numRegex = /^[-|+]?[0-9]*$/;
                const abcReg = /[a-zA-Z]/;
                const dotReg = /\./;

                isValidFont = numRegex.test(arr[0]) && !abcReg.test(arr[0]) && !dotReg.test(arr[0]);
            }
            if (arr[1].length) {
                if (!isPositive(arr[1])) {
                    isValidLast = false;
                }
            }

            return isValidFont && isValidLast;
        }

        return false;
    }

    const isPositive = (num) => {
        const numRegex = /^[0-9]+$/;
        const abcReg = /[a-zA-Z]/;
        const dotReg = /\./;
        const hasNum = numRegex.test(num);
        const hasAbc = abcReg.test(num);
        const hasDot = dotReg.test(num);

        return num && hasNum && !hasAbc && !hasDot;
    }

    const isInteger = (num) => {
        if (!num) return false;

        const numRegex = /^[-|+]?[0-9]+$/;
        const abcReg = /[a-zA-Z]/;
        const dotReg = /\./;
        const hasNum = numRegex.test(num);
        const hasAbc = abcReg.test(num);
        const hasDot = dotReg.test(num);

        return hasNum && !hasAbc && !hasDot;
    }

    if (s.includes('e')) {
        let arr = s.split('e');

        if (arr.length > 2) return false;

        return (isInteger(arr[0]) || isDecimal(arr[0])) && isInteger(arr[1]);
    } else if (s.includes('E')) {
        let arr = s.split('E');

        if (arr.length > 2) return false;

        return (isInteger(arr[0]) || isDecimal(arr[0])) && isInteger(arr[1]);
    } else {
        const abcReg = /[a-zA-Z]/;

        return !abcReg.test(s) && (isInteger(s) || isDecimal(s));
    }
};
