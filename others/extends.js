function Parent(name) {
    this.name = name;
}

Parent.prototype.getName = function() {
    return this.name;
}
/**
 * 组合继承
 */
// function Child(name) {
//     Parent.call(this, name);
// }

// Child.prototype = new Parent();
// Child.prototype.constructor = Child;

// const child = new Child('amy');

/**
 * 寄生组合继承
 */
function Child(name) {
    Parent.call(this, name);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const child = new Child('amy');

console.log(child instanceof Child);
console.log(child.getName());
