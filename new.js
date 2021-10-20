function People(name = 'Tom') {
    this.name = name;
}
  
const people = new People();

console.log(people.name);

const myNew = function (Parent, ...rest) {
    let child = Object.create(Parent.prototype);
    let result = Parent.apply(child, rest);

    return typeof result  === 'object' ? result : child;
};

const myPeople = myNew(People, 'Tom');

console.log(myPeople.name);
