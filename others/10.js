const entry = {
    a: {
        b: {
            c: {
                dd: 'abcdd'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    }
}
    
// 要求转换成如下对象
var output1 = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae'
}

const output = {};
let params = [];

const transObject = (obj) => {
    const keys = Object.keys(obj);

    if (!keys.length) {
        output[params.join('.')] = {};
        params = [];
        return obj;
    } else {
        keys.forEach(k => {
            params.push(k);
            if (typeof obj[k] === 'object') {
                transObject(obj[k]);
            } else if (typeof obj[k] === 'string') {
                output[params.join('.')] = obj[k];
                params = params.slice(0, 1);
            }
        })
    }

    return output;
}

console.log(transObject(entry));
