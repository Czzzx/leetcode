class LazyManClass {
    constructor(name) {
        console.log(`Hi I am ${name}`);
        this.toDoList = [];
        setTimeout(() => {
            this._do();
        }, 0);
    }

    eat(meal) {
        const that = this;
        const eatFn = (function(meal) {
            return () => {
                console.log(`I am eating ${meal}`);
                that._do();
            }
        })(meal);
        this.toDoList.push(eatFn);
        return this;
    }

    sleep(time) {
        const that = this;
        const sleepFn = (function(time) {
            return () => {
                setTimeout(() => {
                    console.log(`等待了${time}秒...`);
                    that._do();
                }, time * 1000);
            }
        })(time);
        this.toDoList.push(sleepFn);
        return this;
    }

    sleepFirst(time) {
        const that = this;
        const sleepFn = (function(time) {
            return () => {
                setTimeout(() => {
                    console.log(`等待了${time}秒...`);
                    that._do();
                }, time * 1000);
            }
        })(time);
        this.toDoList.unshift(sleepFn);
        return this;
    }

    _do() {
        const doFn = this.toDoList.shift();

        doFn && doFn();
    }
}

function LazyMan(name) {
    return new LazyManClass(name);
}

console.log(LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food'));
