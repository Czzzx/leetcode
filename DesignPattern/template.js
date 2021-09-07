// 【模板模式】
// 通过封装变化提高系统扩展性

class Beverage {
    constructor() {
        this.init();
    }

    init() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    boilWater() {
        console.log('boil water');
    }

    brew() {
        throw new Error('子类必须重写brew方法');
    }

    pourInCup() {
        throw new Error('子类必须重写pourInCup方法');
    }

    addCondiments() {
        throw new Error('子类必须重写addCondiments方法');
    }
}

class Tea extends Beverage {
    constructor() {
        super();
    }

    brew() {
        console.log('brew tea');
    }

    pourInCup() {
        console.log('pour tea in cup');
    }

    addCondiments() {
        console.log('add lemon');
    }
}
