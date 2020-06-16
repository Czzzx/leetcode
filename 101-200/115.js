/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.stack.push(x);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.stack.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  let top = this.stack.pop();
  this.stack.push(top);
  return top;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return Math.min(...this.stack)
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/